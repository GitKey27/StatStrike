import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Activity, Target, TrendingUp, Zap, Clock, Award } from "lucide-react";

export function Dashboard() {
    const todayStats = {
        workoutsCompleted: 2,
        totalTime: 75,
        caloriesBurned: 450,
        targetHits: 287
    };

    const weeklyProgress = {
        workouts: { current: 4, target: 6 },
        technique: { current: 78, target: 85 },
        endurance: { current: 65, target: 80 }
    };

    const recentWorkouts = [
        { type: "Heavy Bag", duration: 30, intensity: "High", date: "Today" },
        { type: "Pad Work", duration: 45, intensity: "Medium", date: "Yesterday" },
        { type: "Shadowboxing", duration: 20, intensity: "Low", date: "2 days ago" }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Welcome back, Fighter!</h1>
                    <p className="text-muted-foreground">Ready to push your limits today?</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Zap className="w-4 h-4 mr-2" />
                    Start Workout
                </Button>
            </div>

            {/* Today's Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-2">
                            <Activity className="w-5 h-5 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">Workouts</p>
                                <p className="text-2xl font-bold text-foreground">{todayStats.workoutsCompleted}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-2">
                            <Clock className="w-5 h-5 text-accent" />
                            <div>
                                <p className="text-sm text-muted-foreground">Time (min)</p>
                                <p className="text-2xl font-bold text-foreground">{todayStats.totalTime}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-2">
                            <TrendingUp className="w-5 h-5 text-secondary" />
                            <div>
                                <p className="text-sm text-muted-foreground">Calories</p>
                                <p className="text-2xl font-bold text-foreground">{todayStats.caloriesBurned}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-2">
                            <Target className="w-5 h-5 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">Target Hits</p>
                                <p className="text-2xl font-bold text-foreground">{todayStats.targetHits}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Progress & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Weekly Progress */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-accent" />
                            Weekly Progress
                        </CardTitle>
                        <CardDescription>Track your goals for this week</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm">Workouts</span>
                                <span className="text-sm text-muted-foreground">
                                    {weeklyProgress.workouts.current}/{weeklyProgress.workouts.target}
                                </span>
                            </div>
                            <Progress
                                value={(weeklyProgress.workouts.current / weeklyProgress.workouts.target) * 100}
                                className="h-2"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm">Technique Score</span>
                                <span className="text-sm text-muted-foreground">
                                    {weeklyProgress.technique.current}%
                                </span>
                            </div>
                            <Progress
                                value={weeklyProgress.technique.current}
                                className="h-2"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm">Endurance Level</span>
                                <span className="text-sm text-muted-foreground">
                                    {weeklyProgress.endurance.current}%
                                </span>
                            </div>
                            <Progress
                                value={weeklyProgress.endurance.current}
                                className="h-2"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Workouts */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Workouts</CardTitle>
                        <CardDescription>Your latest training sessions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {recentWorkouts.map((workout, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                                    <div>
                                        <p className="font-medium">{workout.type}</p>
                                        <p className="text-sm text-muted-foreground">{workout.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm">{workout.duration} min</p>
                                        <Badge
                                            variant={workout.intensity === 'High' ? 'destructive' :
                                                workout.intensity === 'Medium' ? 'default' : 'secondary'}
                                            className={`text-xs ${workout.intensity === 'High' ? 'bg-primary text-primary-foreground' :
                                                    workout.intensity === 'Medium' ? 'bg-secondary text-secondary-foreground' :
                                                        'bg-muted text-muted-foreground'
                                                }`}
                                        >
                                            {workout.intensity}
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}