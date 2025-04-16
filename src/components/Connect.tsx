
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageSquare, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Connect = () => {
  const connectOptions = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/",
      color: "hover:text-white hover:bg-[#333]"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/",
      color: "hover:text-white hover:bg-[#0077b5]"
    },
    {
      name: "Medium",
      icon: <ExternalLink className="w-5 h-5" />,
      url: "https://medium.com/@",
      color: "hover:text-white hover:bg-[#12100e]"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:abcd@hotmail.com",
      color: "hover:text-white hover:bg-[#ea4335]"
    }
  ];

  return (
    <section className="py-12 bg-dark-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Let's Connect</h2>
            <p className="text-gray-400 mb-6">
              Feel free to reach out through any of these platforms. I'm always open to discussing new projects, opportunities or partnerships.
            </p>
            <div className="flex flex-wrap gap-3">
              {connectOptions.map((option) => (
                <motion.a
                  key={option.name}
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 py-2 px-4 rounded-lg border border-gray-700 bg-dark-300 text-gray-300 transition-colors ${option.color} hover-glow`}
                >
                  {option.icon}
                  {option.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Let's Work Together</h2>
            <p className="text-gray-400 mb-6">
              Have a project in mind? Let's collaborate to create something amazing. I'm currently available for freelance work and open to new opportunities.
            </p>
            <Button 
              className="bg-accent hover:bg-highlight-hover text-white hover-glow flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
