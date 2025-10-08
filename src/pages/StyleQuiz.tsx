import { useState } from "react";
import { ChevronRight, ChevronLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import auraMascot from "@/assets/aura-mascot.png";

interface Question {
  id: number;
  question: string;
  options: { value: string; label: string; icon?: string }[];
}

const StyleQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "What's your style vibe?",
      options: [
        { value: "elegant", label: "Elegant & Sophisticated", icon: "✨" },
        { value: "casual", label: "Casual & Comfortable", icon: "🌸" },
        { value: "festive", label: "Festive & Traditional", icon: "🎉" },
        { value: "fusion", label: "Modern Fusion", icon: "💫" },
      ],
    },
    {
      id: 2,
      question: "Pick your favorite color palette",
      options: [
        { value: "pastels", label: "Soft Pastels (Pink, Lavender, Peach)", icon: "🌷" },
        { value: "vibrant", label: "Vibrant Colors (Red, Royal Blue, Green)", icon: "🌺" },
        { value: "neutrals", label: "Neutrals (Beige, Cream, White)", icon: "🤍" },
        { value: "jewel", label: "Jewel Tones (Emerald, Burgundy, Gold)", icon: "💎" },
      ],
    },
    {
      id: 3,
      question: "Preferred kurti length?",
      options: [
        { value: "short", label: "Short (Up to waist)", icon: "👚" },
        { value: "mid", label: "Mid-length (Up to mid-thigh)", icon: "👗" },
        { value: "long", label: "Long (Knee-length or below)", icon: "✨" },
      ],
    },
    {
      id: 4,
      question: "What occasions do you wear kurtis for?",
      options: [
        { value: "daily", label: "Daily Wear", icon: "☀️" },
        { value: "office", label: "Office & Work", icon: "💼" },
        { value: "party", label: "Parties & Events", icon: "🎊" },
        { value: "traditional", label: "Traditional Events", icon: "🪔" },
      ],
    },
    {
      id: 5,
      question: "Fabric preference?",
      options: [
        { value: "cotton", label: "Cotton (Breathable & Comfy)", icon: "🌾" },
        { value: "silk", label: "Silk (Luxurious & Elegant)", icon: "✨" },
        { value: "rayon", label: "Rayon (Soft & Flowy)", icon: "🌸" },
        { value: "linen", label: "Linen (Casual & Light)", icon: "🍃" },
      ],
    },
    {
      id: 6,
      question: "Sleeve style preference?",
      options: [
        { value: "sleeveless", label: "Sleeveless", icon: "👕" },
        { value: "short", label: "Short Sleeves", icon: "👚" },
        { value: "three-quarter", label: "3/4 Sleeves", icon: "👗" },
        { value: "full", label: "Full Sleeves", icon: "🧥" },
      ],
    },
    {
      id: 7,
      question: "Pattern preference?",
      options: [
        { value: "solid", label: "Solid Colors", icon: "⬜" },
        { value: "printed", label: "Printed Designs", icon: "🌼" },
        { value: "embroidered", label: "Embroidered Details", icon: "✨" },
        { value: "minimalist", label: "Minimalist & Clean", icon: "🤍" },
      ],
    },
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getStyleProfile = () => {
    // Simple logic to determine style profile
    const styleVibe = answers[0] || "elegant";
    return {
      elegant: {
        title: "The Elegant Empress",
        description:
          "You love sophistication and grace. Your style is timeless, with a preference for refined details and luxurious fabrics.",
        recommendations: ["Rose Elegance", "Golden Festive", "Champagne Glow"],
      },
      casual: {
        title: "The Comfort Queen",
        description:
          "Comfort meets style in your world. You prefer breathable fabrics and easy-going designs that look effortlessly chic.",
        recommendations: ["Lavender Dreams", "Pink Minimalist", "Cotton Classic"],
      },
      festive: {
        title: "The Celebration Spirit",
        description:
          "You shine brightest at celebrations! Rich colors, embellishments, and traditional elegance are your go-to.",
        recommendations: ["Golden Festive", "Purple Bliss", "Festive Fusion"],
      },
      fusion: {
        title: "The Modern Muse",
        description:
          "You blend tradition with contemporary flair. Unique cuts, modern prints, and experimental styles define you.",
        recommendations: ["Pink Minimalist", "Modern Edge", "Fusion Favorite"],
      },
    }[styleVibe] || { title: "Your Unique Style", description: "A perfect blend!", recommendations: [] };
  };

  if (showResults) {
    const profile = getStyleProfile();

    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card">
              <CardContent className="p-12 text-center">
                <img
                  src={auraMascot}
                  alt="Aura celebrating"
                  className="w-32 h-32 mx-auto mb-6 float-animation"
                />
                
                <div className="inline-block px-6 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
                  ✨ Your Curvora Style Profile
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="gradient-text">{profile.title}</span>
                </h1>

                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {profile.description}
                </p>

                <div className="bg-muted/50 rounded-2xl p-8 mb-8">
                  <h3 className="font-bold text-xl mb-4">Perfect for You</h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {profile.recommendations.map((rec, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-background rounded-full border border-primary/20"
                      >
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/collection">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      Shop Your Style
                      <Sparkles className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      setShowResults(false);
                      setCurrentQuestion(0);
                      setAnswers({});
                    }}
                  >
                    Retake Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect <span className="gradient-text">Kurti Style</span>
            </h1>
            <p className="text-muted-foreground">
              Answer a few questions and discover your unique style profile
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="glass-card mb-8">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-8">
                <img
                  src={auraMascot}
                  alt="Aura"
                  className="w-16 h-16 object-contain flex-shrink-0"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">
                    {questions[currentQuestion].question}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Choose the option that best describes you
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`p-6 rounded-xl border-2 text-left transition-all duration-300 hover:scale-[1.02] ${
                      answers[currentQuestion] === option.value
                        ? "border-primary bg-primary/5 shadow-lg"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{option.icon}</span>
                      <span className="font-medium text-lg">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className="bg-gradient-to-r from-primary to-secondary text-white"
            >
              {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleQuiz;
