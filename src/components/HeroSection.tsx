import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const heroBgs = ["/hero/hero-bg.jpg", "/hero/hero-bg2.jpg", "/hero/hero-bg3.jpg"];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroBgs.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Crossfade background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={heroBgs[current]}
            src={heroBgs[current]}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          <span className="text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            Engineering Precision.
          </span>
          <br />
          <span className="text-white/90 drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            Powering Industries.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.7 }}
          className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 drop-shadow-[0_10px_22px_rgba(0,0,0,0.35)]"
        >
          High-performance manufacturing solutions built with accuracy and reliability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#services" className="btn-primary">
            Explore Services
          </a>
          <a
            href="#contact"
            className="btn-outline border-white/60 text-white hover:border-white hover:text-white hover:bg-white/10"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;
