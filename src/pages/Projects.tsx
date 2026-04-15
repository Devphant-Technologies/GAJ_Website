import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import bgImg from "@/assets/bg.jpg";
import { ArrowRight } from "lucide-react";
import { facilities } from "@/data/facilities";

export default function Projects() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bgImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 section-container text-center py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold tracking-widest uppercase mb-6">
              Our Machineries
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-white">Built to Perform</span><br />
            <span className="text-white">Engineered to Last</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto">
            Precision process equipment and shop-floor machinery powering Chemical, Dyes, and Pharmaceutical industries.
          </motion.p>
        </div>
      </section>

      {/* Our Products (formerly Facilities) */}
      <section className="py-20 lg:py-28 blueprint-bg">
        <div className="section-container">
          <div className="mb-10">
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Shop Floor</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">Our Machineries</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl whitespace-nowrap overflow-hidden text-ellipsis">
              State-of-the-art equipment that powers our manufacturing capability. Click on any product to learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, i) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <Link
                  to={`/facility/${facility.id}`}
                  className="card-industrial group overflow-hidden flex flex-col h-full"
                >
                  <div className="relative overflow-hidden aspect-[4/3] bg-card">
                    <img
                      src={facility.src}
                      alt={facility.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="btn-primary text-xs pointer-events-none">View Details</span>
                    </div>
                  </div>
                  <div className="p-5 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-sm font-bold text-foreground">{facility.name}</h3>
                      <p className="text-muted-foreground text-xs mt-1">{facility.make}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
