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
      response: "🏠 **EARTHQUAKE SAFETY GUIDE**\n\n📖 **What is an Earthquake?**\nEarthquakes happen when the ground shakes because rocks deep underground move suddenly. They can be gentle or very strong!\n\n✅ **DO THIS:**\n• DROP to your hands and knees\n• Take COVER under a strong desk/table\n• HOLD ON and protect your head\n• Stay away from windows and tall furniture\n• If outside, move away from buildings\n• Count to 60 after shaking stops before moving\n\n❌ **DON'T DO THIS:**\n• Don't run outside during shaking\n• Don't stand in doorways\n• Don't use elevators\n• Don't hide under beds\n\n📞 **EMERGENCY CONTACTS:**\n• National Emergency: 112\n• Fire Brigade: 101\n• Police: 100\n• Medical Emergency: 108\n\n💡 **Remember:** Most injuries happen from falling objects, not the earthquake itself! Practice makes you safer! 🌟"
    },
    fire: {
      keywords: ["fire", "smoke", "burn", "evacuation"],
      response: "🔥 **FIRE SAFETY GUIDE**\n\n📖 **What is Fire?**\nFire is very hot flames that can spread quickly and create dangerous smoke. Smoke can make it hard to see and breathe!\n\n✅ **DO THIS:**\n• Get LOW and crawl under smoke\n• Feel doors with back of hand before opening\n• Use stairs, NEVER elevators\n• Go to your family meeting point outside\n• Once outside, STAY outside\n• Call for help from a safe place\n\n❌ **DON'T DO THIS:**\n• Don't hide in closets or under beds\n• Don't go back inside for toys or belongings\n• Don't open hot doors\n• Don't use water on electrical fires\n• Don't breathe smoke\n\n📞 **EMERGENCY CONTACTS:**\n• Fire Brigade: 101\n• National Emergency: 112\n• Police: 100\n• Medical Emergency: 108\n\n💡 **Remember:** Get out fast and stay out! Your safety is more important than any belonging! 🚨"
    },
    flood: {
      keywords: ["flood", "water", "rain", "storm"],
      response: "🌊 **FLOOD SAFETY GUIDE**\n\n📖 **What is a Flood?**\nA flood happens when too much water covers normally dry land. This can happen from heavy rain, rivers overflowing, or storms!\n\n✅ **DO THIS:**\n• Move to higher ground immediately\n• Listen to weather warnings on radio/TV\n• Have your emergency kit ready\n• Stay with trusted adults\n• Avoid walking in any moving water\n• Wait for help if trapped\n\n❌ **DON'T DO THIS:**\n• Don't drive or walk through flooded roads\n• Don't play in flood water\n• Don't touch electrical things if you're wet\n• Don't drink flood water\n• Don't go near storm drains\n\n📞 **EMERGENCY CONTACTS:**\n• National Emergency: 112\n• Disaster Management: 1070\n• Police: 100\n• Medical Emergency: 108\n\n💡 **Remember:** Turn Around, Don't Drown! Just 6 inches of moving water can knock you down! 🌈"
    },
    general: {
      keywords: ["help", "emergency", "scared", "what to do", "disaster", "contact", "number"],
      response: "🆘 **EMERGENCY HELP CENTER**\n\n📞 **IMPORTANT EMERGENCY NUMBERS:**\n• **National Emergency: 112** (Works everywhere!)\n• **Fire Brigade: 101** (For fires)\n• **Police: 100** (For safety help)\n• **Medical Emergency: 108** (For injuries)\n• **Disaster Management: 1070** (For big emergencies)\n• **Child Helpline: 1098** (Just for kids!)\n\n🎒 **Emergency Kit Basics:**\n• Water bottles and energy bars\n• Flashlight with extra batteries\n• First aid band-aids\n• Important family phone numbers\n• Small radio\n\n😊 **Stay Calm Tips:**\n• Take 3 deep breaths\n• Find a trusted adult\n• Remember your safety training\n• You're braver than you think!\n\n💡 **Remember:** It's always okay to ask for help! Adults are here to keep you safe! 🌟"
    },
    contacts: {
      keywords: ["contact", "number", "phone", "call", "help line"],
      response: "📞 **ALL EMERGENCY CONTACTS**\n\n🚨 **National Numbers:**\n• **112** - National Emergency (FREE from any phone!)\n• **101** - Fire Brigade\n• **100** - Police Help\n• **108** - Medical Emergency\n• **1070** - Disaster Management\n• **1098** - Child Helpline (Special for kids!)\n\n🏥 **When to Call:**\n• **112/100** - If you're in danger\n• **101** - If you see fire or smoke\n• **108** - If someone is hurt\n• **1070** - During big disasters\n• **1098** - If you need to talk to someone\n\n📱 **How to Call:**\n• Stay calm and speak clearly\n• Tell them your name and location\n• Explain what help you need\n• Listen to their instructions\n\n💡 **Remember:** These numbers are FREE and available 24/7! Don't hesitate to call if you need help! 🤗"
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