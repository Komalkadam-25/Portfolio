import { motion } from "framer-motion";
import { Trophy, Users, Zap, Award } from "lucide-react";

const AchievementCard = ({ achievement, icon: Icon, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: index * 0.1, duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="p-6 rounded-xl glass border border-cyber-blue/20 hover:border-cyber-blue/50 group text-center"
      whileHover={{ y: -10, boxShadow: "0 0 30px rgba(0, 217, 255, 0.2)" }}
    >
      <motion.div
        className="flex justify-center mb-4"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Icon className="w-12 h-12 text-cyber-blue group-hover:text-cyan-glow transition-colors" />
      </motion.div>
      <h3 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors mb-2">
        {achievement.title}
      </h3>
      <p className="text-gray-400 text-sm">{achievement.description}</p>
    </motion.div>
  );
};

export default function Achievements() {
  const achievements = [
    {
      title: "Class Representative",
      description:
        "Led and managed a class of 60+ students with excellent communication and leadership skills.",
      icon: Users,
    },
    {
      title: "Power Bit Forum Secretary",
      description:
        "Joint Secretary at Power Bit Forum, organizing technical events and workshops.",
      icon: Trophy,
    },
    {
      title: "Technical Event Organizer",
      description:
        "Successfully organized and conducted multiple technical events and workshops for college students.",
      icon: Zap,
    },
    {
      title: "Innovation Award",
      description:
        "Recognized for innovative IoT and automation projects demonstrating cutting-edge solutions.",
      icon: Award,
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
    <section className="relative py-20 md:py-32 overflow-hidden">
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
              Achievements &{" "}
              <span className="text-glow text-cyber-blue">Leadership</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full" />
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                achievement={achievement}
                icon={achievement.icon}
                index={index}
              />
            ))}
          </motion.div>

          {/* Additional Highlights */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="p-8 rounded-xl glass border border-cyber-blue/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Why Choose Me?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Unique Blend",
                    desc: "Electrical Engineering expertise combined with modern web development",
                  },
                  {
                    title: "Innovative Mind",
                    desc: "Passion for IoT, automation, and cutting-edge technologies",
                  },
                  {
                    title: "Leadership",
                    desc: "Proven leadership and organizational skills with team management",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center space-y-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h4 className="text-lg font-bold text-cyber-blue">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
