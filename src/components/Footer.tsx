
import { motion } from "framer-motion";
import VisitorCounter from "./VisitorCounter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-dark-300 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Mujtaba Ahmad. All rights reserved.
          </p>
          <VisitorCounter />
          <p className="text-gray-500 mt-4 md:mt-0">
            DevOps Engineer | Lahore, Pakistan
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
