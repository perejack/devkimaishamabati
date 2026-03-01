import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const mabatiProducts = products.filter((p) => p.category === "mabati");
  const cementProducts = products.filter((p) => p.category === "cement");
  const steelProducts = products.filter((p) => p.category === "steel");

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Mabati */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-brand-gold font-display font-bold text-sm tracking-[0.2em] uppercase">
              Roofing Solutions
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-foreground mt-2">
              Maisha Mabati Products
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Premium roofing sheets from Maisha Mabati Mills — durable, stylish, and built for Kenyan weather.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mabatiProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Cement */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-brand-gold font-display font-bold text-sm tracking-[0.2em] uppercase">
              Foundation Strength
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-foreground mt-2">
              Cement & Blocks
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Simba Cement and paving blocks — engineered for strength and reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cementProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Steel */}
        <div>
          <div className="text-center mb-12">
            <span className="text-brand-gold font-display font-bold text-sm tracking-[0.2em] uppercase">
              Structural Steel
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-foreground mt-2">
              Steel Products
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              High-quality steel reinforcement, pipes, angles, and structural sections for all construction needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steelProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
