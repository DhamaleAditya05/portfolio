import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "adi.dhamale05@email.com",
    href: "mailto:adi.dhamale05@email.com",
    color: "from-cyan-400 to-blue-500",
    description: "Best way to reach me",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 797-714-6506",
    href: "tel:7977146506",
    color: "from-purple-400 to-pink-500",
    description: "Available Mon-Sat, 10am-7pm IST",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Navi Mumbai, Maharashtra",
    href: "https://maps.google.com/?q=Navi+Mumbai+Maharashtra",
    color: "from-emerald-400 to-teal-500",
    description: "Open to remote & hybrid roles",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          label="Contact"
          title="Let's Work Together"
          subtitle="Have an opportunity, project, or just want to connect? I'd love to hear from you."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white font-space mb-4">
                Ready to Build Something Great?
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Whether you're looking for a skilled System Administrator, need infrastructure consulting, 
                or want to discuss DevOps opportunities — I'm always open to meaningful conversations.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-medium">Available for new opportunities</span>
                </div>
                <span className="text-gray-600">·</span>
                <span className="flex items-center gap-1.5 text-gray-400">
                  <Clock size={13} />
                  Usually replies within 24h
                </span>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 mb-10">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/3 border border-white/8 hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{item.label}</div>
                    <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{item.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Connect on Social</h4>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/dhamaleaditya05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/30 text-[#0077b5] hover:bg-[#0077b5]/20 transition-all font-medium text-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  LinkedIn
                </a>
                <a
                  href="mailto:adi.dhamale05@email.com"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all font-medium text-sm"
                >
                  <Mail size={16} />
                  Email Me
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white/3 border border-white/8 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                  <MessageSquare size={18} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white font-space">Send a Message</h3>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400 text-sm mb-6">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Job Opportunity / Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity or how I can help..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
