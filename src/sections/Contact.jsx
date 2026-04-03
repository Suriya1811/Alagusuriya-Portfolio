import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, CheckCircle2, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "suriyanlk18@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 w-full px-6 flex justify-center border-t border-white/5 relative">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px] z-0"></div>

      <div className="container max-w-5xl z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Get In Touch</h2>
            <div className="w-1/2 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
              Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 group">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <div className="flex items-center gap-3">
                      <a href={`mailto:${email}`} className="text-white font-medium hover:text-primary transition-colors">
                        {email}
                      </a>
                      <button 
                        onClick={handleCopy}
                        className="text-slate-500 hover:text-white transition-colors p-1"
                        title="Copy email list"
                      >
                        {copied ? <CheckCircle2 size={16} className="text-secondary" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <p className="text-sm text-slate-400 mb-4">Connect on Social</p>
                  <div className="flex gap-4">
                    <a href="https://github.com/Suriya1811" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all transform hover:-translate-y-1">
                      <FaGithub size={20} />
                    </a>
                    <a href="https://linkedin.com/in/alagusuriya" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all transform hover:-translate-y-1">
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 glass-card p-8 md:p-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-darker/50 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-darker/50 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-lg bg-darker/50 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg bg-darker/50 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
