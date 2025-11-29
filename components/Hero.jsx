export default function Hero() {
  return (
    <section className="relative flex items-center min-h-screen bg-gradient-to-b from-coffee-900 via-coffee-800 to-coffee-900 text-white overflow-hidden">
      {/* Animated background coffee beans */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1920&auto=format&fit=crop"
          alt="Background of coffee beans"
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-110 animate-slow-pan"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-coffee-900/80 to-coffee-900/95"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4 md:px-8 relative z-10">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
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
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-soft bg-amber-400 text-coffee-900 hover:bg-amber-300 transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            >
              Shop Now
            </a>
            <a
              href="#highlights"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border border-white/20 hover:bg-white/10 transition-transform transform hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right: Coffee Beans Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] rounded-full overflow-hidden shadow-2xl ring-2 ring-white/10 group">
            <img
              src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1200&auto=format&fit=crop"
              alt="Premium roasted coffee beans close-up"
              className="w-full h-full object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
