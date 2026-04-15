import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { facilities } from "@/data/facilities";

export default function FacilityDetail() {
  const { id } = useParams<{ id: string }>();
  const facility = facilities.find((f) => f.id === id);

  if (!facility) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <p className="text-foreground text-lg">Facility not found.</p>
          <Link to="/projects" className="btn-primary">Back to Products</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 lg:pb-28">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden border border-border/50 bg-card"
                style={{ boxShadow: "var(--shadow-card)" }}>
                <img
                  src={facility.src}
                  alt={facility.name}
                  className="w-full h-auto object-contain max-h-[480px] p-6"
                />
              </div>

              {/* Content */}
              <div>
                <span className="text-accent text-xs font-semibold tracking-widest uppercase">Our Facilities</span>
                <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mt-3 mb-2">
                  {facility.name}
                </h1>
                <p className="text-accent text-sm font-medium mb-6">{facility.make}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">{facility.description}</p>

                <div className="space-y-3">
                  <h2 className="font-heading text-lg font-bold text-foreground">Key Details</h2>
                  {facility.details.map((d) => (
                    <div key={d} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground text-sm">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
