"use client";

import React, { useState } from "react";
import {
  Calendar,
  DollarSign,
  AlertCircle,
  Phone,
  MessageSquare,
  FileText,
  Home,
  Users,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Target,
  GraduationCap,
  Heart,
  Sparkles,
  BarChart3,
  CheckCircle,
  XCircle,
  ArrowRight,
} from "lucide-react";
import CallAnalysisDetail from "@/reference/call recordings and analysis";

export const ClientRenewalProfile: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState({
    dealHistory: true,
    lifeChanges: true,
    financialProfile: true,
    opportunities: true,
    talkingPoints: true,
  });
  const [showCallsPanel, setShowCallsPanel] = useState(false);
  const [selectedCallId, setSelectedCallId] = useState<number | null>(null);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const clientData = {
    name: "Jennifer & Robert Williams",
    currentMortgage: {
      amount: "$385,000",
      rate: "4.79%",
      monthlyPayment: "$2,012",
      remainingTerm: "25 years",
      renewalDate: "April 15, 2025",
      daysUntilRenewal: 45,
      lender: "TD Bank",
      type: "5-year fixed",
    },
    originalDeal: {
      date: "April 15, 2020",
      amount: "$425,000",
      purchasePrice: "$530,000",
      downPayment: "$105,000",
      broker: "You",
      commission: "$4,250",
      rateAtTime: "2.49%",
      competingOffers: ["RBC - 2.54%", "Scotia - 2.59%"],
      whyTheyChose: "Best rate + trusted referral from sister",
    },
    propertyDetails: {
      currentValue: "$685,000",
      appreciation: "$155,000",
      equity: "$300,000",
      address: "1234 Oak Street, Vancouver",
      propertyType: "Single Family Home",
      yearBuilt: "2008",
    },
    clientProfile: {
      ages: "Jennifer (42), Robert (44)",
      occupations:
        "Jennifer - Marketing Director, Robert - Software Engineer",
      householdIncome: "$165,000",
      incomeChange: "+$25,000 since last deal",
      creditScores: "Jennifer: 782, Robert: 794",
    },
    lifeEvents: [
      {
        date: "2021",
        event: "Second child born (Emma)",
        impact: "Increased expenses, considering education savings",
        icon: Heart,
      },
      {
        date: "2022",
        event: "Jennifer promoted to Director",
        impact: "Income increased by $20k, more stable employment",
        icon: Briefcase,
      },
      {
        date: "2023",
        event: "Kitchen renovation completed",
        impact: "Spent ~$45k, increased home value",
        icon: Home,
      },
      {
        date: "2024",
        event: "Started college fund for kids",
        impact: "Looking at long-term financial planning",
        icon: GraduationCap,
      },
    ],
    financialSnapshot: {
      otherDebts: [
        { type: "Car Loan", amount: "$22,000", payment: "$425", rate: "5.99%" },
        { type: "Line of Credit", amount: "$15,000", payment: "$300", rate: "7.45%" },
      ],
      totalDebtPayments: "$2,737",
      disposableIncome: "~$4,500/month",
      savings: "Emergency fund established",
      investments: "RRSP: $85k, TFSA: $45k, RESP: $12k",
    },
    communicationHistory: [
      {
        date: "Jan 2024",
        type: "Email",
        topic: "Happy New Year check-in",
        response: "Positive, mentioned planning renovations",
      },
      {
        date: "Oct 2023",
        type: "Phone",
        topic: "Rate discussion",
        response: "Concerned about rising rates",
      },
      {
        date: "Apr 2023",
        type: "In-person",
        topic: "Annual review",
        response: "Happy with service, referred colleague",
      },
    ],
    opportunityAnalysis: {
      primary: {
        product: "Mortgage Renewal",
        strategy: "Blend and extend to lock in before rates rise",
        savings: "~$180/month vs current rate environment",
        urgency: "High - rates expected to increase",
      },
      secondary: [
        {
          product: "Debt Consolidation",
          reason: "High-rate car loan and LOC",
          potentialSaving: "$275/month",
          recommendation: "Roll into mortgage at renewal",
        },
        {
          product: "HELOC",
          reason: "Access equity for investment property",
          amount: "Up to $125,000",
          note: "Mentioned interest in rental income",
        },
        {
          product: "Life Insurance",
          reason: "Increased mortgage, 2 young children",
          gap: "Only has work coverage",
          recommendation: "Term life $1M each",
        },
      ],
    },
    competitorIntel: {
      currentOffers: [
        { lender: "TD (current)", rate: "5.84%", incentive: "$1,000 cash back" },
        { lender: "RBC", rate: "5.79%", incentive: "Free appraisal + $1,500 cash" },
        { lender: "Monoline", rate: "5.49%", incentive: "Lower penalty, portable" },
      ],
      clientLoyalty: "Medium - happy but price conscious",
      switchingBarriers: [
        "Convenience",
        "Existing relationship",
        "Other products at TD",
      ],
    },
    recommendedApproach: {
      opening:
        "Congratulate on home value increase and Jennifer's career success",
      keyPoints: [
        "Market shifted significantly since 2020 - let's protect their rate",
        "Blend and extend could save $180/month starting now",
        "Debt consolidation opportunity - free up $275/month",
        "Growing family needs - insurance gap discussion",
      ],
      objectionHandling: {
        "Staying with TD":
          "I can often beat their renewal offer - let me show you the numbers",
        "Rates might drop":
          "Lock in now with option to blend down if rates fall",
        "Too busy": "I'll handle everything - 15 min phone call is all we need",
      },
    },
  } as const;

  const calls = [
    { id: 201, date: "2025-09-10", duration: "32m", sentiment: "Positive", title: "Pilot kickoff & next steps" },
    { id: 202, date: "2025-09-05", duration: "18m", sentiment: "Neutral", title: "Pricing tiers & deployment" },
    { id: 203, date: "2025-08-30", duration: "42m", sentiment: "Risk", title: "Legal review & security" },
  ];

  const renewalUrgency =
    clientData.currentMortgage.daysUntilRenewal <= 60
      ? "high"
      : clientData.currentMortgage.daysUntilRenewal <= 90
      ? "medium"
      : "low";

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card border-b sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-semibold text-foreground">{clientData.name}</h1>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium bg-accent text-foreground`}
                >
                  Renewal in {clientData.currentMortgage.daysUntilRenewal} days
                </span>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Home className="w-4 h-4" />
                  {clientData.propertyDetails.address}
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  Current: {clientData.currentMortgage.amount} @ {clientData.currentMortgage.rate}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Renewal: {clientData.currentMortgage.renewalDate}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setShowCallsPanel(true);
                  setSelectedCallId(calls[0]?.id ?? null);
                }}
                className="px-4 py-2 border text-primary bg-accent hover:opacity-90 rounded-lg flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Previous Calls' Analysis
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-accent flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Send Message
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-accent">
                <FileText className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 py-3 bg-accent border-t">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div>
                <span className="text-muted-foreground">Property Value:</span>
                <span className="font-semibold text-foreground ml-2">{clientData.propertyDetails.currentValue}</span>
                <span className="text-primary ml-1">(+29%)</span>
              </div>
              <div>
                <span className="text-muted-foreground">Available Equity:</span>
                <span className="font-semibold text-foreground ml-2">{clientData.propertyDetails.equity}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Payment Room:</span>
                <span className="font-semibold text-foreground ml-2">~$2,500/mo</span>
              </div>
              <div>
                <span className="text-muted-foreground">Lifetime Value:</span>
                <span className="font-semibold text-primary ml-2">$8,450</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">3 Cross-sell Opportunities</span>
            </div>
          </div>
        </div>
      </div>

      {showCallsPanel && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setShowCallsPanel(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-5xl bg-card shadow-xl flex flex-col">
            <div className="flex items-center justify-between border-b px-6 py-4">
              <div>
                <h2 className="text-xl font-semibold">Call recordings & analysis</h2>
                <p className="text-sm text-muted-foreground">Client: {clientData.name}</p>
              </div>
              <button
                onClick={() => setShowCallsPanel(false)}
                className="px-3 py-1.5 text-sm rounded-md border hover:bg-accent"
              >
                Close
              </button>
            </div>
            <div className="flex flex-1 overflow-hidden">
              <aside className="w-80 border-r overflow-y-auto">
                <div className="p-3 border-b text-sm font-medium text-muted-foreground">Previous Calls</div>
                <div className="divide-y">
                  {calls.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCallId(c.id)}
                      className={`w-full text-left p-4 hover:bg-accent ${
                        selectedCallId === c.id ? "bg-accent" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-foreground">{c.date} • {c.duration}</div>
                        <span className="text-xs px-2 py-0.5 rounded-md border">{c.sentiment}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 line-clamp-1">{c.title}</div>
                    </button>
                  ))}
                </div>
              </aside>

              <section className="flex-1 overflow-y-auto">
                <CallAnalysisDetail />
              </section>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <div className="bg-card rounded-lg border">
              <div
                className="px-4 py-3 border-b flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("dealHistory")}
              >
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Original Deal Analysis (2020)
                </h3>
                {expandedSections.dealHistory ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
              {expandedSections.dealHistory && (
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Deal Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Original Amount:</span>
                          <span className="font-medium">{clientData.originalDeal.amount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Rate Secured:</span>
                          <span className="font-medium text-primary">{clientData.originalDeal.rateAtTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Your Commission:</span>
                          <span className="font-medium">{clientData.originalDeal.commission}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Competitive Landscape</h4>
                      <div className="space-y-2 text-sm">
                        {clientData.originalDeal.competingOffers.map((offer, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <XCircle className="w-3 h-3 text-destructive" />
                            <span className="text-muted-foreground">{offer}</span>
                          </div>
                        ))}
                        <div className="flex items-center gap-2 text-primary">
                          <CheckCircle className="w-3 h-3" />
                          <span className="font-medium">You won with best rate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-sm text-muted-foreground">
                      <strong>Why they chose you:</strong> {clientData.originalDeal.whyTheyChose}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-card rounded-lg border">
              <div
                className="px-4 py-3 border-b flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("lifeChanges")}
              >
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Life Changes Since Last Deal
                </h3>
                {expandedSections.lifeChanges ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
              {expandedSections.lifeChanges && (
                <div className="p-4">
                  <div className="space-y-4">
                    {clientData.lifeEvents.map((event, idx) => {
                      const Icon = event.icon as React.ElementType;
                      return (
                        <div key={idx} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-foreground">{event.event}</span>
                              <span className="text-sm text-muted-foreground">({event.date})</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{event.impact}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-card rounded-lg border">
              <div
                className="px-4 py-3 border-b flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("financialProfile")}
              >
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Current Financial Snapshot
                </h3>
                {expandedSections.financialProfile ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
              {expandedSections.financialProfile && (
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Income & Employment</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Household Income:</span>
                          <span className="font-medium ml-2">{clientData.clientProfile.householdIncome}</span>
                          <span className="text-primary ml-1">(+$25k)</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Jennifer:</span>
                          <span className="ml-2">{clientData.clientProfile.occupations.split(",")[0]}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Robert:</span>
                          <span className="ml-2">{clientData.clientProfile.occupations.split(",")[1]}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Other Debts</h4>
                      <div className="space-y-2">
                        {clientData.financialSnapshot.otherDebts.map((debt, idx) => (
                          <div key={idx} className="text-sm bg-secondary rounded p-2">
                            <div className="flex justify-between">
                              <span className="font-medium">{debt.type}</span>
                              <span>{debt.amount}</span>
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground mt-1">
                              <span>Payment: {debt.payment}/mo</span>
                              <span className="text-destructive">Rate: {debt.rate}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">{clientData.financialSnapshot.totalDebtPayments}</div>
                        <div className="text-xs text-muted-foreground">Total Debt Payments</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{clientData.financialSnapshot.disposableIncome}</div>
                        <div className="text-xs text-muted-foreground">Disposable Income</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">$142k</div>
                        <div className="text-xs text-muted-foreground">Total Investments</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-accent rounded-lg border p-4">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Primary Opportunity
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-foreground">{clientData.opportunityAnalysis.primary.product}</div>
                  <p className="text-sm text-muted-foreground mt-1">{clientData.opportunityAnalysis.primary.strategy}</p>
                </div>
                <div className="bg-card/70 rounded p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Potential Savings:</span>
                    <span className="font-bold text-foreground">{clientData.opportunityAnalysis.primary.savings}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 rounded p-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{clientData.opportunityAnalysis.primary.urgency}</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border">
              <div
                className="px-4 py-3 border-b flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("opportunities")}
              >
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Cross-sell Opportunities
                </h3>
                {expandedSections.opportunities ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
              {expandedSections.opportunities && (
                <div className="p-4 space-y-3">
                  {clientData.opportunityAnalysis.secondary.map((opp, idx) => (
                    <div key={idx} className="border-l-4 pl-3">
                      <div className="font-medium text-foreground">{opp.product}</div>
                      <p className="text-xs text-muted-foreground mt-1">{opp.reason}</p>
                      {"potentialSaving" in opp && (opp as any).potentialSaving && (
                        <p className="text-sm text-primary font-medium mt-1">
                          Save {(opp as any).potentialSaving}
                        </p>
                      )}
                      {"amount" in opp && (opp as any).amount && (
                        <p className="text-sm text-primary font-medium mt-1">{(opp as any).amount} available</p>
                      )}
                      {"gap" in opp && (opp as any).gap && (
                        <p className="text-sm text-destructive mt-1">Gap: {(opp as any).gap}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-card rounded-lg border">
              <div
                className="px-4 py-3 border-b flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("talkingPoints")}
              >
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Conversation Strategy
                </h3>
                {expandedSections.talkingPoints ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
              {expandedSections.talkingPoints && (
                <div className="p-4">
                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2">Opening:</h4>
                    <p className="text-sm text-muted-foreground italic">"{clientData.recommendedApproach.opening}"</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2">Key Points:</h4>
                    <ul className="space-y-1">
                      {clientData.recommendedApproach.keyPoints.map((point, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Objection Handlers:</h4>
                    <div className="space-y-2">
                      {Object.entries(clientData.recommendedApproach.objectionHandling).map(
                        ([objection, response], idx) => (
                          <div key={idx} className="text-sm">
                            <div className="font-medium text-foreground">"{objection}"</div>
                            <div className="text-muted-foreground italic ml-4">→ {response}</div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-accent rounded-lg border p-4">
              <h3 className="font-semibold text-foreground mb-2">⚠️ Competitive Alert</h3>
              <div className="space-y-2 text-sm">
                <p className="text-foreground">
                  TD offering {clientData.competitorIntel.currentOffers[0].incentive}
                </p>
                <p className="text-foreground">
                  RBC actively courting with {clientData.competitorIntel.currentOffers[1].rate} rate
                </p>
                <p className="font-medium text-foreground mt-2">
                  Client loyalty: {clientData.competitorIntel.clientLoyalty}
                </p>
              </div>
            </div>

            <div className="bg-secondary rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-3">Quick Actions</h4>
              <div className="space-y-2">
                <button className="w-full text-left p-3 bg-card rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Generate Renewal Proposal</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-card rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Run New Scenarios</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-card rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Schedule Meeting</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};