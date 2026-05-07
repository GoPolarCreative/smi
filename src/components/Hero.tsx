import HeroForm from './HeroForm';

export default function Hero() {
  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
      style={{ background: 'linear-gradient(135deg, #1B2A4A 0%, #0f1a2e 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/Hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-[#1B2A4A]/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/80 text-xs font-medium tracking-wider uppercase">Australia-wide Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Australia's Thermal Insulation{' '}
              <span className="text-gray-300">Specialists</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-xl">
              Expert insulation for industrial pipework and tanks — nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center bg-white text-[#1B2A4A] font-semibold px-8 py-3.5 rounded hover:bg-gray-100 transition-colors duration-200 text-sm"
              >
                Get a Free Quote
              </button>
              <a
                href="tel:0493498855"
                className="inline-flex items-center justify-center border border-white/30 text-white font-medium px-8 py-3.5 rounded hover:border-white/60 hover:bg-white/5 transition-all duration-200 text-sm"
              >
                Call 0493 498 855
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-xl font-semibold text-white mb-2">Request a Free Quote</h2>
            <p className="text-white/60 text-sm mb-6">Fill in your details and we'll get back to you promptly.</p>
            <HeroForm />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
