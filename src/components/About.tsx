import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Server, Shield, Zap, Users, Code, Cloud } from "lucide-react";
import { education } from "../data/portfolioData";

const highlights = [
  {
    icon: Server,
    title: "Infrastructure Management",
    desc: "Expert in managing and maintaining production Windows-based infrastructure with high availability.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    desc: "Implementing IPSec policies, firewall configurations, and security updates to protect enterprise environments.",
    color: "from-blue-400 to-purple-500",
  },
  {
    icon: Zap,
    title: "Automation & Scripting",
    desc: "Building PowerShell scripts and automation tools to reduce manual effort and boost operational efficiency.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud & Virtualization",
    desc: "Hands-on experience with AWS Cloud, SCVMM, Citrix XenCenter, and Proxmox VE environments.",
    color: "from-emerald-400 to-cyan-500",
  },
  {
    icon: Code,
    title: "DevOps Practices",
    desc: "CI/CD pipelines, Docker containers, Git workflows, and Jenkins automation for modern deployments.",
    color: "from-orange-400 to-red-500",
  },
  {
    icon: Users,
    title: "Client & Ticket Management",
    desc: "Maintaining SLA compliance through WHMCS ticketing, resolving infrastructure issues efficiently.",
    color: "from-pink-400 to-rose-500",
  },
];

const stats = [
  { value: "2", label: "Year Experience", suffix: "" },
  { value: "2K", label: "Tickets Resolved", suffix: "+" },
  { value: "99.9", label: "Uptime Maintained", suffix: "%" },
  { value: "20", label: "Automation Impact", suffix: "%" },
];

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
  {highlights.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition"
      >
        <div className="flex items-center gap-3 mb-3">
          <Icon className="text-cyan-400" size={20} />
          <h4 className="text-white font-semibold">{item.title}</h4>
        </div>

        <p className="text-gray-400 text-sm">{item.desc}</p>
      </div>
    );
  })}
</div>

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
  
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="About Me"
            title="Who I Am"
            subtitle="System Administrator specializing in Infrastructure Reliability, Automation, and Secure Enterprise Environments."
          />
  
          {/* Stats Banner */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="relative group bg-white/5 border border-white/10 hover:border-cyan-500/30 rounded-2xl p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-cyan-500/5"
              >
                <div className="text-4xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-gray-400 mt-2 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
  
          {/* Main About Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white font-space mb-6">
                Building Reliable Infrastructure
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I'm <span className="text-cyan-400 font-medium">Aditya Ashok Dhamale</span>, a System Administrator 
                  based in Navi Mumbai with nearly 2 years of hands-on experience managing production environments.
                </p>
                <p>
                  With a Bachelor's degree in Electronics and Telecommunications from Terna Engineering College (CGPA: 8.13), I combine academic excellence with real-world infrastructure expertise.
                </p>
                <p>
                  Currently at <span className="text-cyan-400 font-medium">Katalyst Business Solutions Pvt. Ltd. / Apps4Rent LLC</span>, 
                  I manage Windows-based production systems, implement security policies, and automate operations using PowerShell — consistently
                  maintaining 99.9% uptime and have Resolved 2000+ support tickets.
                </p>
                <p>
                  My passion lies at the intersection of infrastructure reliability and intelligent automation — 
                  ensuring systems are not only up and running but optimized, secure, and scalable for 
                  modern enterprise demands.
                </p>
                <p>
                  Beyond my core SysAdmin role, I actively explore DevOps practices including 
                  <span className="text-purple-400 font-medium"> CI/CD pipelines, Docker containerization, 
                  Jenkins automation</span>, and Git-based workflows to bridge traditional IT operations 
                  with modern development practices.
                </p>
              </div>
  
            </motion.div>

            {/* Right: Education + Info cards */}
            <div className="space-y-5">
              {/* Education Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all">
                    <GraduationCap size={22} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h3 className="text-white font-bold text-lg">{education.degree}</h3>
                        <p className="text-cyan-400 text-sm font-medium">{education.field}</p>
                      </div>
                      <div className="px-3 py-1 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold">
                        CGPA: {education.cgpa}
                      </div>
                    </div>
                    <p className="text-slate-300 font-medium mt-2">{education.college}</p>
                    <div className="flex items-center gap-4 mt-2 text-slate-500 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {education.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} />
                        {education.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Name", value: "Aditya Dhamale", icon: "👤" },
                  { label: "Location", value: "Navi-Mumbai, India", icon: "📍" },
                  { label: "Email", value: "adi.dhamale05@email.com", icon: "📧" },
                  { label: "Phone", value: "+91 797-714-6506", icon: "📱" },
                  { label: "Degree", value: "B.E. Electronics & Telecomm.", icon: "🎓" },
                  { label: "Experience", value: "2 Year (SysAdmin)", icon: "💼" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base">{item.icon}</span>
                      <span className="text-slate-500 text-xs font-medium uppercase tracking-wide">{item.label}</span>
                    </div>
                    <p className="text-white text-sm font-semibold truncate">{item.value}</p>
                  </div>
                ))}
              </div>
  
              {/* Availability Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-green-500/30 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <p className="text-green-300 text-sm font-medium">
                  Open to new opportunities & collaborations — let's build something great together!
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );  
}
 