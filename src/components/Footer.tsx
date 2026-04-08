import logo from "@/assets/gaj-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="GAJ Manufacturing" className="h-10 mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Precision engineering and manufacturing solutions for modern industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {["Home", "Services", "About", "Products", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-muted-foreground text-sm hover:text-accent transition-colors duration-200"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Services</h4>
            <div className="flex flex-col gap-2.5">
              {["CNC Machining", "Fabrication", "Quality Assurance", "Rapid Prototyping"].map((s) => (
                <span key={s} className="text-muted-foreground text-sm">{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-2.5 text-muted-foreground text-sm">
              <span>+91 98765 43210</span>
              <span>info@gajmanufacturing.com</span>
              <span>Industrial Area, Phase II, Pune</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} GAJ Manufacturing Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
