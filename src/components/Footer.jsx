import { Heart, ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const email = "suriyanlk18@gmail.com";

  return (
    <footer className="w-full bg-darker border-t border-white/5 pt-16 pb-8 mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
          <div className="flex gap-6">
            <a href={`mailto:${email}`} className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
              <Mail size={22} />
            </a>
            <a href="https://github.com/Suriya1811" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/50 hover:-translate-y-1 transition-all duration-300">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/alagusuriya" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:-translate-y-1 transition-all duration-300">
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          <div className="text-slate-400 text-sm flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Alagu Suriya S. Built with</span>
            <Heart size={14} className="text-red-500 fill-red-500 mx-1 animate-pulse" />
            <span>using React & Tailwind.</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 text-sm text-slate-400 hover:text-primary transition-all group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary group-hover:bg-primary/10 transition-all">
              <ArrowUp size={18} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
