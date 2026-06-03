import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const ExperienceCard = ({ experience, index, isOdd }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: isOdd ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.2, duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`flex ${isOdd ? "md:flex-row-reverse" : "md:flex-row"} gap-4 md:gap-8 items-stretch`}
    >
      {/* Timeline Dot and Line */}
      <div className="flex flex-col items-center md:w-1/3">
        <motion.div
          className="w-4 h-4 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple border-2 border-dark-bg relative z-10"
          whileHover={{
            scale: 1.5,
            boxShadow: "0 0 20px rgba(0, 217, 255, 0.8)",
          }}
        />
        {index !== 2 && (
          <div className="w-1 flex-grow bg-gradient-to-b from-cyber-blue to-transparent" />
        )}
      </div>

      {/* Card Content */}
      <motion.div className="md:w-2/3 pb-8 md:pb-0" whileHover={{ y: -5 }}>
        <div className="p-6 rounded-xl glass border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all h-full">
          <div className="space-y-4">
            {/* Header */}
            <div>
              <h3 className="text-xl font-bold text-cyber-blue">
                {experience.role}
              </h3>
              <p className="text-lg text-gray-300 font-semibold">
                {experience.company}
              </p>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{experience.duration}</span>
            </div>

            {/* Details */}
            <ul className="space-y-2">
              {experience.details.map((detail, idx) => (
                <li key={idx} className="flex gap-3 text-gray-400">
                  <span className="text-cyber-blue mt-1">→</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {/* Skills */}
            {experience.skills && (
              <div className="flex flex-wrap gap-2 pt-3">
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-xs text-cyber-blue"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Experience() {
  const experiences = [
    {
      company: "QSpiders Pune",
      role: "Software Testing & Development Trainee",
      duration: "Feb 2026 - Present",
      details: [
        "Learning Manual and Automation Testing",
        "Improving programming and testing methodologies",
        "Building industry-ready software skills",
        "Working with real-world project scenarios",
      ],
      skills: ["Testing", "Automation", "QA", "Selenium"],
    },
    {
      company: "BEST Centre, BIT Wardha",
      role: "Automation Trainee",
      duration: "Completed",
      details: [
        "Worked with Siemens TIA Portal for PLC programming",
        "Designed HMI interfaces using GT Designer",
        "Implemented industrial automation solutions",
        "Gained hands-on experience in control systems",
      ],
      skills: ["PLC", "Automation", "HMI", "Siemens"],
    },
    {
      company: "Self-Directed Learning",
      role: "Full Stack Development & IoT Projects",
      duration: "Ongoing",
      details: [
        "Developing modern web applications with React and Node.js",
        "Building IoT systems with Arduino and microcontrollers",
        "Creating responsive and interactive user interfaces",
        "Contributing to open-source projects",
      ],
      skills: ["React", "Node.js", "IoT", "Full Stack"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <section
      id="experience"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              My <span className="text-glow text-cyber-blue">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full" />
          </motion.div>

          {/* Timeline */}
          <motion.div className="space-y-12" variants={containerVariants}>
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                experience={exp}
                index={index}
                isOdd={index % 2 !== 0}
              />
            ))}
          </motion.div>

          {/* Bottom Accent */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-12"
          >
            <div className="text-center">
              <p className="text-gray-400 mb-4">
                Always open to new opportunities and collaborations
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass border border-cyber-blue/50 text-cyber-blue hover:shadow-glow transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's work together</span>
                <span>→</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
