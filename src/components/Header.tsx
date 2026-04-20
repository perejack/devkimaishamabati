import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { PHONE_NUMBER } from "@/data/products";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(220,50%,25%)]/95 backdrop-blur-md shadow-lg">
      {/* Top bar with phone */}
      <div className="bg-brand-dark/90 py-1.5 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 text-white font-display text-sm font-semibold tracking-wide hover:text-brand-gold transition-colors"
          >
            <Phone className="w-4 h-4 animate-pulse-gentle" />
            {PHONE_NUMBER}
          </a>
          <span className="text-white/70 text-xs hidden sm:block">
            Quality Mabati & Cement | Free Delivery in Nairobi
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-brand-gold flex items-center justify-center">
            <span className="font-display font-black text-primary text-lg">DK</span>
          </div>
          <div>
            <h1 className="font-display font-extrabold text-white text-lg leading-tight">
              DevKi Maisha
            </h1>
            <p className="text-white/70 text-[10px] font-semibold tracking-widest uppercase">
              Mabati & Cement
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/90 hover:text-brand-gold font-display font-semibold text-sm tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-[hsl(220,50%,25%)] border-t border-white/10 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/90 hover:text-brand-gold font-display font-semibold text-base transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
