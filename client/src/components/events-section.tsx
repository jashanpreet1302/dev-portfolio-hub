import { motion } from "framer-motion";

export default function EventsSection() {
  const events = [
    {
      id: 1,
      title: "Tech Conference Speaker",
      description: "Presented on \"Modern Web Development Practices\" at TechCon 2024",
      date: "March 2024",
      color: "bg-violet-500",
      side: "left"
    },
    {
      id: 2,
      title: "Open Source Contribution",
      description: "Major contributor to popular React component library with 10k+ stars",
      date: "January 2024",
      color: "bg-cyan-500",
      side: "right"
    },
    {
      id: 3,
      title: "Hackathon Winner",
      description: "First place in National Coding Challenge for innovative AI solution",
      date: "November 2023",
      color: "bg-emerald-500",
      side: "left"
    },
    {
      id: 4,
      title: "Certification Achievement",
      description: "AWS Solutions Architect Professional certification obtained",
      date: "September 2023",
      color: "bg-amber-500",
      side: "right"
    }
  ];

  return (
    <section id="events" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            Events & Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Professional milestones, conferences, and community contributions
          </motion.p>
        </div>
        
        <div className="space-y-8">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full"></div>
            
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-center justify-between mb-12"
              >
                {event.side === "left" ? (
                  <>
                    <div className="w-5/12 text-right pr-8">
                      <div className="glass-card p-6">
                        <h3 className="text-xl font-bold text-violet-400 mb-2">{event.title}</h3>
                        <p className="text-slate-300 text-sm mb-3">{event.description}</p>
                        <span className="text-cyan-400 text-sm font-medium">{event.date}</span>
                      </div>
                    </div>
                    <div className={`w-4 h-4 ${event.color} rounded-full border-4 border-slate-900 z-10`}></div>
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12"></div>
                    <div className={`w-4 h-4 ${event.color} rounded-full border-4 border-slate-900 z-10`}></div>
                    <div className="w-5/12 text-left pl-8">
                      <div className="glass-card p-6">
                        <h3 className="text-xl font-bold text-violet-400 mb-2">{event.title}</h3>
                        <p className="text-slate-300 text-sm mb-3">{event.description}</p>
                        <span className="text-cyan-400 text-sm font-medium">{event.date}</span>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
