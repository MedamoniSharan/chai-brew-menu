import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Visit us or reach out to place your order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                    <div className="space-y-1">
                      <a 
                        href="tel:+919000013308" 
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 90000 13308
                      </a>
                      <a 
                        href="tel:+919000012943" 
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 90000 12943
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                    <a 
                      href="mailto:dr.chaicafe@outlook.in"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      dr.chaicafe@outlook.in
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Vijayawada, Andhra Pradesh</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <p className="text-muted-foreground">Open Daily</p>
                    <p className="text-sm text-muted-foreground">7:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and Social Media */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <Card className="shadow-card border-border/50 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Vijayawada Location</p>
                </div>
              </div>
            </Card>

            {/* Order on WhatsApp CTA */}
            <Card className="shadow-card border-border/50 bg-gradient-to-r from-accent/5 to-primary/5">
              <CardContent className="p-6 text-center">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  Order Now
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get your favorites delivered fresh to your doorstep
                </p>
                <Button 
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-8"
                  onClick={() => window.open("https://wa.me/919000013308", "_blank")}
                >
                  Order on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-card border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 text-center">Follow Us</h3>
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-12 h-12 p-0"
                    onClick={() => window.open("#", "_blank")}
                  >
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-12 h-12 p-0"
                    onClick={() => window.open("#", "_blank")}
                  >
                    <Facebook className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <div className="font-heading text-3xl font-bold text-primary mb-4">
            Dr. Chai Café
          </div>
          <p className="text-muted-foreground text-lg mb-4">
            Brewed to Belong • Freshly Made Daily
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            Experience the authentic taste of traditional Indian chai in a modern café setting
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://wa.me/919000013308" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              WhatsApp
            </a>
            <a 
              href="mailto:dr.chaicafe@outlook.in"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Email
            </a>
            <a 
              href="tel:+919000013308"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Call Us
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2024 Dr. Chai Café. All rights reserved. • Prices inclusive of taxes where applicable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;