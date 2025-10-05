import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
    Home,
    Activity,
    Settings,
    User,
    Trophy,
    Calendar,
    Target,
    Menu,
    X
} from "lucide-react";

interface SidebarProps {
    activeView: string;
    onViewChange: (view: string) => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: Home },
        { id: "profile", label: "Profile", icon: User },
        { id: "workout", label: "Workout", icon: Activity, badge: "Live" },
    ];

    const secondaryItems = [
        { id: "schedule", label: "Schedule", icon: Calendar },
        { id: "achievements", label: "Achievements", icon: Trophy },
        { id: "goals", label: "Goals", icon: Target },
    ];

    const bottomItems = [
        { id: "settings", label: "Settings", icon: Settings },
    ];

    const MenuItem = ({ item, isActive }: { item: any; isActive: boolean }) => (
        <Button
            variant="ghost"
            className={`w-full justify-start h-10 ${isCollapsed ? 'px-2' : 'px-3'} ${isActive
                ? 'bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90'
                : 'text-sidebar-foreground hover:bg-sidebar-accent'
                }`}
            onClick={() => onViewChange(item.id)}
        >
            <item.icon className={`h-4 w-4 ${isCollapsed ? '' : 'mr-3'}`} />
            {!isCollapsed && (
                <>
                    <span>{item.label}</span>
                    {item.badge && (
                        <Badge
                            variant="secondary"
                            className={`ml-auto text-xs ${item.badge === 'New' ? 'bg-accent text-accent-foreground' : ''
                                }`}
                        >
                            {item.badge}
                        </Badge>
                    )}
                </>
            )}
        </Button>
    );

    return (
        <div className={`bg-sidebar border-r border-sidebar-border min-h-screen h-full flex flex-col transition-all duration-300 sticky top-0 left-0 ${isCollapsed ? 'w-16' : 'w-64'
            }`}>
            {/* Header */}
            <div className="p-4 border-b border-sidebar-border">
                <div className="flex items-center justify-between">
                    {!isCollapsed && (
                        <div>
                            <h2 className="text-xl font-bold text-sidebar-primary">StatStrike</h2>
                            <p className="text-sm text-sidebar-foreground/60">Training Tracker</p>
                        </div>
                    )}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-2 text-sidebar-foreground hover:bg-sidebar-accent"
                    >
                        {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
                    </Button>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="flex-1 p-4 space-y-6">
                <div className="space-y-1">
                    {!isCollapsed && (
                        <p className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider mb-2">
                            Main
                        </p>
                    )}
                    {menuItems.map((item) => (
                        <MenuItem
                            key={item.id}
                            item={item}
                            isActive={activeView === item.id}
                        />
                    ))}
                </div>

                <Separator />

                <div className="space-y-1">
                    {!isCollapsed && (
                        <p className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider mb-2">
                            Training
                        </p>
                    )}
                    {secondaryItems.map((item) => (
                        <MenuItem
                            key={item.id}
                            item={item}
                            isActive={activeView === item.id}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="p-4 border-t border-sidebar-border space-y-1">
                {bottomItems.map((item) => (
                    <MenuItem
                        key={item.id}
                        item={item}
                        isActive={activeView === item.id}
                    />
                ))}
            </div>

            {/* User Status */}
            {!isCollapsed && (
                <div className="p-4 bg-sidebar-accent/30">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-sidebar-primary rounded-full flex items-center justify-center">
                            <span className="text-sidebar-primary-foreground text-sm font-semibold">JD</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-sidebar-foreground">John Doe</p>
                            <p className="text-xs text-sidebar-foreground/60">Intermediate Level</p>
                        </div>
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                </div>
            )}
        </div>
    );
}