import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Play, Pause, Square, RotateCcw, Target, Heart, Zap, Clock, CheckCircle, ArrowLeft, ArrowRight, Trophy, Star } from "lucide-react";

export function WorkoutTracker() {
    const [workoutState, setWorkoutState] = useState<'template' | 'active' | 'completed'>('template');
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(0);
    const [exerciseTime, setExerciseTime] = useState(0);
    const [completedExercises, setCompletedExercises] = useState<number[]>([]);

    const workoutTemplate = {
        name: "Basic Fighter Training",
        description: "Complete training program for boxing and muay thai fundamentals",
        totalDuration: "45-60 minutes",
        difficulty: "Intermediate",
        categories: [
            {
                name: "Stretching & Warm-up",
                icon: "🤸",
                color: "bg-secondary/10 border-secondary/30",
                duration: 10,
                exercises: [
                    { name: "Neck Rolls", duration: 60, reps: "8 each direction", description: "Gentle circular motions" },
                    { name: "Arm Circles", duration: 60, reps: "10 forward, 10 backward", description: "Large circular motions" },
                    { name: "Shoulder Shrugs", duration: 45, reps: "15 reps", description: "Up and down motions" },
                    { name: "Hip Circles", duration: 60, reps: "8 each direction", description: "Hands on hips, rotate" },
                    { name: "Leg Swings", duration: 90, reps: "10 each leg", description: "Forward and backward" },
                    { name: "Jump Rope (Light)", duration: 180, reps: "3 minutes", description: "Light warm-up pace" }
                ]
            },
            {
                name: "Circuit Training",
                icon: "💪",
                color: "bg-primary/10 border-primary/30",
                duration: 15,
                exercises: [
                    { name: "Burpees", duration: 60, reps: "10-15 reps", description: "Full body explosive movement" },
                    { name: "Push-ups", duration: 60, reps: "15-20 reps", description: "Chest and arm strength" },
                    { name: "Mountain Climbers", duration: 45, reps: "30 seconds", description: "High intensity cardio" },
                    { name: "Plank Hold", duration: 45, reps: "30-45 seconds", description: "Core stability" },
                    { name: "Jump Squats", duration: 60, reps: "15 reps", description: "Explosive leg power" },
                    { name: "High Knees", duration: 45, reps: "30 seconds", description: "Cardio and coordination" },
                    { name: "Rest & Hydrate", duration: 90, reps: "Recover", description: "Catch your breath" }
                ]
            },
            {
                name: "Shadow Boxing",
                icon: "👤",
                color: "bg-accent/10 border-accent/30",
                duration: 12,
                exercises: [
                    { name: "Basic Stance", duration: 60, reps: "Practice form", description: "Find your fighting stance" },
                    { name: "Jab Practice", duration: 90, reps: "50 jabs", description: "Lead hand straight punch" },
                    { name: "Cross Practice", duration: 90, reps: "50 crosses", description: "Rear hand power punch" },
                    { name: "Jab-Cross Combo", duration: 120, reps: "30 combos", description: "1-2 combination" },
                    { name: "Hook Practice", duration: 90, reps: "25 each hand", description: "Circular punches" },
                    { name: "Movement Drill", duration: 120, reps: "Continuous", description: "Footwork and flow" },
                    { name: "Free Flow", duration: 120, reps: "Creative", description: "Put it all together" }
                ]
            },
            {
                name: "Heavy Bag Work",
                icon: "🥊",
                color: "bg-destructive/10 border-destructive/30",
                duration: 18,
                exercises: [
                    { name: "Warm-up Punches", duration: 90, reps: "Light contact", description: "Get familiar with bag" },
                    { name: "Jab-Cross Power", duration: 180, reps: "3 minutes", description: "Focus on technique" },
                    { name: "Hook Combinations", duration: 120, reps: "2 minutes", description: "Left and right hooks" },
                    { name: "Body Shots", duration: 120, reps: "2 minutes", description: "Target the midsection" },
                    { name: "Power Combos", duration: 180, reps: "3 minutes", description: "Heavy hitting" },
                    { name: "Speed Work", duration: 120, reps: "2 minutes", description: "Fast, light punches" },
                    { name: "Kicks (Muay Thai)", duration: 180, reps: "3 minutes", description: "Low and mid kicks" },
                    { name: "Cool Down", duration: 120, reps: "Light work", description: "Finish strong" }
                ]
            }
        ]
    };

    // Timer effect
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isActive && workoutState === 'active') {
            interval = setInterval(() => {
                setTime(time => time + 1);
                setExerciseTime(time => time + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive, workoutState]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const startWorkout = () => {
        setWorkoutState('active');
        setIsActive(true);
        setTime(0);
        setExerciseTime(0);
        setCurrentCategoryIndex(0);
        setCurrentExerciseIndex(0);
        setCompletedExercises([]);
    };

    const completeExercise = () => {
        const exerciseId = currentCategoryIndex * 1000 + currentExerciseIndex;
        setCompletedExercises(prev => [...prev, exerciseId]);

        const currentCategory = workoutTemplate.categories[currentCategoryIndex];

        if (currentExerciseIndex < currentCategory.exercises.length - 1) {
            // Move to next exercise
            setCurrentExerciseIndex(prev => prev + 1);
            setExerciseTime(0);
        } else if (currentCategoryIndex < workoutTemplate.categories.length - 1) {
            // Move to next category
            setCurrentCategoryIndex(prev => prev + 1);
            setCurrentExerciseIndex(0);
            setExerciseTime(0);
        } else {
            // Workout completed
            setWorkoutState('completed');
            setIsActive(false);
        }
    };

    const skipExercise = () => {
        completeExercise();
    };

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetWorkout = () => {
        setWorkoutState('template');
        setIsActive(false);
        setTime(0);
        setExerciseTime(0);
        setCurrentCategoryIndex(0);
        setCurrentExerciseIndex(0);
        setCompletedExercises([]);
    };

    const getTotalProgress = () => {
        const totalExercises = workoutTemplate.categories.reduce((sum, cat) => sum + cat.exercises.length, 0);
        return (completedExercises.length / totalExercises) * 100;
    };

    const getCurrentCategory = () => workoutTemplate.categories[currentCategoryIndex];
    const getCurrentExercise = () => getCurrentCategory()?.exercises[currentExerciseIndex];

    // Template Selection View
    if (workoutState === 'template') {
        return (
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold">Workout Templates</h1>
                    <p className="text-muted-foreground">Choose your training program and start fighting</p>
                </div>

                <Card className="border-primary/30">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-2xl text-primary">{workoutTemplate.name}</CardTitle>
                                <CardDescription className="text-lg">{workoutTemplate.description}</CardDescription>
                            </div>
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                                {workoutTemplate.difficulty}
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center p-4 bg-muted/30 rounded-lg">
                                <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                                <div className="font-bold">{workoutTemplate.totalDuration}</div>
                                <div className="text-sm text-muted-foreground">Duration</div>
                            </div>
                            <div className="text-center p-4 bg-muted/30 rounded-lg">
                                <Target className="w-6 h-6 mx-auto mb-2 text-accent" />
                                <div className="font-bold">{workoutTemplate.categories.length}</div>
                                <div className="text-sm text-muted-foreground">Categories</div>
                            </div>
                            <div className="text-center p-4 bg-muted/30 rounded-lg">
                                <Zap className="w-6 h-6 mx-auto mb-2 text-secondary" />
                                <div className="font-bold">
                                    {workoutTemplate.categories.reduce((sum, cat) => sum + cat.exercises.length, 0)}
                                </div>
                                <div className="text-sm text-muted-foreground">Exercises</div>
                            </div>
                            <div className="text-center p-4 bg-muted/30 rounded-lg">
                                <Trophy className="w-6 h-6 mx-auto mb-2 text-accent" />
                                <div className="font-bold">250</div>
                                <div className="text-sm text-muted-foreground">XP Reward</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-bold text-lg">Training Sequence</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {workoutTemplate.categories.map((category, index) => (
                                    <Card key={index} className={`${category.color}`}>
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="text-2xl">{category.icon}</div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold">{category.name}</h4>
                                                    <p className="text-sm text-muted-foreground">{category.duration} minutes</p>
                                                </div>
                                                <Badge variant="outline">{category.exercises.length} exercises</Badge>
                                            </div>
                                            <div className="space-y-1">
                                                {category.exercises.slice(0, 3).map((exercise, i) => (
                                                    <div key={i} className="text-sm text-muted-foreground">
                                                        • {exercise.name}
                                                    </div>
                                                ))}
                                                {category.exercises.length > 3 && (
                                                    <div className="text-sm text-muted-foreground">
                                                        ... and {category.exercises.length - 3} more
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center pt-4">
                            <Button
                                size="lg"
                                onClick={startWorkout}
                                className="px-8 py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                                <Play className="w-6 h-6 mr-3" />
                                Start Workout
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Active Workout View
    if (workoutState === 'active') {
        const currentCategory = getCurrentCategory();
        const currentExercise = getCurrentExercise();

        return (
            <div className="space-y-6">
                {/* Header with Progress */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Active Workout</h1>
                        <p className="text-muted-foreground">Stay focused and push your limits</p>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold">{formatTime(time)}</div>
                        <div className="text-sm text-muted-foreground">Total Time</div>
                    </div>
                </div>

                {/* Overall Progress */}
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-medium">Workout Progress</span>
                            <span className="text-sm text-muted-foreground">
                                {completedExercises.length} / {workoutTemplate.categories.reduce((sum, cat) => sum + cat.exercises.length, 0)} exercises
                            </span>
                        </div>
                        <Progress value={getTotalProgress()} className="h-3" />
                    </CardContent>
                </Card>

                {/* Current Category */}
                <Card className={`${currentCategory.color}`}>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                            <div className="text-2xl">{currentCategory.icon}</div>
                            {currentCategory.name}
                            <Badge variant="outline">
                                {currentExerciseIndex + 1} of {currentCategory.exercises.length}
                            </Badge>
                        </CardTitle>
                    </CardHeader>
                </Card>

                {/* Current Exercise */}
                <Card className="border-primary/30">
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary">{currentExercise?.name}</CardTitle>
                        <CardDescription className="text-lg">{currentExercise?.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-primary/10 rounded-lg">
                                <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                                <div className="text-2xl font-bold">{formatTime(exerciseTime)}</div>
                                <div className="text-sm text-muted-foreground">Current</div>
                            </div>
                            <div className="text-center p-4 bg-accent/10 rounded-lg">
                                <Target className="w-6 h-6 mx-auto mb-2 text-accent" />
                                <div className="text-2xl font-bold">{formatTime(currentExercise?.duration || 0)}</div>
                                <div className="text-sm text-muted-foreground">Target</div>
                            </div>
                            <div className="text-center p-4 bg-secondary/10 rounded-lg">
                                <Zap className="w-6 h-6 mx-auto mb-2 text-secondary" />
                                <div className="text-2xl font-bold">{currentExercise?.reps}</div>
                                <div className="text-sm text-muted-foreground">Target Reps</div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Exercise Progress</span>
                                <span>{Math.min(100, (exerciseTime / (currentExercise?.duration || 1)) * 100).toFixed(0)}%</span>
                            </div>
                            <Progress value={Math.min(100, (exerciseTime / (currentExercise?.duration || 1)) * 100)} className="h-2" />
                        </div>

                        <div className="flex justify-center gap-4">
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={toggleTimer}
                                className="px-6"
                            >
                                {isActive ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                                {isActive ? 'Pause' : 'Resume'}
                            </Button>
                            <Button
                                size="lg"
                                onClick={completeExercise}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
                            >
                                <CheckCircle className="w-5 h-5 mr-2" />
                                Complete Exercise
                            </Button>
                            <Button
                                size="lg"
                                variant="secondary"
                                onClick={skipExercise}
                                className="px-6"
                            >
                                <ArrowRight className="w-5 h-5 mr-2" />
                                Skip
                            </Button>
                        </div>

                        <div className="flex justify-center">
                            <Button
                                variant="destructive"
                                onClick={resetWorkout}
                                className="px-4"
                            >
                                <Square className="w-4 h-4 mr-2" />
                                End Workout
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Completed Workout View
    if (workoutState === 'completed') {
        return (
            <div className="space-y-6">
                <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
                        <Trophy className="w-10 h-10 text-accent-foreground" />
                    </div>
                    <h1 className="text-3xl font-bold">Workout Complete!</h1>
                    <p className="text-muted-foreground text-lg">Outstanding performance, fighter!</p>
                </div>

                <Card className="border-accent/30">
                    <CardContent className="p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-primary">{formatTime(time)}</div>
                                <div className="text-sm text-muted-foreground">Total Time</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-accent">250</div>
                                <div className="text-sm text-muted-foreground">XP Earned</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-secondary">{completedExercises.length}</div>
                                <div className="text-sm text-muted-foreground">Exercises</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary">100%</div>
                                <div className="text-sm text-muted-foreground">Completion</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {workoutTemplate.categories.map((category, index) => (
                        <Card key={index} className={`${category.color}`}>
                            <CardContent className="p-4 text-center">
                                <div className="text-2xl mb-2">{category.icon}</div>
                                <div className="font-bold">{category.name}</div>
                                <CheckCircle className="w-5 h-5 text-accent mx-auto mt-2" />
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="flex justify-center gap-4">
                    <Button
                        size="lg"
                        onClick={startWorkout}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                    >
                        <RotateCcw className="w-5 h-5 mr-2" />
                        Start New Workout
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={resetWorkout}
                        className="px-8"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Templates
                    </Button>
                </div>
            </div>
        );
    }

    return null;
}