import { Shield, Truck, Award, Clock } from "lucide-react";

const features = [
  { icon: Shield, title: "Quality Guaranteed", desc: "Only genuine, factory-direct products from trusted manufacturers." },
  { icon: Truck, title: "Fast Delivery", desc: "Same-day delivery within Nairobi and next-day to surrounding counties." },
  { icon: Award, title: "Best Prices", desc: "Competitive wholesale and retail prices on all building materials." },
  { icon: Clock, title: "24/7 Support", desc: "Order via WhatsApp or call us anytime — we're always ready to help." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-gold font-display font-bold text-sm tracking-[0.2em] uppercase">
              About Us
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-foreground mt-2 mb-6">
              Your Trusted Building
              <br />
              <span className="text-primary">Materials Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              DevKi Maisha Mabati is a leading supplier of premium roofing sheets and construction materials in Kenya. 
              We are an authorized dealer of <strong className="text-foreground">Maisha Mabati Mills</strong> and{" "}
              <strong className="text-foreground">Simba Cement</strong>, bringing you factory-direct quality at unbeatable prices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're building a dream home, a commercial property, or an industrial facility, 
              we have the right materials to bring your vision to life. Our experienced team is here to 
              guide you in choosing the perfect products for your project.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card p-6 rounded-xl shadow-sm border border-border card-hover text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
