import { motion } from "framer-motion";
import { PERSONAL_INFO, SKILLS, CERTIFICATIONS, HOBBIES } from "@/lib/constants";

export default function AboutSection() {

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >I love to  learn whenever and wherever I find a chance to and  the world of technology combined with innovation paves an entire new path for me to explore which makes me more eager to learn and build computational solutions that benefit everyone.</motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-violet-400 mb-4">Personal Information</h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex justify-between">
                  <span className="font-medium">Full Name:</span>
                  <span>{PERSONAL_INFO.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Age:</span>
                  <span>{PERSONAL_INFO.age} Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Nationality:</span>
                  <span>{PERSONAL_INFO.nationality}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Email:</span>
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Phone:</span>
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Languages:</span>
                  <span>{PERSONAL_INFO.languages}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Address:</span>
                  <span className="text-right">{PERSONAL_INFO.address}</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-violet-400 mb-4">Certifications</h3>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, index) => (
                  <div key={index} className="border-l-4 border-violet-500 pl-4">
                    <h4 className="font-semibold text-white">{cert.title}</h4>
                    <p className="text-slate-400 text-sm">{cert.provider}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-violet-400 mb-4">Hobbies & Interests</h3>
              <div className="space-y-3">
                {HOBBIES.map((hobby, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-slate-300 text-sm">{hobby}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <img
              src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern developer workspace"
              className="rounded-2xl shadow-2xl w-full"
            />
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-violet-400 mb-4">My Journey</h3>
              <p className="text-slate-300 leading-relaxed">
                Started my journey in web development with a passion for creating user-centric applications. 
                Over the years, I've worked on various projects ranging from e-commerce platforms to 
                enterprise solutions, always focusing on clean code and exceptional user experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
