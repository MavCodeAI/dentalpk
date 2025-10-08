import { Truck } from "lucide-react";

const PromoBanner = () => {
  return (
    <div className="bg-gradient-primary text-primary-foreground rounded-lg p-8 text-center shadow-card">
      <div className="flex flex-col items-center gap-4">
        <Truck className="w-16 h-16" />
        <h3 className="text-2xl font-bold">FREE SHIPPING</h3>
        <p className="text-lg">ON ALL ORDERS OVER</p>
        <p className="text-4xl font-bold">₹2500</p>
      </div>
    </div>
  );
};

export default PromoBanner;