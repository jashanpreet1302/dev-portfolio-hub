import { motion } from "framer-motion";

export default function AboutSection() {
  const personalInfo = {
    name: "Jashanpreet Singh",
    email: "jashanpreet@example.com",
    phone: "+91 XXXXX XXXXX",
    languages: "English, Hindi, Punjabi"
  };

  const skills = [
    { category: "Frontend", technologies: "React, Vue.js, TypeScript" },
    { category: "Backend", technologies: "Node.js, Python, Java" },
    { category: "Database", technologies: "MongoDB, PostgreSQL" },
    { category: "DevOps", technologies: "Docker, AWS, Git" },
  ];

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
          >
            A passionate developer with a keen eye for detail and a love for creating innovative solutions
          </motion.p>
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
                  <span className="font-medium">Name:</span>
                  <span>{personalInfo.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Email:</span>
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Phone:</span>
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Languages:</span>
                  <span>{personalInfo.languages}</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-violet-400 mb-4">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="block text-sm text-slate-400">{skill.category}</span>
                    <span className="font-medium">{skill.technologies}</span>
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
