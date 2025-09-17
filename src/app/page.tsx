import { ModernSalesDashboard } from "@/components/modern-sales-dashboard";
import { BrokerHeader } from "@/components/broker-header";
import { ArrowDown, ArrowUp, Calendar, ChevronRight, FileText, Flame, MessageSquare, Phone, Trophy } from "lucide-react";

export default function Home() {
  const personalProgress = {
    current: { applications: 8, appraisals: 5, docsComplete: 72, approvals: 3 },
    lastWeek: { applications: 6, appraisals: 7, docsComplete: 68, approvals: 2 },
    personalBest: { applications: 12, appraisals: 9, docsComplete: 85, approvals: 5 },
    monthlyGoal: { applications: 40, appraisals: 25, docsComplete: 80, approvals: 15 },
    currentProgress: { applications: 22, appraisals: 14, docsComplete: 72, approvals: 8 },
  };

  const todaysTasks = [
    { id: 1, type: "follow-up", priority: "urgent", contact: "Sarah Johnson", action: "Send application documents", reason: "Promised by EOD yesterday", amount: "$45,000", stage: "Application", hotPotato: "You", phone: "(604) 555-0123", competitiveNote: "1 more app to beat your daily record!" },
    { id: 2, type: "pipeline", priority: "high", contact: "Michael Chen", action: "Check underwriter status", reason: "Been with underwriter 3 days", amount: "$120,000", stage: "Underwriting", hotPotato: "Underwriter", phone: "(778) 555-0456" },
    { id: 3, type: "prospecting", priority: "normal", contact: "New Web Leads (5)", action: "Initial outreach calls", reason: "Leads aging > 24 hours", phone: null },
  ];

  const achievements = [
    { id: 1, name: "Speed Demon", description: "3 apps in one day", progress: 66, icon: "zap" },
    { id: 2, name: "Quality Master", description: "90% approval rate", progress: 80, icon: "award" },
    { id: 3, name: "Doc Warrior", description: "100% docs complete", progress: 72, icon: "file" },
  ];

  const IconFor = (key: string) => {
    switch (key) {
      case "zap":
        return <Flame className="w-5 h-5 text-primary" />;
      case "award":
        return <Trophy className="w-5 h-5 text-primary" />;
      default:
        return <FileText className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <BrokerHeader />

      {/* Personal Progress Bar - Always Visible */}
      <div className="bg-primary text-primary-foreground px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-sm">
              <div className="text-primary-foreground/80 text-xs">Your Progress Today</div>
              <div className="flex items-center gap-4 mt-1">
                <span className="flex items-center gap-1">
                  <span className="font-semibold">{personalProgress.current.applications}</span>
                  <span className="text-xs text-primary-foreground/70">apps</span>
                  {personalProgress.current.applications > personalProgress.lastWeek.applications && (
                    <ArrowUp className="w-3 h-3 text-primary-foreground/80" />
                  )}
                </span>
                <span className="text-primary-foreground/60">•</span>
                <span className="flex items-center gap-1">
                  <span className="font-semibold">{personalProgress.current.appraisals}</span>
                  <span className="text-xs text-primary-foreground/70">appraisals</span>
                </span>
                <span className="text-primary-foreground/60">•</span>
                <span className="flex items-center gap-1">
                  <span className="font-semibold">{personalProgress.current.docsComplete}%</span>
                  <span className="text-xs text-primary-foreground/70">docs</span>
                </span>
                <span className="text-primary-foreground/60">•</span>
                <span className="flex items-center gap-1">
                  <span className="font-semibold">{personalProgress.current.approvals}</span>
                  <span className="text-xs text-primary-foreground/70">approvals</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div>
              <div className="text-xs text-primary-foreground/70">Personal Best</div>
              <div className="flex items-center gap-1">
                <Trophy className="w-3 h-3 text-primary-foreground/80" />
                <span>{personalProgress.personalBest.applications} apps/day</span>
              </div>
            </div>
            <div>
              <div className="text-xs text-primary-foreground/70">Month Progress</div>
              <div className="flex items-center gap-2">
                <div className="w-24 bg-primary/40 rounded-full h-2">
                  <div
                    className="bg-primary-foreground h-2 rounded-full"
                    style={{ width: `${(personalProgress.currentProgress.applications / personalProgress.monthlyGoal.applications) * 100}%` }}
                  />
                </div>
                <span className="text-xs">
                  {Math.round((personalProgress.currentProgress.applications / personalProgress.monthlyGoal.applications) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Focus View */}
      <div className="flex-1">
        <div className="grid grid-cols-3 gap-6 p-6">
          {/* Left Column - Tasks and Actions */}
          <div className="col-span-2 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">What needs your attention today</h2>
                <span className="text-sm text-muted-foreground">{todaysTasks.filter((t) => t.priority === "urgent").length} urgent items</span>
              </div>

              <div className="space-y-3">
                {todaysTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`bg-card rounded-lg border ${task.priority === "urgent" ? "border" : "border"} p-4 hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium bg-accent text-foreground`}
                          >
                            {task.priority}
                          </span>
                          <span className="px-2 py-1 rounded text-xs bg-accent text-foreground">
                            {task.type}
                          </span>
                          {task.hotPotato && (
                            <span className="text-xs text-muted-foreground">
                              Hot Potato: <span className="font-medium">{task.hotPotato}</span>
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">{task.contact}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{task.action}</p>
                        <p className="text-xs text-muted-foreground">{task.reason}</p>
                        {task.competitiveNote && (
                          <p className="text-xs text-primary mt-2 flex items-center gap-1">
                            <Flame className="w-3 h-3" />
                            {task.competitiveNote}
                          </p>
                        )}
                      </div>
                      <div className="text-right ml-4">
                        {task.amount && <div className="text-lg font-semibold text-foreground">{task.amount}</div>}
                        {task.stage && <div className="text-xs text-muted-foreground">{task.stage}</div>}
                        <div className="flex gap-2 mt-3">
                          {task.phone && (
                            <button className="p-2 bg-primary text-primary-foreground rounded hover:opacity-90">
                              <Phone className="w-4 h-4" />
                            </button>
                          )}
                          <button className="p-2 bg-primary text-primary-foreground rounded hover:opacity-90">
                            <MessageSquare className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Progress */}
            <div className="bg-card rounded-lg border border p-4">
              <h3 className="font-semibold text-foreground mb-3">Today's Achievements</h3>
              <div className="space-y-3">
                {achievements.map((a) => (
                  <div key={a.id} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      {IconFor(a.icon)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">{a.name}</span>
                        <span className="text-xs text-muted-foreground">{a.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: `${a.progress}%` }} />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{a.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Performance Insights */}
          <div className="space-y-4">
            <div className="bg-card rounded-lg border border p-4">
              <h3 className="font-semibold text-foreground mb-3">You vs You</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-muted-foreground">Applications</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{personalProgress.current.applications}</span>
                      <span className={`text-xs ${
                          personalProgress.current.applications > personalProgress.lastWeek.applications ? "text-foreground" : "text-destructive"
                        }`}
                      >
                        vs {personalProgress.lastWeek.applications} last week
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        personalProgress.current.applications > personalProgress.lastWeek.applications ? "bg-primary" : "bg-muted-foreground"
                      }`}
                      style={{ width: `${(personalProgress.current.applications / personalProgress.personalBest.applications) * 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-muted-foreground">Approvals</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{personalProgress.current.approvals}</span>
                      <span className={`text-xs ${
                          personalProgress.current.approvals > personalProgress.lastWeek.approvals ? "text-foreground" : "text-destructive"
                        }`}
                      >
                        vs {personalProgress.lastWeek.approvals} last week
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        personalProgress.current.approvals > personalProgress.lastWeek.approvals ? "bg-primary" : "bg-muted-foreground"
                      }`}
                      style={{ width: `${(personalProgress.current.approvals / personalProgress.personalBest.approvals) * 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-muted-foreground">Document Completion</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{personalProgress.current.docsComplete}%</span>
                      <span className={`text-xs ${
                          personalProgress.current.docsComplete > personalProgress.lastWeek.docsComplete ? "text-foreground" : "text-destructive"
                        }`}
                      >
                        vs {personalProgress.lastWeek.docsComplete}% last week
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${personalProgress.current.docsComplete >= 80 ? "bg-primary" : "bg-muted-foreground"}`}
                      style={{ width: `${personalProgress.current.docsComplete}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-accent rounded-lg">
                <p className="text-xs text-foreground">
                  <strong>Focus:</strong> You're {personalProgress.personalBest.applications - personalProgress.current.applications} apps away from your personal best!
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-lg border border p-4">
              <h3 className="font-semibold text-foreground mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 rounded-lg bg-accent hover:opacity-90 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm">Start Call Session</div>
                        <div className="text-xs text-muted-foreground">5 leads waiting</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-accent hover:opacity-90 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm">Check Documents</div>
                        <div className="text-xs text-muted-foreground">3 pending review</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </button>
              </div>
            </div>

            {/* Motivational Quote */}
            <div className="bg-accent rounded-lg p-4">
              <p className="text-sm text-foreground italic">"The only person you should try to be better than is the person you were yesterday."</p>
              <p className="text-xs text-muted-foreground mt-2">- Your best self is waiting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}