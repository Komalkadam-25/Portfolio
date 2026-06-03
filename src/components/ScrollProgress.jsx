import { motion } from "framer-motion";

export default function ScrollProgress({ scrollY }) {
  const height = document.documentElement.scrollHeight - window.innerHeight;

  const progress = height > 0 ? (scrollY / height) * 100 : 0;

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink z-50"
        style={{ width: `${progress}%` }}
      />

      {/* Corner Counter */}
      <motion.div
        className="fixed top-8 right-8 z-40 font-mono text-sm text-cyber-blue"
        animate={{ opacity: progress > 0 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {Math.round(progress)}%
      </motion.div>
    </>
  );
}
