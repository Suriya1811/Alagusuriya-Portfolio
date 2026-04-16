import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Anna University (SSMIET)",
    duration: "Jul 2022 – May 2025",
    location: "Dindigul, Tamil Nadu",
    score: "7.0",
    scoreType: "CGPA",
    accent: "from-primary to-secondary"
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "Government Polytechnic College, Coimbatore",
    duration: "Jul 2019 – May 2022",
    location: "Coimbatore, Tamil Nadu",
    score: "72%",
    scoreType: "Percentage",
    accent: "from-secondary to-primary"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 w-full px-6 flex justify-center border-t border-white/5 bg-darker">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-400 max-w-xl mx-auto text-lg">
              Education is not only about learning facts, but more about training the mind to think.
            </p>
          </motion.div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${edu.accent}`}></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                <div className="flex gap-8 items-start">
                  <div className="hidden md:flex w-20 h-20 rounded-2xl bg-white/5 border border-white/10 items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                    <GraduationCap size={40} />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                      {edu.degree}
                    </h3>
                    
                    <h4 className="text-xl text-primary font-medium mb-4">
                      {edu.institution}
                    </h4>
                    
                    <div className="flex flex-wrap gap-6 text-slate-400 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-secondary" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-secondary" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-0 self-center md:self-auto">
                  <div className="flex flex-col items-center justify-center w-28 h-28 rounded-full border-4 border-white/5 bg-darker/80 group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                    <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                      {edu.score}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">
                      {edu.scoreType}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
