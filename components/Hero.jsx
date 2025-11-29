export default function Hero() {
  return (
    <section className="relative flex items-center min-h-screen bg-gradient-to-b from-coffee-900 via-coffee-800 to-coffee-900 text-white overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4 md:px-8">
        
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Discover the <span className="text-amber-400">Rich Aroma</span><br className="hidden md:block" />
            of Araku Coffee
          </h1>

          <p className="mt-5 text-white/80 max-w-md mx-auto md:mx-0 text-lg leading-relaxed">
            Hand-picked from the serene hills of Araku Valley, each bean tells a story of 
            purity, passion, and perfection. Taste coffee the way nature intended.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-soft bg-amber-400 text-coffee-900 hover:bg-amber-300 transition"
            >
              Shop Now
            </a>
            <a
              href="#highlights"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border border-white/20 hover:bg-white/10 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right: Coffee Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] rounded-full overflow-hidden shadow-2xl ring-2 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=1200&auto=format&fit=crop"
              alt="Freshly brewed Araku Coffee"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-coffee-700/30 rounded-full blur-3xl translate-x-1/4 translate-y-1/3"></div>
    </section>
  );
}
