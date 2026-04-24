import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

const certifications = [
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    status: "Completed",
    level: "Foundational",
    icon: "☁️",
    color: "from-orange-400 to-amber-600",
    borderColor: "border-orange-500/20",
    bgColor: "bg-orange-500/5",
    accentColor: "text-orange-400",
    description:
      "Hands-on cloud practitioner certification demonstrating foundational AWS cloud knowledge through interactive game-based learning, covering core AWS services, security, and architecture.",
    skills: ["AWS EC2", "S3", "IAM", "VPC", "CloudWatch", "RDS", "Lambda", "Cloud Security"],
    badge: "🏅",
  },
  {
    title: "Microsoft Certified Solutions Expert (MCSE)",
    issuer: "Microsoft",
    status: "Course Completed",
    level: "Expert",
    icon: "🪟",
    color: "from-blue-400 to-cyan-600",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/5",
    accentColor: "text-blue-400",
    description:
      "Comprehensive Microsoft infrastructure certification covering Windows Server, Active Directory, virtualization, networking, and enterprise security configurations.",
    skills: ["Windows Server", "Active Directory", "Hyper-V", "Exchange", "SharePoint", "Azure AD", "Security"],
    badge: "🏆",
  },
  {
    title: "CompTIA A+ (Hardware & Networking)",
    issuer: "CompTIA",
    status: "Course Completed",
    level: "Foundational",
    icon: "🖥️",
    color: "from-red-400 to-pink-600",
    borderColor: "border-red-500/20",
    bgColor: "bg-red-500/5",
    accentColor: "text-red-400",
    description:
      "Industry-standard certification for hardware and networking fundamentals, covering PC hardware, networking concepts, security, and troubleshooting methodologies.",
    skills: ["Hardware Troubleshooting", "TCP/IP", "Networking", "Security Basics", "OS Support", "Mobile Devices"],
    badge: "🎖️",
  },
  {
    title: "CompTIA Network+ (N+)",
    issuer: "CompTIA",
    status: "Course Completed",
    level: "Intermediate",
    icon: "🌐",
    color: "from-emerald-400 to-teal-600",
    borderColor: "border-emerald-500/20",
    bgColor: "bg-emerald-500/5",
    accentColor: "text-emerald-400",
    description:
      "Advanced networking certification covering network architecture, protocols, infrastructure, network operations, security, and troubleshooting.",
    skills: ["Network Protocols", "TCP/IP Suite", "Routing & Switching", "VPN", "Wireless", "Network Security", "Monitoring"],
    badge: "🎗️",
  },
];

const learningGoals = [
  { title: "HashiCorp Terraform", progress: 45, color: "#7c3aed" },
  { title: "Kubernetes (CKA)", progress: 35, color: "#2563eb" },
  { title: "AWS Solutions Architect", progress: 55, color: "#f97316" },
  { title: "Azure Administrator (AZ-104)", progress: 40, color: "#0ea5e9" },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          label="Certifications"
          title="Credentials & Training"
          subtitle="Industry-recognized certifications and coursework validating expertise in cloud, infrastructure, and networking."
        />

        <div ref={ref} className="grid sm:grid-cols-2 gap-6 mb-16">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`border ${cert.borderColor} ${cert.bgColor} rounded-2xl p-6 hover:border-opacity-60 transition-all duration-300 hover:scale-[1.02] group`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${cert.borderColor} ${cert.accentColor}`}
                      style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                      {cert.level}
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
                      <CheckCircle2 size={12} />
                      {cert.status}
                    </span>
                  </div>
                  <h3 className="text-white font-bold font-space leading-tight">{cert.title}</h3>
                  <p className={`text-sm ${cert.accentColor} mt-1 font-medium`}>{cert.issuer}</p>
                </div>
                <span className="text-2xl flex-shrink-0">{cert.badge}</span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">{cert.description}</p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2 py-1 rounded-md text-xs font-medium border ${cert.borderColor} text-gray-400 hover:${cert.accentColor} transition-colors`}
                    style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="bg-white/3 border border-white/8 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white font-space mb-2 flex items-center gap-3">
            <span className="text-2xl">🎯</span>
            Currently Learning & Goals for 2025
          </h3>
          <p className="text-gray-400 text-sm mb-8">Working towards these certifications to advance cloud and DevOps expertise</p>

          <div className="grid sm:grid-cols-2 gap-6">
            {learningGoals.map((goal, i) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.8 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 text-sm font-medium">{goal.title}</span>
                  <span className="text-gray-500 text-sm font-mono">{goal.progress}%</span>
                </div>
                <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${goal.progress}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: i * 0.1 + 0.9, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: goal.color }}
                  />
                </div>
                <p className="text-gray-600 text-xs mt-1.5">In Progress</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
