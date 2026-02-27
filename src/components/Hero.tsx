import heroImage from "@/assets/hero-house.jpg";
import { WHATSAPP_LINK, PHONE_NUMBER } from "@/data/products";
import { Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Beautiful house with mabati roofing"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-gold font-display font-bold text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
            Premium Building Materials
          </p>
          <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Build Your Dream
            <br />
            <span className="text-brand-gold">With Quality</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Kenya's trusted supplier of Maisha Mabati roofing sheets and Simba Cement. Best prices, fast delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-brand-dark font-display font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              View Products
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 font-display font-bold px-8 py-4 rounded-lg text-lg transition-all backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 mt-6 text-primary-foreground/70 hover:text-brand-gold transition-colors font-display font-semibold animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Phone className="w-4 h-4" />
            Call: {PHONE_NUMBER}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
