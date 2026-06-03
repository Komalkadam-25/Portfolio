import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({ from = 0, to = 100, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / (duration * 1000);

            if (progress < 1) {
              setCount(Math.floor(from + (to - from) * progress));
              requestAnimationFrame(animate);
            } else {
              setCount(to);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 },
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [from, to, duration]);

  return (
    <span ref={nodeRef}>
      {count}
      {suffix}
    </span>
  );
};

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stats = [
    { label: "Projects Completed", value: 6, suffix: "+" },
    { label: "Years Experience", value: "Fresher"},
    { label: "Technologies", value: 8, suffix: "+" },
    
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-glow text-cyber-blue">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full" />
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image/Avatar */}
            <motion.div variants={itemVariants} className="relative">
              <motion.div
                className="relative w-full max-w-md mx-auto"
                whileHover={{ scale: 1.05 }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 blur-2xl" />

                {/* Main Avatar */}
                <div className="relative p-8 rounded-2xl glass border border-cyber-blue/30 overflow-hidden">
                  <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 flex items-center justify-center">
                    <div className="text-6xl font-bold text-cyber-blue opacity-50">
                      K
                    </div>
                  </div>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-blue bg-clip-border"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-10 right-10 w-20 h-20 rounded-full glass border border-cyber-pink/50 flex items-center justify-center text-2xl"
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                💻
              </motion.div>
              <motion.div
                className="absolute bottom-20 left-10 w-16 h-16 rounded-full glass border border-cyber-blue/50 flex items-center justify-center text-xl"
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                ⚡
              </motion.div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm an{" "}
                <span className="text-cyber-blue font-semibold">
                  Electrical Engineering
                </span>{" "}
                undergraduate with a passion for{" "}
                <span className="text-cyber-blue font-semibold">
                  modern web development
                </span>{" "}
                and{" "}
                <span className="text-cyber-blue font-semibold">
                  IoT systems
                </span>
                .
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                With hands-on experience in software testing, automation,
                embedded systems, and frontend development, I bring a unique
                blend of electrical engineering expertise and cutting-edge web
                technologies.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My mission is to build intelligent, futuristic digital
                experiences that bridge the gap between hardware and software,
                creating seamless automation solutions and captivating user
                interfaces.
              </p>

              {/* Key Skills Badges */}
              <div className="flex flex-wrap gap-3 pt-6">
                {["React", "IoT", "Testing", "Automation", "UI/UX"].map(
                  (skill, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 rounded-full glass border border-cyber-blue/30 text-cyber-blue text-sm font-medium"
                      whileHover={{
                        scale: 1.1,
                        borderColor: "rgb(0, 217, 255)",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ),
                )}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl glass border border-cyber-blue/20 text-center group hover:border-cyber-blue/50 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-cyber-blue mb-2">
                  <Counter to={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
