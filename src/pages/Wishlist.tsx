import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import auraMascot from "@/assets/aura-mascot.png";

const Wishlist = () => {
  // In a real app, this would come from state management
  const wishlistItems: any[] = [];

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <img
                src={auraMascot}
                alt="Aura"
                className="w-48 h-48 mx-auto mb-6 float-animation"
              />
              <Heart className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
              <h1 className="text-3xl font-bold mb-4">
                Your Wishlist is <span className="gradient-text">Empty</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Start adding kurtis you love to your wishlist and create your perfect collection!
              </p>
              <Link to="/collection">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Explore Collection
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Your Curvora <span className="gradient-text">Favorites</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {wishlistItems.length} item{wishlistItems.length !== 1 ? "s" : ""} saved
          </p>
        </div>

        {/* Wishlist items would be rendered here */}
      </div>
    </div>
  );
};

export default Wishlist;
