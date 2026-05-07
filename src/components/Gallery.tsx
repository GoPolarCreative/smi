import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/1.png', alt: 'Stainless steel pipe insulation cladding' },
  { src: '/2.png', alt: 'Chilled water pipework insulation' },
  { src: '/3.png', alt: 'Industrial pipe insulation with blue valves' },
  { src: '/4.png', alt: 'Horizontal tank insulation — greenhouse facility' },
  { src: '/5.png', alt: 'Large industrial silo insulation and cladding' },
  { src: '/Edited2.png', alt: 'Industrial pipe insulation and cladding' },
  { src: '/Edited5.png', alt: 'Industrial facility pipework insulation' },
  { src: '/Edited6.png', alt: 'Stainless steel process pipework' },
  { src: '/Edited7.png', alt: 'External pipework and tank cladding' },
  { src: '/Edited8.png', alt: 'Stainless steel insulation cladding fabrication' },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);

  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#1B2A4A] font-semibold text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A]">Our Work</h2>
          <div className="mt-4 h-1 w-16 bg-[#1B2A4A] mx-auto rounded" />
          <p className="mt-4 text-gray-500 text-sm">Click any image to view full size</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {images.map((image, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className="relative cursor-pointer rounded-lg overflow-hidden group bg-[#1B2A4A]"
              style={{ aspectRatio: '1 / 1' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1B2A4A]/0 group-hover:bg-[#1B2A4A]/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {lightboxIndex !== null && images[lightboxIndex].src && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={28} />
          </button>

          <div onClick={(e) => e.stopPropagation()} className="max-w-5xl max-h-[85vh] w-full">
            <img
              src={images[lightboxIndex].src!}
              alt={images[lightboxIndex].alt}
              className="w-full h-full object-contain rounded-lg"
              style={{ maxHeight: '85vh' }}
            />
            <p className="text-center text-white/60 text-sm mt-3">{images[lightboxIndex].alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
