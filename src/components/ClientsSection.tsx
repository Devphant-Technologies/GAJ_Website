import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

const clients = [
  "Tata Steel", "Reliance Industries", "BHEL", "Larsen & Toubro",
  "Siemens India", "Adani Group", "Thermax", "Godrej & Boyce",
  "Kirloskar", "Ashok Leyland", "Mahindra", "JSW Steel",
];

const ClientsSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-20 bg-light-grey overflow-hidden">
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
      </div>

      {/* Scrolling logos */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-light-grey to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-light-grey to-transparent z-10" />
        <div className="flex animate-scroll-logos">
          {[...clients, ...clients].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 px-8 py-4 rounded-xl bg-card border border-border/50 text-muted-foreground font-heading font-semibold text-sm hover:text-accent hover:border-accent/30 transition-all duration-300 cursor-default select-none"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
