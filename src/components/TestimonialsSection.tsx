import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
    text: "We've partnered with GAJ for over a decade. Their consistency in quality and reliability is unmatched in the industry.",
    author: "Amit Patel",
    role: "VP Manufacturing, SteelWorks Inc",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isInView } = useScrollReveal();

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="section-container" ref={ref}>
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

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="card-industrial p-10 lg:p-14 text-center relative"
            >
              <Quote className="w-10 h-10 text-accent/20 mx-auto mb-6" />
              <p className="text-foreground text-lg lg:text-xl leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>
              <div>
                <p className="font-heading font-bold text-foreground">{testimonials[current].author}</p>
                <p className="text-muted-foreground text-sm mt-1">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-accent w-6" : "bg-border"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
