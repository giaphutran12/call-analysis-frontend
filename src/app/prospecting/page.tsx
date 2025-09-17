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
    <div className="min-h-screen bg-gray-50">
      <BrokerHeader />
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Prospecting Center</h2>
              <p className="text-gray-600 mt-1">Convert leads into applications • 12 hot leads waiting</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Auto-Dialer
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Start Session
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            {summary.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className={`bg-white rounded-xl p-4 border border-gray-200`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{card.label}</p>
                      <p className={`text-2xl font-bold text-${card.color}-600`}>{card.value}</p>
                    </div>
                    <div className={`w-12 h-12 bg-${card.color}-100 rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-${card.color}-600`} />
                    </div>
                  </div>
                  <div className={`mt-2 text-xs ${card.color === 'yellow' ? 'text-red-600' : `text-${card.color}-600`}`}>{card.delta}</div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Priority Prospects</h3>
                    <div className="flex gap-2">
                      <button className="text-sm text-gray-600 hover:text-gray-900">All</button>
                      <button className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded">Hot</button>
                      <button className="text-sm text-gray-600 hover:text-gray-900">Warm</button>
                    </div>
                  </div>
                </div>
                <div className="divide-y divide-gray-100">
                  {prospects.map((p) => (
                    <div key={p.email} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{p.name}</h4>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${p.priority === 'hot' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{p.priority}</span>
                            <span className="text-xs text-gray-500">{p.lastContact}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <span>{p.phone}</span>
                            <span>•</span>
                            <span>{p.source}</span>
                            <span>•</span>
                            <span className="font-medium text-green-600">{p.amount}</span>
                          </div>
                          <div className="text-sm text-gray-700 mb-1">{p.property}</div>
                          <div className="text-xs text-gray-500">{p.notes}</div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                            <Phone className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
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
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Call Scripts</h3>
                <div className="space-y-2">
                  <button className="w-full text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                    <div className="font-medium text-sm text-blue-900">First Contact</div>
                    <div className="text-xs text-blue-600">Introduction & qualification</div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                    <div className="font-medium text-sm text-green-900">Follow-up</div>
                    <div className="text-xs text-green-600">Rate discussion & next steps</div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                    <div className="font-medium text-sm text-purple-900">Objection Handling</div>
                    <div className="text-xs text-purple-600">Rate shopping responses</div>
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-xl p-4 text-white">
                <h3 className="font-semibold mb-2">Today's Challenge</h3>
                <p className="text-sm opacity-90 mb-3">Convert 3 prospects to applications</p>
                <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '66%' }} />
                </div>
                <div className="text-xs opacity-75">2 of 3 completed</div>
              </div>

              <div className="rounded-xl border bg-white p-3 flex items-center gap-2 text-gray-700">
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