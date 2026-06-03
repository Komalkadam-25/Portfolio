import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "GitHub", href: "https://github.com/komalkadam" },
    { label: "LinkedIn", href: "https://linkedin.com/in/komal-kadam" },
    { label: "Email", href: "mailto:kvkomalkadam@gmail.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="relative border-t border-cyber-blue/10 backdrop-blur-lg bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 pb-8">
            {/* Left: Brand */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                Komal Kadam
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building futuristic digital experiences with React, IoT, and
                intelligent automation.
              </p>
              <p className="text-xs text-gray-500">
                Electrical Engineer | Frontend Developer | IoT Innovator
              </p>
            </motion.div>

            {/* Center: Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-sm font-bold text-cyber-blue uppercase tracking-wider">
                Quick Links
              </h4>
              <nav className="space-y-2">
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-cyber-blue text-sm transition-colors block"
                    >
                      → {link}
                    </a>
                  ),
                )}
              </nav>
            </motion.div>

            {/* Right: Connect */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-sm font-bold text-cyber-blue uppercase tracking-wider">
                Let's Connect
              </h4>
              <div className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyber-blue text-sm transition-colors"
                  >
                    → {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent" />

          {/* Bottom Footer */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            {/* Left: Copyright */}
            <motion.p
              variants={itemVariants}
              className="text-xs text-gray-500 text-center md:text-left"
            >
              © {currentYear} Komal Kadam. All rights reserved. | Built with{" "}
              <span className="text-cyber-pink">
                <Heart className="w-3 h-3 inline" />
              </span>{" "}
              using React, Tailwind CSS & Framer Motion
            </motion.p>

            {/* Right: Scroll to Top */}
            <motion.button
              variants={itemVariants}
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyber-blue/30 text-cyber-blue hover:border-cyber-blue/60 transition-all hover:shadow-glow"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Floating Credits */}
          <motion.p
            variants={itemVariants}
            className="text-center text-xs text-gray-600 italic"
          >
            Designed with inspiration from modern web trends and cyberpunk
            aesthetics
          </motion.p>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-cyber-blue/0 via-cyber-blue/30 to-cyber-blue/0" />
    </footer>
  );
}
