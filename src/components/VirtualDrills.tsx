import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Play, Timer, Trophy, Target, Gamepad2, CheckCircle } from "lucide-react";
import { useState, useRef } from "react";

const drills = [
  {
    title: "Earthquake Drill Simulator",
    description: "Practice drop, cover, and hold procedures in various school environments",
    scenario: "Classroom Scenario",
    duration: "5-10 min",
    difficulty: "Beginner",
    points: 100,
    icon: Target
  },
  {
    title: "Fire Evacuation Challenge",
    description: "Navigate through smoke-filled corridors and find the safest exit routes",
    scenario: "Multi-floor Building",
    duration: "8-15 min", 
    difficulty: "Intermediate",
    points: 150,
    icon: Trophy
  },
  {
    title: "Flood Response Training",
    description: "Learn proper procedures during flash flood emergencies in school premises",
    scenario: "Ground Floor Flooding",
    duration: "6-12 min",
    difficulty: "Advanced",
    points: 200,
    icon: Gamepad2
  }
];

const VirtualDrills = () => {
  const [completedDrills, setCompletedDrills] = useState<number[]>([]);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    if (!completedDrills.includes(0)) {
      setCompletedDrills([...completedDrills, 0]);
    }
    setIsVideoOpen(false);
  };

  const handleDrillStart = (index: number) => {
    if (index === 0) {
      setIsVideoOpen(true);
    } else {
      // For other drills, mark as completed immediately (placeholder)
      if (!completedDrills.includes(index)) {
        setCompletedDrills([...completedDrills, index]);
      }
    }
  };

  const renderButton = (index: number) => {
    const isCompleted = completedDrills.includes(index);
    
    if (isCompleted) {
      return (
        <Button size="sm" variant="outline" disabled>
          <CheckCircle className="mr-1 h-3 w-3 text-green-600" />
          Completed
        </Button>
      );
    }
    
    if (index === 0) {
      return (
        <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={() => handleDrillStart(index)}>
              <Play className="mr-1 h-3 w-3" />
              Start
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle>Earthquake Drill Simulator</DialogTitle>
            </DialogHeader>
            <div className="aspect-video">
              <video
                ref={videoRef}
                src="/earthquake-drill-video.mp4"
                controls
                className="w-full h-full rounded-lg"
                onEnded={handleVideoEnd}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </DialogContent>
        </Dialog>
      );
    }
    
    return (
      <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={() => handleDrillStart(index)}>
        <Play className="mr-1 h-3 w-3" />
        Start
      </Button>
    );
  };
  return (
    <section id="drills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-secondary text-secondary">
            <Gamepad2 className="mr-2 h-4 w-4" />
            Gamified Learning
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Virtual Drill Simulator
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practice emergency procedures in safe, controlled virtual environments. 
            Build muscle memory and confidence through realistic scenario-based training.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="grid gap-6">
              {drills.map((drill, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <drill.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{drill.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {drill.scenario}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary" className="shrink-0">
                        {drill.points} pts
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4">{drill.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Timer className="h-4 w-4 text-muted-foreground" />
                          <span>{drill.duration}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {drill.difficulty}
                        </Badge>
                      </div>
                      {renderButton(index)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Play className="h-16 w-16 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ready to Practice?</h3>
                  <p className="text-muted-foreground">
                    Join thousands of students who have improved their emergency response skills
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">15K+</div>
                    <div className="text-sm text-muted-foreground">Drills Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">92%</div>
                    <div className="text-sm text-muted-foreground">Pass Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">4.8</div>
                    <div className="text-sm text-muted-foreground">Avg Score</div>
                  </div>
                </div>
                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary">
                  Try Virtual Drill
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualDrills;