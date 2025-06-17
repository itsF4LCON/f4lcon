
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CodeChaos Bot",
      description: "A Discord bot that brings order to chaos with fun commands and moderation features. Built with JavaScript and chaos theory.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      github: "https://github.com/f4lcon/codechaos-bot",
      tech: ["JavaScript", "Discord.js", "Node.js"]
    },
    {
      title: "WebGL Particle System",
      description: "An interactive particle system that responds to mouse movement. Because who doesn't love pretty dots flying around?",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      github: "https://github.com/f4lcon/webgl-particles",
      tech: ["WebGL", "JavaScript", "GLSL"]
    },
    {
      title: "Lua Game Engine",
      description: "A lightweight 2D game engine built from scratch in Lua. Perfect for rapid prototyping and learning game dev fundamentals.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      github: "https://github.com/f4lcon/lua-engine",
      tech: ["Lua", "LÖVE2D", "Game Dev"]
    },
    {
      title: "Python Web Scraper",
      description: "Automated data collection tool that gathers information from various sources. Data is power, and power is awesome.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      github: "https://github.com/f4lcon/web-scraper",
      tech: ["Python", "BeautifulSoup", "Selenium"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the cool things I've built. Each one taught me something new!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-white transition-colors duration-300 font-semibold"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
