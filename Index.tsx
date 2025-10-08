import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import QuoteForm from "@/components/QuoteForm";
import ProductCard from "@/components/ProductCard";
import PromoBanner from "@/components/PromoBanner";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const topSellers = [
  {
    name: "Diamond Burs Mani PK/5",
    price: 301.56,
    mrp: 375,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300&h=300&fit=crop",
    description: "PACKAGING: 1 STRIP = 5 BURS. MRP = Rs. 75...",
  },
  {
    name: "Gutta Percha Point 2% META",
    price: 231.25,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=300&h=300&fit=crop",
    description: "Made from the Finest Gutta Percha Uniformly Hand...",
  },
  {
    name: "K Files Mani PK/6",
    price: 175.00,
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=300&h=300&fit=crop",
    description: "FILES AVAILABLE IN ALL MENTIONED SIZES...",
  },
  {
    name: "Matrix Bands Hahnenkratt",
    price: 168.75,
    image: "https://images.unsplash.com/photo-1609840114035-3c981960afdd?w=300&h=300&fit=crop",
    description: "Matrix Bands Hahnenkratt microthin made of Stainless...",
  },
];

const featuredProducts = [
  {
    name: "Ribbond Ribbon Fiber Splint Kit",
    price: 25000.00,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300&h=300&fit=crop",
  },
  {
    name: "Ribbond Ribbon 2mm Fiber Splint",
    price: 5400.00,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=300&h=300&fit=crop",
  },
  {
    name: "Ribbond Ribbon 3mm Fiber Splint",
    price: 5600.00,
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=300&h=300&fit=crop",
  },
  {
    name: "Ribbond Ribbon 4mm Fiber Splint",
    price: 5600.00,
    image: "https://images.unsplash.com/photo-1609840114035-3c981960afdd?w=300&h=300&fit=crop",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 p-4">
          <QuoteForm />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-4">
          {/* Hero Carousel */}
          <HeroCarousel />
          
          {/* Top Sellers Section */}
          <div className="my-8">
            <h2 className="text-2xl font-bold mb-4">Top Sellers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {topSellers.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
          
          {/* Featured Products Section */}
          <div className="my-8">
            <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
          
          {/* Features Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold mb-2">100% Authentic</h3>
              <p className="text-gray-600">All products are genuine and certified</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick shipping across Pakistan</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to help you</p>
            </div>
          </div>
        </div>
      </div>
      
      <PromoBanner />
      <Footer />
    </div>
  );
};

export default Index;