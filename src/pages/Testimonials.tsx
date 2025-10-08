import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Finally found kurtis that actually fit! The Y Size concept is brilliant. No more alterations, no more compromises. Every piece fits like it was made for me - because it was!",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Anjali Reddy",
      location: "Bangalore",
      rating: 5,
      text: "I've struggled with standard sizes my whole life. Curvora changed everything. The team was so patient with my measurements and the final product exceeded all expectations. Highly recommend!",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Sneha Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "The quality is exceptional! Beautiful fabrics, perfect stitching, and most importantly - a fit that makes me feel confident. Worth every rupee.",
      date: "3 weeks ago",
    },
    {
      id: 4,
      name: "Meera Iyer",
      location: "Chennai",
      rating: 5,
      text: "As someone with a petite frame, I always found ready-made kurtis too long or too loose. Curvora's Y Size gave me exactly what I needed. The customization process was so easy!",
      date: "1 week ago",
    },
    {
      id: 5,
      name: "Kavita Desai",
      location: "Pune",
      rating: 5,
      text: "Love the body-positive approach! They made me feel beautiful and valued. The kurtis are gorgeous and the fit is perfect. Already ordered my second set!",
      date: "2 months ago",
    },
    {
      id: 6,
      name: "Ritika Malhotra",
      location: "Delhi",
      rating: 5,
      text: "The attention to detail is incredible. They even remembered my sleeve length preference from my first order. Customer service is top-notch and the products speak for themselves!",
      date: "1 month ago",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Radiate</span> With Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real women who found their perfect fit
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-3xl font-bold gradient-text">5.0</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <p className="text-3xl font-bold gradient-text mb-1">2,500+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <p className="text-3xl font-bold gradient-text mb-1">98%</p>
              <p className="text-sm text-muted-foreground">Would Recommend</p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="glass-card hover-lift group"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.date}
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
                      ✓ Verified Y Size Customer
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Share Your Story CTA */}
        <div className="max-w-3xl mx-auto">
          <Card className="glass-card">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Share Your <span className="gradient-text">Curvora Moment</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We'd love to hear your story! Share your experience and inspire other women to
                embrace their curves.
              </p>
              <a
                href="mailto:curvora7@gmail.com?subject=My Curvora Story"
                className="inline-block"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Share Your Story
                </button>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                Email us at curvora7@gmail.com with your story and photo
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
