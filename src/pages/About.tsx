import { Heart, Sparkles, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import auraMascot from "@/assets/aura-mascot.png";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Body Positive",
      description: "Every body is beautiful. We celebrate diversity and create designs that empower all women.",
    },
    {
      icon: Sparkles,
      title: "Custom Fit",
      description: "No compromises. Every kurti is made to YOUR exact measurements for the perfect fit.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Join a community of women who embrace their curves and radiate confidence.",
    },
    {
      icon: Award,
      title: "Quality Promise",
      description: "Premium fabrics, expert craftsmanship, and attention to every detail.",
    },
  ];

  const milestones = [
    { year: "2023", event: "Curvora was born from a simple idea" },
    { year: "2024", event: "Introduced Y Size concept - revolutionizing fit" },
    { year: "2024", event: "Served 2500+ happy customers" },
    { year: "2025", event: "Expanding to bring joy to more curves" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The <span className="gradient-text">Curvora Story</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Born from frustration with "one-size-fits-all" and fueled by a vision where every woman
            feels seen, valued, and beautiful in what she wears.
          </p>
        </div>

        {/* Main Story */}
        <div className="max-w-5xl mx-auto mb-20">
          <Card className="glass-card">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src={auraMascot}
                    alt="Aura - Curvora Mascot"
                    className="w-full max-w-sm mx-auto float-animation"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">
                    <span className="gradient-text">S or M? Neither fits?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We've all been there. Standing in a fitting room, frustrated because Small is too
                    tight here, Medium is too loose there. The problem isn't YOUR body - it's the
                    sizing system.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    That's why we created <strong className="text-primary">Y Size</strong> - YOUR Size.
                    Not S, M, L, or XL. YOUR unique measurements, YOUR perfect fit, YOUR confidence.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Because every curve has its own aura, and deserves to radiate.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              What we stand for, what we believe in
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="glass-card hover-lift text-center group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Y Size Explanation */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">
                What Makes <span className="gradient-text">Y Size</span> Different?
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Share Your Measurements</h3>
                    <p className="text-muted-foreground">
                      Simple measurements taken at home with our easy guide. Bust, waist, hip, shoulder,
                      and length preferences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-2xl font-bold text-secondary">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">We Create Your Y Size</h3>
                    <p className="text-muted-foreground">
                      Your measurements become your personal Y Size profile. Not a standard size - YOUR size.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-2xl font-bold text-accent">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Perfectly Crafted for YOU</h3>
                    <p className="text-muted-foreground">
                      Every kurti is custom-made to your Y Size. The result? A fit so perfect, you'll
                      forget what it was like to compromise.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0 z-10 border-4 border-background group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>
                    <Card className="glass-card flex-1 hover-lift">
                      <CardContent className="p-6">
                        <p className="text-lg">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <Card className="glass-card">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to <span className="gradient-text">Radiate Your Curve</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of women who've discovered their perfect fit
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/size-measurement">
                  <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                    Find Your Y Size
                  </button>
                </a>
                <a href="/collection">
                  <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Explore Collection
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
