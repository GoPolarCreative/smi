import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
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
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <CheckCircle className="text-green-500" size={56} />
        <h3 className="text-xl font-semibold text-[#1B2A4A]">Enquiry Sent!</h3>
        <p className="text-gray-500 text-sm max-w-sm">
          Thanks for reaching out. Stephen will be in touch with you shortly to discuss your project.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="access_key" value="90bda7ee-49c7-43d3-beb1-cf28423ce2ea" />
      <input type="hidden" name="subject" value="New Enquiry – Specialised Mechanical Insulation" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1B2A4A] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="Your phone number"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1B2A4A] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1B2A4A] transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project — location, system type, scope, timeline..."
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1B2A4A] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 bg-[#1B2A4A] text-white font-semibold py-3.5 rounded-lg hover:bg-[#111c30] transition-colors duration-200 disabled:opacity-70 text-sm"
      >
        <Send size={16} />
        {loading ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  );
}
