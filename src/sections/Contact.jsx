import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, CheckCircle2, Send, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const email = "suriyanlk18@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 w-full px-6 flex justify-center border-t border-white/5 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px] z-0"></div>
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] z-0"></div>

      <div className="container max-w-5xl z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              Have a project in mind or just want to say hi? I'd love to hear from you. Send me a message and I'll get back to you as soon as possible!
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
            <div className="glass-card p-8 group h-full">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-1">Email Me At</p>
                    <div className="flex items-center gap-3">
                      <a href={`mailto:${email}`} className="text-white text-lg font-medium hover:text-primary transition-colors">
                        {email}
                      </a>
                      <button 
                        onClick={handleCopy}
                        className="text-slate-500 hover:text-white transition-colors p-2 bg-white/5 rounded-lg"
                        title="Copy email address"
                      >
                        {copied ? <CheckCircle2 size={18} className="text-secondary" /> : <Copy size={18} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Follow My Work</p>
                  <div className="flex gap-5">
                    <a href="https://github.com/Suriya1811" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all transform hover:-translate-y-2 hover:shadow-xl shadow-white/10">
                      <FaGithub size={24} />
                    </a>
                    <a href="https://linkedin.com/in/alagusuriya" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all transform hover:-translate-y-2 hover:shadow-xl shadow-blue-600/20">
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative side element */}
              <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10 relative overflow-hidden group/card">
                <p className="text-sm text-slate-300 italic relative z-10">
                  "Let's build something extraordinary together."
                </p>
                <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-primary/20 rounded-full blur-2xl group-hover/card:scale-150 transition-transform"></div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 glass-card p-8 md:p-12 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6 shadow-lg shadow-secondary/5">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-slate-400 max-w-sm mb-8">
                    Thank you for reaching out. I've received your message and will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-300 ml-1">Your Name</label>
                      <input 
                        required
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-5 py-4 rounded-xl bg-darker/60 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-300 ml-1">Your Email</label>
                      <input 
                        required
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 rounded-xl bg-darker/60 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-slate-300 ml-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="w-full px-5 py-4 rounded-xl bg-darker/60 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-300 ml-1">Message</label>
                    <textarea 
                      required
                      id="message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full px-5 py-4 rounded-xl bg-darker/60 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    disabled={status === 'sending'}
                    type="submit"
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary text-white font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
