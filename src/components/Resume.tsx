import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Globe, 
  Download, 
  ArrowLeft,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  Code
} from 'lucide-react';

interface ResumeProps {
  onClose: () => void;
}

const Resume: React.FC<ResumeProps> = ({ onClose }) => {
  const skills = {
    languages: ["Python", "C++", "JavaScript", "SQL", "HTML/CSS"],
    frameworks: ["React", "Express", "Flask", "TensorFlow", "PyTorch", "Scikit-Learn"],
    tools: ["Git", "Docker", "AWS", "Power BI", "Tableau", "Postman"],
    concepts: ["Machine Learning", "Deep Learning", "Data Structures", "DBMS", "REST APIs"]
  };

  const experience = [
    {
      role: "AIML Intern",
      company: "BlackHole Infiverse",
      period: "Jun 2025 – Nov 2025",
      points: [
        "Developed and optimized machine learning models for predictive analytics, improving accuracy by 15%.",
        "Collaborated with the data engineering team to build robust data pipelines using Python.",
        "Implemented deep learning architectures for computer vision tasks."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "iSync Evolution Pvt Ltd",
      period: "Jun 2024 – Jul 2024",
      points: [
        "Designed and developed responsive front-end interfaces using React and Tailwind CSS.",
        "Integrated RESTful APIs to enhance application functionality and user experience.",
        "Optimized web performance, reducing load times by 20%."
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "DJ Sanghvi College of Engineering",
      period: "2022 – 2026",
      details: ""
    },
    {
      degree: "Higher Secondary Education (Class XII)",
      institution: "Vidyadham College of Science",
      period: "2022",
      details: "Percentage: 81.17%"
    },
    {
      degree: "Secondary Education (Class X)",
      institution: "Stepping Stones HighSchool",
      period: "2020",
      details: "Percentage: 91.8%"
    }
  ];

  const projects = [
    {
      name: "Blood bank donation site",
      tech: "React, Node.js, Cloudinary",
      desc: "Built a comprehensive healthcare platform with role-based dashboards for patients, doctors, and administrators. Implemented appointment scheduling with real-time availability tracking and integrated Cloudinary for medical image management.",
      link: "https://github.com/Nisarg-123-web/seproj.git"
    },
    {
      name: "Parlour Booking System",
      tech: "React, Node.js, MongoDB",
      desc: "A full-stack solution for managing salon appointments and services with real-time availability."
    },
    {
      name: "Financial Simulator",
      tech: "Python, Flask, Scikit-Learn",
      desc: "An AI-powered simulator that predicts market trends and provides investment insights."
    },
    {
      name: "IPL Win Predictor",
      tech: "Python, Streamlit, ML Algorithms",
      desc: "A data science project that predicts IPL match outcomes based on historical data and real-time match conditions."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-white overflow-y-auto resume-container"
    >
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .resume-container { position: static !important; overflow: visible !important; }
          body { background: white !important; }
          @page { margin: 2cm; }
        }
      `}</style>
      
      {/* Resume Header / Controls */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 no-print">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
          >
            <ArrowLeft size={18} /> Back to Portfolio
          </button>
          <div className="flex flex-col items-end gap-1">
            <button 
              onClick={() => {
                const originalTitle = document.title;
                document.title = "Nisarg_Shah_Resume";
                window.print();
                document.title = originalTitle;
              }}
              className="flex items-center gap-2 bg-charcoal text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-accent hover:text-charcoal transition-all"
            >
              <Download size={16} /> Print / Save as PDF
            </button>
            <p className="text-[9px] text-gray-400 font-medium mr-2">
              Tip: Open in new tab if print doesn't trigger
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Resume Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Profile & Info */}
          <div className="lg:col-span-4 space-y-12">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border border-gray-100 shadow-sm shrink-0">
                <img 
                  src="/profile.jpg" 
                  alt="Nisarg Shah" 
                  className="w-full h-full object-cover grayscale"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
                  }}
                />
              </div>
              <div>
                <h1 className="text-5xl font-black tracking-tighter mb-2">NISARG<br />SHAH</h1>
                <p className="text-accent font-bold uppercase tracking-[0.2em] text-xs">IT Engineer & ML Researcher</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-500 hover:text-charcoal transition-colors">
                <Mail size={16} className="text-accent" />
                <span className="text-sm font-medium">nisargshah252003@gmail.com</span>
              </div>
              <a href="https://www.linkedin.com/in/nisarg-shah-075b92262/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-500 hover:text-charcoal transition-colors">
                <Linkedin size={16} className="text-accent" />
                <span className="text-sm font-medium">linkedin.com/in/nisarg-shah-075b92262</span>
              </a>
              <div className="flex items-center gap-3 text-gray-500 hover:text-charcoal transition-colors">
                <Github size={16} className="text-accent" />
                <span className="text-sm font-medium">github.com/tensorwhiz141</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500 hover:text-charcoal transition-colors">
                <MapPin size={16} className="text-accent" />
                <span className="text-sm font-medium">Mumbai, India</span>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                  <Code size={14} className="text-accent" /> Skills
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[10px] font-black uppercase text-gray-400 mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map(s => <span key={s} className="px-3 py-1 bg-gray-50 rounded-md text-[11px] font-bold">{s}</span>)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase text-gray-400 mb-3">Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.frameworks.map(s => <span key={s} className="px-3 py-1 bg-gray-50 rounded-md text-[11px] font-bold">{s}</span>)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase text-gray-400 mb-3">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map(s => <span key={s} className="px-3 py-1 bg-gray-50 rounded-md text-[11px] font-bold">{s}</span>)}
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                  <Award size={14} className="text-accent" /> ACHIEVEMENTS & ACTIVITIES
                </h2>
                <ul className="space-y-4">
                  <li className="text-sm font-bold leading-tight">Winner of Debate & Chemistry Quiz at djsAlcheme (2023)</li>
                  <li className="text-sm font-bold leading-tight">IBM certification in machine learning, data analysis</li>
                </ul>
              </section>
            </div>
          </div>

          {/* Right Column: Experience & Projects */}
          <div className="lg:col-span-8 space-y-16">
            
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
                <Briefcase size={14} className="text-accent" /> Professional Experience
              </h2>
              <div className="space-y-12">
                {experience.map((exp, i) => (
                  <div key={i} className="relative pl-8 border-l border-gray-100">
                    <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 bg-accent rounded-full"></div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-black tracking-tight">{exp.role}</h3>
                        <p className="text-accent font-bold text-sm">{exp.company}</p>
                      </div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{exp.period}</span>
                    </div>
                    <ul className="space-y-3">
                      {exp.points.map((p, j) => (
                        <li key={j} className="text-gray-500 text-sm leading-relaxed flex gap-3">
                          <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"></span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
                <Code size={14} className="text-accent" /> Key Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((p, i) => (
                  <div key={i} className="p-6 bg-gray-50 rounded-3xl border border-transparent hover:border-accent/20 transition-all group">
                    <h3 className="text-xl font-black mb-2 flex items-center justify-between">
                      {p.name} 
                      {p.link ? (
                        <a href={p.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="text-gray-300 group-hover:text-accent transition-colors" />
                        </a>
                      ) : (
                        <ExternalLink size={16} className="text-gray-300 group-hover:text-accent transition-colors" />
                      )}
                    </h3>
                    <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-4">{p.tech}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
                <BookOpen size={14} className="text-accent" /> Education
              </h2>
              <div className="space-y-8">
                {education.map((edu, i) => (
                  <div key={i} className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-black tracking-tight">{edu.degree}</h3>
                      <p className="text-gray-500 font-bold text-sm">{edu.institution}</p>
                      <p className="text-accent text-xs font-bold mt-1">{edu.details}</p>
                    </div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{edu.period}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 py-12 border-t border-gray-100 no-print">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
            Generated with Visual Intelligence Portfolio System © 2026
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
