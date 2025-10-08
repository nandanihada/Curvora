import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import kurti1 from "@/assets/kurti-1.jpg";
import kurti2 from "@/assets/kurti-2.jpg";
import kurti3 from "@/assets/kurti-3.jpg";
import kurti4 from "@/assets/kurti-4.jpg";

interface Kurti {
  id: number;
  name: string;
  fabric: string;
  price: string;
  image: string;
  colors: string[];
  style: string;
}

const Collection = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const kurtis: Kurti[] = [
    {
      id: 1,
      name: "Rose Elegance",
      fabric: "Premium Cotton",
      price: "₹2,499",
      image: kurti1,
      colors: ["Pink", "Gold"],
      style: "Elegant",
    },
    {
      id: 2,
      name: "Lavender Dreams",
      fabric: "Soft Rayon",
      price: "₹2,299",
      image: kurti2,
      colors: ["Lavender", "Purple"],
      style: "Casual",
    },
    {
      id: 3,
      name: "Golden Festive",
      fabric: "Silk Blend",
      price: "₹2,999",
      image: kurti3,
      colors: ["Cream", "Gold"],
      style: "Festive",
    },
    {
      id: 4,
      name: "Pink Minimalist",
      fabric: "Pure Cotton",
      price: "₹1,999",
      image: kurti4,
      colors: ["Rose Pink"],
      style: "Minimalist",
    },
    {
      id: 5,
      name: "Champagne Glow",
      fabric: "Premium Linen",
      price: "₹2,699",
      image: kurti1,
      colors: ["Champagne", "Gold"],
      style: "Elegant",
    },
    {
      id: 6,
      name: "Purple Bliss",
      fabric: "Cotton Silk",
      price: "₹2,399",
      image: kurti2,
      colors: ["Purple", "Pink"],
      style: "Festive",
    },
  ];

  const toggleWishlist = (id: number) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
      toast("Removed from wishlist");
    } else {
      setWishlist([...wishlist, id]);
      toast.success("Added to wishlist! ♥");
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Virtual <span className="gradient-text">Wardrobe</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of kurtis. Each piece can be customized to your Y Size
            for the perfect fit.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Button variant="outline" className="rounded-full">
            All Styles
          </Button>
          <Button variant="outline" className="rounded-full">
            Elegant
          </Button>
          <Button variant="outline" className="rounded-full">
            Casual
          </Button>
          <Button variant="outline" className="rounded-full">
            Festive
          </Button>
          <Button variant="outline" className="rounded-full">
            Minimalist
          </Button>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {kurtis.map((kurti) => (
            <Card
              key={kurti.id}
              className="glass-card hover-lift overflow-hidden group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={kurti.image}
                  alt={kurti.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(kurti.id)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      wishlist.includes(kurti.id)
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <Button className="bg-white text-foreground hover:bg-white/90">
                    Quick View
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{kurti.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{kurti.fabric}</p>
                <div className="flex items-center gap-2 mb-4">
                  {kurti.colors.map((color, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 text-xs rounded-full bg-muted"
                    >
                      {color}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-primary">{kurti.price}</p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-secondary text-white"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Customize
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Love what you see?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Share your measurements and we'll create these beauties in YOUR perfect Y Size
              </p>
              <a href="/size-measurement">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Find Your Y Size
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Collection;
