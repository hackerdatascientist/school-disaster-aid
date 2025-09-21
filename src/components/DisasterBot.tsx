import { useState, useEffect } from "react";
import { Bot, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface DisasterBotProps {
  isOpen: boolean;
  onToggle: () => void;
}

const DisasterBot = ({ isOpen, onToggle }: DisasterBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! 👋 I'm ResQ Bot, your disaster safety helper! I can teach you about earthquake, fire, and flood safety. What would you like to learn about today?",
      isBot: true,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const disasterResponses = {
    earthquake: {
      keywords: ["earthquake", "quake", "tremor", "shaking"],
      response: "🏠 **Earthquake Safety Tips:**\n\n✅ **DO:**\n• Drop, Cover, and Hold On\n• Get under a strong desk or table\n• Stay away from windows and heavy objects\n• If outside, move away from buildings\n\n❌ **DON'T:**\n• Run outside during shaking\n• Stand in doorways\n• Use elevators\n\nRemember: Most injuries happen from falling objects, not the earthquake itself!"
    },
    fire: {
      keywords: ["fire", "smoke", "burn", "evacuation"],
      response: "🔥 **Fire Safety Tips:**\n\n✅ **DO:**\n• Stay low and crawl under smoke\n• Feel doors before opening them\n• Use stairs, never elevators\n• Meet at your family meeting point\n• Call 911 once you're safe outside\n\n❌ **DON'T:**\n• Hide in closets or under beds\n• Go back inside for belongings\n• Open hot doors\n• Use water on electrical fires\n\nRemember: Get out fast and stay out!"
    },
    flood: {
      keywords: ["flood", "water", "rain", "storm"],
      response: "🌊 **Flood Safety Tips:**\n\n✅ **DO:**\n• Move to higher ground immediately\n• Avoid walking in moving water\n• Listen to emergency broadcasts\n• Have an emergency kit ready\n\n❌ **DON'T:**\n• Drive through flooded roads\n• Walk in fast-moving water\n• Touch electrical equipment if wet\n• Drink flood water\n\nRemember: Turn Around, Don't Drown! Just 6 inches of moving water can knock you down!"
    },
    general: {
      keywords: ["help", "emergency", "scared", "what to do", "disaster"],
      response: "🆘 **General Emergency Tips:**\n\n📞 **Important Numbers:**\n• Emergency: 911\n• Family contact: (Ask your parents for this number)\n\n🎒 **Emergency Kit Should Have:**\n• Water and snacks\n• Flashlight and batteries\n• First aid supplies\n• Important documents\n\n😊 **Stay Calm:**\n• Take deep breaths\n• Follow your family emergency plan\n• Listen to trusted adults\n• Remember your training!\n\nYou're prepared and you've got this! 💪"
    }
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Check for specific disaster types
    for (const [key, disaster] of Object.entries(disasterResponses)) {
      if (disaster.keywords.some(keyword => message.includes(keyword))) {
        return disaster.response;
      }
    }
    
    // Check for greetings
    if (message.includes("hi") || message.includes("hello") || message.includes("hey")) {
      return "Hello! 😊 I'm here to help you learn about staying safe during disasters. You can ask me about:\n\n🏠 Earthquake safety\n🔥 Fire safety\n🌊 Flood safety\n🆘 General emergency tips\n\nWhat would you like to know?";
    }
    
    // Check for thanks
    if (message.includes("thank") || message.includes("thanks")) {
      return "You're very welcome! 😊 Remember, being prepared is the best way to stay safe. Keep practicing what you've learned, and don't hesitate to ask if you have more questions! Stay safe! 🌟";
    }
    
    // Check for fear/worry expressions
    if (message.includes("scared") || message.includes("afraid") || message.includes("worry")) {
      return "It's totally normal to feel worried about disasters sometimes. 🤗 But remember:\n\n• You're learning how to be safe!\n• Your family and school have plans to protect you\n• Practice makes you more confident\n• Knowledge helps you feel prepared\n\nWhat specific thing would you like to learn about to feel more prepared?";
    }
    
    // Default response
    return "That's a great question! 🤔 I can help you with:\n\n🏠 **Earthquake** - Drop, Cover, Hold On\n🔥 **Fire** - Get low and get out\n🌊 **Flood** - Get to higher ground\n🆘 **Emergency** - General safety tips\n\nJust type one of these topics, and I'll give you helpful tips!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed top-20 right-6 z-50 w-80 h-96">
          <Card className="h-full flex flex-col shadow-2xl border-2 border-primary/20">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
              <div className="flex items-center space-x-2">
                <Bot className="h-6 w-6" />
                <span className="font-bold">ResQ Bot</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-lg text-sm whitespace-pre-line ${
                        message.isBot
                          ? "bg-secondary/10 text-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask me about disaster safety..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default DisasterBot;