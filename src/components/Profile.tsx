import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Edit, Trophy, Target, Calendar, Zap, Award, Clock, Activity } from "lucide-react";

export function Profile() {
    const userStats = {
        name: "John Doe",
        level: "Intermediate",
        joinDate: "March 2024",
        totalWorkouts: 127,
        totalHours: 89,
        streak: 12,
        rank: "Fighter"
    };

    const achievements = [
        { name: "First Knockout", description: "Complete your first workout", earned: true },
        { name: "Consistency King", description: "7-day workout streak", earned: true },
        { name: "Heavy Hitter", description: "Complete 50 workouts", earned: true },
        { name: "Champion", description: "Complete 100 workouts", earned: true },
        { name: "Master Fighter", description: "Complete 200 workouts", earned: false }
    ];

    const skillProgress = [
        { skill: "Boxing Technique", level: 78, maxLevel: 100 },
        { skill: "Muay Thai", level: 65, maxLevel: 100 },
        { skill: "Endurance", level: 82, maxLevel: 100 },
        { skill: "Power", level: 71, maxLevel: 100 }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Fighter Profile</h1>
                    <p className="text-muted-foreground">Track your journey to greatness</p>
                </div>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                </Button>
            </div>

            {/* Profile Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* User Info */}
                <Card className="lg:col-span-1">
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <Avatar className="w-20 h-20">
                                <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                                    {userStats.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="text-xl font-bold">{userStats.name}</h3>
                                <Badge variant="secondary" className="mt-1">
                                    {userStats.level} {userStats.rank}
                                </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">
                                <p>Member since {userStats.joinDate}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Activity className="w-5 h-5 text-primary" />
                            Training Stats
                        </CardTitle>
                        <CardDescription>Your overall performance metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center space-y-1">
                                <div className="text-2xl font-bold text-primary">{userStats.totalWorkouts}</div>
                                <div className="text-sm text-muted-foreground">Total Workouts</div>
                            </div>
                            <div className="text-center space-y-1">
                                <div className="text-2xl font-bold text-accent">{userStats.totalHours}</div>
                                <div className="text-sm text-muted-foreground">Hours Trained</div>
                            </div>
                            <div className="text-center space-y-1">
                                <div className="text-2xl font-bold text-secondary">{userStats.streak}</div>
                                <div className="text-sm text-muted-foreground">Day Streak</div>
                            </div>
                            <div className="text-center space-y-1">
                                <div className="text-2xl font-bold text-primary">#47</div>
                                <div className="text-sm text-muted-foreground">Global Rank</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Skills & Achievements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Skill Progress */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-primary" />
                            Skill Development
                        </CardTitle>
                        <CardDescription>Your training progression across disciplines</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {skillProgress.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium">{skill.skill}</span>
                                    <span className="text-sm text-muted-foreground">
                                        {skill.level}/{skill.maxLevel}
                                    </span>
                                </div>
                                <Progress value={skill.level} className="h-2" />
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Achievements */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-accent" />
                            Achievements
                        </CardTitle>
                        <CardDescription>Unlock badges as you progress</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {achievements.map((achievement, index) => (
                            <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${achievement.earned ? 'bg-accent/10 border border-accent/20' : 'bg-muted/30'
                                }`}>
                                <div className={`p-2 rounded-full ${achievement.earned ? 'bg-accent text-accent-foreground' : 'bg-muted'
                                    }`}>
                                    {achievement.earned ? (
                                        <Award className="w-4 h-4" />
                                    ) : (
                                        <Trophy className="w-4 h-4 text-muted-foreground" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <p className={`font-medium ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                                        }`}>
                                        {achievement.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                                </div>
                                {achievement.earned && (
                                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                                        Earned
                                    </Badge>
                                )}
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        Recent Activity
                    </CardTitle>
                    <CardDescription>Your latest training sessions</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {[
                            { activity: "Heavy Bag Training", duration: "45 min", date: "Today", intensity: "High" },
                            { activity: "Pad Work Session", duration: "30 min", date: "Yesterday", intensity: "Medium" },
                            { activity: "Shadowboxing", duration: "20 min", date: "2 days ago", intensity: "Low" },
                            { activity: "Sparring Practice", duration: "60 min", date: "3 days ago", intensity: "High" }
                        ].map((activity, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium">{activity.activity}</p>
                                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-medium">{activity.duration}</p>
                                    <Badge
                                        variant={activity.intensity === 'High' ? 'destructive' :
                                            activity.intensity === 'Medium' ? 'default' : 'secondary'}
                                        className={`text-xs ${activity.intensity === 'High' ? 'bg-primary text-primary-foreground' :
                                                activity.intensity === 'Medium' ? 'bg-secondary text-secondary-foreground' :
                                                    'bg-muted text-muted-foreground'
                                            }`}
                                    >
                                        {activity.intensity}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}