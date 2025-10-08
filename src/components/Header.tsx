import { Search, ShoppingCart, Heart, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="border-b">
      {/* Top Bar */}
      <div className="bg-muted/50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end gap-6 py-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call Us: 011-41588088</span>
            </div>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              My wishlists
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Log in / Register
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-primary-foreground">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-primary">DentalMart</h1>
                  <p className="text-xs text-muted-foreground">www.dentalmart.in</p>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search your products"
                  className="w-full pr-12"
                />
                <Button size="icon" className="absolute right-0 top-0 h-full rounded-l-none">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="relative">
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span className="font-semibold">Cart: (0) items</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-primary">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-1">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/20 rounded-none h-12">
              Shop By
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/20 rounded-none h-12">
              Brands
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/20 rounded-none h-12">
              Clearance
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;