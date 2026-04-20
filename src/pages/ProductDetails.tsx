import { useParams, Link } from "react-router-dom";
import { products, PHONE_NUMBER, WHATSAPP_LINK } from "@/data/products";
import { Phone, MessageCircle, ArrowLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display font-bold text-2xl text-foreground mb-4">Product not found</h2>
          <Link to="/" className="text-primary hover:underline font-semibold">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const whatsappOrderLink = `${WHATSAPP_LINK}?text=${encodeURIComponent(`Hi! I'm interested in ordering: ${product.name} (${product.price}). Please provide more details.`)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-32 pb-8 px-4">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/#products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>

          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-brand-green-light font-display font-semibold mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          {/* Product detail */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Info */}
            <div>
              <span className="inline-block bg-primary/10 text-primary font-display font-bold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
                {product.category === "mabati" ? "Roofing" : "Cement & Blocks"}
              </span>
              <h1 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4">
                {product.name}
              </h1>
              <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-xl px-6 py-4 mb-6">
                <span className="text-brand-gold font-display font-black text-3xl">{product.price}</span>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {product.description}
              </p>

              {product.colors && (
                <div className="mb-6">
                  <h3 className="font-display font-bold text-foreground mb-3">Available Colors</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <span key={color} className="bg-muted text-muted-foreground text-sm px-4 py-1.5 rounded-full font-medium border border-border">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.specs && (
                <div className="mb-8">
                  <h3 className="font-display font-bold text-foreground mb-3">Specifications</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="bg-muted rounded-lg p-4">
                        <div className="text-muted-foreground text-xs uppercase tracking-wider font-semibold mb-1">{key}</div>
                        <div className="text-foreground font-semibold">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappOrderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground font-display font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-[1.02] shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order via WhatsApp
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-primary hover:bg-brand-green-light text-primary-foreground font-display font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-5 h-5" />
                  Call {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="font-display font-black text-2xl md:text-3xl text-foreground mb-8">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetails;
