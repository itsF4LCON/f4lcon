
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import GuessTheNumber from "@/components/GuessTheNumber";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Hero />
      <Projects />
      <Skills />
      <About />
      
      {/* Fun Game Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Take a <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Break</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Sometimes coding needs a fun distraction! Try this little game I made.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <GuessTheNumber />
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Index;
