import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, PieChart, TrendingUp } from "lucide-react";

export function ResearchPortal() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
              Research Portal
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Advanced analytical tools and comprehensive databases provide researchers 
              with unprecedented insights into cultural heritage patterns and connections.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <BarChart3 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-300 mb-1">Statistical Analysis</h4>
                  <p className="text-gray-400 text-sm">
                    Comprehensive statistical tools for pattern recognition and data visualization.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <PieChart className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-300 mb-1">Data Visualization</h4>
                  <p className="text-gray-400 text-sm">
                    Interactive charts and graphs for exploring relationships and trends.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-300 mb-1">Trend Analysis</h4>
                  <p className="text-gray-400 text-sm">
                    Identify cultural and historical trends across different time periods.
                  </p>
                </div>
              </div>
            </div>
            
            <Button variant="heritage" size="lg">
              Access Research Tools
            </Button>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="space-y-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg text-yellow-400">Research Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Mock Chart 1 */}
                  <div className="h-32 bg-gradient-to-r from-blue-800/40 to-purple-800/40 rounded-lg flex items-end justify-center p-4">
                    <div className="flex items-end space-x-2 h-full">
                      {[60, 80, 45, 90, 70, 85, 65].map((height, i) => (
                        <div
                          key={i}
                          className="bg-yellow-500/80 w-4 rounded-t"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-center text-sm text-gray-400">
                    Artifact Distribution by Region
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">73%</div>
                  <div className="text-xs text-gray-400">Digital Coverage</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">156</div>
                  <div className="text-xs text-gray-400">Active Projects</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}