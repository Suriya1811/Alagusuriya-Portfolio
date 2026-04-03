import { motion } from 'framer-motion';

const skillsData = {
  "Languages": ["Java", "Python", "SQL", "JavaScript"],
  "Frameworks": ["React.js", "Node.js", "PySpark"],
  "Databases": ["MySQL", "MongoDB"],
  "Technologies": ["ETL", "Data Pipelines", "XML", "JSON", "REST APIs"],
  "Tools": ["Talend", "Git", "GitHub", "Eclipse", "Figma"]
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 w-full px-6 flex justify-center border-t border-white/5 bg-white/[0.02]">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Technical Skills</h2>
            <div className="w-1/2 h-1 bg-secondary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div 
              key={category} 
              variants={itemVariants}
              className="glass-card p-6 group hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">
                  {category.charAt(0)}
                </span>
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-darker/50 border border-white/10 text-slate-300 text-sm font-medium hover:bg-primary hover:text-white transition-all cursor-default transform hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(99,102,241,0.3)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
