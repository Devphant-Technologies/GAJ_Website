import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const products = [
  { img: product1, title: "Precision Machined Parts", cat: "CNC Components" },
  { img: product2, title: "Pressure Vessels", cat: "Industrial Tanks" },
  { img: product3, title: "Pipe Fittings & Flanges", cat: "Pipeline Systems" },
  { img: product4, title: "Industrial Gearboxes", cat: "Power Transmission" },
  { img: product5, title: "Conveyor Systems", cat: "Automation" },
  { img: product6, title: "Heat Exchangers", cat: "Thermal Equipment" },
];

const ProductsSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="products" className="py-24 lg:py-32 blueprint-bg">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">Our Products</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Industrial Solutions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Engineered products built for performance, durability, and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-industrial group overflow-hidden"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="btn-primary text-xs">View Details</span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-accent text-xs font-medium">{p.cat}</span>
                <h3 className="font-heading text-base font-bold text-foreground mt-1">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
