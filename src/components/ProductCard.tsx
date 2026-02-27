import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Eye, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-md card-hover border border-border">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-brand-gold text-brand-dark font-display font-bold text-sm px-3 py-1 rounded-full shadow">
            {product.price}
          </span>
        </div>
        <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <Link
            to={`/product/${product.id}`}
            className="bg-primary-foreground text-brand-dark p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <Link
            to={`/product/${product.id}`}
            className="bg-brand-gold text-brand-dark p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
          >
            <ShoppingCart className="w-5 h-5" />
          </Link>
        </div>
      </div>
        <div className="p-5">
        <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-[hsl(220,50%,25%)] transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {product.description}
        </p>
        {product.colors && (
          <div className="flex flex-wrap gap-1 mb-4">
            {product.colors.slice(0, 4).map((color) => (
              <span key={color} className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-medium">
                {color}
              </span>
            ))}
            {product.colors.length > 4 && (
              <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-medium">
                +{product.colors.length - 4} more
              </span>
            )}
          </div>
        )}
        <div className="flex gap-2">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[hsl(220,60%,45%)] text-white font-display font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-[hsl(220,60%,35%)] transition-colors"
          >
            View Details
          </Link>
          <Link
            to={`/product/${product.id}`}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[hsl(220,60%,45%)] text-white font-display font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-[hsl(220,60%,35%)] transition-colors"
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
