import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import curvoraLogo from "@/assets/curvora-logo.png";

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-gradient-to-b from-background to-muted overflow-hidden">
      {/* Watercolor Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 h-24 -mt-24">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z"
            fill="url(#footer-gradient)"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(340, 82%, 52%)" />
              <stop offset="50%" stopColor="hsl(45, 64%, 53%)" />
              <stop offset="100%" stopColor="hsl(291, 64%, 42%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src={curvoraLogo}
                alt="Curvora Logo"
                className="h-20 w-20 object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(233,30,99,0.4)] group-hover:drop-shadow-[0_0_25px_rgba(233,30,99,0.6)]"
              />
              <div>
                <h3 className="text-xl font-bold gradient-text">Curvora</h3>
                <p className="text-xs text-muted-foreground font-['Dancing_Script']">
                  Radiate Your Curve
                </p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Custom-fit kurtis designed for YOUR unique curves. Every curve has its own aura.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Collection", path: "/collection" },
                { name: "Size Guide", path: "/size-measurement" },
                { name: "Style Quiz", path: "/style-quiz" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Customer Care</h4>
            <ul className="space-y-2">
              {[
                "How Y Size Works",
                "Shipping & Delivery",
                "Returns & Exchange",
                "Size Help",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Stay Connected</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Join the Curvora family - Get exclusive updates & offers
            </p>
            <div className="flex space-x-2 mb-6">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1"
              />
              <Button className="bg-gradient-to-r from-primary to-secondary text-white">
                Join
              </Button>
            </div>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto:curvora7@gmail.com"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 Curvora. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Refund Policy
            </a>
          </div>
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-primary fill-primary" /> for every curve
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
