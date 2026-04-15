import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

// client-17 removed (duplicate Pragati Glass) — 17 logos total using client-01 to client-18 skipping client-17
const clientLogos = [
  ...Array.from({ length: 16 }, (_, i) => i + 1).filter(n => n !== 17),
  18,
].map((n) => ({
  src: `/clients/client-${String(n).padStart(2, "0")}.png`,
  alt: `Client logo ${n}`,
}));

// Split into rows: 6, 6, 5
const row1 = clientLogos.slice(0, 6);
const row2 = clientLogos.slice(6, 12);
const row3 = clientLogos.slice(12, 17);

const LogoCard = ({ logo }: { logo: { src: string; alt: string } }) => (
  <div
    className="h-20 sm:h-24 rounded-xl bg-card border border-border/50 flex items-center justify-center px-4 overflow-hidden"
    style={{ boxShadow: "var(--shadow-soft)" }}
  >
    <img
      src={logo.src}
      alt={logo.alt}
      loading="lazy"
      className="max-h-14 sm:max-h-16 w-auto object-contain transition-transform duration-300 ease-out hover:scale-110"
    />
  </div>
);

const ClientsSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-20 bg-white overflow-hidden blueprint-bg">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">Trusted By</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-3">Our Clients</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4 sm:gap-6"
        >
          {/* Row 1 — 6 logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {row1.map((logo) => <LogoCard key={logo.src} logo={logo} />)}
          </div>

          {/* Row 2 — 6 logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {row2.map((logo) => <LogoCard key={logo.src} logo={logo} />)}
          </div>

          {/* Row 3 — 5 logos, centered */}
          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
            {row3.map((logo) => (
              <div key={logo.src} className="w-[calc(50%-8px)] sm:w-[calc(33.333%-12px)] lg:w-[calc(16.666%-20px)]">
                <LogoCard logo={logo} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
