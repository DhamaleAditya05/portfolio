import { Heart, ArrowUp, Terminal, Mail, Phone } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const techStack = ["Windows Server", "PowerShell", "Active Directory", "Docker", "Jenkins", "AWS", "Veeam", "Git"];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020810] to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-cyan-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Terminal size={18} className="text-white" />
              </div>
              <div>
                <span className="font-space font-bold text-xl text-white">Aditya Dhamale</span>
                <div className="text-xs text-cyan-400 font-medium">System Administrator</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
              Passionate infrastructure engineer committed to building secure, reliable, and automated 
              enterprise environments. Based in Navi Mumbai, available globally.
            </p>

            {/* Contact Quick Links */}
            <div className="space-y-2">
              <a href="mailto:adi.dhamale05@email.com" className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-400 transition-colors">
                <Mail size={13} />
                adi.dhamale05@email.com
              </a>
              <a href="tel:7977146506" className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-400 transition-colors">
                <Phone size={13} />
                +91 797-714-6506
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold font-space mb-5 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-500 hover:text-cyan-400 text-sm transition-colors hover:translate-x-1 inline-block transition-transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-white font-semibold font-space mb-5 text-sm uppercase tracking-wider">Core Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-gray-500 text-xs hover:text-cyan-400 hover:border-cyan-500/20 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-white font-semibold font-space mb-4 text-sm uppercase tracking-wider">Social</h4>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/dhamaleaditya05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-gray-800 hover:border-cyan-500/30 flex items-center justify-center text-gray-500 hover:text-cyan-400 transition-all hover:bg-cyan-500/10"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </a>
                <a
                  href="mailto:adi.dhamale05@email.com"
                  className="w-9 h-9 rounded-lg border border-gray-800 hover:border-cyan-500/30 flex items-center justify-center text-gray-500 hover:text-cyan-400 transition-all hover:bg-cyan-500/10"
                >
                  <Mail size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            Made with
            <Heart size={13} className="text-red-500 fill-red-500 animate-pulse" />
            by Aditya Dhamale · © {new Date().getFullYear()} All rights reserved
          </p>

          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-400 transition-colors group"
          >
            Back to top
            <div className="w-7 h-7 rounded-lg border border-gray-800 group-hover:border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/10 transition-all">
              <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
