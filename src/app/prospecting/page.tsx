import { BrokerHeader } from "@/components/broker-header";
import { Phone, RotateCw, TrendingUp, Users, Target, MessageSquare, Search } from "lucide-react";

export default function ProspectingPage() {
  const summary = [
    { label: "New Leads", value: 8, color: "blue", icon: Users, delta: "+3 today" },
    { label: "Follow-ups", value: 4, color: "yellow", icon: RotateCw, delta: "2 overdue" },
    { label: "Conversion Rate", value: "24%", color: "green", icon: TrendingUp, delta: "+8% this week" },
    { label: "Calls Today", value: 23, color: "purple", icon: Phone, delta: "Goal: 30/day" },
  ] as const;

  const prospects = [
    {
      name: "Jennifer Martinez",
      phone: "(604) 555-0234",
      email: "j.martinez@email.com",
      source: "Website",
      amount: "$85,000",
      property: "Condo • Vancouver",
      priority: "hot" as const,
      lastContact: "2 hours ago",
      notes: "Pre-approved, looking to close in 30 days",
    },
    {
      name: "David Kim",
      phone: "(778) 555-0567",
      email: "dkim.realtor@gmail.com",
      source: "Referral",
      amount: "$120,000",
      property: "Townhouse • Burnaby",
      priority: "hot" as const,
      lastContact: "4 hours ago",
      notes: "First-time buyer, very responsive",
    },
    {
      name: "Lisa Thompson",
      phone: "(604) 555-0789",
      email: "lisa.t.home@outlook.com",
      source: "Google Ads",
      amount: "$95,000",
      property: "House • Surrey",
      priority: "warm" as const,
      lastContact: "1 day ago",
      notes: "Comparing rates, needs follow-up",
    },
    {
      name: "Michael Rodriguez",
      phone: "(778) 555-0321",
      email: "m.rodriguez@techcorp.com",
      source: "LinkedIn",
      amount: "$150,000",
      property: "Condo • Downtown",
      priority: "warm" as const,
      lastContact: "2 days ago",
      notes: "High income, investment property",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <BrokerHeader />
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Prospecting Center</h2>
              <p className="text-muted-foreground mt-1">Convert leads into applications • 12 hot leads waiting</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Auto-Dialer
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Start Session
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            {summary.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className={`bg-card rounded-xl p-4 border`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{card.label}</p>
                      <p className={`text-2xl font-bold text-foreground`}>{card.value}</p>
                    </div>
                    <div className={`w-12 h-12 bg-accent rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-primary`} />
                    </div>
                  </div>
                  <div className={`mt-2 text-xs ${card.color === 'yellow' ? 'text-destructive' : 'text-muted-foreground'}`}>{card.delta}</div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="bg-card rounded-xl border overflow-hidden">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">Priority Prospects</h3>
                    <div className="flex gap-2">
                      <button className="text-sm text-muted-foreground hover:text-foreground">All</button>
                      <button className="text-sm bg-accent text-foreground px-2 py-1 rounded">Hot</button>
                      <button className="text-sm text-muted-foreground hover:text-foreground">Warm</button>
                    </div>
                  </div>
                </div>
                <div className="divide-y">
                  {prospects.map((p) => (
                    <div key={p.email} className="p-4 hover:bg-accent transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-foreground">{p.name}</h4>
                            <span className={`px-2 py-1 rounded text-xs font-medium bg-accent text-foreground`}>{p.priority}</span>
                            <span className="text-xs text-muted-foreground">{p.lastContact}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <span>{p.phone}</span>
                            <span>•</span>
                            <span>{p.source}</span>
                            <span>•</span>
                            <span className="font-medium text-foreground">{p.amount}</span>
                          </div>
                          <div className="text-sm text-muted-foreground mb-1">{p.property}</div>
                          <div className="text-xs text-muted-foreground">{p.notes}</div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
                            <Phone className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
                            <MessageSquare className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-card rounded-xl p-4 border">
                <h3 className="font-semibold text-foreground mb-3">Call Scripts</h3>
                <div className="space-y-2">
                  <button className="w-full text-left p-3 rounded-lg bg-accent hover:opacity-90 transition-colors">
                    <div className="font-medium text-sm text-foreground">First Contact</div>
                    <div className="text-xs text-primary">Introduction & qualification</div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-accent hover:opacity-90 transition-colors">
                    <div className="font-medium text-sm text-foreground">Follow-up</div>
                    <div className="text-xs text-primary">Rate discussion & next steps</div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-accent hover:opacity-90 transition-colors">
                    <div className="font-medium text-sm text-foreground">Objection Handling</div>
                    <div className="text-xs text-primary">Rate shopping responses</div>
                  </button>
                </div>
              </div>

              <div className="rounded-xl p-4 bg-primary text-primary-foreground">
                <h3 className="font-semibold mb-2">Today's Challenge</h3>
                <p className="text-sm/6 opacity-90 mb-3">Convert 3 prospects to applications</p>
                <div className="w-full bg-primary-foreground/20 rounded-full h-2 mb-2">
                  <div className="bg-primary-foreground h-2 rounded-full" style={{ width: '66%' }} />
                </div>
                <div className="text-xs opacity-75">2 of 3 completed</div>
              </div>

              <div className="rounded-xl border bg-card p-3 flex items-center gap-2 text-muted-foreground">
                <Search className="w-4 h-4" />
                <span className="text-sm">Quick search prospects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}