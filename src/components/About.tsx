

const About = () => {
  const facts = [
    "🚣 Row in my free time - there's something peaceful about being on the water",
    "🎵 Always listening to music, currently obsessed with 2Pac and Joey Bada$$",
    "💻 Started coding at 12 because I wanted to create something amazing",
    "🍕 Firmly believes pineapple does NOT belong on pizza (sorry, not sorry)",
    "🛠️ Dreams of making helpful and/or fun tools and games that people love",
    "🌆 Evening coder - my best work happens when the sun goes down"
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Beyond the code - the human behind the keyboard
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Fun Facts About Me</h3>
                <div className="space-y-4">
                  {facts.map((fact, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="w-2 h-2 bg-white rounded-full mt-3 group-hover:bg-gray-400 transition-colors duration-300"></div>
                      <p className="text-gray-300 leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="relative">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-white/20 to-gray-600/20 rounded-full flex items-center justify-center border-2 border-white/30 hover:border-gray-400/50 transition-colors duration-500">
                    <div className="text-6xl">🚀</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-400/10 rounded-full blur-xl"></div>
                </div>
                <p className="text-gray-400 mt-6 italic">
                  "Keep your head up"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

