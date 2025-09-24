import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Monitor, 
  Smartphone, 
  Code, 
  Palette, 
  Zap, 
  Users, 
  BookOpen, 
  PlayCircle, 
  MessageCircle,
  ArrowRight,
  ArrowDown
} from 'lucide-react';

const PresentationSlide = () => {
  const technologies = [
    {
      category: "Frontend Framework",
      items: ["React 18", "TypeScript", "Vite"],
      icon: <Code className="w-5 h-5" />
    },
    {
      category: "UI/UX Design",
      items: ["Tailwind CSS", "shadcn-ui", "Radix UI"],
      icon: <Palette className="w-5 h-5" />
    },
    {
      category: "Interactive Features",
      items: ["Lucide Icons", "Framer Motion", "React Hooks"],
      icon: <Zap className="w-5 h-5" />
    },
    {
      category: "Target Devices",
      items: ["Web Browsers", "Mobile Responsive", "Touch Interface"],
      icon: <Monitor className="w-5 h-5" />
    }
  ];

  const implementationFlow = [
    {
      phase: "Phase 1",
      title: "Educational Content",
      description: "Interactive disaster learning modules",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      phase: "Phase 2", 
      title: "Virtual Drills",
      description: "Immersive emergency simulation videos",
      icon: <PlayCircle className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      phase: "Phase 3",
      title: "AI Chat Assistant",
      description: "ResQ Bot for real-time guidance",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "bg-purple-500"
    },
    {
      phase: "Phase 4",
      title: "User Engagement",
      description: "Gamification and progress tracking",
      icon: <Users className="w-6 h-6" />,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Disaster Education Platform
          </h1>
          <p className="text-xl text-gray-600">
            Technologies & Implementation Methodology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Technologies Section */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Code className="w-7 h-7 text-blue-600" />
                Technologies Used
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="text-blue-600">{tech.icon}</div>
                    <h3 className="font-semibold text-gray-800">{tech.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-7">
                    {tech.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="secondary" className="text-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Component-based architecture for scalability</li>
                  <li>• Responsive design for all device types</li>
                  <li>• Modern development tools for efficient coding</li>
                  <li>• Accessible UI components for inclusive design</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Methodology */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="w-7 h-7 text-purple-600" />
                Implementation Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {implementationFlow.map((phase, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start gap-4">
                      <div className={`${phase.color} p-3 rounded-full text-white flex-shrink-0`}>
                        {phase.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {phase.phase}
                          </Badge>
                          <h3 className="font-semibold text-gray-800">{phase.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{phase.description}</p>
                      </div>
                    </div>
                    {index < implementationFlow.length - 1 && (
                      <div className="flex justify-center my-2">
                        <ArrowDown className="w-4 h-4 text-gray-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Development Workflow:</h4>
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-white px-3 py-1 rounded-full border">Design</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="bg-white px-3 py-1 rounded-full border">Develop</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="bg-white px-3 py-1 rounded-full border">Test</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="bg-white px-3 py-1 rounded-full border">Deploy</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Working Prototype Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Monitor className="w-7 h-7 text-green-600" />
              Working Prototype Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Interactive Learning</h3>
                <p className="text-sm text-gray-600">Disaster education modules with games and quizzes</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <PlayCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Virtual Drills</h3>
                <p className="text-sm text-gray-600">Immersive emergency response simulations</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <MessageCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">AI Assistant</h3>
                <p className="text-sm text-gray-600">24/7 disaster guidance and support chatbot</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PresentationSlide;