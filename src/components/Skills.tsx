
import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "JavaScript", level: 35, color: "from-gray-500 to-white" },
    { name: "Python", level: 80, color: "from-black to-gray-600" },
    { name: "Lua", level: 85, color: "from-gray-700 to-gray-300" },
    { name: "HTML/CSS", level: 90, color: "from-white to-gray-400" },
    { name: "GD Script", level: 70, color: "from-gray-600 to-black" },
    { name: "Node.js", level: 25, color: "from-gray-400 to-white" },
    { name: "Git", level: 75, color: "from-black to-gray-500" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'm always learning and experimenting with new technologies. 
            Currently diving deeper into machine learning and advanced WebGL techniques!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
