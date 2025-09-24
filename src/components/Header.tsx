import { Shield, Menu, X, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DisasterBot from "@/components/DisasterBot";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBotOpen, setIsBotOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ResQLearn
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#modules" className="text-foreground hover:text-primary transition-colors">
                Learn
              </a>
              <a href="#drills" className="text-foreground hover:text-primary transition-colors">
                Virtual Drills
              </a>
              <a href="#emergency" className="text-foreground hover:text-primary transition-colors">
                Emergency
              </a>
              <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">
                Dashboard
              </a>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsBotOpen(!isBotOpen)}
                className="text-foreground hover:text-primary transition-colors"
              >
                <Bot className="h-5 w-5" />
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <nav className="md:hidden mt-4 py-4 border-t border-border">
                <div className="flex flex-col space-y-4">
                  <a href="#modules" className="text-foreground hover:text-primary transition-colors">
                    Learn
                  </a>
                  <a href="#drills" className="text-foreground hover:text-primary transition-colors">
                    Virtual Drills
                  </a>
                  <a href="#emergency" className="text-foreground hover:text-primary transition-colors">
                    Emergency
                  </a>
                  <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">
                    Dashboard
                  </a>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setIsBotOpen(!isBotOpen)}
                    className="text-foreground hover:text-primary transition-colors justify-start"
                  >
                    <Bot className="h-5 w-5 mr-2" />
                    ResQ Bot
                  </Button>
                </div>
              </nav>
            )}
          </div>
        </header>
        
        {/* Include DisasterBot here */}
        <DisasterBot isOpen={isBotOpen} onToggle={() => setIsBotOpen(!isBotOpen)} />
      </>
    );
};

export default Header;