import { motion } from "framer-motion";
import { useRef } from "react";

const SkillCategory = ({ category, skills, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "auto",
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      className="p-6 rounded-xl glass border border-cyber-blue/20 hover:border-cyber-blue/50 group"
      whileHover={{ y: -5, boxShadow: "0 0 20px rgba(0, 217, 255, 0.2)" }}
    >
      <h3 className="text-xl font-bold text-cyber-blue mb-4 group-hover:text-cyan-glow transition-colors">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            className="px-3 py-1 rounded-full bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 border border-cyber-blue/30 text-sm text-gray-300 hover:border-cyber-blue/60 transition-all"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 15px rgba(0, 217, 255, 0.4)",
            }}
            variants={itemVariants}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const AnimatedSkillBar = ({ label, percentage, index }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-300">{label}</span>
        <span className="text-xs text-cyber-blue">{percentage}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-dark-card/50 border border-cyber-blue/10 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{
            delay: 0.2 + index * 0.1,
            duration: 1,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const skillsData = {
    Frontend: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Framer Motion",
    ],
    Programming: ["Java", "SQL", "C", ],
    Testing: ["Manual Testing", "Automation Testing", "Selenium", "QA"],
    "Embedded & IoT": ["Arduino", "Microcontrollers", "IoT", "CAN", ],
    Electrical: [
      "Power Electronics",
      "Control Systems",
      "HVDC",
      "Energy Systems",
    ],
  };

  const proficiencies = [
    { label: "Frontend Development", percentage: 95 },
    { label: "React.js", percentage: 92 },
    { label: "UI/UX Design", percentage: 85 },
    { label: "IoT Development", percentage: 88 },
    { label: "Testing & QA", percentage: 90 },
    { label: "Automation", percentage: 87 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              My <span className="text-glow text-cyber-blue">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full" />
          </motion.div>

          {/* Proficiency Bars */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 p-8 rounded-xl glass border border-cyber-blue/20"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Proficiency</h3>
            <div className="space-y-6">
              {proficiencies.map((item, index) => (
                <AnimatedSkillBar
                  key={index}
                  label={item.label}
                  percentage={item.percentage}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Skills Categories Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {Object.entries(skillsData).map(([category, skills], index) => (
              <SkillCategory
                key={category}
                category={category}
                skills={skills}
                index={index}
              />
            ))}
          </motion.div>

          {/* Tech Stack Visualization */}
          <motion.div variants={itemVariants} className="pt-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Java",
                "SQL",
                "Node.js",
                " React",
                " Tailwind",
                   
    
                " IoT",
                " Arduino",
                "Power Electronics",
                "Testing",
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg glass border border-cyber-blue/20 flex items-center justify-center text-center group hover:border-cyber-blue/50 transition-all"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <span className="text-sm font-medium group-hover:text-cyber-blue transition-colors">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
