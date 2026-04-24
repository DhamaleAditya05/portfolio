import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const roles = [
  "Cloud & Linux Engineer",
  "Infrastructure & Automation Specialist",
  "Production System Engineer",
  "DevOps Engineer",
];

function TypeWriter({ texts }: { texts: string[] }) {
  const [displayed, setDisplayed] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 80);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 45);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setTextIdx((i) => (i + 1) % texts.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts]);

  return (
    <span className="text-cyan-400">
      {displayed}
      <span className="animate-pulse text-cyan-300">|</span>
    </span>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B18]/85 via-[#050B18]/70 to-[#050B18]" />

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for Opportunities
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                Aditya
              </span>
            </h1>
          </motion.div>

          {/* Typewriter Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl lg:text-3xl font-space font-medium mb-6 min-h-[40px]"
          >
            <TypeWriter texts={roles} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
          >
            System Administrator with hands-on experience managing production environments,
            automating workflows, and securing enterprise systems. Turning complex infrastructure challenges into elegant, automated solutions.
            Currently at{" "}
            <span className="text-cyan-400 font-medium">Katalyst Business Solutions / Apps4Rent</span>.
          </motion.p>

          {/* Contact chips */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all text-sm"
              >
                <Mail size={14} />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all text-sm"
              >
                <Phone size={14} />
                {personalInfo.phone}
              </a>
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-sm">
                <MapPin size={14} />
                {personalInfo.location}
              </span>
            </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-cyan-500/30 text-cyan-400 font-semibold hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all duration-300"
            >
              <Mail size={16} />
              Connect With Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
          >
            <a
              href="https://linkedin.com/in/dhamaleaditya05"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-gray-700 hover:border-cyan-500/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all hover:bg-cyan-500/10 hover:scale-110"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            <a
              href="mailto:adi.dhamale05@email.com"
              className="w-10 h-10 rounded-lg border border-gray-700 hover:border-cyan-500/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all hover:bg-cyan-500/10 hover:scale-110"
            >
              <Mail size={18} />
            </a>
            <a
              href="tel:7977146506"
              className="w-10 h-10 rounded-lg border border-gray-700 hover:border-cyan-500/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all hover:bg-cyan-500/10 hover:scale-110"
            >
              <Phone size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex-shrink-0 flex flex-col items-center gap-6"
        >
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 blur-sm opacity-70 animate-pulse" />
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-cyan-500/30">
              <img
                src="/profile.jpg"
                alt="Aditya Dhamale"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#0a1628] border border-cyan-500/30 rounded-xl px-4 py-2.5 shadow-xl">
              <div className="text-xs text-gray-400 font-medium">Experience</div>
              <div className="text-lg font-bold text-cyan-400">2 Year</div>
            </div>
            <div className="absolute -top-4 -left-4 bg-[#0a1628] border border-purple-500/30 rounded-xl px-4 py-2.5 shadow-xl">
              <div className="text-xs text-gray-400 font-medium">Projects</div>
              <div className="text-lg font-bold text-purple-400">5+</div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex gap-4">
            {[
              { label: "Uptime Maintained", value: "99.9%" },
              { label: "Tickets Resolved", value: "2K+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-center backdrop-blur-sm"
              >
                <div className="text-xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors group"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce group-hover:text-cyan-400" />
      </motion.button>
    </section>
  );
}
