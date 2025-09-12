import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Calendar, AlertTriangle, Info, CheckCircle, X } from "lucide-react";

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "alert",
      title: "Weather Advisory",
      message: "Heavy snowfall expected during Losar Festival. Plan accordingly and carry warm clothes.",
      timestamp: "2 hours ago",
      isNew: true
    },
    {
      id: 2,
      type: "info",
      title: "Booking Reminder",
      message: "Saga Dawa Festival bookings open in 3 days. Early bird discount available!",
      timestamp: "1 day ago",
      isNew: true
    },
    {
      id: 3,
      type: "success",
      title: "Registration Confirmed",
      message: "Your Bumchu Festival tour has been confirmed. Check your email for details.",
      timestamp: "2 days ago",
      isNew: false
    }
  ]);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "alert": return AlertTriangle;
      case "info": return Info;
      case "success": return CheckCircle;
      default: return Bell;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "alert": return "text-festival-red bg-festival-red/10 border-festival-red/20";
      case "info": return "text-festival-blue bg-festival-blue/10 border-festival-blue/20";
      case "success": return "text-festival-green bg-festival-green/10 border-festival-green/20";
      default: return "text-muted-foreground bg-muted/50 border-border";
    }
  };

  const dismissNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, isNew: false } : n
    ));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-primary rounded-lg">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">Festival Notifications</h2>
              <p className="text-muted-foreground">Stay updated with latest festival news and alerts</p>
            </div>
          </div>
          
          <Button variant="outline" size="sm">
            Mark All Read
          </Button>
        </div>

        {/* Notifications */}
        <div className="max-w-4xl mx-auto space-y-4">
          {notifications.map((notification) => {
            const IconComponent = getNotificationIcon(notification.type);
            const colorClass = getNotificationColor(notification.type);
            
            return (
              <Card key={notification.id} className={`p-4 border-l-4 ${colorClass} transition-all duration-200 hover:shadow-md`}>
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-foreground">{notification.title}</h3>
                          {notification.isNew && (
                            <span className="px-2 py-0.5 bg-festival-orange text-white text-xs rounded-full">
                              New
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                          {notification.message}
                        </p>
                        <span className="text-xs text-muted-foreground">{notification.timestamp}</span>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex items-center space-x-2 ml-4">
                        {notification.isNew && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                          >
                            Mark Read
                          </Button>
                        )}
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => dismissNotification(notification.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Subscribe Section */}
        <Card className="mt-12 p-8 bg-gradient-purple text-white text-center">
          <Bell className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl font-bold mb-4">Never Miss a Festival</h3>
          <p className="mb-6 opacity-90">
            Get real-time notifications about festival dates, weather updates, and booking reminders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-primary"
            />
            <Button variant="secondary" className="shadow-glow">
              Subscribe
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default NotificationCenter;