import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "5,000+", label: "Happy Customers" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Product Varieties" },
  { value: "24/7", label: "Customer Support" },
];

const reasons = [
  "Authorized dealer of Maisha Mabati & Simba Cement",
  "Factory-direct pricing with no middlemen",
  "Professional roofing advice and measurement",
  "Free delivery within Nairobi for bulk orders",
  "All products come with manufacturer warranty",
  "Flexible payment options available",
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-[hsl(220,50%,25%)]">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand-gold font-display font-bold text-sm tracking-[0.2em] uppercase">
            Why Choose Us
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mt-2">
            Building Trust, One Roof at a Time
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-white/10 backdrop-blur rounded-xl p-8 border border-white/10">
              <div className="font-display font-black text-4xl text-brand-gold mb-2">{stat.value}</div>
              <div className="text-white/80 font-display font-semibold text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
              <span className="text-white/90 font-medium">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
