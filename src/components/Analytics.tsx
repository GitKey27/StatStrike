import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Award, Target, Activity } from "lucide-react";

export function Analytics() {
    const performanceData = [
        { date: "Jan 1", technique: 65, endurance: 70, power: 60 },
        { date: "Jan 8", technique: 68, endurance: 72, power: 65 },
        { date: "Jan 15", technique: 72, endurance: 75, power: 68 },
        { date: "Jan 22", technique: 75, endurance: 78, power: 72 },
        { date: "Jan 29", technique: 78, endurance: 80, power: 75 },
        { date: "Feb 5", technique: 80, endurance: 82, power: 78 },
        { date: "Feb 12", technique: 83, endurance: 85, power: 80 }
    ];

    const workoutFrequency = [
        { day: "Mon", workouts: 4 },
        { day: "Tue", workouts: 3 },
        { day: "Wed", workouts: 5 },
        { day: "Thu", workouts: 2 },
        { day: "Fri", workouts: 4 },
        { day: "Sat", workouts: 3 },
        { day: "Sun", workouts: 1 }
    ];

    const techniqueDistribution = [
        { name: "Jab", value: 35, color: "#8884d8" },
        { name: "Cross", value: 25, color: "#82ca9d" },
        { name: "Hook", value: 20, color: "#ffc658" },
        { name: "Uppercut", value: 10, color: "#ff7300" },
        { name: "Kicks", value: 10, color: "#0088fe" }
    ];

    const monthlyProgress = [
        { month: "Oct", sessions: 18, avgScore: 72 },
        { month: "Nov", sessions: 22, avgScore: 75 },
        { month: "Dec", sessions: 25, avgScore: 78 },
        { month: "Jan", sessions: 28, avgScore: 82 },
        { month: "Feb", sessions: 24, avgScore: 85 }
    ];

    const achievements = [
        { title: "Consistency Master", description: "30 days training streak", icon: "🔥", earned: true },
        { title: "Power House", description: "Power score above 80", icon: "💪", earned: true },
        { title: "Technique Expert", description: "90%+ accuracy for a week", icon: "🎯", earned: false },
        { title: "Endurance King", description: "60+ minutes session", icon: "⏱️", earned: true }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold">Performance Analytics</h1>
                <p className="text-muted-foreground">Deep insights into your training progress</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-2">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">Overall Score</p>
                                <p className="text-2xl font-bold text-foreground">85</p>
                                <p className="text-xs text-primary">+12% this month</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-2">
                            <Target className="w-5 h-5 text-accent" />
                            <div>
                                <p className="text-sm text-muted-foreground">Avg Accuracy</p>
                                <p className="text-2xl font-bold text-foreground">76%</p>
                                <p className="text-xs text-accent">+8% this week</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-2">
                            <Activity className="w-5 h-5 text-secondary" />
                            <div>
                                <p className="text-sm text-muted-foreground">Sessions</p>
                                <p className="text-2xl font-bold text-foreground">24</p>
                                <p className="text-xs text-secondary">This month</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-2">
                            <Award className="w-5 h-5 text-accent" />
                            <div>
                                <p className="text-sm text-muted-foreground">Achievements</p>
                                <p className="text-2xl font-bold text-foreground">12</p>
                                <p className="text-xs text-accent">3 earned this week</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Tabs */}
            <Tabs defaultValue="performance" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="performance">Performance</TabsTrigger>
                    <TabsTrigger value="frequency">Frequency</TabsTrigger>
                    <TabsTrigger value="techniques">Techniques</TabsTrigger>
                    <TabsTrigger value="progress">Progress</TabsTrigger>
                </TabsList>

                <TabsContent value="performance" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Performance Trends</CardTitle>
                            <CardDescription>Track your improvement across key metrics</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={performanceData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis domain={[0, 100]} />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="technique" stroke="var(--color-chart-1)" strokeWidth={2} />
                                    <Line type="monotone" dataKey="endurance" stroke="var(--color-chart-2)" strokeWidth={2} />
                                    <Line type="monotone" dataKey="power" stroke="var(--color-chart-3)" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="frequency" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Weekly Workout Frequency</CardTitle>
                            <CardDescription>Your training consistency throughout the week</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={workoutFrequency}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="day" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="workouts" fill="var(--color-chart-1)" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="techniques" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Technique Distribution</CardTitle>
                            <CardDescription>Breakdown of techniques used in training</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={techniqueDistribution}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {techniqueDistribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="progress" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Monthly Progress</CardTitle>
                            <CardDescription>Sessions and average scores over time</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={monthlyProgress}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis yAxisId="sessions" orientation="left" />
                                    <YAxis yAxisId="score" orientation="right" />
                                    <Tooltip />
                                    <Bar yAxisId="sessions" dataKey="sessions" fill="var(--color-chart-2)" />
                                    <Line yAxisId="score" type="monotone" dataKey="avgScore" stroke="var(--color-chart-1)" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            {/* Achievements */}
            <Card>
                <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                    <CardDescription>Your training milestones and accomplishments</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-lg border ${achievement.earned ? 'bg-accent/10 border-accent' : 'bg-muted/30 border-muted'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{achievement.icon}</span>
                                    <div>
                                        <h4 className={`font-semibold ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                                            {achievement.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                                    </div>
                                    {achievement.earned && (
                                        <div className="ml-auto">
                                            <Award className="w-5 h-5 text-accent" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}