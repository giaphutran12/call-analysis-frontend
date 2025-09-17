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
    <div className="min-h-screen bg-gray-50">
      <BrokerHeader />
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Active Pipeline</h2>
              <p className="text-gray-600 mt-1">Track your deals from application to funding • $2.1M in progress</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Analytics
              </button>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 mb-6">
            {overview.map((o) => (
              <div key={o.label} className={`rounded-xl p-4 border bg-${o.color}-50 border-${o.color}-200`}>
                <div className="text-center">
                  <div className={`text-2xl font-bold text-${o.color}-600`}>{o.count}</div>
                  <div className={`text-sm text-${o.color}-700`}>{o.label}</div>
                  <div className={`text-xs text-${o.color}-600 mt-1`}>{o.amount}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Active Deals</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Client</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Property</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Stage</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Days Active</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Next Action</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {deals.map((deal, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-900">{deal.client}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-semibold text-green-600">{deal.amount}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-700">{deal.property}</div>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            deal.stageColor === "blue"
                              ? "bg-blue-100 text-blue-700"
                              : deal.stageColor === "yellow"
                              ? "bg-yellow-100 text-yellow-700"
                              : deal.stageColor === "purple"
                              ? "bg-purple-100 text-purple-700"
                              : deal.stageColor === "orange"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {deal.stage}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-600">{deal.daysActive} days</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              deal.priority === "urgent"
                                ? "bg-red-500"
                                : deal.priority === "high"
                                ? "bg-yellow-500"
                                : "bg-green-500"
                            }`}
                          />
                          <span className="text-sm text-gray-700">{deal.nextAction}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                            <FileText className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded">
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