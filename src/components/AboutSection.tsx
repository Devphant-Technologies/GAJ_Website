import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState, useRef } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import factoryImg from "@/assets/factory-about.jpg";

const stats = [
  { value: 40, suffix: "+", label: "Years of Experience" },
  { value: 1000, suffix: "+", label: "Projects Completed" },
  { value: 120, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "+", label: "Expert Engineers" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" aria-label="About GAJ Manufacturing Works" className="relative py-24 lg:py-32 overflow-hidden">
      <AnimatedBackground />
      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={factoryImg}
                alt="GAJ Manufacturing Works shop floor – Ankleshwar GIDC"
                loading="lazy"
                width={960}
                height={640}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-accent/10 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl border-2 border-accent/20 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">About Us</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              GAJ Manufacturing Works
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Since 1980, GAJ Manufacturing Works</strong> stands as a symbol of precision engineering and excellence in process equipment manufacturing for the chemical, dyes and pharmaceutical industries. With over four decades of expertise, we blend legacy craftsmanship with advanced engineering to deliver solutions that meet global standards.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our capabilities include the design, engineering, and fabrication of industrial equipment in compliance with ASME Section VIII Division 1. Our portfolio features reactor vessels, storage tanks, heat exchangers, filter presses, pressure vessels, blenders, and process columns — manufactured using high-grade stainless steel and mild steel to precise client specifications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Driven by a commitment to quality, GAJ Manufacturing Works is <strong className="text-foreground">ISO 9001:2015 certified</strong> and <strong className="text-foreground">MSME registered</strong>, focusing on innovation, reliability, and long-term client partnerships.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="font-heading text-3xl lg:text-4xl font-extrabold text-accent">
                    <Counter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
