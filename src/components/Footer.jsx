import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-darker border-t border-white/5 py-8 mt-12 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-400 text-sm flex items-center gap-1">
          <span>&copy; {new Date().getFullYear()} Alagu Suriya S. Built with</span>
          <Heart size={14} className="text-red-500 fill-red-500 mx-1 animate-pulse" />
          <span>using React & Tailwind.</span>
        </div>

        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
            <ArrowUp size={16} />
          </div>
        </button>
      </div>
    </footer>
  );
}
