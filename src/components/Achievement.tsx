import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Trophy, Crown, Medal, Star, Target, Zap, Shield, Sword, Award, Lock, CheckCircle, TrendingUp } from "lucide-react";

export function Achievements() {
    const playerStats = {
        level: 12,
        totalXP: 15750,
        achievementsUnlocked: 18,
        totalAchievements: 45,
        rank: "Intermediate Fighter",
        nextRank: "Advanced Warrior"
    };

    const achievementCategories = [
        {
            name: "Combat Mastery",
            icon: Sword,
            color: "text-primary",
            bgColor: "bg-primary/10",
            borderColor: "border-primary/30",
            completed: 8,
            total: 12,
            achievements: [
                {
                    id: 1,
                    name: "First Blood",
                    description: "Complete your first workout",
                    rarity: "Common",
                    xp: 50,
                    unlocked: true,
                    icon: "🥊",
                    progress: 1,
                    maxProgress: 1
                },
                {
                    id: 2,
                    name: "Combo King",
                    description: "Land 1000 perfect combos",
                    rarity: "Rare",
                    xp: 200,
                    unlocked: true,
                    icon: "👑",
                    progress: 1000,
                    maxProgress: 1000
                },
                {
                    id: 3,
                    name: "Heavy Hitter",
                    description: "Complete 50 heavy bag sessions",
                    rarity: "Epic",
                    xp: 300,
                    unlocked: false,
                    icon: "💥",
                    progress: 32,
                    maxProgress: 50
                },
                {
                    id: 4,
                    name: "Legendary Striker",
                    description: "Master all striking techniques",
                    rarity: "Legendary",
                    xp: 500,
                    unlocked: false,
                    icon: "⚡",
                    progress: 3,
                    maxProgress: 8
                }
            ]
        },
        {
            name: "Endurance Master",
            icon: Shield,
            color: "text-accent",
            bgColor: "bg-accent/10",
            borderColor: "border-accent/30",
            completed: 5,
            total: 8,
            achievements: [
                {
                    id: 5,
                    name: "Marathon Fighter",
                    description: "Train for 60+ minutes in one session",
                    rarity: "Rare",
                    xp: 150,
                    unlocked: true,
                    icon: "🏃",
                    progress: 1,
                    maxProgress: 1
                },
                {
                    id: 6,
                    name: "Iron Will",
                    description: "Complete 30 consecutive training days",
                    rarity: "Epic",
                    xp: 400,
                    unlocked: false,
                    icon: "🛡️",
                    progress: 18,
                    maxProgress: 30
                }
            ]
        },
        {
            name: "Social Champion",
            icon: Crown,
            color: "text-secondary",
            bgColor: "bg-secondary/10",
            borderColor: "border-secondary/30",
            completed: 3,
            total: 10,
            achievements: [
                {
                    id: 7,
                    name: "Team Player",
                    description: "Join a training group",
                    rarity: "Common",
                    xp: 75,
                    unlocked: true,
                    icon: "🤝",
                    progress: 1,
                    maxProgress: 1
                },
                {
                    id: 8,
                    name: "Mentor",
                    description: "Help 10 rookie fighters",
                    rarity: "Epic",
                    xp: 350,
                    unlocked: false,
                    icon: "🎓",
                    progress: 3,
                    maxProgress: 10
                }
            ]
        },
        {
            name: "Milestone Crusher",
            icon: Target,
            color: "text-primary",
            bgColor: "bg-primary/10",
            borderColor: "border-primary/30",
            completed: 2,
            total: 15,
            achievements: [
                {
                    id: 9,
                    name: "Century Club",
                    description: "Complete 100 total workouts",
                    rarity: "Epic",
                    xp: 300,
                    unlocked: true,
                    icon: "💯",
                    progress: 100,
                    maxProgress: 100
                },
                {
                    id: 10,
                    name: "Thousand Warrior",
                    description: "Complete 1000 total workouts",
                    rarity: "Legendary",
                    xp: 1000,
                    unlocked: false,
                    icon: "🏆",
                    progress: 127,
                    maxProgress: 1000
                }
            ]
        }
    ];

    const recentAchievements = [
        {
            name: "Weekly Warrior",
            description: "Complete 6 workouts in a week",
            rarity: "Rare",
            xp: 200,
            timeAgo: "2 hours ago",
            icon: "⚔️"
        },
        {
            name: "Perfect Form",
            description: "Maintain 95%+ technique score for 10 sessions",
            rarity: "Epic",
            xp: 350,
            timeAgo: "1 day ago",
            icon: "✨"
        },
        {
            name: "Speed Demon",
            description: "Complete a workout in under 20 minutes",
            rarity: "Rare",
            xp: 150,
            timeAgo: "3 days ago",
            icon: "💨"
        }
    ];

    const leaderboard = [
        { rank: 1, name: "Mike 'Thunder' Johnson", xp: 25400, badge: "🥇" },
        { rank: 2, name: "Sarah 'Lightning' Chen", xp: 23100, badge: "🥈" },
        { rank: 3, name: "Alex 'Crusher' Rodriguez", xp: 21800, badge: "🥉" },
        { rank: 4, name: "Jordan 'Steel' Kim", xp: 19500, badge: "🏅" },
        { rank: 5, name: "You (John Doe)", xp: 15750, badge: "🔥", highlight: true },
        { rank: 6, name: "Riley 'Storm' Taylor", xp: 14200, badge: "⚡" }
    ];

    const getRarityColor = (rarity: string) => {
        switch (rarity) {
            case 'Common': return 'text-muted-foreground bg-muted/50';
            case 'Rare': return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30';
            case 'Epic': return 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/30';
            case 'Legendary': return 'text-accent bg-accent/20';
            default: return 'text-muted-foreground bg-muted/50';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header with Player Stats */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <Trophy className="w-8 h-8 text-accent" />
                        Hall of Fame
                    </h1>
                    <p className="text-muted-foreground">Your legendary journey awaits</p>
                </div>
                <Card className="border-accent/20">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-accent">{playerStats.achievementsUnlocked}</div>
                                <div className="text-sm text-muted-foreground">Unlocked</div>
                            </div>
                            <div className="flex-1 min-w-32">
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm">Progress</span>
                                    <span className="text-sm text-muted-foreground">
                                        {playerStats.achievementsUnlocked}/{playerStats.totalAchievements}
                                    </span>
                                </div>
                                <Progress
                                    value={(playerStats.achievementsUnlocked / playerStats.totalAchievements) * 100}
                                    className="h-2"
                                />
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">#{5}</div>
                                <div className="text-sm text-muted-foreground">Rank</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Achievements & Leaderboard */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Achievements */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-accent" />
                            Recent Victories
                        </CardTitle>
                        <CardDescription>Latest achievements unlocked</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {recentAchievements.map((achievement, index) => (
                            <div key={index} className="flex items-center gap-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                                <div className="text-2xl">{achievement.icon}</div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-bold">{achievement.name}</h4>
                                        <Badge className={getRarityColor(achievement.rarity)}>
                                            {achievement.rarity}
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Star className="w-3 h-3 text-accent" />
                                        <span className="text-xs text-accent font-medium">+{achievement.xp} XP</span>
                                        <span className="text-xs text-muted-foreground">• {achievement.timeAgo}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Leaderboard */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            Fighter Rankings
                        </CardTitle>
                        <CardDescription>Top fighters in your region</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {leaderboard.map((fighter, index) => (
                            <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${fighter.highlight ? 'bg-primary/10 border border-primary/30' : 'bg-muted/30'
                                }`}>
                                <div className="text-2xl">{fighter.badge}</div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <span className={`font-medium ${fighter.highlight ? 'text-primary' : ''}`}>
                                            {fighter.name}
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            {fighter.xp.toLocaleString()} XP
                                        </span>
                                    </div>
                                    <div className="text-sm text-muted-foreground">Rank #{fighter.rank}</div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* Achievement Categories */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold">Achievement Categories</h2>
                {achievementCategories.map((category, categoryIndex) => (
                    <Card key={categoryIndex}>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <category.icon className={`w-5 h-5 ${category.color}`} />
                                    {category.name}
                                    <Badge variant="secondary" className="ml-2">
                                        {category.completed}/{category.total}
                                    </Badge>
                                </div>
                                <Progress
                                    value={(category.completed / category.total) * 100}
                                    className="w-24 h-2"
                                />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {category.achievements.map((achievement) => (
                                    <Card key={achievement.id} className={`${achievement.unlocked ? category.bgColor : 'bg-muted/30'
                                        } ${achievement.unlocked ? category.borderColor : 'border-muted/50'}`}>
                                        <CardContent className="p-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="text-2xl">{achievement.icon}</div>
                                                <div className="flex items-center gap-2">
                                                    {achievement.unlocked ? (
                                                        <CheckCircle className="w-4 h-4 text-accent" />
                                                    ) : (
                                                        <Lock className="w-4 h-4 text-muted-foreground" />
                                                    )}
                                                    <Badge className={getRarityColor(achievement.rarity)}>
                                                        {achievement.rarity}
                                                    </Badge>
                                                </div>
                                            </div>

                                            <h4 className={`font-bold mb-2 ${achievement.unlocked ? 'text-foreground' : 'text-muted-foreground'
                                                }`}>
                                                {achievement.name}
                                            </h4>

                                            <p className="text-sm text-muted-foreground mb-3">
                                                {achievement.description}
                                            </p>

                                            {!achievement.unlocked && achievement.progress < achievement.maxProgress && (
                                                <div className="mb-3">
                                                    <div className="flex justify-between mb-1">
                                                        <span className="text-xs text-muted-foreground">Progress</span>
                                                        <span className="text-xs text-muted-foreground">
                                                            {achievement.progress}/{achievement.maxProgress}
                                                        </span>
                                                    </div>
                                                    <Progress
                                                        value={(achievement.progress / achievement.maxProgress) * 100}
                                                        className="h-1"
                                                    />
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-3 h-3 text-accent" />
                                                    <span className="text-sm text-accent font-medium">{achievement.xp} XP</span>
                                                </div>
                                                {achievement.unlocked && (
                                                    <span className="text-xs text-accent font-medium">Unlocked ✓</span>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}