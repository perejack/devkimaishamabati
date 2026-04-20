import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_LINK } from "@/data/products";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand-gold font-display font-bold text-sm tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-foreground mt-2">
            Ready to Build?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Contact us today for the best prices on mabati and cement. We deliver across Kenya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="bg-card p-8 rounded-xl border border-border card-hover text-center group"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Phone className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">Call Us</h3>
            <p className="text-primary font-semibold">{PHONE_NUMBER}</p>
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-8 rounded-xl border border-border card-hover text-center group"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <MessageCircle className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">WhatsApp</h3>
            <p className="text-primary font-semibold">Chat with us</p>
          </a>

          <div className="bg-card p-8 rounded-xl border border-border card-hover text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">Nairobi, Kenya</p>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border card-hover text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">Hours</h3>
            <p className="text-muted-foreground text-sm">Mon-Sat: 7AM - 7PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
