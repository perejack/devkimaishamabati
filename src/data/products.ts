import maishaColourBox from "@/assets/products/maisha-colour-box-profile.jpg";
import maishaPremiumTile from "@/assets/products/maisha-premium-tile.jpg";
import maishaRomanTile from "@/assets/products/maisha-roman-tile.jpg";
import maishaColour113 from "@/assets/products/maisha-colour-11-3-profile.jpg";
import maishaAluZinc from "@/assets/products/maisha-alu-zinc-11-3.jpg";
import maishaTile from "@/assets/products/maisha-tile.jpg";
import simbaCement32 from "@/assets/products/simba-cement-32.jpg";
import simbaCement42 from "@/assets/products/simba-cement-42.jpg";
import pavingBlocks from "@/assets/products/paving-blocks.jpg";
import d8Bar from "@/assets/products/d8-bar.jpg";
import d10Bar from "@/assets/products/d10-bar.jpg";
import d12Bar from "@/assets/products/d12-bar.jpg";
import d16Bar from "@/assets/products/d16-bar.jpg";
import d25Bar from "@/assets/products/d25-bar.jpg";
import r6Bar from "@/assets/products/r6-bar.jpg";
import r8Bar from "@/assets/products/r8-bar.jpg";
import r10Bar from "@/assets/products/r10-bar.jpg";

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  category: "mabati" | "cement" | "steel";
  colors?: string[];
  specs?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "maisha-colour-box-profile",
    name: "Maisha Colour Box Profile",
    image: maishaColourBox,
    description: "This wide span profile is for roofing and cladding. It is designed to provide the building and construction industry with an economical alternative to Invented Box Rib profiles. It is widely used for domestic roofing, industrial roofing, farmhouses, airport hangars and factory sheds.",
    price: "KSh 470/meter",
    category: "mabati",
    colors: ["Green", "Tile Red", "Sky Blue", "Graphite", "Bright Red", "Brick Red", "Maroon", "Safaricom Green", "Regal Red"],
  },
  {
    id: "maisha-premium-tile",
    name: "Maisha Premium Tile",
    image: maishaPremiumTile,
    description: "With a great aesthetic value, it is currently one of the most popular and affordable ranges of Maisha. It is manufactured with high standard Mild Steel and Coated with UV Resistant paint. It is available in standard corrugation and is suitable for versatile applications.",
    price: "KSh 550/meter",
    category: "mabati",
    colors: ["Green", "Tile Red", "Graphite", "Bright Red", "Brick Red"],
  },
  {
    id: "maisha-roman-tile",
    name: "Maisha Roman Tile",
    image: maishaRomanTile,
    description: "Maisha Roman Tile is a prestigious and premium roofing profile. It gives the roof a look resembling 'Roman Clay Tiles.' This is for those who want the beauty of roof tiles without the leaks, maintenance and the added cost of the structure to hold the weight. Due to construction, Maisha Roman Tile is the most rigid of profiles.",
    price: "KSh 550/meter",
    category: "mabati",
    colors: ["Green", "Tile Red", "Graphite", "Bright Red", "Brick Red"],
  },
  {
    id: "maisha-colour-11-3",
    name: "Maisha Colour 11/3 Profile",
    image: maishaColour113,
    description: "It is a widely used profile for roofing and cladding applications. This is due to its ease of handling and fixing, relative strength, cost effectiveness and use in common design. Available in a diverse range of attractive colours with 11/3 corrugation style.",
    price: "KSh 520/meter",
    category: "mabati",
    colors: ["Green", "Tile Red", "Graphite", "Bright Red", "Brick Red", "Sky Blue", "Maroon", "Safaricom Green", "Regal Red"],
  },
  {
    id: "maisha-alu-zinc-11-3",
    name: "Maisha Alu-Zinc Mabati 11/3",
    image: maishaAluZinc,
    description: "Maisha Alu-zinc is a flat carbon steel sheet from Maisha Mabati Mills Ltd, setting the standard for dry and protected roofing. This product combines attractive aesthetics with proven resilience.",
    price: "KSh 390/meter",
    category: "mabati",
  },
  {
    id: "maisha-tile",
    name: "Maisha Tile",
    image: maishaTile,
    description: "Maisha Tile is a popular alternative to conventional roofing tiles. Its appearance and light-weight make it suitable for any architectural concept. Maisha also has a vast range of applications.",
    price: "KSh 390/meter",
    category: "mabati",
    colors: ["Green", "Tile Red", "Graphite", "Bright Red", "Brick Red"],
  },
  {
    id: "simba-cement-32",
    name: "Simba Cement 32.5 R",
    image: simbaCement32,
    description: "General purpose cement with faster drying and settling time. Perfect for standard construction projects.",
    price: "KSh 550",
    category: "cement",
    specs: { Strength: "32.5 MPa", Weight: "50 Kg", Standard: "KS EAS 18-1:2001", Uses: "General purpose applications" },
  },
  {
    id: "simba-power-42",
    name: "Simba Power 42.5N",
    image: simbaCement42,
    description: "Specialized cement for heavy-duty construction projects including bridges, towers, and highways.",
    price: "KSh 680",
    category: "cement",
    specs: { Strength: "42.5 MPa", Weight: "50 Kg", Standard: "KS EAS 18-1:2001", Uses: "Bridges, towers, highways" },
  },
  {
    id: "paving-blocks",
    name: "Paving Blocks (60mm)",
    image: pavingBlocks,
    description: "High compression paving blocks suitable for parking areas, pathways, commercial and domestic roads.",
    price: "KSh 640/sqm",
    category: "cement",
    specs: { Strength: "High Compression", Weight: "Per Square Meter", Standard: "60mm Thickness", Uses: "Parking areas, pathways, roads" },
  },
  {
    id: "d8-steel-bar",
    name: "D8 Steel Bar",
    image: d8Bar,
    description: "High-quality 8mm deformed steel bar for construction and reinforcement applications.",
    price: "KSh 450 per bar",
    category: "steel",
    specs: { Diameter: "8mm", Type: "Deformed", Grade: "FE500", Uses: "Light construction and reinforcement" },
  },
  {
    id: "d10-steel-bar",
    name: "D10 Steel Bar",
    image: d10Bar,
    description: "10mm deformed steel bar for construction and reinforcement applications.",
    price: "KSh 750 per bar",
    category: "steel",
    specs: { Diameter: "10mm", Type: "Deformed", Grade: "FE500", Uses: "Construction and reinforcement" },
  },
  {
    id: "d12-steel-bar",
    name: "D12 Steel Bar",
    image: d12Bar,
    description: "12mm deformed steel bar for construction and reinforcement applications.",
    price: "KSh 1,020 per bar",
    category: "steel",
    specs: { Diameter: "12mm", Type: "Deformed", Grade: "FE500", Uses: "Construction and reinforcement" },
  },
  {
    id: "d16-steel-bar",
    name: "D16 Steel Bar",
    image: d16Bar,
    description: "16mm deformed steel bar for construction and reinforcement applications.",
    price: "KSh 2,050 per bar",
    category: "steel",
    specs: { Diameter: "16mm", Type: "Deformed", Grade: "FE500", Uses: "Construction and reinforcement" },
  },
  {
    id: "d25-steel-bar",
    name: "D25 Steel Bar",
    image: d25Bar,
    description: "25mm deformed steel bar for heavy construction and reinforcement applications.",
    price: "KSh 5,750 per bar",
    category: "steel",
    specs: { Diameter: "25mm", Type: "Deformed", Grade: "FE500", Uses: "Heavy construction and reinforcement" },
  },
  {
    id: "r6-steel-bar",
    name: "R6 Steel Bar",
    image: r6Bar,
    description: "6mm round steel bar for light construction and binding applications.",
    price: "KSh 210 per bar",
    category: "steel",
    specs: { Diameter: "6mm", Type: "Round", Grade: "Mild Steel", Uses: "Light construction and binding" },
  },
  {
    id: "r8-steel-bar",
    name: "R8 Steel Bar",
    image: r8Bar,
    description: "8mm round steel bar for light construction and binding applications.",
    price: "KSh 450 per bar",
    category: "steel",
    specs: { Diameter: "8mm", Type: "Round", Grade: "Mild Steel", Uses: "Light construction and binding" },
  },
  {
    id: "r10-steel-bar",
    name: "R10 Steel Bar",
    image: r10Bar,
    description: "10mm round steel bar for construction and binding applications.",
    price: "KSh 850 per bar",
    category: "steel",
    specs: { Diameter: "10mm", Type: "Round", Grade: "Mild Steel", Uses: "Construction and binding" },
  },
];

export const PHONE_NUMBER = "+254755358145";
export const WHATSAPP_LINK = `https://wa.me/254755358145`;
