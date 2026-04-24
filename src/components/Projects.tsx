import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Code2, ChevronDown, ChevronUp, Layers } from "lucide-react";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "Secure VDI Automation Suite",
    subtitle: "Enterprise Security & Helpdesk Automation",
    tags: ["PowerShell", "Salt-Stack", "IPSec", "VDI", "Active Directory"],
    color: "from-cyan-400 to-blue-600",
    borderColor: "border-cyan-500/20",
    accentColor: "text-cyan-400",
    bgColor: "bg-cyan-500/5",
    icon: "🔐",
    impact: "5-10% helpdesk ticket reduction",
    duration: "3 months",
    description:
      "A comprehensive security and automation suite built for Virtual Desktop Infrastructure environments, combining IPSec policy enforcement with self-service helpdesk tooling.",
    details: [
      "Implemented IPSec policies across VMs to ensure encrypted, secure internal communication.",
      "Configured and validated firewall rules in coordination with senior system administrators.",
      "Built a lightweight PowerShell-based GUI tool for self-service password resets and account unlocks.",
      "Reduced helpdesk ticket volume by 5-10% through intelligent automation.",
      "Integrated with Active Directory for real-time account status verification.",
      "Deployed using Salt-Stack for configuration management across multiple VM nodes.",
    ],
    highlights: [
      { label: "VMs Secured", value: "50+" },
      { label: "Ticket Reduction", value: "10%" },
      { label: "Automation Scripts", value: "15+" },
    ],
  },
  {
    title: "Automated VM Snapshot & Change Tracking System",
    subtitle: "Disaster Recovery & Configuration Management",
    tags: ["PowerShell", "Task Scheduler", "Hyper-V", "SQL Server", "Veeam"],
    color: "from-purple-400 to-pink-600",
    borderColor: "border-purple-500/20",
    accentColor: "text-purple-400",
    bgColor: "bg-purple-500/5",
    icon: "📸",
    impact: "Faster recovery & better change traceability",
    duration: "2 months",
    description:
      "An intelligent scheduled snapshot management system that automatically captures VM states, tracks configuration changes, and enables rapid rollback during misconfigurations.",
    details: [
      "Designed and implemented a scheduled VM snapshot system to capture daily point-in-time VM states.",
      "Automated metadata storage using Task Scheduler under restricted support accounts.",
      "Analyzed snapshot deltas to track configuration and disk-level changes during maintenance.",
      "Improved change traceability by enabling quick state comparison and rollback.",
      "Built reporting dashboard showing snapshot history and disk usage trends.",
      "Integrated with Veeam for long-term backup compliance alongside snapshot management.",
    ],
    highlights: [
      { label: "Recovery Time", value: "↓60%" },
      { label: "Daily Snapshots", value: "Auto" },
      { label: "Change Tracking", value: "Full" },
    ],
  },
  {
    title: "CI/CD Pipeline Infrastructure",
    subtitle: "DevOps Automation & Deployment Pipelines",
    tags: ["Jenkins", "Docker", "Git", "GitHub Actions", "Bash"],
    color: "from-orange-400 to-red-600",
    borderColor: "border-orange-500/20",
    accentColor: "text-orange-400",
    bgColor: "bg-orange-500/5",
    icon: "🚀",
    impact: "Streamlined deployment workflows",
    duration: "Ongoing",
    description:
      "Setting up and managing CI/CD pipelines using Jenkins and GitHub Actions for automated testing, building, and deployment of infrastructure configuration changes.",
    details: [
      "Configured Jenkins pipelines for automated infrastructure configuration deployments.",
      "Containerized admin tools using Docker for consistent, reproducible environments.",
      "Set up GitHub Actions workflows for automated script testing and validation.",
      "Created Bash scripts for automated environment provisioning and teardown.",
      "Implemented branch-based deployment strategies for staging and production.",
      "Built monitoring hooks to alert on failed pipeline stages.",
    ],
    highlights: [
      { label: "Deploy Time", value: "↓40%" },
      { label: "Environments", value: "3" },
      { label: "Pipelines", value: "5+" },
    ],
  },
  {
    title: "Infrastructure Monitoring Dashboard",
    subtitle: "Proactive Performance & Health Monitoring",
    tags: ["PowerShell", "Windows Perf", "WHMCS", "SQL", "Alerting"],
    color: "from-emerald-400 to-teal-600",
    borderColor: "border-emerald-500/20",
    accentColor: "text-emerald-400",
    bgColor: "bg-emerald-500/5",
    icon: "📊",
    impact: "Proactive bottleneck resolution",
    duration: "Ongoing",
    description:
      "Custom monitoring solution tracking CPU, memory, disk I/O and network metrics across the entire infrastructure, with automated alerting and reporting.",
    details: [
      "Built PowerShell-based monitoring scripts collecting CPU, memory, and disk I/O metrics.",
      "Integrated metric collection with SQL Server for historical trend analysis.",
      "Set up automated email alerts for threshold breaches and critical events.",
      "Created weekly performance reports for management review.",
      "Configured custom dashboards for real-time infrastructure health visibility.",
      "Linked monitoring alerts to WHMCS for automatic ticket creation on critical issues.",
    ],
    highlights: [
      { label: "Servers Monitored", value: "30+" },
      { label: "Metrics Tracked", value: "20+" },
      { label: "Alert Accuracy", value: "99%" },
    ],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`border ${project.borderColor} rounded-2xl overflow-hidden ${project.bgColor} backdrop-blur-sm hover:border-opacity-60 transition-all duration-300 group`}
    >
      {/* Card Header */}
      <div className="p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {project.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-space leading-tight">{project.title}</h3>
              <p className={`text-sm ${project.accentColor} font-medium mt-0.5`}>{project.subtitle}</p>
            </div>
          </div>
          <div className="flex-shrink-0 text-right">
            <span className={`text-xs font-medium ${project.accentColor} bg-current/10 px-2 py-1 rounded-lg border border-current/20`}
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
              {project.duration}
            </span>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Impact Banner */}
        <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border ${project.borderColor} mb-5`}
          style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
          <span className="text-yellow-400">⚡</span>
          <span className="text-sm text-gray-300 font-medium">Impact: <span className={project.accentColor}>{project.impact}</span></span>
        </div>

        {/* Quick Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {project.highlights.map((h) => (
            <div key={h.label} className="text-center p-3 rounded-xl bg-white/5 border border-white/8">
              <div className={`text-lg font-bold font-space ${project.accentColor}`}>{h.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{h.label}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs font-medium hover:text-white transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`flex items-center gap-2 text-sm font-medium ${project.accentColor} hover:opacity-80 transition-opacity`}
        >
          <Code2 size={14} />
          {expanded ? "Hide Details" : "View Full Details"}
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {/* Expanded Details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/5"
          >
            <div className="px-6 lg:px-8 py-6">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Layers size={14} />
                Technical Implementation Details
              </h4>
              <div className="space-y-3">
                {project.details.map((detail, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${project.accentColor.replace("text-", "bg-")}`} />
                    <span className="text-gray-400 text-sm leading-relaxed">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          label="Projects"
          title="Featured Work"
          subtitle="Real-world projects built to solve enterprise infrastructure challenges through automation and smart engineering."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
