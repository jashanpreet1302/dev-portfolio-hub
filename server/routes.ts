import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      
      // Here you would typically send an email using nodemailer
      // For now, we'll just log the contact form data
      console.log("Contact form submission:", data);
      
      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      res.json({ message: "Contact form submitted successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ message: "Invalid form data" });
    }
  });

  // Portfolio data endpoint (for future use)
  app.get("/api/portfolio", (req, res) => {
    res.json({
      message: "Portfolio data endpoint - ready for future enhancements"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
