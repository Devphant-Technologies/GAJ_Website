import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import bgImg from "@/assets/bg.jpg";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const projectImages = Array.from({ length: 10 }).map((_, idx) => {
  const n = String(idx + 1).padStart(2, "0");
  return { src: `/projects/project-${n}.png`, alt: `GAJ Manufacturing Works – Project ${idx + 1}` };
});

export default function Projects() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => (i !== null ? (i - 1 + projectImages.length) % projectImages.length : null)), []);
  const next = useCallback(() => setLightbox((i) => (i !== null ? (i + 1) % projectImages.length : null)), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [lightbox, close, prev, next]);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bgImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 section-container text-center py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold tracking-widest uppercase mb-6">
              Our Projects
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-white">Built to Perform</span><br />
            <span className="text-white">Engineered to Last</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto">
            A curated showcase of fabrication, vessels, exchangers, structures, and industrial builds.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="btn-primary">Request a Quote</a>
            <a href="/#services" className="btn-outline text-white border-white hover:bg-white hover:text-black">Explore Services</a>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28 blueprint-bg">
        <div className="section-container">
          <div className="mb-10">
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Gallery</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">Project Highlights</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              Scroll through recent builds and shop-floor deliveries. Click any image to view in full size.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="card-industrial group overflow-hidden cursor-pointer"
                onClick={() => setLightbox(i)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={img.src} alt={img.alt} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="btn-primary text-xs pointer-events-none">Open</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={close}
              aria-label="Close image"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Image */}
            <motion.img
              key={lightbox}
              src={projectImages[lightbox].src}
              alt={projectImages[lightbox].alt}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Counter */}
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightbox + 1} / {projectImages.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
