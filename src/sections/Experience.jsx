import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Mahix Infotech",
    duration: "Jan 2026 – Present",
    points: [
      "Developed 3+ production-ready applications using MERN, PHP, MySQL",
      "Built Room Booking System improving efficiency by 30%",
      "Created E-commerce platform with secure payments",
      "Developed Retail Management System with GST and inventory tracking",
      "Optimized APIs and database queries"
    ]
  },
  {
    role: "Data Engineer Intern",
    company: "Dataswitch",
    duration: "Jun 2025 – Sep 2025",
    points: [
      "Built ETL pipelines using Java and Talend",
      "Reduced processing time by 25%",
      "Implemented XML to JSON transformation",
      "Debugged production issues",
      "Optimized data workflows"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 w-full px-6 flex justify-center border-t border-white/5 relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] z-0"></div>

      <div className="container max-w-4xl z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Work Experience</h2>
            <div className="w-1/2 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                {/* Timeline dot & line (Mobile only) */}
                <div className="md:hidden absolute left-0 top-2 bottom-0 w-[2px] bg-white/10">
                  <div className="absolute top-0 left-[-4px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-darker"></div>
                </div>

                {/* Left side: Meta (Desktop) / Top (Mobile) */}
                <div className="md:col-span-2 mb-4 md:mb-0 md:text-right pt-1">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center md:justify-end gap-2 text-primary font-medium mt-1">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center md:justify-end gap-2 text-slate-400 text-sm mt-2">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Timeline separator (Desktop) */}
                <div className="hidden md:flex flex-col items-center justify-start h-full">
                  <div className="w-4 h-4 rounded-full bg-darker border-4 border-primary z-10 mt-2 hover:scale-125 transition-transform duration-300"></div>
                  <div className="w-[2px] h-full bg-white/10 -mt-2"></div>
                </div>

                {/* Right side: Content */}
                <div className="md:col-span-2 glass-card p-6 md:p-8 hover:border-primary/30 transition-colors">
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex flex-col sm:flex-row sm:items-start gap-3 text-slate-300 group">
                        <span className="text-secondary mt-1 hidden sm:block opacity-70 group-hover:opacity-100 transition-opacity">▹</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
