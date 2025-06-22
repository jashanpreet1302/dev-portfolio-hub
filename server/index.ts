import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite";
import path from "path";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const pathName = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (pathName.startsWith("/api")) {
      let logLine = `${req.method} ${pathName} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  const isDev = app.get("env") === "development";

  if (isDev) {
    await setupVite(app, server);
  } else {
    // ✅ Serve static frontend in production
    const distPath = path.resolve(__dirname, "../client/dist");
    if (!fs.existsSync(distPath)) {
      throw new Error(
        `Could not find build directory at ${distPath}. Did you run 'npm run build' inside client?`
      );
    }

    app.use(express.static(distPath));

    // Catch-all route for SPA
    app.get("*", (_req, res) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  }

  // ✅ Use Render-compatible dynamic port
  const port = process.env.PORT || 5000;
  server.listen(
    {
      port: Number(port),
      host: "0.0.0.0",
    },
    () => {
      log(`✅ Server running on port ${port}`);
    }
  );
})();
