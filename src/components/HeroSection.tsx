import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Play, Users, Award, BookOpen, Gamepad2 } from "lucide-react";
import heroImage from "@/assets/hero-disaster-education.jpg";
import DisasterGame from "@/components/DisasterGame";
import { useState, useRef } from "react";

const HeroSection = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [currentDemoVideo, setCurrentDemoVideo] = useState("/demo-video-1.mp4");
  const [isGameOpen, setIsGameOpen] = useState(false);
  
  const scrollToVirtualDrills = () => {
    const drillsSection = document.getElementById('drills');
    if (drillsSection) {
      drillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchDemo = () => {
    setIsDemoOpen(true);
  };
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Disaster Ready
                </span>
                <br />
                Schools for India
              </h1>
              <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
                Empowering educational institutions with comprehensive disaster management training, 
                virtual drills, and real-time emergency response tools.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsGameOpen(true)}
              >
                <Gamepad2 className="mr-2 h-5 w-5" />
                Play Game
              </Button>
              <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={handleWatchDemo}
                  >
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh]">
                  <DialogHeader>
                    <DialogTitle>ResQLearn Demo</DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video mb-4">
                    <video
                      src={currentDemoVideo}
                      controls
                      className="w-full h-full rounded-lg"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant={currentDemoVideo === "/demo-video-1.mp4" ? "default" : "outline"}
                      onClick={() => setCurrentDemoVideo("/demo-video-1.mp4")}
                    >
                      Overview Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant={currentDemoVideo === "/demo-video-2.mp4" ? "default" : "outline"}
                      onClick={() => setCurrentDemoVideo("/demo-video-2.mp4")}
                    >
                      Features Demo
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <DisasterGame isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-2">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">Schools</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-2">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
            <img
              src={heroImage}
              alt="Students participating in disaster preparedness training"
              className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;