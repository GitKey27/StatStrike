import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Brain, TrendingUp, AlertCircle, Target, Lightbulb, Star } from "lucide-react";

export function AIRecommendations() {
    const recommendations = [
        {
            type: "technique",
            title: "Improve Left Hook Form",
            description: "Your left hook accuracy has decreased by 12% this week. Focus on hip rotation and follow-through.",
            priority: "high",
            estimatedTime: 15,
            improvement: "+18% accuracy expected"
        },
        {
            type: "endurance",
            title: "Increase Cardio Sessions",
            description: "Based on your heart rate data, adding 2 more cardio sessions could boost endurance by 20%.",
            priority: "medium",
            estimatedTime: 30,
            improvement: "+20% endurance boost"
        },
        {
            type: "recovery",
            title: "Extended Rest Period",
            description: "Your recovery metrics suggest taking an extra rest day this week for optimal performance.",
            priority: "low",
            estimatedTime: 0,
            improvement: "Better performance"
        }
    ];

    const insights = [
        {
            title: "Peak Performance Time",
            description: "You perform 23% better during evening sessions (6-8 PM)",
            icon: TrendingUp
        },
        {
            title: "Technique Strength",
            description: "Your jab technique is in the top 15% of users at your level",
            icon: Star
        },
        {
            title: "Focus Area",
            description: "Footwork drills could improve your overall score by 8-12%",
            icon: Target
        }
    ];

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high': return 'destructive';
            case 'medium': return 'default';
            case 'low': return 'secondary';
            default: return 'default';
        }
    };

    const getPriorityIcon = (priority: string) => {
        switch (priority) {
            case 'high': return AlertCircle;
            case 'medium': return Target;
            case 'low': return Lightbulb;
            default: return Target;
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3">
                <Brain className="w-8 h-8 text-accent" />
                <div>
                    <h1 className="text-3xl font-bold">AI Training Coach</h1>
                    <p className="text-muted-foreground">Personalized recommendations based on your performance data</p>
                </div>
            </div>

            {/* Recommendations */}
            <Card>
                <CardHeader>
                    <CardTitle>Training Recommendations</CardTitle>
                    <CardDescription>AI-powered suggestions to optimize your training</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {recommendations.map((rec, index) => {
                            const PriorityIcon = getPriorityIcon(rec.priority);
                            return (
                                <div key={index} className="border rounded-lg p-4 space-y-3">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <PriorityIcon className="w-5 h-5 text-muted-foreground" />
                                            <div>
                                                <h3 className="font-semibold">{rec.title}</h3>
                                                <p className="text-sm text-muted-foreground mt-1">{rec.description}</p>
                                            </div>
                                        </div>
                                        <Badge variant={getPriorityColor(rec.priority) as any}>
                                            {rec.priority} priority
                                        </Badge>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            {rec.estimatedTime > 0 && (
                                                <span>⏱️ {rec.estimatedTime} min</span>
                                            )}
                                            <span className="text-accent font-medium">📈 {rec.improvement}</span>
                                        </div>
                                        <Button size="sm" variant="outline">
                                            Start Training
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* AI Insights */}
            <Card>
                <CardHeader>
                    <CardTitle>Performance Insights</CardTitle>
                    <CardDescription>Key patterns and trends in your training data</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        {insights.map((insight, index) => {
                            const IconComponent = insight.icon;
                            return (
                                <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                                    <IconComponent className="w-5 h-5 text-primary" />
                                    <div>
                                        <h4 className="font-medium">{insight.title}</h4>
                                        <p className="text-sm text-muted-foreground">{insight.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Training Plan */}
            <Card>
                <CardHeader>
                    <CardTitle>Suggested Training Plan</CardTitle>
                    <CardDescription>AI-optimized weekly schedule based on your goals</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {[
                            { day: "Monday", focus: "Heavy Bag + Technique", duration: "45 min", intensity: "High" },
                            { day: "Tuesday", focus: "Cardio + Footwork", duration: "30 min", intensity: "Medium" },
                            { day: "Wednesday", focus: "Pad Work + Combos", duration: "40 min", intensity: "High" },
                            { day: "Thursday", focus: "Recovery + Stretching", duration: "20 min", intensity: "Low" },
                            { day: "Friday", focus: "Sparring + Conditioning", duration: "50 min", intensity: "High" },
                            { day: "Saturday", focus: "Technique Refinement", duration: "35 min", intensity: "Medium" },
                            { day: "Sunday", focus: "Rest Day", duration: "0 min", intensity: "Rest" }
                        ].map((plan, index) => (
                            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                <div>
                                    <p className="font-medium">{plan.day}</p>
                                    <p className="text-sm text-muted-foreground">{plan.focus}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm">{plan.duration}</p>
                                    <Badge variant={plan.intensity === 'Rest' ? 'secondary' : 'outline'} className="text-xs">
                                        {plan.intensity}
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