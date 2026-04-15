import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const testimonials = [
  {
    text: "GAJ Manufacturing Works delivered exceptional quality components on time. Their precision machining capabilities are world-class.",
    author: "Rajesh Kumar",
    role: "Chief Engineer, Industrial Corp",
  },
  {
    text: "Outstanding fabrication work. The team's attention to detail and commitment to quality exceeded our expectations.",
    author: "Priya Sharma",
    role: "Operations Director, TechFab Ltd",
  },
  {
    text: "Exceptional engineering and flawless execution. Their precision and dedication to delivering high-quality results truly set them apart.",
    author: "Amit Patel",
    role: "VP Manufacturing, SteelWorks Inc",
  },
];

const TestimonialsSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      <AnimatedBackground />
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 22 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card-industrial p-8 lg:p-9 relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-accent/10 blur-2xl" />

              <Quote className="w-10 h-10 text-accent/25 mb-6" />

              <p className="text-foreground text-base leading-relaxed mb-8">
                <span className="text-foreground/90">“</span>
                {t.text}
                <span className="text-foreground/90">”</span>
              </p>

              <div className="pt-6 border-t border-border/60 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-heading font-bold text-accent">
                  {t.author
                    .split(" ")
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")
                    .toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="font-heading font-bold text-foreground leading-none truncate">{t.author}</p>
                  <p className="text-muted-foreground text-sm mt-1 truncate">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
