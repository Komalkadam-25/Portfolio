import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";

const ProjectCard = ({ project, index, onView }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group cursor-pointer"
      onClick={() => onView(project)}
    >
      <motion.div
        className="relative rounded-xl glass border border-cyber-blue/20 overflow-hidden"
        whileHover={{ y: -10, borderColor: "rgba(0, 217, 255, 0.5)" }}
        transition={{ duration: 0.3 }}
      >
        {/* Image Placeholder */}
        <div className="w-full h-60 bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                {project.icon}
              </div>
            </div>
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-xs text-cyber-blue"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            className="w-full mt-4 py-2 rounded-lg glass border border-cyber-blue/50 text-cyber-blue hover:shadow-glow transition-all text-sm font-medium"
            whileHover={{ backgroundColor: "rgba(0, 217, 255, 0.1)" }}
            onClick={(e) => {
              e.stopPropagation();
              onView(project);
            }}
          >
            View Details
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-2xl w-full mx-4"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="bg-dark-card rounded-xl border border-cyber-blue/30 p-8 space-y-6 max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-cyber-blue/20 transition-colors"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Header */}
              <div className="space-y-3">
                <h2 className="text-3xl font-bold text-white">
                  {project.title}
                </h2>
                <p className="text-gray-400">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-semibold text-cyber-blue mb-3">
                  TECHNOLOGIES
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-sm text-cyber-blue"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Details */}
              {project.details && (
                <div>
                  <h3 className="text-sm font-semibold text-cyber-blue mb-3">
                    HIGHLIGHTS
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-cyber-blue">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links */}
              <div className="flex gap-4 pt-6">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 rounded-lg glass border border-cyber-blue/50 text-cyber-blue hover:shadow-glow transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-cyber-blue to-cyber-purple text-white hover:shadow-glow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "DC-DC High Gain Boost Converter",
      description:
        "Designed and simulated a high-efficiency boost converter integrating MOSFET and TLP250 drivers with optimized switching frequencies.",
      tech: ["Power Electronics", "Simulation", "Control Systems"],
      details: [
        "Implemented advanced power electronics design principles",
        "Optimized for maximum energy efficiency",
        "Full SPICE simulation and analysis",
      ],
      icon: "⚡",
      github: "https://github.com",
    },
    {
      title: "Wireless EV Charging Prototype",
      description:
        "Arduino-based 15W inductive wireless charging system ensuring safe and efficient contactless energy transmission.",
      tech: ["Arduino", "IoT", "Embedded Systems"],
      details: [
        "Developed inductive charging circuitry",
        "Arduino-based control system",
        "Efficient energy transfer mechanism",
        "Safety protocols implementation",
      ],
      icon: "🔋",
      github: "https://github.com",
    },
    {
      title: "IoT Earthing Health Monitoring System",
      description:
        "Smart IoT diagnostic system to monitor earthing health and automate fault detection in electrical infrastructure.",
      tech: ["IoT", "Microcontrollers", "Automation"],
      details: [
        "Real-time fault detection system",
        "Automated alerting mechanism",
        "Cloud-based monitoring dashboard",
        "Predictive maintenance algorithms",
      ],
      icon: "🌐",
      github: "https://github.com",
    },
    {
      title: "Futuristic Portfolio Website",
      description:
        "Next-gen animated portfolio built with React, Framer Motion, and GSAP featuring glassmorphism UI.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      details: [
        "Smooth scroll animations",
        "Interactive hover effects",
        "Responsive design",
        "Performance optimized",
      ],
      icon: "🎨",
      demo: "https://komalkadam.dev",
    },
    {
      title: "Automation Testing Framework",
      description:
        "Built comprehensive Selenium-based testing framework for web applications with automated test suite.",
      tech: ["Selenium", "Java", "Testing"],
      details: [
        "End-to-end test automation",
        "Cross-browser testing",
        "CI/CD integration",
        "Detailed test reports",
      ],
      icon: "🧪",
      github: "https://github.com",
    },
    {
      title: "Smart Home Control Dashboard",
      description:
        "IoT dashboard for controlling smart home devices with real-time monitoring and data visualization.",
      tech: ["React", "IoT", "Node.js"],
      details: [
        "Real-time device control",
        "Data visualization",
        "User authentication",
        "Mobile responsive",
      ],
      icon: "🏠",
      demo: "https://example.com",
    },
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
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
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
              Featured{" "}
              <span className="text-glow text-cyber-blue">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                onView={setSelectedProject}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
