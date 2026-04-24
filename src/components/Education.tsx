import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import SectionTitle from "./SectionTitle";

const educationData = [
  {
    degree: "Bachelor of Engineering",
    field: "Electronics and Telecommunications",
    institution: "Terna Engineering College",
    year: "2020 – 2024",
    location: "Navi Mumbai, Maharashtra",
    cgpa: "8.13",
    grade: "Distinction",
    highlights: [
      "Specialized in embedded systems, signal processing, and telecommunications",
      "Strong foundation in networking protocols and communication systems",
      "Final year project focused on IoT-based monitoring systems",
      "Active member of the technical club and organized tech events",
    ],
    courses: [
      "Computer Networks",
      "Operating Systems",
      "Data Structures",
      "Digital Electronics",
      "Microcontrollers",
      "Signal Processing",
      "Database Management",
      "IoT Systems",
    ],
    color: "from-cyan-400 to-blue-600",
    icon: GraduationCap,
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          label="Education"
          title="Academic Background"
          subtitle="A strong technical foundation from a top engineering college, complemented by continuous self-learning."
        />

        <div ref={ref} className="max-w-4xl mx-auto">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="bg-white/3 border border-white/8 hover:border-cyan-500/20 rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:bg-white/5 mb-8"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-xl shadow-cyan-500/20 flex-shrink-0`}>
                  <edu.icon size={28} className="text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white font-space mb-1">{edu.degree}</h3>
                  <p className="text-cyan-400 font-semibold text-lg mb-3">{edu.field}</p>
                  <h4 className="text-xl font-medium text-gray-200 mb-3">{edu.institution}</h4>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-cyan-400" />
                      {edu.year}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-cyan-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* CGPA Badge */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-5 text-center">
                    <div className="text-3xl font-bold text-cyan-400 font-space">{edu.cgpa}</div>
                    <div className="text-xs text-gray-400 mt-1 font-medium">CGPA / 10</div>
                    <div className="mt-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                      {edu.grade}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Award size={14} className="text-cyan-400" />
                    Academic Highlights
                  </h4>
                  <div className="space-y-3">
                    {edu.highlights.map((item, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -15 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: j * 0.1 + 0.3 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Relevant Courses */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <BookOpen size={14} className="text-cyan-400" />
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, j) => (
                      <motion.span
                        key={course}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: j * 0.06 + 0.4 }}
                        className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Self Learning Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-6 text-center"
          >
            <div className="text-2xl mb-3">📚</div>
            <h4 className="text-white font-semibold font-space mb-2">Continuous Learner</h4>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              Beyond formal education, I continuously upskill through online platforms, hands-on labs, 
              Microsoft documentation, and AWS training resources. Learning never stops in tech!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
