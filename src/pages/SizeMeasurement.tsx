import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Sparkles, Ruler, Mail, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import auraMascot from "@/assets/aura-mascot.png";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  bust: z.string().min(1, "Bust measurement is required"),
  waist: z.string().min(1, "Waist measurement is required"),
  hip: z.string().min(1, "Hip measurement is required"),
  shoulder: z.string().min(1, "Shoulder width is required"),
  length: z.string().min(1, "Preferred kurti length is required"),
  sleeve: z.string().min(1, "Sleeve length preference is required"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const SizeMeasurement = () => {
  const [unit, setUnit] = useState<"cm" | "inches">("cm");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Prepare email content
      const emailBody = `
New Y Size Measurement Request

Customer Details:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}

Measurements (${unit}):
- Bust: ${data.bust} ${unit}
- Waist: ${data.waist} ${unit}
- Hip: ${data.hip} ${unit}
- Shoulder: ${data.shoulder} ${unit}
- Kurti Length: ${data.length} ${unit}
- Sleeve Length: ${data.sleeve} ${unit}

Additional Notes:
${data.notes || "None"}
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:curvora7@gmail.com?subject=Y Size Request - ${data.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      toast.success("✨ We've Got Your Perfect Size!", {
        description: "Your email client has been opened. Please send the email to complete your request.",
      });

      // Reset form
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again or email us directly at curvora7@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Your Perfect Fit <span className="gradient-text">Starts Here</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your Y Size with us and we'll create kurtis that fit you perfectly
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Mascot & Instructions */}
            <div className="space-y-6">
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <img
                      src={auraMascot}
                      alt="Aura - Your Guide"
                      className="w-48 h-48 mx-auto float-animation"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                      <p className="text-sm">
                        <strong className="text-primary">Hi! I'm Aura 👋</strong>
                        <br />
                        I'm here to help you find your perfect Y Size! Follow these simple steps to
                        get accurate measurements.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-bold text-lg flex items-center gap-2">
                        <Ruler className="h-5 w-5 text-primary" />
                        How to Measure
                      </h3>

                      <div className="space-y-3 text-sm">
                        <div className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                            1
                          </span>
                          <p className="text-muted-foreground">
                            <strong>Bust:</strong> Measure around the fullest part of your chest
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                            2
                          </span>
                          <p className="text-muted-foreground">
                            <strong>Waist:</strong> Measure around your natural waistline
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                            3
                          </span>
                          <p className="text-muted-foreground">
                            <strong>Hip:</strong> Measure around the fullest part of your hips
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                            4
                          </span>
                          <p className="text-muted-foreground">
                            <strong>Shoulder:</strong> Measure from one shoulder end to the other
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                            5
                          </span>
                          <p className="text-muted-foreground">
                            <strong>Length:</strong> Measure from shoulder to your preferred kurti length
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-secondary">💡 Pro Tip:</strong> Use a soft measuring
                        tape and don't pull it too tight. Stand naturally and ask someone to help for
                        best results!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Measurement Form */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Unit Toggle */}
                  <div className="flex justify-center gap-2 mb-6">
                    <Button
                      type="button"
                      variant={unit === "cm" ? "default" : "outline"}
                      onClick={() => setUnit("cm")}
                      size="sm"
                    >
                      Centimeters
                    </Button>
                    <Button
                      type="button"
                      variant={unit === "inches" ? "default" : "outline"}
                      onClick={() => setUnit("inches")}
                      size="sm"
                    >
                      Inches
                    </Button>
                  </div>

                  {/* Personal Details */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Your name"
                        className="mt-2"
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="your@email.com"
                        className="mt-2"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="+91 XXXXXXXXXX"
                        className="mt-2"
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <Ruler className="h-5 w-5 text-primary" />
                      Your Measurements ({unit})
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="bust">Bust *</Label>
                        <Input
                          id="bust"
                          {...register("bust")}
                          placeholder={`e.g., ${unit === "cm" ? "90" : "35"}`}
                          className="mt-2"
                        />
                        {errors.bust && (
                          <p className="text-sm text-destructive mt-1">{errors.bust.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="waist">Waist *</Label>
                        <Input
                          id="waist"
                          {...register("waist")}
                          placeholder={`e.g., ${unit === "cm" ? "75" : "30"}`}
                          className="mt-2"
                        />
                        {errors.waist && (
                          <p className="text-sm text-destructive mt-1">{errors.waist.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="hip">Hip *</Label>
                        <Input
                          id="hip"
                          {...register("hip")}
                          placeholder={`e.g., ${unit === "cm" ? "95" : "37"}`}
                          className="mt-2"
                        />
                        {errors.hip && (
                          <p className="text-sm text-destructive mt-1">{errors.hip.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="shoulder">Shoulder Width *</Label>
                        <Input
                          id="shoulder"
                          {...register("shoulder")}
                          placeholder={`e.g., ${unit === "cm" ? "40" : "16"}`}
                          className="mt-2"
                        />
                        {errors.shoulder && (
                          <p className="text-sm text-destructive mt-1">{errors.shoulder.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="length">Kurti Length *</Label>
                        <Input
                          id="length"
                          {...register("length")}
                          placeholder={`e.g., ${unit === "cm" ? "100" : "40"}`}
                          className="mt-2"
                        />
                        {errors.length && (
                          <p className="text-sm text-destructive mt-1">{errors.length.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="sleeve">Sleeve Length *</Label>
                        <Input
                          id="sleeve"
                          {...register("sleeve")}
                          placeholder={`e.g., ${unit === "cm" ? "45" : "18"}`}
                          className="mt-2"
                        />
                        {errors.sleeve && (
                          <p className="text-sm text-destructive mt-1">{errors.sleeve.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      {...register("notes")}
                      placeholder="Any specific preferences or requirements?"
                      className="mt-2 min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white text-lg py-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      "Preparing..."
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Send My Y Size
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to our privacy policy. We'll use your measurements only
                    to create your perfect fit.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeMeasurement;
