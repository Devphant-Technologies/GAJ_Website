import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Factory, Wrench, CheckCircle2 } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const serviceGroups = [
  {
    icon: Factory,
    title: "Process Equipment Manufacturing",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    accent: "border-blue-200",
    items: [
      "Reactor Vessel",
      "Storage Tank",
      "Heat Exchanger",
      "Blender",
      "Filter Dryer",
      "Filter Press",
      "Pressure Vessel",
    ],
  },
  {
    icon: Wrench,
    title: "Equipment Maintenance",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
    accent: "border-teal-200",
    items: [
      "Reactor / Vessel Jacket Replacement",
      "Lantern Assembly Replacement",
      "Heat Exchanger Retubing",
      "Gearbox Reconditioning",
    ],
  },
];

const ServicesSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="services" aria-label="GAJ Manufacturing Works Services" className="relative py-24 lg:py-32 bg-light-grey overflow-hidden">
      <AnimatedBackground />
      <div className="section-container relative z-10" ref={ref}>
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
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Industrial manufacturing and maintenance services for Chemical, Dyes, and Pharmaceutical process plants ensuring safe, reliable, and efficient operation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`card-industrial p-8 lg:p-10 border-t-4 ${group.accent}`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl ${group.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <group.icon className={`w-6 h-6 ${group.iconColor}`} aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{group.title}</h3>
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${group.iconColor}`} aria-hidden="true" />
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
