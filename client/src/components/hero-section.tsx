import { motion } from "framer-motion";
import { ExternalLink, Download, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const personalDetails = {
    location: "Punjab, India",
    experience: "3+ Years",
    specialization: "React, Node.js, Python",
    availability: "Open to opportunities"
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-slate-900 to-cyan-900/20 animate-gradient bg-[length:400%_400%]"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Crafting exceptional digital experiences with cutting-edge technologies. 
            Passionate about creating scalable web applications and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://github.com/jashanpreet1302"
              target="_blank"
              rel="noopener noreferrer"
              className="group portfolio-button"
            >
              <i className="fab fa-github mr-2"></i>
              Visit GitHub Profile
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-violet-500 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:bg-slate-700/50">
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </button>
          </div>
          
          {/* Personal Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card p-8 max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-violet-400 mb-2">Location</h3>
                <p className="text-slate-300">{personalDetails.location}</p>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-violet-400 mb-2">Experience</h3>
                <p className="text-slate-300">{personalDetails.experience}</p>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-violet-400 mb-2">Specialization</h3>
                <p className="text-slate-300">{personalDetails.specialization}</p>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-violet-400 mb-2">Available</h3>
                <p className="text-emerald-400">{personalDetails.availability}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
}
