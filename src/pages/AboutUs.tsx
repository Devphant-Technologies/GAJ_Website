import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ClientsSection from "@/components/ClientsSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import bgImg from "@/assets/bg.jpg";

const facilities = Array.from({ length: 9 }).map((_, idx) => {
  const n = String(idx + 1).padStart(2, "0");
  return {
    src: `/facilities/facility-${n}.png`,
    alt: `Facility ${idx + 1}`,
  };
});

function FacilitiesSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-20 lg:py-28 blueprint-bg">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">Facilities</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Our Shop-Floor Capability
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A snapshot of the equipment we use to craft precision components and heavy-duty builds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, i) => (
            <motion.div
              key={f.src}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="card-industrial overflow-hidden"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={f.src}
                  alt={f.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain bg-card"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutUs() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={bgImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 section-container text-center py-24">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold tracking-widest uppercase mb-6"
          >
            About GAJ
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5 text-white"
          >
            Engineering built on trust
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto drop-shadow-[0_10px_22px_rgba(0,0,0,0.35)]"
          >
            From services to shop-floor capability and client delivery, we manufacture with precision and consistency.
          </motion.p>
        </div>
      </section>

      <ServicesSection />
      <AboutSection />
      <FacilitiesSection />
      <ProductsSection />
      <ClientsSection />
      <Footer />
    </>
  );
}

