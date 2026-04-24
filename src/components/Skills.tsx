import { useState, useEffect, useRef } from "react";
import {
  Server, Layers, Terminal, GitBranch, Shield, Database, Cloud,
} from "lucide-react";
import { skillCategories, techStack } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

const iconMap: Record<string, React.ElementType> = {
  Server, Layers, Terminal, GitBranch, Shield, Database, Cloud,
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-cyan-400 text-xs font-bold font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
}

function SkillCard({ category, icon, color, skills }: {
  category: string;
  icon: string;
  color: string;
  skills: { name: string; level: number }[];
}) {
  const Icon = iconMap[icon] || Server;

  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={18} className="text-white" />
        </div>
        <h3 className="text-white font-bold text-base">{category}</h3>
      </div>
      <div>
        {skills.map((skill, idx) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={idx * 100} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Technical Skills" subtitle="What I Know" />

        {/* Skill cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.category} {...cat} />
          ))}
        </div>

        {/* Tech Stack Carousel */}
        <div className="text-center mb-6">
          <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">Tech Stack & Tools</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0f1e] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0f1e] to-transparent z-10" />
          <div className="flex gap-4 animate-scroll-x">
            {[...techStack, ...techStack].map((tech, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300 cursor-default"
              >
                <span className="text-xl">{tech.icon}</span>
                <span className="text-slate-300 text-sm font-medium whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-x {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll-x {
          animation: scroll-x 30s linear infinite;
        }
        .animate-scroll-x:hover {
          animation-play-state: paused;
        }
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(200%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
