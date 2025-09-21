import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Profile } from "./components/Profile";
import { WorkoutTracker } from "./components/WorkoutTracker";
import { Schedule } from "./components/Schedule";
import { Achievements } from "./components/Achievement";
import { Sidebar } from "./components/Sidebar";


export default function App() {
  const [activeView, setActiveView] = useState("dashboard");

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />;
      case "profile":
        return <Profile />;
      case "workout":
        return <WorkoutTracker />;
      case "schedule":
        return <Schedule />;
      case "achievements":
        return <Achievements />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Coming Soon</h2>
              <p className="text-muted-foreground">This feature is under development</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="size-full flex bg-background">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}