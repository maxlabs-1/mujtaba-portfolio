
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  bgImage: string;
  links: {
    github?: string;
    live?: string;
  };
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Microservices Deployment Framework",
    description: "Designed and implemented a containerized microservices architecture using Kubernetes, Docker, and Helm charts with automated CI/CD pipelines.",
    tags: ["Kubernetes", "Docker", "CI/CD", "Helm", "Terraform"],
    image: "bg-gradient-to-br from-blue-900/40 to-blue-600/20",
    bgImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    links: {
      github: "https://github.com",
      live: "https://example.com"
    }
  },
  {
    id: 2,
    title: "Auto-scaling Infrastructure",
    description: "Developed cloud-native infrastructure with auto-scaling capabilities using AWS services, Infrastructure as Code, and monitoring solutions.",
    tags: ["AWS", "Terraform", "CloudWatch", "Auto-scaling", "IaC"],
    image: "bg-gradient-to-br from-green-900/40 to-teal-600/20",
    bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    links: {
      github: "https://github.com"
    }
  },
  {
    id: 3,
    title: "CI/CD Pipeline Automation",
    description: "Created comprehensive CI/CD pipelines with automated testing, security scanning, and deployment strategies for critical applications.",
    tags: ["Jenkins", "GitHub Actions", "Docker", "Testing", "GitOps"],
    image: "bg-gradient-to-br from-purple-900/40 to-indigo-600/20",
    bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    links: {
      github: "https://github.com",
      live: "https://example.com"
    }
  },
  {
    id: 4,
    title: "Infrastructure Monitoring Solution",
    description: "Implemented a complete monitoring and alerting system using Prometheus, Grafana, and ELK stack for infrastructure and application metrics.",
    tags: ["Prometheus", "Grafana", "ELK", "Alerting", "Monitoring"],
    image: "bg-gradient-to-br from-red-900/40 to-orange-600/20",
    bgImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    links: {
      github: "https://github.com"
    }
  },
  {
    id: 5,
    title: "Multi-Cloud Resource Management",
    description: "Built a centralized platform for managing resources across multiple cloud providers with automated provisioning and cost optimization.",
    tags: ["Multi-Cloud", "AWS", "Azure", "GCP", "Terraform"],
    image: "bg-gradient-to-br from-pink-900/40 to-rose-600/20",
    bgImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    links: {
      github: "https://github.com",
      live: "https://example.com"
    }
  },
  {
    id: 6,
    title: "Security Compliance Automation",
    description: "Developed automated security compliance checks and remediation workflows for cloud infrastructure using policy as code.",
    tags: ["Security", "Compliance", "AWS", "Policy-as-Code", "Automation"],
    image: "bg-gradient-to-br from-violet-900/40 to-purple-600/20",
    bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    links: {
      github: "https://github.com"
    }
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
            <Separator className="flex-grow bg-gray-800" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl overflow-hidden hover-glow"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div 
                  className="h-48 w-full relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${project.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className={`absolute inset-0 ${project.image} flex items-center justify-center`}>
                    <h3 className="text-xl font-bold text-white text-center px-4 z-10">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-end gap-3">
                    {project.links.github && (
                      <Button 
                        variant="outline"
                        size="sm"
                        className="bg-dark-400 border-gray-700 text-gray-300 hover:bg-dark-300 hover:text-white"
                        onClick={() => window.open(project.links.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.links.live && (
                      <Button 
                        size="sm"
                        className="bg-accent hover:bg-highlight-hover text-white"
                        onClick={() => window.open(project.links.live, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
