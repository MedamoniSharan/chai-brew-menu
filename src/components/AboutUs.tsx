import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Heart, Users, Award } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Our Story
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Welcome to Dr. Chai Café, where every cup tells a story of tradition, 
            innovation, and the warm hospitality that makes us more than just a café.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          {/* Story Content */}
          <div className="space-y-6">
            <h3 className="font-heading text-3xl font-bold text-foreground">
              Brewed to Belong
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded in the heart of Vijayawada, Dr. Chai Café began as a simple dream: 
              to create a space where people could experience the authentic taste of 
              traditional Indian chai while enjoying modern café comforts.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our journey started with a single pot of masala chai and has grown into 
              a beloved community gathering spot where friends meet, ideas brew, and 
              memories are made over steaming cups of our signature beverages.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Today, we continue to honor our roots while embracing innovation, 
              offering a carefully curated menu that celebrates both tradition and 
              contemporary café culture.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-4">
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Coffee className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Quality First</h4>
                <p className="text-sm text-muted-foreground">
                  Premium ingredients, freshly sourced daily
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-4">
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Made with Love</h4>
                <p className="text-sm text-muted-foreground">
                  Every cup crafted with care and passion
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-4">
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Community</h4>
                <p className="text-sm text-muted-foreground">
                  A welcoming space for everyone
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-4">
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  Consistent quality in every detail
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To create an authentic café experience that bridges the gap between 
                traditional Indian hospitality and modern café culture, serving as a 
                community hub where every visitor feels at home and every beverage 
                tells a story of quality, tradition, and innovation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
