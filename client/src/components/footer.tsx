import { PERSONAL_INFO } from "@/lib/constants";

export default function Footer() {
  const socialLinks = [
    { href: "https://github.com/jashanpreet1302", icon: "fab fa-github", hoverColor: "hover:text-violet-400" },
    { href: "#", icon: "fab fa-linkedin", hoverColor: "hover:text-blue-400" },
    { href: "#", icon: "fab fa-twitter", hoverColor: "hover:text-cyan-400" },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-4">
            {PERSONAL_INFO.fullName}
          </div>
          <p className="text-slate-400 mb-6">
            {PERSONAL_INFO.specialization} | {PERSONAL_INFO.passion}
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-400 ${link.hoverColor} transition-colors`}
              >
                <i className={`${link.icon} text-2xl`}></i>
              </a>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-slate-500 text-sm">
            <p>&copy; 2024 {PERSONAL_INFO.fullName}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
