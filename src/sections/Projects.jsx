import { motion } from 'framer-motion';
import { ExternalLink, Calendar, GraduationCap, Vote, Ticket, Store, Rocket } from 'lucide-react';

const projects = [
  {
    title: "Election Booth Management System",
    year: "2026",
    description: "Engineered a real-time booth monitoring system with live police tracking and dynamic assignment of officers. Integrated Android application for real-time communication with backend APIs.",
    tech: ["PHP", "MySQL", "Java (Android)", "REST APIs"],
    icon: <Vote size={40} className="text-primary group-hover:text-secondary transition-colors" />,
    features: [
      "Real-time police tracking",
      "Dynamic officer assignment",
      "Admin monitoring dashboard",
      "Incident-based allocation"
    ],
    live: "https://mahixinfotech.in/booth"
  },
  {
    title: "Institute ERP Management System",
    year: "2026",
    description: "Developed a centralized ERP platform managing students, staff, courses, fees, and attendance. Architected admin panel for streamlined control of institutional workflows.",
    tech: ["PHP", "MySQL", "Full Stack Development"],
    icon: <GraduationCap size={40} className="text-primary group-hover:text-secondary transition-colors" />,
    features: [
      "Unified module scheduling",
      "Fee & attendance tracking",
      "Scalable database structure",
      "Comprehensive reporting"
    ],
    live: "https://mahixinfotech.in/erp"
  },
  {
    title: "Movie Ticket Booking System",
    year: "2025",
    description: "Built an end-to-end ticket booking platform with seat selection and show scheduling. Structured backend logic to handle concurrent bookings efficiently.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    icon: <Ticket size={40} className="text-primary group-hover:text-secondary transition-colors" />,
    features: [
      "Interactive seat selection",
      "Dynamic show scheduling",
      "Concurrent booking logic",
      "Responsive user interface"
    ],
    live: "https://mahixinfotech.in/ticket"
  },
  {
    title: "Hotel POS (Point of Sale) System",
    year: "2026",
    description: "Built a production-grade POS system handling billing, orders, and transaction workflows. Automated invoice generation and enabled real-time order tracking.",
    tech: ["React.js", "Backend APIs", "MySQL"],
    icon: <Store size={40} className="text-primary group-hover:text-secondary transition-colors" />,
    features: [
      "Automated invoice creation",
      "Real-time order tracking",
      "Optimized backend logic",
      "Staff workflow automation"
    ],
    live: "#"
  },
  {
    title: "Startup Investor Platform",
    year: "2024",
    description: "Developed a full-stack platform enabling startup–investor discovery and interaction. Designed scalable REST APIs to support dynamic data exchange.",
    tech: ["React.js", "Node.js", "REST APIs"],
    icon: <Rocket size={40} className="text-primary group-hover:text-secondary transition-colors" />,
    features: [
      "Startup-Investor discovery",
      "Scalable REST API design",
      "Intuitive discovery workflow",
      "Dynamic data exchange"
    ],
    live: "#"
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-24 w-full px-6 flex justify-center border-t border-white/5 bg-darker">
      <div className="container max-w-6xl">
        <div className="text-center mb-20 text-balance">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
              A collection of systems I've engineered, ranging from enterprise resource planning to real-time monitoring platforms.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="glass-card group flex flex-col h-full overflow-hidden border-white/10 hover:border-primary/50 transition-all duration-300 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              <div className="p-8 pb-4 flex justify-between items-start">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                  {project.icon}
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                  <Calendar size={14} className="text-secondary" />
                  {project.year}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6 font-light text-sm">
                  {project.description}
                </p>

                <div className="mb-8 space-y-3 flex-grow">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 text-xs">
                      <div className="w-1 h-1 rounded-full bg-secondary"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold text-slate-300 font-mono bg-white/5 border border-white/10 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5 mt-auto flex justify-between items-center">
                  {project.live !== "#" ? (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors group/link"
                    >
                      View Project <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-500 italic">Private Repo</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
