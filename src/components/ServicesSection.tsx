import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Wrench, Cog, Factory, Shield, Gauge, Zap } from "lucide-react";

const services = [
  { icon: Wrench, title: "CNC Machining", desc: "High-precision CNC turning, milling, and grinding for complex geometries." },
  { icon: Factory, title: "Fabrication", desc: "Custom metal fabrication with advanced welding and assembly capabilities." },
  { icon: Cog, title: "Industrial Equipment", desc: "Design and manufacture of heavy-duty industrial machinery and equipment." },
  { icon: Shield, title: "Quality Assurance", desc: "Rigorous inspection and testing to meet international quality standards." },
  { icon: Gauge, title: "Process Engineering", desc: "Optimized manufacturing processes for maximum efficiency and output." },
  { icon: Zap, title: "Rapid Prototyping", desc: "Fast turnaround prototyping to accelerate product development cycles." },
];

const ServicesSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="services" className="py-24 lg:py-32 bg-light-grey">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">What We Do</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Comprehensive manufacturing solutions tailored to your industrial needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-industrial p-8 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <s.icon className="w-6 h-6 text-accent transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
