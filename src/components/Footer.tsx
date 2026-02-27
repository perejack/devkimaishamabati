import { PHONE_NUMBER, WHATSAPP_LINK } from "@/data/products";

const Footer = () => {
  return (
    <footer className="bg-brand-dark py-12 px-4">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-primary-foreground text-lg mb-3">DevKi Maisha Mabati</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Your trusted partner for premium building materials in Kenya. Authorized dealer of Maisha Mabati and Simba Cement.
            </p>
          </div>
          <div>
            <h3 className="font-display font-bold text-primary-foreground text-lg mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {["Home", "Products", "About", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-primary-foreground/60 hover:text-brand-gold text-sm transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display font-bold text-primary-foreground text-lg mb-3">Contact</h3>
            <p className="text-primary-foreground/60 text-sm mb-2">Phone: {PHONE_NUMBER}</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-gold text-sm hover:underline">
              Chat on WhatsApp →
            </a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} DevKi Maisha Mabati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
