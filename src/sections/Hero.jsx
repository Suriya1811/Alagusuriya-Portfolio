import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import resumePdf from '../assets/Alagusuriya-Resume.pdf';

export default function Hero() {
  const roles = ["Product Engineer", "Data Engineer", "Full Stack Developer"];
  const [currentRole, setCurrentRole] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullRole = roles[currentRole];
      
      if (!isDeleting && text === fullRole) {
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }
      
      if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
        return;
      }

      const nextText = isDeleting 
        ? fullRole.substring(0, text.length - 1)
        : fullRole.substring(0, text.length + 1);
        
      setText(nextText);
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentRole, roles]);

  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] opacity-50 z-0"></div>

      <div className="container mx-auto z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm mb-4">
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Hi, I'm <span className="text-gradient">Alagu Suriya S</span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold text-slate-300 h-[40px] md:h-[48px] flex items-center justify-center gap-1">
            <span>I am a </span>
            <span className="text-primary ml-1">{text}</span>
            <span className="w-[3px] h-[30px] md:h-[40px] bg-primary animate-pulse"></span>
          </div>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            Building scalable systems, optimizing data pipelines, and crafting modern web applications that deliver real-world impact.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a 
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a 
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all backdrop-blur-sm transform hover:scale-105 active:scale-95"
            >
              View Resume <FileText size={18} />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            <SocialLink href="https://github.com/Suriya1811" icon={<FaGithub size={24} />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/alagusuriya" icon={<FaLinkedin size={24} />} label="LinkedIn" />
            <SocialLink href="mailto:suriyanlk18@gmail.com" icon={<Mail />} label="Email" />
          </div>
        </motion.div>
      </div>


    </section>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-white text-slate-400 border border-white/5 hover:border-primary/50 transition-all z-10 transform hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}
