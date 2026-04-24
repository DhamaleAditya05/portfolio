import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050B18]/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-cyan-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-8">

          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-shadow">
              <Terminal size={15} className="text-white" />
            </div>
            <span className="font-space font-bold text-lg text-white">
              Aditya Dhamale<span className="text-cyan-400"></span>
            </span>
          </button>

          {/* NAV LINKS (PASTE HERE) */}
          <div className="flex items-center gap-6">
            {/* Home About Skills etc */}
          </div>

        </div>

</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                activeSection === link.id
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-500/20"
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <a
            href="mailto:adi.dhamale05@email.com"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-300 hover:text-white p-2"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050B18]/95 backdrop-blur-xl border-t border-cyan-500/10"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.id
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="mailto:adi.dhamale05@email.com"
                className="mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
