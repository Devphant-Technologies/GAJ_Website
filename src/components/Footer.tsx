import logo from "@/assets/GAJ LOGO-full.png";
import {Phone, Mail, MapPin} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-secondary py-14 shadow-[0_-8px_24px_rgba(0,0,0,0.08)]" aria-label="Site footer">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

                    {/* Brand */}
                    <div className="flex flex-col justify-start gap-4">
                        <img
                            src={logo}
                            alt="GAJ Manufacturing Works – Process. Power. Precision."
                            className="h-16 w-auto object-contain object-left"
                        />
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            ISO 9001:2015 Certified · MSME Registered<br/>
                            Ankleshwar, Gujarat, India
                        </p>
                    </div>

                    {/* Quick Links */}
                    <nav aria-label="Footer navigation" className="flex flex-col gap-2.5">
                        <h4 className="font-heading font-bold text-foreground mb-1">Quick Links</h4>
                        {[
                            {label: "Home", href: "/"},
                            {label: "Services", href: "/#services"},
                            {label: "About Us", href: "/about"},
                            {label: "Our Machineries", href: "/projects"},
                            {label: "Contact", href: "/contact"},
                        ].map(({label, href}) => (
                            <a key={label} href={href}
                               className="text-muted-foreground text-sm hover:text-accent transition-colors duration-200 w-fit">
                                {label}
                            </a>
                        ))}
                    </nav>

                    {/* Contact */}
                    <address className="not-italic flex flex-col gap-3">
                        <h4 className="font-heading font-bold text-foreground mb-1">Contact</h4>

                        {/* Director */}
                        <div className="flex flex-col gap-1 pb-3 border-b border-border/40">
                            <p className="text-xs font-semibold text-accent tracking-wide">Mr. Suresh Lad — Director</p>
                            <a href="tel:+919429555097"
                               className="flex items-center gap-2 text-muted-foreground text-sm hover:text-accent transition-colors">
                                <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" aria-hidden="true"/>
                                +91 94295 55097
                            </a>
                            <a href="tel:+918487067937"
                               className="flex items-center gap-2 text-muted-foreground text-sm hover:text-accent transition-colors">
                                <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" aria-hidden="true"/>
                                +91 84870 67937
                            </a>
                        </div>
                        {/* Director */}
                        <div className="flex flex-col gap-1 pb-3 border-b border-border/40">
                            <p className="text-xs font-semibold text-accent tracking-wide">Mr. Ankit Lad — Director</p>
                            <a href="tel:+918469474903"
                               className="flex items-center gap-2 text-muted-foreground text-sm hover:text-accent transition-colors">
                                <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" aria-hidden="true"/>
                                +91 84694 74903
                            </a>
                        </div>

                        {/* General */}
                        <a href="mailto:gajworks@gmail.com"
                           className="flex items-center gap-2 text-muted-foreground text-sm hover:text-accent transition-colors">
                            <Mail className="w-3.5 h-3.5 text-accent flex-shrink-0" aria-hidden="true"/>
                            gajworks@gmail.com
                        </a>
                        <span className="flex items-start gap-2 text-muted-foreground text-sm">
              <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true"/>
              GIDC, Ankleshwar – 393002, Gujarat
            </span>
                    </address>

                </div>

                <div className="border-t border-border mt-10 pt-6 text-center">
                    <p className="text-muted-foreground text-xs">
                        © {new Date().getFullYear()} GAJ Manufacturing Works. All rights reserved. | Developed and
                        designed by{" "}
                        <a href="https://devphant.com" target="_blank" rel="noreferrer"
                           className="font-semibold text-accent hover:underline">
                            Devphant
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
