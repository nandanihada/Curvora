import { Link } from "react-router-dom";
import { Sparkles, Users, Heart, ShoppingBag, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBackground from "@/assets/hero-background.jpg";
import auraMascot from "@/assets/aura-mascot.png";
import kurti1 from "@/assets/kurti-1.jpg";
import kurti2 from "@/assets/kurti-2.jpg";
import kurti3 from "@/assets/kurti-3.jpg";
import kurti4 from "@/assets/kurti-4.jpg";

const Home = () => {
  const stats = [
    { number: "2500+", label: "Happy Customers", icon: Users },
    { number: "500+", label: "Kurtis Designed", icon: ShoppingBag },
    { number: "1000+", label: "Y Sizes Created", icon: Sparkles },
  ];

  const features = [
    {
      icon: Heart,
      title: "Custom Fit",
      description: "Every kurti tailored to YOUR unique measurements",
    },
    {
      icon: Sparkles,
      title: "Quality Fabric",
      description: "Premium materials that feel as good as they look",
    },
    {
      icon: Star,
      title: "Body Positive",
      description: "Celebrating every curve, every size, every woman",
    },
  ];

  const newArrivals = [
    { image: kurti1, name: "Rose Elegance", price: "₹2,499" },
    { image: kurti2, name: "Lavender Dreams", price: "₹2,299" },
    { image: kurti3, name: "Golden Festive", price: "₹2,999" },
    { image: kurti4, name: "Pink Minimalist", price: "₹1,999" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

        {/* Floating Watercolor Blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/30 rounded-full watercolor-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full watercolor-blob" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-accent/30 rounded-full watercolor-blob" />

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block animate-in fade-in slide-in-from-top duration-1000">
              <span className="inline-block px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-sm mb-4 border border-primary/20">
                ✨ Every curve has its own aura
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              <span className="gradient-text">Radiate Your Curve</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
              S or M? Neither fits? Meet <span className="font-bold text-primary">Y Size</span> - YOUR Size.
              Custom-fit kurtis designed for your unique beauty.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
              <Link to="/collection">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Explore Collection
                </Button>
              </Link>
              <Link to="/size-measurement">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Find Your Y Size
                </Button>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <a href="#stats-section" className="pt-12 animate-bounce cursor-pointer">
              <div className="p-9 my-12">
                <p className="text-xl text-muted-foreground mb-2">Discover More</p>
                <ArrowRight className="h-6 w-6 mx-auto rotate-90 text-primary" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="glass-card hover-lift text-center overflow-hidden group"
              >
                <CardContent className="p-8">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-4xl font-bold gradient-text mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text">Curvora</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe every woman deserves clothes that fit perfectly and make her feel incredible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="glass-card hover-lift group cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              New <span className="gradient-text">Arrivals</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover our latest designs crafted with love
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((kurti, index) => (
              <Card
                key={index}
                className="glass-card hover-lift overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={kurti.image}
                    alt={kurti.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold mb-1">{kurti.name}</h3>
                  <p className="text-primary font-bold">{kurti.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/collection">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View Full Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Mascot */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img
                      src={auraMascot}
                      alt="Aura - Your Curvora Guide"
                      className="w-48 h-48 object-contain float-animation"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Ready to find <span className="gradient-text">YOUR perfect fit</span>?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Hi! I'm Aura, your Curvora guide. Let's discover your Y Size together and
                      create something beautiful just for you! ✨
                    </p>
                    <Link to="/style-quiz">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        Take Style Quiz
                        <Sparkles className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
