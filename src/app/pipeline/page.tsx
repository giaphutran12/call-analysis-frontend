import { BrokerHeader } from "@/components/broker-header";
import { BarChart3, FileText, Filter, Phone } from "lucide-react";

export default function PipelinePage() {
  const overview = [
    { label: "Application", count: 8, amount: "$680K", color: "blue" },
    { label: "Processing", count: 5, amount: "$425K", color: "yellow" },
    { label: "Underwriting", count: 6, amount: "$720K", color: "purple" },
    { label: "Appraisal", count: 3, amount: "$285K", color: "orange" },
    { label: "Ready to Fund", count: 4, amount: "$340K", color: "green" },
  ] as const;

  const deals = [
    {
      client: "Sarah Johnson",
      amount: "$85,000",
      property: "Condo • Vancouver",
      stage: "Processing",
      stageColor: "yellow" as const,
      daysActive: 5,
      nextAction: "Submit to lender",
      priority: "high" as const,
    },
    {
      client: "Michael Chen",
      amount: "$120,000",
      property: "Townhouse • Burnaby",
      stage: "Underwriting",
      stageColor: "purple" as const,
      daysActive: 12,
      nextAction: "Chase underwriter",
      priority: "urgent" as const,
    },
    {
      client: "Emma Wilson",
      amount: "$95,000",
      property: "House • Surrey",
      stage: "Appraisal",
      stageColor: "orange" as const,
      daysActive: 8,
      nextAction: "Schedule appraisal",
      priority: "normal" as const,
    },
    {
      client: "David Rodriguez",
      amount: "$150,000",
      property: "Condo • Richmond",
      stage: "Ready to Fund",
      stageColor: "green" as const,
      daysActive: 18,
      nextAction: "Confirm funding date",
      priority: "high" as const,
    },
    {
      client: "Lisa Thompson",
      amount: "$75,000",
      property: "Townhouse • Coquitlam",
      stage: "Application",
      stageColor: "blue" as const,
      daysActive: 2,
      nextAction: "Collect documents",
      priority: "normal" as const,
    },
    {
      client: "James Park",
      amount: "$110,000",
      property: "House • Vancouver",
      stage: "Processing",
      stageColor: "yellow" as const,
      daysActive: 7,
      nextAction: "Income verification",
      priority: "high" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <BrokerHeader />
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Active Pipeline</h2>
              <p className="text-muted-foreground mt-1">Track your deals from application to funding • $2.1M in progress</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg border border-input bg-secondary hover:bg-accent transition-colors flex items-center gap-2 text-foreground">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Analytics
              </button>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 mb-6">
            {overview.map((o) => (
              <div key={o.label} className="rounded-xl p-4 border border-border bg-card">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-foreground">{o.count}</div>
                  <div className="text-sm text-muted-foreground">{o.label}</div>
                  <div className="text-xs text-foreground/70 mt-1">{o.amount}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="p-4 border-b border-border/60">
              <h3 className="text-lg font-semibold text-foreground">Active Deals</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary border-b border-border">
                  <tr>
                    <th className="text-left py-3 px-4 font-medium text-foreground/80">Client</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground/80">Amount</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground/80">Property</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground/80">Stage</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground/80">Days Active</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground/80">Next Action</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground/80">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {deals.map((deal, idx) => (
                    <tr key={idx} className="hover:bg-secondary transition-colors">
                      <td className="py-4 px-4">
                        <div className="font-medium text-foreground">{deal.client}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-semibold text-foreground">{deal.amount}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-muted-foreground">{deal.property}</div>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={"px-3 py-1 rounded-full text-xs font-medium bg-secondary text-foreground"}
                        >
                          {deal.stage}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-muted-foreground">{deal.daysActive} days</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              deal.priority === "urgent"
                                ? "bg-destructive"
                                : deal.priority === "high"
                                ? "bg-primary"
                                : "bg-muted-foreground"
                            }`}
                          />
                          <span className="text-sm text-foreground">{deal.nextAction}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <button className="p-2 text-primary hover:bg-secondary rounded transition-colors">
                            <FileText className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-primary hover:bg-secondary rounded transition-colors">
                            <Phone className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}