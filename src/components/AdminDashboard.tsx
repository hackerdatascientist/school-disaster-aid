import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Users, Trophy, Clock, TrendingUp, CheckCircle, AlertCircle } from "lucide-react";

const AdminDashboard = () => {
  return (
    <section id="dashboard" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <BarChart3 className="mr-2 h-4 w-4" />
            Analytics & Insights
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Administrator Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track preparedness scores, monitor drill participation, and get actionable insights 
            to improve your institution's disaster readiness.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Key Metrics */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                Preparedness Overview
              </CardTitle>
              <CardDescription>
                Real-time metrics of your institution's disaster preparedness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Overall Preparedness</span>
                      <span className="text-sm text-muted-foreground">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Earthquake Readiness</span>
                      <span className="text-sm text-muted-foreground">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Fire Safety</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Flood Preparedness</span>
                      <span className="text-sm text-muted-foreground">79%</span>
                    </div>
                    <Progress value={79} className="h-2" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">1,247</div>
                    <div className="text-sm text-muted-foreground">Active Students</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <Trophy className="h-6 w-6 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-secondary">89</div>
                    <div className="text-sm text-muted-foreground">Completed Drills</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-accent">4.2h</div>
                    <div className="text-sm text-muted-foreground">Avg Training Time</div>
                  </div>
                  <div className="text-center p-4 bg-success/5 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-success mx-auto mb-2" />
                    <div className="text-2xl font-bold text-success">94%</div>
                    <div className="text-sm text-muted-foreground">Certification Rate</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common administrative tasks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Manage Students
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Trophy className="mr-2 h-4 w-4" />
                Schedule Drill
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Reports
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <AlertCircle className="mr-2 h-4 w-4" />
                Emergency Alert
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity & Alerts */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest events and completions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Class 10-A completed Fire Safety drill</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                  <Badge variant="outline" className="text-xs">92% score</Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New teacher registered: Mrs. Anjali Singh</p>
                    <p className="text-xs text-muted-foreground">5 hours ago</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">Teacher</Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Monthly drill scheduled for next week</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                  <Badge variant="outline" className="text-xs">Scheduled</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
              <CardDescription>Important notifications and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-warning/10 rounded-lg">
                  <AlertCircle className="h-4 w-4 text-warning mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Low completion rate in Flood Preparedness</p>
                    <p className="text-xs text-muted-foreground">Only 79% of students have completed the module</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-primary/10 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">New curriculum update available</p>
                    <p className="text-xs text-muted-foreground">Updated earthquake safety protocols are ready</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-secondary/10 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-secondary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Great progress this month!</p>
                    <p className="text-xs text-muted-foreground">15% increase in overall preparedness scores</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default AdminDashboard;