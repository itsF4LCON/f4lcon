
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gray-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Avatar */}
        <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Avatar className="w-32 h-32 mx-auto border-2 border-white shadow-2xl shadow-white/25 hover:scale-110 transition-transform duration-300">
            <AvatarImage 
              src="https://github.com/itsF4LCON.png" 
              alt="F4LCON Profile Picture"
            />
            <AvatarFallback className="bg-gradient-to-r from-black to-gray-800 text-white text-4xl font-bold">
              F4
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Main heading */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">F4LCON</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            also known as <span className="text-gray-400 font-semibold">Ran Geerts</span>
          </p>
        </div>

        {/* Subtitle */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            A 16-year-old coder who loves creating cool, sometimes chaotic stuff with code. 
            Welcome to my digital playground! 🚀
          </p>
        </div>

        {/* CTA Button */}
        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button 
            onClick={scrollToProjects}
            className="group bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 border border-white text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-white/25 hover:shadow-white/40 transition-all duration-300 hover:scale-105"
          >
            Check out my work
            <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
