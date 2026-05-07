import { MapPin, Award, Users, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: MapPin, label: 'Australia-wide', value: 'Nationwide' },
  { icon: Award, label: 'Industrial', value: 'Specialists' },
  { icon: Users, label: 'Direct Access', value: 'To Tradesperson' },
  { icon: ShieldCheck, label: 'Compliance', value: 'Ready' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#1B2A4A] font-semibold text-sm tracking-widest uppercase mb-3">Who We Are</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] mb-6">About SMI</h2>
            <div className="h-1 w-16 bg-[#1B2A4A] rounded mb-8" />

            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Specialised Mechanical Insulation is an Australian industrial insulation contractor providing thermal insulation services for factories and industrial facilities across the country.
              </p>
              <p>
                We specialise in insulating and cladding steam, chilled water, and hot water pipework and tanks — helping facilities maintain temperature efficiency, meet compliance requirements, and protect infrastructure long-term.
              </p>
              <p>
                We work directly with project managers, facility operators, and contractors who need the job done right, on time, and to spec.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0493498855"
                className="inline-flex items-center justify-center bg-[#1B2A4A] text-white font-semibold px-7 py-3 rounded hover:bg-[#111c30] transition-colors text-sm"
              >
                Call Stephen
              </a>
              <a
                href="mailto:stephen@smiinsulation.com.au"
                className="inline-flex items-center justify-center border border-[#1B2A4A] text-[#1B2A4A] font-medium px-7 py-3 rounded hover:bg-[#1B2A4A] hover:text-white transition-all text-sm"
              >
                Send an Email
              </a>
            </div>
          </div>

          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img
                src="/Hero.png"
                alt="SMI thermal insulation work"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">Industrial Thermal Insulation</p>
                <p className="text-white/70 text-sm">Delivering precision across Australia</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                    <Icon className="text-[#1B2A4A] mb-3" size={24} />
                    <p className="text-[#1B2A4A] font-bold text-lg leading-tight">{stat.value}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
