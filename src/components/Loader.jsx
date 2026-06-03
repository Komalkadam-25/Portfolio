import { motion } from "framer-motion";

export default function Loader() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.6 },
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

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg flex flex-col items-center justify-center z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-96 h-96 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink rounded-full opacity-20 blur-3xl" />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center"
        variants={containerVariants}
      >
        {/* Animated Logo */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-24 h-24 rounded-full border-4 border-transparent border-t-cyber-blue border-r-cyber-purple bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 flex items-center justify-center">
            <span className="text-4xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              K
            </span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Komal Kadam
          </h1>
          <p className="text-cyan-glow text-lg font-light">
            Building the future...
          </p>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          className="flex gap-2 mt-8 justify-center"
          variants={itemVariants}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 rounded-full bg-cyber-blue"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
