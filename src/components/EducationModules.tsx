import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import earthquakeIcon from "@/assets/earthquake-drill-icon.jpg";
import fireIcon from "@/assets/fire-safety-icon.jpg";
import floodIcon from "@/assets/flood-safety-icon.jpg";

const modules = [
  {
    title: "Earthquake Safety",
    description: "Comprehensive training on earthquake preparedness, drop-cover-hold techniques, and evacuation procedures.",
    image: earthquakeIcon,
    duration: "45 min",
    students: "12K+",
    rating: 4.9,
    level: "Beginner",
    color: "primary"
  },
  {
    title: "Fire Safety & Evacuation",
    description: "Learn fire prevention, proper use of extinguishers, and emergency evacuation routes.",
    image: fireIcon,
    duration: "35 min",
    students: "8K+",
    rating: 4.8,
    level: "Intermediate",
    color: "destructive"
  },
  {
    title: "Flood Preparedness",
    description: "Understanding flood risks, safety measures, and rescue procedures during water emergencies.",
    image: floodIcon,
    duration: "40 min",
    students: "6K+",
    rating: 4.7,
    level: "Beginner",
    color: "secondary"
  }
];

const EducationModules = () => {
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
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {module.description}
                </CardDescription>
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
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Start Module
                  <ArrowRight className="ml-2 h-4 w-4" />
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
    </section>
  );
};

export default EducationModules;