import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 w-full px-6 flex justify-center border-t border-white/5">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
            <div className="w-1/2 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[64px]"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-[64px]"></div>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed relative z-10 font-light">
              I am a results-driven <span className="font-semibold text-white">Software Engineer</span> with extensive experience in full-stack development and data engineering. I specialize in designing robust <span className="text-primary font-medium">ETL pipelines</span>, architecting scalable backend systems, and building intuitive web applications.
            </p>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mt-4 relative z-10 font-light">
              My technical expertise spans across <span className="text-secondary font-medium">Java, SQL, the MERN stack</span>, and enterprise tools like <span className="font-semibold text-white">Talend</span>, allowing me to bridge the gap between complex data infrastructure and seamless user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
