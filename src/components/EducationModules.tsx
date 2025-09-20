import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Gamepad2 } from "lucide-react";
import DisasterGame from "@/components/DisasterGame";
import { useState } from "react";
import earthquakeSafetyImg from "@/assets/earthquake-safety-kids.jpg";
import fireEvacuationImg from "@/assets/fire-evacuation-students.jpg";
import floodPreparednessImg from "@/assets/flood-preparedness-school.jpg";

const modules = [
  {
    title: "Earthquake Safety for Schools",
    description: "Learn Drop, Cover & Hold techniques through fun activities and interactive games designed for all age groups",
    image: earthquakeSafetyImg,
    duration: "15 min",
    students: "2.5K",
    rating: 4.9,
    level: "Beginner",
    color: "primary",
    details: "Master earthquake response with age-appropriate exercises, safety songs, and classroom simulations"
  },
  {
    title: "Fire Evacuation & Safety",
    description: "Interactive fire safety training with evacuation routes, smoke crawling, and emergency exit procedures",
    image: fireEvacuationImg,
    duration: "20 min",
    students: "3.2K",
    rating: 4.8,
    level: "Intermediate",
    color: "destructive",
    details: "Comprehensive fire safety including alarm recognition, evacuation planning, and meeting point procedures"
  },
  {
    title: "Flood Preparedness & Response",
    description: "Essential flood safety knowledge including emergency kits, water safety, and evacuation procedures",
    image: floodPreparednessImg,
    duration: "18 min",
    students: "1.8K",
    rating: 4.7,
    level: "Advanced",
    color: "secondary",
    details: "Complete flood response training covering early warning signs, safety measures, and post-flood recovery"
  }
];

const EducationModules = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState(0);

  const handleGameStart = (moduleIndex: number) => {
    setSelectedModule(moduleIndex);
    setIsGameOpen(true);
  };

  return (
    <section id="modules" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Interactive Learning
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Disaster Education Modules
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive, region-specific training modules designed for Indian schools and colleges.
            Learn through interactive content, quizzes, and real-world scenarios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/50">
              <CardHeader className="pb-4">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={module.image}
                    alt={module.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={module.color === 'primary' ? 'default' : module.color === 'destructive' ? 'destructive' : 'secondary'}>
                    {module.level}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{module.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {module.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed mb-3">
                  {module.description}
                </CardDescription>
                <div className="text-xs text-muted-foreground p-2 bg-muted/30 rounded">
                  {module.details}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{module.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{module.students}</span>
                  </div>
                </div>
                <Button 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => handleGameStart(index)}
                >
                  Game
                  <Gamepad2 className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Modules
          </Button>
        </div>
      </div>
      
      <DisasterGame 
        isOpen={isGameOpen} 
        onClose={() => setIsGameOpen(false)}
        initialModule={selectedModule}
      />
    </section>
  );
};

export default EducationModules;