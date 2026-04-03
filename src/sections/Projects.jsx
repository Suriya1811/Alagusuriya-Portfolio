import { motion } from 'framer-motion';
import { Folder } from 'lucide-react';

const projects = [
  {
    title: "Startup Investor Platform",
    description: "A full-stack platform designed to bridge the gap between emerging startups and potential investors. Features a scalable architecture and a client-driven design to improve user engagement.",
    tech: ["React.js", "Node.js", "REST APIs", "Tailwind CSS"],
    features: [
      "Improved user engagement",
      "Scalable architecture",
      "Client-driven design"
    ],
    github: "#",
    live: "#"
  },
  {
    title: "Enterprise SQL Systems",
    description: "A comprehensive suite of database systems including Movie Ticket, Music Streaming, and Flight Booking platforms. Highlights advanced data modeling and normalized database designs.",
    tech: ["SQL", "MySQL", "Database Design"],
    features: [
      "Normalized database design",
      "Complex joins and queries",
      "Data validation & triggers"
    ],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-24 w-full px-6 flex justify-center border-t border-white/5 bg-white/[0.02]">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Projects</h2>
            <div className="w-1/2 h-1 bg-secondary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="glass-card group flex flex-col h-full overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Top Banner / Folder icon */}
              <div className="p-6 pb-0 flex justify-between items-center text-slate-400">
                <Folder size={40} className="text-primary group-hover:text-secondary transition-colors" />

              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                <div className="mb-6 space-y-2 flex-grow">
                  <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">Key Features</h4>
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/5">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-slate-400 font-mono bg-darker/50 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
