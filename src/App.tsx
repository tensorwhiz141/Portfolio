import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight, 
  Menu, 
  X, 
  Code, 
  Cpu, 
  Database, 
  Globe,
  Send,
  ExternalLink,
  Terminal,
  Calendar,
  ArrowLeft,
  Download
} from 'lucide-react';
import Resume from './components/Resume';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 ${isScrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
          <a href="#home" className="text-xl font-black tracking-tighter flex items-center gap-2 group">
            <div className="w-8 h-8 bg-charcoal rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
            </div>
            <span className="hidden sm:inline">NISARG SHAH</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[11px] font-bold uppercase tracking-widest hover:text-accent transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-[10px] font-black text-gray-400 tracking-tighter">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              OPEN TO WORK
            </div>
            
            {/* Mobile Toggle */}
            <button 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 glass rounded-3xl p-8 flex flex-col gap-6 md:hidden shadow-2xl z-50"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-2xl font-black tracking-tighter hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-40 pb-24 overflow-hidden noise-bg">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            Based in Mumbai, India
          </div>
          <h1 className="text-7xl md:text-[11rem] font-black leading-[0.8] tracking-tighter mb-10">
            visual<br />
            <span className="text-outline">intelligence</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-xl mb-12 leading-relaxed font-medium">
            Nisarg Amit Shah — <span className="text-charcoal">Engineering the future</span> through data, machine learning, and modern web architecture.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-16">
            <a 
              href="#contact"
              className="px-10 py-5 bg-charcoal text-white font-bold rounded-full hover:bg-accent hover:text-charcoal transition-all duration-500 flex items-center gap-3 shadow-xl shadow-charcoal/10"
            >
              Start a Project <ArrowUpRight size={20} />
            </a>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/tensorwhiz141" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:border-charcoal hover:bg-charcoal hover:text-white transition-all duration-500">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nisarg-shah-075b92262/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:border-charcoal hover:bg-charcoal hover:text-white transition-all duration-500">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="flex gap-12 border-t border-gray-100 pt-12">
            <div>
              <div className="text-5xl font-black mb-1 tracking-tighter">+04</div>
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Major Projects</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-1 tracking-tighter">+02</div>
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Internships</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative"
        >
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5] bg-gray-100 group">
              <img 
                src="/profile.jpg" 
                alt="Nisarg Amit Shah" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop";
                }}
              />
            
            {/* Floating Badge */}
            <div className="absolute top-8 left-8 glass p-4 rounded-2xl flex items-center gap-3 shadow-2xl">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-charcoal">
                <Cpu size={20} />
              </div>
              <div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Expertise</div>
                <div className="text-xs font-bold text-charcoal">Deep Learning</div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 glass p-4 rounded-2xl flex items-center gap-3 shadow-2xl">
              <div className="w-10 h-10 bg-charcoal rounded-xl flex items-center justify-center text-white">
                <Database size={20} />
              </div>
              <div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Stack</div>
                <div className="text-xs font-bold text-charcoal">Python & SQL</div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const About = ({ onViewResume }: { onViewResume: () => void }) => {
  const skills = [
    { name: "Python", icon: <Terminal size={14} /> },
    { name: "Machine Learning", icon: <Cpu size={14} /> },
    { name: "Deep Learning", icon: <Cpu size={14} /> },
    { name: "Web Development", icon: <Globe size={14} /> },
    { name: "MySQL", icon: <Database size={14} /> },
    { name: "Power BI", icon: <ArrowUpRight size={14} /> },
    { name: "Tableau", icon: <ArrowUpRight size={14} /> },
    { name: "Git", icon: <Github size={14} /> },
    { name: "Cloud", icon: <Globe size={14} /> },
    { name: "Restful APIs", icon: <Code size={14} /> }
  ];

  return (
    <section id="about" className="dark-section py-32 relative overflow-hidden noise-bg">
      {/* Marquee Background */}
      <div className="absolute top-0 left-0 w-full opacity-5 pointer-events-none">
        <div className="marquee py-8">
          <div className="marquee-content text-[15rem] font-black uppercase tracking-tighter">
            <span>Engineering • Data • Intelligence • Code • Engineering • Data • Intelligence • Code •</span>
          </div>
          <div className="marquee-content text-[15rem] font-black uppercase tracking-tighter">
            <span>Engineering • Data • Intelligence • Code • Engineering • Data • Intelligence • Code •</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] radial-bg -z-10"></div>
            
            <div className="relative rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl aspect-square max-w-md mx-auto">
               <img 
                 src="/profile.jpg" 
                 alt="Nisarg Shah" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                 referrerPolicy="no-referrer"
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop";
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
               <div className="absolute bottom-10 left-10">
                 <div className="text-4xl font-black italic tracking-tighter">Nisarg Shah</div>
                 <div className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Engineer & Researcher</div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-none tracking-tighter">
              Bridging <span className="text-accent">Data</span><br />and Design.
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-12 font-medium">
              I am a student at <span className="text-white">DJ Sanghvi College of Engineering</span>, passionate about building intelligent systems. My expertise spans from developing complex ML models to creating high-performance web applications.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-12">
              {skills.map(skill => (
                <div key={skill.name} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors group">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-charcoal transition-all">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-bold tracking-tight">{skill.name}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={onViewResume}
              className="group px-10 py-5 bg-accent text-charcoal font-black rounded-full hover:bg-white transition-all duration-500 flex items-center gap-3"
            >
              View Resume <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { 
      title: 'Parlour Booking System', 
      category: 'Web Dev', 
      img: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop', 
      type: 'large',
      link: 'https://github.com/tensorwhiz141/parlour-booking.git'
    },
    { 
      title: 'Financial Simulator', 
      category: 'AI / ML', 
      img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2070&auto=format&fit=crop', 
      type: 'small',
      link: 'https://github.com/tensorwhiz141/Financial_simulator.git'
    },
    { 
      title: 'Blood Bank Site', 
      category: 'Full Stack', 
      img: 'https://images.unsplash.com/photo-1579154235602-3c2c2446016b?q=80&w=2070&auto=format&fit=crop', 
      type: 'small',
      link: 'https://github.com/Nisarg-123-web/seproj.git'
    },
    { 
      title: 'IPL Win Predictor', 
      category: 'Data Science', 
      img: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2073&auto=format&fit=crop', 
      type: 'wide',
      link: 'https://github.com/Nisarg-123-web/All-projects.git'
    },
    { 
      title: 'ML Model Deployment', 
      category: 'MLOps', 
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop', 
      type: 'small',
      link: '#'
    },
  ];

  return (
    <section id="projects" className="py-32 bg-soft-gray noise-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <div className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4">Selected Works</div>
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-6">projects</h2>
            <p className="text-xl text-gray-500 font-medium">
              A collection of technical solutions ranging from salon management to complex financial simulations.
            </p>
          </div>
          <div className="w-20 h-20 bg-charcoal rounded-full flex items-center justify-center text-white rotate-45 hover:rotate-90 transition-transform duration-500 cursor-pointer">
            <ArrowUpRight size={32} />
          </div>
        </div>

        <div className="bento-grid">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-[3rem] overflow-hidden cursor-pointer shadow-xl shadow-black/5 ${project.type === 'large' ? 'bento-item-large' : ''} ${project.type === 'wide' ? 'bento-item-wide' : ''}`}
              onClick={() => window.open(project.link, '_blank')}
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">{project.category}</span>
                  <h3 className="text-white text-4xl font-black tracking-tighter flex items-center gap-3">
                    {project.title} <ArrowUpRight size={24} className="text-accent" />
                  </h3>
                </div>
              </div>
              
              {/* Category Badge (Always visible) */}
              <div className="absolute top-6 right-6 glass px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-charcoal group-hover:opacity-0 transition-opacity">
                {project.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = ({ onViewResume }: { onViewResume: () => void }) => {
  const experiences = [
    { id: '01', title: 'AIML Intern', location: 'BlackHole Infiverse', date: 'Jun 2025 – Nov 2025', desc: 'Developed advanced ML models for predictive analytics.' },
    { id: '02', title: 'Web Developer Intern', location: 'iSync Evolution Pvt Ltd', date: 'Jun 2024 – Jul 2024', desc: 'Built responsive and high-performance web applications.' },
    { id: '03', title: 'Engineering Student', location: 'DJ Sanghvi College of Engineering', date: '2022 – 2026', desc: 'Pursuing B.Tech in Information Technology.' },
    { id: '04', title: 'Class XII', location: 'Vidyadham College of Science', date: '2022', desc: 'Completed Higher Secondary Education.' },
  ];

  return (
    <section id="experience" className="py-32 noise-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <div className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4">Career Path</div>
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-6">experience</h2>
          </div>
          <div className="text-gray-400 font-mono text-xs uppercase tracking-widest pb-4">
            [ 2022 — Present ]
          </div>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group border-b border-gray-100 py-12 flex flex-col md:grid md:grid-cols-12 items-start md:items-center gap-8 hover:bg-soft-gray px-8 transition-all duration-500 rounded-[2rem]"
            >
              <div className="md:col-span-1">
                <span className="text-xs font-black text-gray-300 group-hover:text-accent transition-colors font-mono">{exp.id}</span>
              </div>
              
              <div className="md:col-span-5">
                <h3 className="text-3xl md:text-5xl font-black group-hover:translate-x-4 transition-transform duration-500 tracking-tighter italic">{exp.title}</h3>
                <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{exp.desc}</p>
              </div>
              
              <div className="md:col-span-3 flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
                <Globe size={14} className="text-accent" />
                {exp.location}
              </div>

              <div className="md:col-span-2 flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
                <Calendar size={14} className="text-accent" />
                {exp.date}
              </div>

              <div className="md:col-span-1 flex justify-end">
                <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-charcoal group-hover:text-white group-hover:border-charcoal transition-all duration-500">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <button 
            onClick={onViewResume}
            className="group flex items-center gap-4 text-sm font-black uppercase tracking-[0.3em] hover:text-accent transition-colors"
          >
            View Full Resume <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    setStatus('sending');

    // Note: You will need to replace these with your own EmailJS IDs
    // Service ID, Template ID, and Public Key
    emailjs.sendForm(
      'service_90z9tf4', 
      'template_7grmwoo', 
      form.current, 
      '1u0acNLLIPsWrgeKH'
    )
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current?.reset();
          setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
          console.log(error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact" className="py-32 bg-charcoal text-white rounded-t-[5rem] relative overflow-hidden noise-bg">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-6">Get in Touch</div>
            <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12">
              let's<br />
              <span className="text-outline">connect</span>
            </h2>
            <p className="text-gray-400 text-xl mb-16 max-w-md leading-relaxed font-medium">
              Interested in a collaboration or have a project in mind? Feel free to reach out.
            </p>
            
            <div className="space-y-10">
              {[
                { label: 'Email', value: 'nisargshah252003@gmail.com', icon: <Mail size={20} />, link: 'mailto:nisargshah252003@gmail.com' },
                { label: 'LinkedIn', value: 'Nisarg Amit Shah', icon: <Linkedin size={20} />, link: 'https://www.linkedin.com/in/nisarg-shah-075b92262/' },
                { label: 'GitHub', value: 'tensorwhiz141', icon: <Github size={20} />, link: 'https://github.com/tensorwhiz141' }
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-charcoal transition-all duration-500 border border-white/5">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">{item.label}</div>
                    <div className="text-lg font-bold group-hover:text-accent transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-dark p-12 rounded-[4rem] relative"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-accent transition-all duration-500 placeholder:text-gray-700" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-accent transition-all duration-500 placeholder:text-gray-700" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5} 
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 focus:outline-none focus:border-accent transition-all duration-500 resize-none placeholder:text-gray-700" 
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-6 font-black rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 shadow-2xl group ${
                  status === 'success' ? 'bg-green-500 text-white' : 
                  status === 'error' ? 'bg-red-500 text-white' : 
                  'bg-accent text-charcoal hover:bg-white shadow-accent/20'
                }`}
              >
                {status === 'idle' && <>Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                {status === 'sending' && <>Sending...</>}
                {status === 'success' && <>Message Sent Successfully!</>}
                {status === 'error' && <>Error! Please try again.</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-charcoal text-white border-t border-white/5 noise-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="text-3xl font-black tracking-tighter flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
              <div className="w-4 h-4 bg-accent rounded-full"></div>
            </div>
            <span>NISARG SHAH</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10">
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-accent transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/tensorwhiz141" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-charcoal transition-all duration-500 border border-white/5">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/nisarg-shah-075b92262/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-charcoal transition-all duration-500 border border-white/5">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">© 2026 Nisarg Amit Shah. Crafted with Precision.</p>
          <div className="text-6xl md:text-[10rem] font-black opacity-5 pointer-events-none select-none tracking-tighter leading-none">
            INTELLIGENCE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {showResume && <Resume onClose={() => setShowResume(false)} />}
      </AnimatePresence>
      
      <Navbar />
      <main>
        <Hero />
        <About onViewResume={() => setShowResume(true)} />
        <Portfolio />
        <Experience onViewResume={() => setShowResume(true)} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
