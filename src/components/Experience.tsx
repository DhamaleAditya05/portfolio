import { MapPin, Calendar, CheckCircle2, Building2 } from "lucide-react";
import { experiences } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0d1323] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Work Experience" subtitle="Work Experience" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-600 to-transparent" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-16 sm:pl-20 mb-8">
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-[#0d1323] shadow-lg shadow-cyan-500/50 -translate-x-1/2" />

              <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-cyan-500/30 hover:bg-gradient-to-br hover:from-cyan-500/5 hover:to-blue-600/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Building2 size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-black text-xl leading-tight">{exp.role}</h3>
                      <p className="text-cyan-400 font-semibold text-sm mt-0.5">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-medium">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-colors group/item"
                    >
                      <CheckCircle2 size={16} className="text-cyan-500 flex-shrink-0 mt-0.5 group-hover/item:text-cyan-400 transition-colors" />
                      <p className="text-slate-400 text-sm leading-relaxed group-hover/item:text-slate-300 transition-colors">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* "Currently Working" badge */}
          <div className="relative pl-16 sm:pl-20">
            <div className="absolute left-4 sm:left-6 top-3 w-5 h-5 rounded-full bg-green-500 border-4 border-[#0d1323] -translate-x-1/2 animate-pulse" />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Currently working here — Writing new chapters every day
            </div>
          </div>
        </div>

        {/* Skills used at work */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
          <h3 className="text-white font-bold text-xl mb-6 text-center">Technologies Used at Work</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Windows Server", "Active Directory", "Group Policy", "PowerShell",
              "Veeam Backup", "SCVMM", "Citrix XenCenter", "IPSec",
              "WHMCS", "SQL Server", "Firewall Config", "VDI Management",
              "Salt-Stack", "Task Scheduler", "Security Patching", "Infrastructure Monitoring"
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-sm hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
