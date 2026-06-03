import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Building Futuristic Digital Experiences";
  const roles = [
    "Frontend Developer",
    "IoT Innovator",
    "Automation Enthusiast",
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");

  // Typing animation for main text
  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [displayText]);

  // Typing animation for roles
  useEffect(() => {
    const currentRoleText = roles[currentRole];
    if (displayedRole.length < currentRoleText.length) {
      const timeout = setTimeout(() => {
        setDisplayedRole(currentRoleText.slice(0, displayedRole.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setDisplayedRole("");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayedRole, currentRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/komalkadam",
      label: "GitHub",
      color: "hover:text-white",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/komal-kadam",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:kvkomalkadam@gmail.com",
      label: "Email",
      color: "hover:text-cyber-pink",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyber-blue rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content */}
        <div className="text-center space-y-6">
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 rounded-full glass text-cyber-blue text-sm font-medium border border-cyber-blue/20">
              Welcome to my digital space ✨
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight"
            variants={itemVariants}
          >
            <span className="text-white">Hi, I'm</span>{" "}
            <span className="text-glow bg-gradient-to-r from-cyber-blue via-cyan-glow to-cyber-blue bg-clip-text text-transparent">
              Komal Kadam
            </span>
          </motion.h1>

          {/* Subheading with Typing */}
          <motion.div className="min-h-[80px]" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-light text-gray-300">
              Electrical Engineer &{" "}
              <span className="text-cyber-blue font-medium">
                {displayedRole}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {displayText}
            {displayText.length < fullText.length && (
              <span className="animate-pulse">_</span>
            )}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 rounded-lg glass border border-cyber-blue/50 text-cyber-blue font-semibold hover:shadow-glow flex items-center justify-center gap-2 group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold hover:shadow-glow-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 pt-8"
            variants={itemVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full glass border border-cyber-blue/20 text-cyber-blue ${link.color} transition-all hover:shadow-glow`}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-cyber-blue rounded-full mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
