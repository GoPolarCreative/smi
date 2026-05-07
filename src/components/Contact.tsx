import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#1B2A4A] font-semibold text-sm tracking-widest uppercase mb-3">Reach Out</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A]">Get in Touch</h2>
          <div className="mt-4 h-1 w-16 bg-[#1B2A4A] mx-auto rounded" />
          <p className="mt-5 text-gray-500 max-w-lg mx-auto">
            Ready to discuss your project? Reach out for a free quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-[#1B2A4A] mb-5">Contact Details</h3>

              <div className="space-y-5">
                <a
                  href="tel:0493498855"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#1B2A4A]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1B2A4A] transition-colors">
                    <Phone className="text-[#1B2A4A] group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Phone</p>
                    <p className="text-[#1B2A4A] font-semibold hover:underline">0493 498 855</p>
                  </div>
                </a>

                <a
                  href="mailto:stephen@smiinsulation.com.au"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#1B2A4A]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1B2A4A] transition-colors">
                    <Mail className="text-[#1B2A4A] group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Email</p>
                    <p className="text-[#1B2A4A] font-semibold hover:underline break-all text-sm">stephen@smiinsulation.com.au</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1B2A4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#1B2A4A]" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Service Area</p>
                    <p className="text-[#1B2A4A] font-semibold">Australia-wide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1B2A4A] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">Free Quotes Available</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Contact us today and Stephen will personally assess your project and provide an obligation-free quote.
              </p>
              <div className="mt-5 pt-5 border-t border-white/10">
                <p className="text-white/40 text-xs">Preferred contact methods:</p>
                <p className="text-white/70 text-sm mt-1">Phone call or email</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h3 className="text-lg font-semibold text-[#1B2A4A] mb-6">Send an Enquiry</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
