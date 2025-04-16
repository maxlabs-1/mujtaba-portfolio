
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <Separator className="flex-grow bg-gray-800" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative w-56 h-56 md:w-64 md:h-64 rounded-xl overflow-hidden hover-glow border border-accent/30"
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-accent/20 to-transparent"></div>
                <div className="w-full h-full bg-dark-300 flex items-center justify-center text-white text-4xl font-bold">
                  MA
                </div>
              </motion.div>
            </div>
            
            <div className="md:col-span-3">
              <p className="text-gray-300 mb-4">
                I'm a passionate DevOps Engineer based in Lahore with expertise in automating and optimizing critical deployments in cloud environments. I specialize in streamlining development processes and implementing robust CI/CD pipelines.
              </p>
              <p className="text-gray-300 mb-4">
                My focus is on implementing infrastructure as code, container orchestration, and automated deployment strategies that enhance development workflows and operational efficiency.
              </p>
              <p className="text-gray-300 mb-4">
                I believe in creating maintainable, scalable infrastructure that allows development teams to focus on building features rather than managing deployment complexities.
              </p>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="glass-card p-4 rounded-lg">
                  <h3 className="text-accent font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">Lahore, Pakistan</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <h3 className="text-accent font-semibold mb-1">Email</h3>
                  <a href="mailto:abcd@hotmail.com" className="text-gray-300 hover:text-accent">abcd@hotmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
