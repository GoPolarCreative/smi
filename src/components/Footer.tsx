import { Phone, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#0f1a2e' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src="/Logo.png" alt="SMI Logo" className="h-14 w-auto mb-4" />
            <p className="text-white/50 text-sm leading-relaxed">
              Australia's thermal insulation specialists for industrial pipework and tanks.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="tel:0493498855" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors">
                <Phone size={15} />
                0493 498 855
              </a>
              <a href="mailto:stephen@smiinsulation.com.au" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors break-all">
                <Mail size={15} className="flex-shrink-0" />
                stephen@smiinsulation.com.au
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; 2025 Specialised Mechanical Insulation. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">Website by Go Polar Creative</p>
        </div>
      </div>
    </footer>
  );
}
