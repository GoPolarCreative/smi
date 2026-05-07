import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function HeroForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
        <CheckCircle className="text-green-400" size={56} />
        <h3 className="text-xl font-semibold text-white">Enquiry Sent!</h3>
        <p className="text-white/70 text-sm max-w-xs">
          Thanks for reaching out. Stephen will be in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="access_key" value="c898e546-5c35-4a3e-ba3a-fd5e7cae5100" />
      <input type="hidden" name="subject" value="New Enquiry – Specialised Mechanical Insulation" />

      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your full name"
          className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/60 transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          required
          placeholder="Your phone number"
          className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/60 transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/60 transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">Project Details</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us about your project..."
          className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/60 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 bg-white text-[#1B2A4A] font-semibold py-3 rounded hover:bg-gray-100 transition-colors duration-200 disabled:opacity-70"
      >
        <Send size={16} />
        {loading ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  );
}
