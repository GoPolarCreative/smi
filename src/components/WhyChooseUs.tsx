import { Globe, Target, MessageSquare, CheckSquare } from 'lucide-react';

const reasons = [
  {
    icon: Globe,
    title: 'Australia-wide Service',
    description: 'We operate across the entire country, taking on projects from major cities to regional industrial facilities — wherever the work is, we go.',
  },
  {
    icon: Target,
    title: 'Industrial Specialists — Not Generalists',
    description: 'Thermal insulation is all we do. That focus means deeper knowledge, better outcomes, and results that meet strict industrial standards.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Communication With the Tradesperson',
    description: 'When you contact SMI, you deal directly with Stephen — no call centres, no middlemen. Clear, professional communication from quote to completion.',
  },
  {
    icon: CheckSquare,
    title: 'Thermal Insulation Done Right, On Spec',
    description: 'We deliver insulation work that meets compliance requirements and performance expectations. Every job is completed with precision and care.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #1B2A4A 0%, #0f1a2e 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-white/50 font-semibold text-sm tracking-widest uppercase mb-3">Our Advantage</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Choose SMI</h2>
          <div className="mt-4 h-1 w-16 bg-white/30 mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center justify-center bg-white text-[#1B2A4A] font-semibold px-10 py-3.5 rounded hover:bg-gray-100 transition-colors text-sm"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
