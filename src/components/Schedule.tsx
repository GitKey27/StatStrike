import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Calendar, Target, Zap, Crown, Sword, Shield, Star, Clock, Award, CheckCircle, Lock } from "lucide-react";

export function Schedule() {
    const currentWeek = {
        xp: 1250,
        maxXp: 2000,
        level: 12,
        streak: 7
    };

    const dailyQuests = [
        {
            id: 1,
            title: "Morning Warrior",
            description: "Complete a 30-min workout before 10 AM",
            xp: 100,
            type: "daily",
            completed: true,
            difficulty: "Easy",
            icon: Zap
        },
        {
            id: 2,
            title: "Combo Master",
            description: "Land 50 perfect combos",
            xp: 150,
            type: "daily",
            completed: false,
            difficulty: "Medium",
            icon: Target
        },
        {
            id: 3,
            title: "Endurance Challenge",
            description: "Train for 45+ minutes without breaks",
            xp: 200,
            type: "daily",
            completed: false,
            difficulty: "Hard",
            icon: Shield
        }
    ];

    const weeklyBoss = {
        name: "Iron Fist Challenge",
        description: "Complete 6 high-intensity workouts this week",
        progress: 4,
        total: 6,
        reward: "500 XP + Golden Gloves Badge",
        timeLeft: "3 days",
        difficulty: "Boss",
        unlocked: true
    };

    const trainingPrograms = [
        {
            name: "Rookie Bootcamp",
            description: "7-day beginner program",
            progress: 7,
            total: 7,
            status: "completed",
            xp: 350,
            badge: "Rookie Fighter"
        },
        {
            name: "Warrior's Path",
            description: "14-day intermediate challenge",
            progress: 8,
            total: 14,
            status: "active",
            xp: 700,
            badge: "Battle Warrior"
        },
        {
            name: "Champion's Trial",
            description: "21-day advanced mastery",
            progress: 0,
            total: 21,
            status: "locked",
            xp: 1200,
            badge: "Fight Champion",
            requirement: "Complete Warrior's Path"
        }
    ];

    const weekDays = [
        { day: "Mon", date: "8", completed: true, type: "Heavy Bag", xp: 120 },
        { day: "Tue", date: "9", completed: true, type: "Pad Work", xp: 100 },
        { day: "Wed", date: "10", completed: true, type: "Sparring", xp: 180 },
        { day: "Thu", date: "11", completed: true, type: "Conditioning", xp: 140 },
        { day: "Fri", date: "12", completed: true, type: "Heavy Bag", xp: 160 },
        { day: "Sat", date: "13", completed: true, type: "Rest Day", xp: 50 },
        { day: "Sun", date: "14", completed: true, type: "Technique", xp: 130 }
    ];

    return (
        <div className="space-y-6">
            {/* Header with Level Progress */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <Calendar className="w-8 h-8 text-primary" />
                        Fighter's Schedule
                    </h1>
                    <p className="text-muted-foreground">Level up your training game</p>
                </div>
                <Card className="border-accent/20">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">LVL {currentWeek.level}</div>
                                <div className="text-sm text-muted-foreground">Fighter</div>
                            </div>
                            <div className="flex-1 min-w-32">
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm">XP Progress</span>
                                    <span className="text-sm text-muted-foreground">{currentWeek.xp}/{currentWeek.maxXp}</span>
                                </div>
                                <Progress value={(currentWeek.xp / currentWeek.maxXp) * 100} className="h-2" />
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-accent">{currentWeek.streak}</div>
                                <div className="text-sm text-muted-foreground">Day Streak</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Weekly Boss Challenge */}
            <Card className="border-primary/30 bg-gradient-to-r from-primary/5 to-transparent">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Crown className="w-5 h-5 text-accent" />
                        Weekly Boss Challenge
                        <Badge variant="destructive" className="bg-primary text-primary-foreground">
                            {weeklyBoss.difficulty}
                        </Badge>
                    </CardTitle>
                    <CardDescription>{weeklyBoss.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-lg">{weeklyBoss.name}</h3>
                                <p className="text-sm text-muted-foreground">Time remaining: {weeklyBoss.timeLeft}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-accent">{weeklyBoss.reward}</p>
                                <p className="text-sm text-muted-foreground">Legendary Reward</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm">Boss Health</span>
                                <span className="text-sm text-muted-foreground">{weeklyBoss.progress}/{weeklyBoss.total}</span>
                            </div>
                            <Progress
                                value={(weeklyBoss.progress / weeklyBoss.total) * 100}
                                className="h-3 bg-muted/50"
                            />
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Sword className="w-4 h-4 mr-2" />
                            Continue Battle
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Training Programs & Daily Quests */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Training Programs */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-primary" />
                            Training Campaigns
                        </CardTitle>
                        <CardDescription>Epic journeys to mastery</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {trainingPrograms.map((program, index) => (
                            <div key={index} className={`p-4 rounded-lg border ${program.status === 'completed' ? 'bg-accent/10 border-accent/30' :
                                    program.status === 'active' ? 'bg-primary/10 border-primary/30' :
                                        'bg-muted/30 border-muted/50'
                                }`}>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-bold">{program.name}</h4>
                                        {program.status === 'completed' && (
                                            <CheckCircle className="w-4 h-4 text-accent" />
                                        )}
                                        {program.status === 'locked' && (
                                            <Lock className="w-4 h-4 text-muted-foreground" />
                                        )}
                                    </div>
                                    <Badge variant="secondary" className={`${program.status === 'completed' ? 'bg-accent text-accent-foreground' :
                                            program.status === 'active' ? 'bg-primary text-primary-foreground' :
                                                'bg-muted text-muted-foreground'
                                        }`}>
                                        {program.xp} XP
                                    </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                                {program.status === 'locked' && (
                                    <p className="text-xs text-muted-foreground mb-2">🔒 {program.requirement}</p>
                                )}
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm">Progress</span>
                                    <span className="text-sm text-muted-foreground">{program.progress}/{program.total}</span>
                                </div>
                                <Progress
                                    value={(program.progress / program.total) * 100}
                                    className="h-2 mb-2"
                                />
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-accent">🏆 {program.badge}</span>
                                    <Button
                                        size="sm"
                                        variant={program.status === 'locked' ? 'secondary' : 'default'}
                                        disabled={program.status === 'locked' || program.status === 'completed'}
                                        className={program.status === 'active' ? 'bg-primary hover:bg-primary/90' : ''}
                                    >
                                        {program.status === 'completed' ? 'Completed' :
                                            program.status === 'active' ? 'Continue' :
                                                'Locked'}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Daily Quests */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-primary" />
                            Daily Quests
                        </CardTitle>
                        <CardDescription>Complete today's challenges</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {dailyQuests.map((quest) => (
                            <div key={quest.id} className={`p-4 rounded-lg border ${quest.completed ? 'bg-accent/10 border-accent/30' : 'bg-card border-border'
                                }`}>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <quest.icon className={`w-5 h-5 ${quest.completed ? 'text-accent' : 'text-primary'
                                            }`} />
                                        <h4 className="font-bold">{quest.title}</h4>
                                        {quest.completed && (
                                            <CheckCircle className="w-4 h-4 text-accent" />
                                        )}
                                    </div>
                                    <Badge variant={
                                        quest.difficulty === 'Easy' ? 'secondary' :
                                            quest.difficulty === 'Medium' ? 'default' : 'destructive'
                                    } className={`${quest.difficulty === 'Easy' ? 'bg-muted text-muted-foreground' :
                                            quest.difficulty === 'Medium' ? 'bg-secondary text-secondary-foreground' :
                                                'bg-primary text-primary-foreground'
                                        }`}>
                                        {quest.difficulty}
                                    </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">{quest.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Star className="w-4 h-4 text-accent" />
                                        <span className="text-sm font-medium text-accent">{quest.xp} XP</span>
                                    </div>
                                    <Button
                                        size="sm"
                                        variant={quest.completed ? "secondary" : "default"}
                                        disabled={quest.completed}
                                        className={!quest.completed ? 'bg-primary hover:bg-primary/90' : ''}
                                    >
                                        {quest.completed ? 'Completed' : 'Start Quest'}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* Weekly Calendar */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        This Week's Battle Log
                    </CardTitle>
                    <CardDescription>Your training victories this week</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-7 gap-4">
                        {weekDays.map((day, index) => (
                            <div key={index} className={`p-4 rounded-lg border text-center ${day.completed ? 'bg-accent/10 border-accent/30' : 'bg-muted/30 border-muted/50'
                                }`}>
                                <div className="text-sm text-muted-foreground">{day.day}</div>
                                <div className="text-lg font-bold mb-1">{day.date}</div>
                                <div className={`text-xs mb-2 ${day.type === 'Rest Day' ? 'text-muted-foreground' : 'text-primary'
                                    }`}>
                                    {day.type}
                                </div>
                                {day.completed && (
                                    <>
                                        <CheckCircle className="w-4 h-4 text-accent mx-auto mb-1" />
                                        <div className="text-xs text-accent font-medium">+{day.xp} XP</div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}