import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { ref, isInView } = useScrollReveal();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const inputClass = (field: string) =>
    `w-full bg-transparent border-b-2 px-0 py-3 text-foreground text-sm outline-none transition-all duration-300 ${
      focused === field ? "border-accent" : "border-border"
    }`;

  return (
    <section id="contact" className="py-24 lg:py-32 bg-light-grey">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">Get in Touch</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Contact Us
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Ready to discuss your manufacturing needs? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="card-industrial p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative">
                  <label className={`absolute left-0 transition-all duration-300 text-sm ${
                    focused === "name" || form.name ? "-top-5 text-accent text-xs" : "top-3 text-muted-foreground"
                  }`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("name")}
                  />
                </div>

                <div className="relative">
                  <label className={`absolute left-0 transition-all duration-300 text-sm ${
                    focused === "email" || form.email ? "-top-5 text-accent text-xs" : "top-3 text-muted-foreground"
                  }`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("email")}
                  />
                </div>

                <div className="relative">
                  <label className={`absolute left-0 transition-all duration-300 text-sm ${
                    focused === "phone" || form.phone ? "-top-5 text-accent text-xs" : "top-3 text-muted-foreground"
                  }`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("phone")}
                  />
                </div>

                <div className="relative">
                  <label className={`absolute left-0 transition-all duration-300 text-sm ${
                    focused === "message" || form.message ? "-top-5 text-accent text-xs" : "top-3 text-muted-foreground"
                  }`}>
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`${inputClass("message")} resize-none`}
                  />
                </div>

                <button type="submit" className="btn-primary w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>

              <div className="mt-10 grid gap-4">
                {[
                  { icon: Phone, text: "+91 98765 43210" },
                  { icon: Mail, text: "info@gajmanufacturing.com" },
                  { icon: MapPin, text: "Industrial Area, Phase II, Pune, Maharashtra 411026" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl overflow-hidden border border-border/50 h-[500px] lg:h-auto"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2550099!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 500 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GAJ Manufacturing Works Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
