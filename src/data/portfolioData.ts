export const personalInfo = {
  name: "Aditya Ashok Dhamale",
  title: "System Administrator & Infrastructure Engineer",
  subtitle: "Building Reliable, Secure & Automated Infrastructure",
  tagline: "Passionate about infrastructure automation, cloud technologies, and keeping systems running at peak performance.",
  email: "adi.dhamale05@email.com",
  phone: "797-714-6506",
  linkedin: "linkedin.com/in/dhamaleaditya05",
  location: "Navi-Mumbai, Maharashtra, India",
  avatar: "/images/avatar.jpg",
};

export const skillCategories = [
  {
    category: "Infrastructure",
    icon: "Server",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Windows Server", level: 90 },
      { name: "Linux", level: 75 },
      { name: "Active Directory", level: 88 },
      { name: "Group Policy", level: 85 },
    ],
  },
  {
    category: "Virtualization",
    icon: "Layers",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "SCVMM", level: 82 },
      { name: "Citrix XenCenter", level: 80 },
      { name: "Proxmox VE", level: 78 },
      { name: "VDI Management", level: 85 },
    ],
  },
  {
    category: "Scripting & Automation",
    icon: "Terminal",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "PowerShell", level: 88 },
      { name: "Bash", level: 65 },
      { name: "Python", level: 60 },
      { name: "Task Scheduler", level: 85 },
    ],
  },
  {
    category: "DevOps & CI/CD",
    icon: "GitBranch",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Jenkins", level: 70 },
      { name: "Docker", level: 72 },
      { name: "CI/CD Pipelines", level: 68 },
    ],
  },
  {
    category: "Security",
    icon: "Shield",
    color: "from-red-500 to-rose-500",
    skills: [
      { name: "IPSec Policies", level: 85 },
      { name: "Firewall Configuration", level: 83 },
      { name: "Security Patching", level: 90 },
      { name: "VDI Security", level: 82 },
    ],
  },
  {
    category: "Backup & Database",
    icon: "Database",
    color: "from-yellow-500 to-amber-500",
    skills: [
      { name: "Veeam Backup", level: 85 },
      { name: "SQL Server", level: 72 },
      { name: "Disaster Recovery", level: 80 },
      { name: "Data Integrity", level: 85 },
    ],
  },
  {
    category: "Cloud",
    icon: "Cloud",
    color: "from-sky-500 to-blue-600",
    skills: [
      { name: "AWS Cloud", level: 68 },
      { name: "Cloud Practitioner", level: 70 },
      { name: "WHMCS", level: 85 },
      { name: "SLA Management", level: 88 },
    ],
  },
];

export const experiences = [
  {
    company: "Katalyst Business Solutions Pvt. Ltd. / Apps4Rent LLC",
    role: "System Administrator",
    period: "August 2024 – Present",
    location: "Navi-Mumbai, Maharashtra",
    type: "Full-time",
    color: "from-blue-600 to-cyan-500",
    highlights: [
      "Managed and maintained production Windows-based infrastructure, ensuring high availability and system reliability",
      "Performed Windows patching and security updates, improving system stability and reducing vulnerabilities",
      "Monitored infrastructure performance (CPU, memory, disk I/O) and proactively resolved bottlenecks",
      "Implemented IPSec policies and firewall configurations to secure inter-VM and application communication across VDI environments",
      "Managed backup and disaster recovery operations using Veeam, ensuring data integrity and quick recovery",
      "Automated routine administrative tasks using PowerShell scripts, reducing manual effort and improving operational efficiency",
      "Handled and resolved infrastructure and application-related issues through WHMCS ticketing system, maintaining SLA compliance",
    ],
  },
];

export const projects = [
  {
    title: "Secure VDI Automation Suite",
    tech: ["PowerShell", "Salt-Stack", "IPSec", "Windows Server"],
    icon: "Lock",
    color: "from-blue-600 to-purple-600",
    description:
      "A comprehensive automation suite for securing VDI environments with encrypted communication and self-service capabilities.",
    bullets: [
      "Implemented IPSec policies across VMs to ensure encrypted, secure internal communication",
      "Configured and validated firewall rules in coordination with senior system administrators",
      "Built a lightweight PowerShell-based GUI tool for self-service password resets and account unlocks",
      "Reduced helpdesk ticket volume by 5–10% through intelligent automation",
    ],
    impact: "5–10% reduction in helpdesk tickets",
  },
  {
    title: "Automated VM Snapshot & Change Tracking System",
    tech: ["PowerShell", "Windows Task Scheduler", "VM Management"],
    icon: "Camera",
    color: "from-green-500 to-teal-500",
    description:
      "An intelligent snapshot management system for operational safety, rollback readiness, and configuration change traceability.",
    bullets: [
      "Designed and implemented a scheduled VM snapshot system to capture daily point-in-time VM states",
      "Automated metadata storage using Task Scheduler under restricted support accounts",
      "Analyzed snapshot deltas to track configuration and disk-level changes during maintenance",
      "Improved change traceability and reduced recovery time during misconfigurations",
    ],
    impact: "Faster rollback & full change traceability",
  },
  {
    title: "CI/CD Pipeline Infrastructure",
    tech: ["Jenkins", "Docker", "Git", "GitHub", "Bash"],
    icon: "GitBranch",
    color: "from-orange-500 to-red-500",
    description:
      "Built and managed CI/CD pipelines using Jenkins and Docker to streamline deployment workflows and infrastructure automation.",
    bullets: [
      "Configured Jenkins pipelines for automated build, test, and deployment workflows",
      "Containerized applications using Docker for consistent environment management",
      "Integrated GitHub repositories with Jenkins for automated triggering on code commits",
      "Reduced deployment time and human error through pipeline automation",
    ],
    impact: "Streamlined deployments & reduced errors",
  },
];

export const certifications = [
  {
    name: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Completed",
    icon: "Cloud",
    color: "from-orange-400 to-yellow-500",
  },
  {
    name: "Microsoft Certified Solutions Expert (MCSE)",
    issuer: "Microsoft",
    status: "Completed",
    icon: "Award",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "CompTIA A+ (Hardware & Networking)",
    issuer: "CompTIA",
    status: "Completed",
    icon: "Cpu",
    color: "from-red-500 to-pink-500",
  },
  {
    name: "CompTIA N+ (Networking)",
    issuer: "CompTIA",
    status: "Completed",
    icon: "Network",
    color: "from-purple-500 to-violet-500",
  },
];

export const education = {
  degree: "Bachelor of Engineering",
  field: "Electronics and Telecommunications",
  college: "Terna Engineering College",
  year: "2024",
  cgpa: "8.13",
  location: "Navi-Mumbai, Maharashtra",
};

export const techStack = [
  { name: "Windows Server", icon: "🪟" },
  { name: "Linux", icon: "🐧" },
  { name: "PowerShell", icon: "⚡" },
  { name: "Docker", icon: "🐳" },
  { name: "Jenkins", icon: "🤖" },
  { name: "Git", icon: "🔀" },
  { name: "GitHub", icon: "🐙" },
  { name: "AWS", icon: "☁️" },
  { name: "Veeam", icon: "💾" },
  { name: "SQL Server", icon: "🗄️" },
  { name: "Proxmox", icon: "🖥️" },
  { name: "Citrix", icon: "🌐" },
  { name: "Active Directory", icon: "📁" },
  { name: "IPSec", icon: "🔒" },
  { name: "Bash", icon: "💻" },
  { name: "Python", icon: "🐍" },
];
