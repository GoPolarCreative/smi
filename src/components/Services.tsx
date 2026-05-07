import { Flame, Snowflake, Droplets, Container, Wrench, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Flame,
    title: 'Steam Pipework Insulation',
    description: 'High-temperature insulation solutions for steam distribution systems that improve efficiency and ensure safety compliance.',
  },
  {
    icon: Snowflake,
    title: 'Chilled Water Pipework Insulation',
    description: 'Precision insulation for chilled water systems to prevent condensation, maintain temperatures, and reduce energy loss.',
  },
  {
    icon: Droplets,
    title: 'Hot Water Pipework Insulation',
    description: 'Durable thermal insulation for hot water pipework that maximises heat retention and protects your infrastructure.',
  },
  {
    icon: Container,
    title: 'Tank Insulation & Cladding',
    description: 'Complete tank insulation and professional cladding for industrial storage vessels of all sizes and configurations.',
  },
  {
    icon: Wrench,
    title: 'Industrial Thermal Solutions',
    description: "Comprehensive thermal management solutions tailored to your facility's specific industrial requirements and compliance needs.",
  },
  {
    icon: ShieldCheck,
    title: 'End-to-End Insulation Contracting',
    description: 'From scoping and supply through to installation and sign-off — SMI manages the full insulation scope for your project.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#1B2A4A] font-semibold text-sm tracking-widest uppercase mb-3">Our Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A]">What We Do</h2>
          <div className="mt-4 h-1 w-16 bg-[#1B2A4A] mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group bg-gray-50 border border-gray-100 rounded-xl p-8 hover:bg-[#1B2A4A] hover:border-[#1B2A4A] transition-all duration-300 cursor-default"
              >
                <div className="w-14 h-14 bg-[#1B2A4A]/10 group-hover:bg-white/10 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="text-[#1B2A4A] group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-[#1B2A4A] group-hover:text-white mb-3 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            );
          })}

          <div className="sm:col-span-2 lg:col-span-3 bg-[#1B2A4A] rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Ready to discuss your project?</h3>
              <p className="text-white/60 text-sm">Get a free quote from Australia's thermal insulation specialists.</p>
            </div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="flex-shrink-0 bg-white text-[#1B2A4A] font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors text-sm"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
