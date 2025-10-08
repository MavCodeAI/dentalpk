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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <QuoteForm />
              <PromoBanner />
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Hero Carousel */}
              <HeroCarousel />

              {/* Top Sellers Section */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Top Sellers</h2>
                  <Button variant="link" className="gap-2">
                    View All <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {topSellers.map((product, index) => (
                    <ProductCard key={index} {...product} />
                  ))}
                </div>
              </section>

              {/* Featured Products Section */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Featured Products</h2>
                  <Button variant="link" className="gap-2">
                    View All <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredProducts.map((product, index) => (
                    <ProductCard key={index} {...product} />
                  ))}
                </div>
              </section>

              {/* Features Banner */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-card border rounded-lg p-6 text-center shadow-card">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">100% Authentic</h3>
                  <p className="text-sm text-muted-foreground">All products are genuine and certified</p>
                </div>
                <div className="bg-card border rounded-lg p-6 text-center shadow-card">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">Quick shipping across India</p>
                </div>
                <div className="bg-card border rounded-lg p-6 text-center shadow-card">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">Always here to help you</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;