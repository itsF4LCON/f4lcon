
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smartschool Dark",
      description: "A dark theme enhancement for Smartschool platform, improving the user experience with a sleek dark interface that's easier on the eyes.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      github: "https://github.com/itsF4LCON/Smartschool-dark",
      tech: ["CSS", "Dark Theme", "UI/UX"]
    },
    {
      title: "Cubicle Runner",
      description: "An engaging runner game where you navigate through cubicle environments. Fast-paced gameplay with smooth mechanics and challenging obstacles.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      github: "https://f4lcondev.itch.io/cubicle-runner",
      tech: ["Game Development", "GD Script", "Godot"]
    },
    {
      title: "Music Production",
      description: "Original music compositions and beats created using BandLab. Exploring different genres and experimenting with electronic sounds.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      github: "https://soundcloud.com/xiv-984646465",
      tech: ["Music Production", "BandLab", "Audio Engineering"]
    },
    {
      title: "More Projects",
      description: "Check out my GitHub profile for more projects and contributions. Always working on something new and exciting!",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      github: "https://github.com/itsF4LCON",
      tech: ["Various", "Open Source", "Development"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the cool things I've built. Each one taught me something new!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white/20 text-gray-300 text-sm rounded-full border border-white/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-300 font-semibold"
                >
                  <Github className="w-5 h-5 mr-2" />
                  {project.title === "Cubicle Runner" ? "Play on itch.io" : 
                   project.title === "Music Production" ? "Listen on SoundCloud" : 
                   project.title === "More Projects" ? "View GitHub Profile" : "View on GitHub"}
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
