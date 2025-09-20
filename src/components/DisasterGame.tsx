import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Star, 
  Trophy, 
  Gamepad2, 
  CheckCircle, 
  X,
  ArrowRight,
  RotateCcw,
  Home
} from "lucide-react";

interface Question {
  id: number;
  type: 'mcq' | 'true-false' | 'drag-drop' | 'image-recognition';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  points: number;
  explanation?: string;
  imageUrl?: string;
}

interface Level {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  questions: Question[];
  unlocked: boolean;
  completed: boolean;
  stars: number;
}

const gameData: Level[] = [
  {
    id: 1,
    title: "Earthquake Safety",
    description: "Learn Drop, Cover, and Hold techniques",
    icon: "🌍",
    color: "from-amber-500 to-orange-500",
    unlocked: true,
    completed: false,
    stars: 0,
    questions: [
      {
        id: 1,
        type: 'mcq',
        question: "What should you do first when you feel an earthquake?",
        options: ["Run outside immediately", "Drop to hands and knees", "Stand in a doorway", "Hide under stairs"],
        correctAnswer: "Drop to hands and knees",
        points: 10,
        explanation: "Drop, Cover, and Hold is the internationally recommended response to earthquakes."
      },
      {
        id: 2,
        type: 'true-false',
        question: "During an earthquake, you should run outside immediately.",
        correctAnswer: "false",
        points: 10,
        explanation: "Most injuries occur when people try to move during shaking. Stay where you are and take cover."
      },
      {
        id: 3,
        type: 'mcq',
        question: "What is the safest place to take cover during an earthquake?",
        options: ["Under a sturdy desk", "In a doorway", "Near a window", "Under stairs"],
        correctAnswer: "Under a sturdy desk",
        points: 15,
        explanation: "A sturdy desk or table provides the best protection from falling objects."
      },
      {
        id: 4,
        type: 'image-recognition',
        question: "Select all items you should include in an earthquake emergency kit:",
        options: ["Water bottles", "Flashlight", "First aid kit", "Glass items", "Battery radio"],
        correctAnswer: ["Water bottles", "Flashlight", "First aid kit", "Battery radio"],
        points: 20,
        explanation: "Emergency kits should contain essentials but avoid breakable items like glass."
      },
      {
        id: 5,
        type: 'mcq',
        question: "How long should you hold your position during an earthquake?",
        options: ["Until shaking stops", "For 10 seconds", "For 1 minute", "Until help arrives"],
        correctAnswer: "Until shaking stops",
        points: 15,
        explanation: "Continue Drop, Cover, and Hold until the shaking completely stops."
      }
    ]
  },
  {
    id: 2,
    title: "Fire Safety & Evacuation",
    description: "Master fire safety and evacuation procedures",
    icon: "🔥",
    color: "from-red-500 to-pink-500",
    unlocked: false,
    completed: false,
    stars: 0,
    questions: [
      {
        id: 6,
        type: 'mcq',
        question: "What should you do if you hear a fire alarm?",
        options: ["Wait to see if it's real", "Stop what you're doing and evacuate", "Finish your work first", "Look for smoke"],
        correctAnswer: "Stop what you're doing and evacuate",
        points: 10,
        explanation: "Always treat fire alarms as real emergencies and evacuate immediately."
      },
      {
        id: 7,
        type: 'true-false',
        question: "You should use elevators during a fire evacuation.",
        correctAnswer: "false",
        points: 10,
        explanation: "Never use elevators during fires - they may malfunction or fill with smoke."
      },
      {
        id: 8,
        type: 'mcq',
        question: "If you encounter smoke while evacuating, you should:",
        options: ["Walk normally", "Crawl low under the smoke", "Hold your breath and run", "Turn back"],
        correctAnswer: "Crawl low under the smoke",
        points: 15,
        explanation: "Smoke rises, so cleaner air is found closer to the floor."
      },
      {
        id: 9,
        type: 'image-recognition',
        question: "Select all correct fire evacuation signs:",
        options: ["Green exit arrow", "Red fire extinguisher", "Blue mandatory sign", "Yellow warning sign"],
        correctAnswer: ["Green exit arrow"],
        points: 20,
        explanation: "Green signs with white symbols indicate emergency exits and evacuation routes."
      },
      {
        id: 10,
        type: 'mcq',
        question: "Where should you meet after evacuating from a fire?",
        options: ["Near the building", "At the designated assembly point", "In the parking lot", "Wherever is convenient"],
        correctAnswer: "At the designated assembly point",
        points: 15,
        explanation: "Assembly points help emergency responders account for everyone safely."
      }
    ]
  },
  {
    id: 3,
    title: "Flood Preparedness",
    description: "Navigate flood emergencies safely",
    icon: "🌊",
    color: "from-blue-500 to-cyan-500",
    unlocked: false,
    completed: false,
    stars: 0,
    questions: [
      {
        id: 11,
        type: 'mcq',
        question: "During a flood warning, what should you do first?",
        options: ["Wait and see", "Move to higher ground", "Stay in basement", "Continue normal activities"],
        correctAnswer: "Move to higher ground",
        points: 10,
        explanation: "Moving to higher ground is the most important action during flood warnings."
      },
      {
        id: 12,
        type: 'true-false',
        question: "It's safe to walk through moving floodwater if it's only ankle deep.",
        correctAnswer: "false",
        points: 10,
        explanation: "Just 6 inches of moving water can knock you down. Avoid all moving floodwater."
      },
      {
        id: 13,
        type: 'mcq',
        question: "What depth of water can float a car?",
        options: ["6 inches", "12 inches", "24 inches", "36 inches"],
        correctAnswer: "12 inches",
        points: 15,
        explanation: "Just 12 inches of rushing water can carry away a vehicle."
      },
      {
        id: 14,
        type: 'image-recognition',
        question: "Select items to include in a flood emergency kit:",
        options: ["Waterproof bags", "Life jackets", "Electronic devices", "Important documents copies"],
        correctAnswer: ["Waterproof bags", "Life jackets", "Important documents copies"],
        points: 20,
        explanation: "Waterproof protection and flotation devices are essential for flood preparedness."
      },
      {
        id: 15,
        type: 'mcq',
        question: "If trapped in a building during flooding, where should you go?",
        options: ["Basement", "First floor", "Highest floor", "Outside"],
        correctAnswer: "Highest floor",
        points: 15,
        explanation: "Move to the highest floor and wait for rescue if evacuation isn't possible."
      }
    ]
  }
];

interface DisasterGameProps {
  isOpen: boolean;
  onClose: () => void;
  initialModule?: number;
}

const DisasterGame = ({ isOpen, onClose, initialModule = 0 }: DisasterGameProps) => {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'results'>('menu');
  const [currentLevel, setCurrentLevel] = useState<number>(initialModule + 1 || 1);

  // Auto-start game if opened from a specific module
  useEffect(() => {
    if (isOpen && initialModule !== undefined) {
      setCurrentLevel(initialModule + 1);
      setGameState('playing');
    }
  }, [isOpen, initialModule]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [levels, setLevels] = useState<Level[]>(gameData);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState<string>('');

  const currentLevelData = levels.find(l => l.id === currentLevel);
  const currentQuestionData = currentLevelData?.questions[currentQuestion];

  const calculateStars = (score: number, totalQuestions: number): number => {
    const percentage = (score / (totalQuestions * 15)) * 100; // Assuming average 15 points per question
    if (percentage >= 90) return 3;
    if (percentage >= 70) return 2;
    if (percentage >= 50) return 1;
    return 0;
  };

  const handleAnswer = (answer: string | string[]) => {
    if (!currentQuestionData) return;
    
    const isCorrect = Array.isArray(answer) 
      ? JSON.stringify(answer.sort()) === JSON.stringify((currentQuestionData.correctAnswer as string[]).sort())
      : answer === currentQuestionData.correctAnswer;
    
    setUserAnswer(Array.isArray(answer) ? answer.join(', ') : answer);
    
    if (isCorrect) {
      setScore(prev => prev + currentQuestionData.points);
    }
    
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setUserAnswer('');
    setSelectedAnswers([]);
    
    if (currentQuestion < (currentLevelData?.questions.length || 0) - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Level completed
      const stars = calculateStars(score, currentLevelData?.questions.length || 0);
      const updatedLevels = levels.map(level => {
        if (level.id === currentLevel) {
          return { ...level, completed: true, stars };
        }
        if (level.id === currentLevel + 1 && stars >= 2) {
          return { ...level, unlocked: true };
        }
        return level;
      });
      
      setLevels(updatedLevels);
      setGameState('results');
    }
  };

  const startLevel = (levelId: number) => {
    setCurrentLevel(levelId);
    setCurrentQuestion(0);
    setScore(0);
    setGameState('playing');
    setShowExplanation(false);
    setUserAnswer('');
  };

  const resetGame = () => {
    setGameState('menu');
    setCurrentQuestion(0);
    setScore(0);
    setShowExplanation(false);
    setUserAnswer('');
  };

  const handleMultiSelect = (option: string) => {
    if (selectedAnswers.includes(option)) {
      setSelectedAnswers(prev => prev.filter(a => a !== option));
    } else {
      setSelectedAnswers(prev => [...prev, option]);
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-primary" />
            Disaster Management Game
          </DialogTitle>
        </DialogHeader>

        {gameState === 'menu' && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Choose Your Challenge</h3>
              <p className="text-muted-foreground">Complete each level to unlock the next one!</p>
            </div>
            
            <div className="grid gap-4">
              {levels.map((level) => (
                <Card 
                  key={level.id} 
                  className={`cursor-pointer transition-all duration-300 ${
                    level.unlocked ? 'hover:shadow-lg hover:scale-105' : 'opacity-50'
                  }`}
                  onClick={() => level.unlocked && startLevel(level.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`text-2xl p-2 rounded-lg bg-gradient-to-r ${level.color}`}>
                          {level.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{level.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{level.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {level.completed && (
                          <div className="flex">
                            {[1, 2, 3].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= level.stars ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                        {level.unlocked ? (
                          <Button size="sm">
                            {level.completed ? 'Play Again' : 'Start'}
                          </Button>
                        ) : (
                          <Badge variant="secondary">Locked</Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {gameState === 'playing' && currentQuestionData && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" onClick={resetGame}>
                  <Home className="h-4 w-4" />
                </Button>
                <Badge variant="outline">
                  Question {currentQuestion + 1} of {currentLevelData?.questions.length}
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="font-semibold">{score} points</span>
              </div>
            </div>

            <Progress 
              value={((currentQuestion + 1) / (currentLevelData?.questions.length || 1)) * 100}
              className="w-full"
            />

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{currentQuestionData.question}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentQuestionData.type === 'mcq' && (
                  <div className="grid gap-2">
                    {currentQuestionData.options?.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="justify-start text-left h-auto p-4"
                        onClick={() => handleAnswer(option)}
                        disabled={showExplanation}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                )}

                {currentQuestionData.type === 'true-false' && (
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleAnswer('true')}
                      disabled={showExplanation}
                    >
                      <CheckCircle className="mr-2 h-4 w-4" />
                      True
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleAnswer('false')}
                      disabled={showExplanation}
                    >
                      <X className="mr-2 h-4 w-4" />
                      False
                    </Button>
                  </div>
                )}

                {currentQuestionData.type === 'image-recognition' && (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">Select all correct answers:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {currentQuestionData.options?.map((option, index) => (
                        <Button
                          key={index}
                          variant={selectedAnswers.includes(option) ? "default" : "outline"}
                          className="justify-start text-left h-auto p-4"
                          onClick={() => handleMultiSelect(option)}
                          disabled={showExplanation}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                    {selectedAnswers.length > 0 && !showExplanation && (
                      <Button onClick={() => handleAnswer(selectedAnswers)}>
                        Submit Answer
                      </Button>
                    )}
                  </div>
                )}

                {showExplanation && (
                  <div className="bg-muted p-4 rounded-lg space-y-2">
                    <div className="flex items-center space-x-2">
                      {userAnswer === (Array.isArray(currentQuestionData.correctAnswer) 
                        ? currentQuestionData.correctAnswer.join(', ')
                        : currentQuestionData.correctAnswer) ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )}
                      <span className="font-semibold">
                        {userAnswer === (Array.isArray(currentQuestionData.correctAnswer) 
                          ? currentQuestionData.correctAnswer.join(', ')
                          : currentQuestionData.correctAnswer) ? 'Correct!' : 'Incorrect'}
                      </span>
                    </div>
                    <p className="text-sm">{currentQuestionData.explanation}</p>
                    <Button onClick={nextQuestion} className="mt-4">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      {currentQuestion < (currentLevelData?.questions.length || 0) - 1 ? 'Next Question' : 'Finish Level'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {gameState === 'results' && (
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Level Complete!</h3>
              <div className="flex justify-center">
                {[1, 2, 3].map((star) => (
                  <Star
                    key={star}
                    className={`h-8 w-8 ${
                      star <= calculateStars(score, currentLevelData?.questions.length || 0)
                        ? 'text-yellow-500 fill-yellow-500'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">Score: {score} points</p>
                <p className="text-muted-foreground">
                  You earned {calculateStars(score, currentLevelData?.questions.length || 0)} stars!
                </p>
                {calculateStars(score, currentLevelData?.questions.length || 0) >= 2 && currentLevel < levels.length && (
                  <p className="text-green-600 font-medium">🎉 Next level unlocked!</p>
                )}
              </div>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button onClick={resetGame}>
                <Home className="mr-2 h-4 w-4" />
                Main Menu
              </Button>
              <Button onClick={() => startLevel(currentLevel)} variant="outline">
                <RotateCcw className="mr-2 h-4 w-4" />
                Play Again
              </Button>
              {currentLevel < levels.length && calculateStars(score, currentLevelData?.questions.length || 0) >= 2 && (
                <Button onClick={() => startLevel(currentLevel + 1)}>
                  Next Level
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DisasterGame;