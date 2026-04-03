import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 w-full px-6 flex justify-center border-t border-white/5">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Education</h2>
            <div className="w-1/2 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-10 relative overflow-hidden group"
        >
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary"></div>
          
          <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            <div className="flex gap-6 items-start">
              <div className="hidden md:flex w-16 h-16 rounded-full bg-primary/10 items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                <GraduationCap size={32} />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">B.E. Computer Science and Engineering</h3>
                <h4 className="text-lg text-primary font-medium mb-4 flex items-center md:hidden gap-2">
                  <GraduationCap size={20} className="inline" /> 
                  Anna University (SSMIET)
                </h4>
                <h4 className="text-lg text-primary font-medium mb-4 hidden md:block">
                  Anna University (SSMIET)
                </h4>
                
                <div className="flex flex-col sm:flex-row gap-4 text-slate-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Jul 2022 – May 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Dindigul, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex-shrink-0">
              <div className="flex flex-col items-center justify-center w-24 h-24 rounded-full border-4 border-white/5 bg-darker/50 group-hover:border-secondary/50 transition-colors">
                <span className="text-3xl font-bold text-secondary">7.0</span>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">CGPA</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
