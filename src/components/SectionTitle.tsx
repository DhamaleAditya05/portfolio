import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ label, title, subtitle, centered = true }: SectionTitleProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4 ${centered ? "mx-auto" : ""}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        {label}
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold font-space text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 ${centered ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
