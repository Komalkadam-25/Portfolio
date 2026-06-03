import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  // Initialize EmailJS with environment variable
  // eslint-disable-next-line no-undef
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kvkomalkadam@gmail.com",
      href: "mailto:kvkomalkadam@gmail.com",
    },
   
    {
      icon: MapPin,
      label: "Location",
      value: "Maharashtra, India",
      href: "https://maps.google.com",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    try {
      // Using EmailJS to send the email
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: "kvkomalkadam@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          sender_name: formData.name,
          sender_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      );

      if (response.status === 200) {
        setSubmitMessage(
          "Message sent successfully! I will get back to you soon.",
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitMessage(""), 5000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitError("Failed to send message. Please try again.");
      setTimeout(() => setSubmitError(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Get In <span className="text-glow text-cyber-blue">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and create something
              amazing together. Feel free to reach out!
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-bold text-white">
                Let's talk about everything
              </h3>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 p-4 rounded-lg glass border border-cyber-blue/20 hover:border-cyber-blue/50 group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0 p-3 rounded-lg bg-cyber-blue/10 group-hover:bg-cyber-blue/20 transition-all">
                      <info.icon className="w-6 h-6 text-cyber-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-lg font-semibold text-white group-hover:text-cyber-blue transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-gray-400 mb-4">
                  Follow me on social media
                </p>
                <div className="flex gap-4">
                  {[
                    {
                      name: "GitHub",
                      url: "https://github.com/komalkadam",
                      emoji: "🐙",
                    },
                    {
                      name: "LinkedIn",
                      url: "https://linkedin.com/in/komal-kadam",
                      emoji: "💼",
                    },
                    {
                      name: "Twitter",
                      url: "https://twitter.com",
                      emoji: "𝕏",
                    },
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass border border-cyber-blue/30 flex items-center justify-center text-2xl hover:border-cyber-blue/60 hover:shadow-glow transition-all"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.emoji}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-xl glass border border-cyber-blue/20"
            >
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-card/50 border border-cyber-blue/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue/50 transition-all"
                  placeholder="John Doe"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-card/50 border border-cyber-blue/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue/50 transition-all"
                  placeholder="john@example.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-card/50 border border-cyber-blue/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue/50 transition-all"
                  placeholder="Project Collaboration"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-dark-card/50 border border-cyber-blue/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold hover:shadow-glow-lg disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </motion.button>

              {/* Status Messages */}
              {submitMessage && (
                <motion.p
                  className="text-green-400 text-center text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ✓ {submitMessage}
                </motion.p>
              )}
              {submitError && (
                <motion.p
                  className="text-red-400 text-center text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ✗ {submitError}
                </motion.p>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
