import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  { img: "/projects/project-02.png", title: "Shell & Tube Assembly", cat: "Heat Exchanger" },
  { img: "/projects/project-01.png", title: "Twin Shaft Mixer", cat: "Material Handling" },
  { img: "/projects/project-03.png", title: "Large Storage Vessel", cat: "Process Equipment" },
  { img: "/projects/project-04.png", title: "Mixing vessel", cat: "Fabrication" },
  { img: "/projects/project-05.png", title: "Jacketed Reactor Vessel", cat: "Thermal Systems" },
  { img: "/projects/project-06.png", title: "Glass Accumulator", cat: "Solid-Liquid Separation" },
  { img: "/projects/Calendria Columi.jpeg", title: "Calendria Column", cat: "Process Equipment" },
  { img: "/projects/Conical Crystalliser.jpeg", title: "Conical Crystalliser", cat: "Crystallisation" },
  { img: "/projects/Filter Press.jpeg", title: "Filter Press", cat: "Solid-Liquid Separation" },
];

const ProductsSection = () => {
  const { ref, isInView } = useScrollReveal();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => (i !== null ? (i - 1 + projects.length) % projects.length : null)), []);
  const next = useCallback(() => setLightbox((i) => (i !== null ? (i + 1) % projects.length : null)), []);

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
    <section id="projects" className="py-24 lg:py-32 blueprint-bg">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">Our Projects</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Recent Builds
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Shop-floor deliveries and industrial builds engineered for performance, durability, and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-industrial group overflow-hidden cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <span className="text-accent text-xs font-medium">{p.cat}</span>
                <h3 className="font-heading text-base font-bold text-foreground mt-1">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
            <button onClick={close} aria-label="Close image"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image"
              className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <motion.img
              key={lightbox}
              src={projects[lightbox].img}
              alt={projects[lightbox].title}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image"
              className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightbox + 1} / {projects.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsSection;
