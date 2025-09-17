"use client";

import React, { useState } from "react";
import {
  Phone,
  Clock,
  Calendar,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle,
  PhoneCall,
  PhoneMissed,
  BarChart3,
  Target,
  MessageSquare,
  Filter,
  ChevronRight,
  Play,
  User,
  DollarSign,
  Home,
  Users,
  Heart,
  Briefcase,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Sparkles,
  Shield,
  Building,
} from "lucide-react";

export const CallIntelligenceDashboard: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState("today");
  const [selectedCall, setSelectedCall] = useState<number | null>(null);
  const [expandedCall, setExpandedCall] = useState<number | null>(null);

  const callData = [
    {
      id: 1,
      contact: "Sarah Johnson",
      phone: "(604) 555-0123",
      time: "10:32 AM",
      duration: "18:52",
      callSummary:
        "Client interested in renewal options with current rate at 4.79%. Concerned about rising rates and wants to lock in soon. Also mentioned planning kitchen renovations this summer.",
      callType: "renewal",
      loanAmount: "$385,000",
      outcome: "application_started",
      urgencyLevel: "high",
      keyPoints: [
        "Current mortgage renews in 45 days",
        "Worried about rate increases",
        "Has good equity in property",
        "Considering accessing equity for renovations",
      ],
      customerConcerns: [
        "Interest rates might go higher",
        "Unsure about penalty to break early",
        "Wants to compare with TD's offer",
      ],
      objections: [
        {
          objection: "TD is offering me 5.84% with $1,000 cashback",
          broker_response:
            "I can likely beat that rate and explained our lender has better prepayment options",
          objection_timestamp: "[05:23]",
          response_timestamp: "[05:45]",
        },
        {
          objection: "I need to talk to my husband first",
          broker_response:
            "Suggested scheduling a call with both of them tomorrow evening",
          objection_timestamp: "[12:10]",
          response_timestamp: "[12:25]",
        },
      ],
      lifeEvents: [
        "Planning kitchen renovation this summer",
        "Husband got promoted last month",
        "Daughter starting university next year",
      ],
      competitorMentions: ["TD Bank", "RBC reached out last week"],
      nextSteps: "Send renewal comparison by EOD showing savings vs TD offer",
      followUpDate: "2024-03-13",
      crossSellOpportunities: [
        {
          product: "HELOC",
          reason: "Kitchen renovation plans - could access up to $125k equity",
        },
        {
          product: "Life Insurance",
          reason: "Daughter going to university - education costs protection",
        },
      ],
      rateDiscussion: {
        currentRate: "4.79%",
        desiredRate: "Under 5.5%",
        rateSensitive: true,
      },
      propertyDetails: {
        propertyType: "Single family home",
        propertyValue: "$680,000",
        location: "Vancouver, BC",
      },
      clientProfile: {
        employmentMentioned:
          "Both working, husband just promoted to senior manager",
        familyStatus: "Married with 2 kids (17 and 14)",
        financialGoals: "Reduce monthly payments and fund renovation",
      },
      callQuality: {
        clientEngagement: "high",
        nextContactAgreed: true,
        specificTimeframeGiven: true,
      },
      strengths: [
        {
          strength:
            "Built great rapport by remembering daughter's university plans",
          timestamp: "[02:15]",
        },
        {
          strength: "Clearly explained penalty calculation process",
          timestamp: "[08:30]",
        },
      ],
    },
    {
      id: 2,
      contact: "Michael Chen",
      phone: "(778) 555-0456",
      time: "11:15 AM",
      duration: "0:45",
      callSummary:
        "Left voicemail for new purchase lead. Web inquiry from yesterday looking for pre-approval on $650k property.",
      callType: "new_lead",
      loanAmount: "$520,000",
      outcome: "voicemail",
      urgencyLevel: "medium",
      keyPoints: [
        "Web lead - submitted form yesterday",
        "Looking at properties this weekend",
        "First time buyer",
      ],
      customerConcerns: [],
      objections: [],
      lifeEvents: [],
      competitorMentions: [],
      nextSteps: "Try again after 2 PM - mentioned works from home",
      followUpDate: "2024-03-12",
      crossSellOpportunities: [],
      rateDiscussion: {
        currentRate: "",
        desiredRate: "",
        rateSensitive: false,
      },
      propertyDetails: {
        propertyType: "",
        propertyValue: "$650,000",
        location: "Burnaby, BC",
      },
      clientProfile: {
        employmentMentioned: "",
        familyStatus: "",
        financialGoals: "Get pre-approved for house purchase",
      },
      callQuality: {
        clientEngagement: "low",
        nextContactAgreed: false,
        specificTimeframeGiven: false,
      },
      strengths: [],
    },
    {
      id: 3,
      contact: "Jennifer Williams",
      phone: "(604) 555-0789",
      time: "2:30 PM",
      duration: "22:17",
      callSummary:
        "Existing client looking to refinance and pull equity for investment property. Strong financial position but concerned about qualifying with rental property.",
      callType: "refinance",
      loanAmount: "$425,000",
      outcome: "quoted",
      urgencyLevel: "medium",
      keyPoints: [
        "Wants to buy rental property",
        "Current mortgage at 3.49% with 2 years left",
        "$300k equity available",
        "Found potential rental for $450k",
      ],
      customerConcerns: [
        "Will rental income count for qualifying?",
        "Worried about managing two properties",
        "Penalty seems high to break current mortgage",
      ],
      objections: [
        {
          objection: "The penalty is almost $8,000 - that seems really high",
          broker_response:
            "Showed how rental income would offset this in 18 months",
          objection_timestamp: "[08:45]",
          response_timestamp: "[09:20]",
        },
      ],
      lifeEvents: [
        "Empty nesters - kids moved out",
        "Thinking about retirement planning",
        "Want passive income stream",
      ],
      competitorMentions: ["Scotiabank advisor"],
      nextSteps: "Run rental property scenario with 20% down and send analysis",
      followUpDate: "2024-03-14",
      crossSellOpportunities: [
        {
          product: "Wealth Management",
          reason:
            "Retirement planning mentioned - building investment portfolio",
        },
        {
          product: "Landlord Insurance",
          reason: "Will need coverage for rental property",
        },
      ],
      rateDiscussion: {
        currentRate: "3.49%",
        desiredRate: "Best available",
        rateSensitive: false,
      },
      propertyDetails: {
        propertyType: "Primary: House, Rental: Condo",
        propertyValue: "$850,000",
        location: "Richmond, BC",
      },
      clientProfile: {
        employmentMentioned: "Both professionals, combined income $185k",
        familyStatus: "Married, empty nesters",
        financialGoals: "Build retirement income through real estate",
      },
      callQuality: {
        clientEngagement: "high",
        nextContactAgreed: true,
        specificTimeframeGiven: true,
      },
      strengths: [
        {
          strength: "Excellent job explaining rental income calculations",
          timestamp: "[11:00]",
        },
        {
          strength: "Addressed penalty concern with ROI perspective",
          timestamp: "[09:20]",
        },
        {
          strength: "Built trust by sharing similar client success story",
          timestamp: "[15:30]",
        },
      ],
    },
  ];

  const stats = {
    totalCalls: callData.length,
    connected: callData.filter(
      (c) => c.outcome !== "voicemail" && c.outcome !== "no_answer"
    ).length,
    applications: callData.filter((c) => c.outcome === "application_started").length,
    avgObjHandling: 85,
    crossSellsIdentified: callData.reduce(
      (acc, call) => acc + call.crossSellOpportunities.length,
      0
    ),
    highUrgency: callData.filter((c) => c.urgencyLevel === "high").length,
  };

  const getUrgencyColor = (level: string) => {
    switch (level) {
      case "high":
        return "text-destructive bg-destructive/10";
      case "medium":
        return "text-foreground bg-accent";
      case "low":
        return "text-muted-foreground bg-muted";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  const getOutcomeColor = (outcome: string) => {
    switch (outcome) {
      case "application_started":
        return "text-primary bg-primary/10";
      case "quoted":
        return "text-foreground bg-accent";
      case "follow_up_scheduled":
        return "text-foreground bg-accent";
      case "not_interested":
        return "text-destructive bg-destructive/10";
      case "voicemail":
        return "text-muted-foreground bg-muted";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card border-b border px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Call Intelligence Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">AI-powered analysis of your calls</p>
          </div>
          <div className="flex gap-3">
            <select
              className="px-4 py-2 border rounded-lg bg-background text-foreground border"
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Start Calling
            </button>
          </div>
        </div>
      </div>

      <div className="bg-card px-6 py-4 border-b border">
        <div className="grid grid-cols-6 gap-6">
          <div>
            <div className="text-3xl font-bold text-foreground">{stats.totalCalls}</div>
            <div className="text-sm text-muted-foreground">Total Calls</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">{stats.connected}</div>
            <div className="text-sm text-muted-foreground">Connected</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">{stats.applications}</div>
            <div className="text-sm text-muted-foreground">Applications</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">{stats.avgObjHandling}%</div>
            <div className="text-sm text-muted-foreground">Objections Handled</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">{stats.crossSellsIdentified}</div>
            <div className="text-sm text-muted-foreground">Cross-sells Found</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">{stats.highUrgency}</div>
            <div className="text-sm text-muted-foreground">High Urgency</div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {callData.map((call) => (
            <div
              key={call.id}
              className="bg-card rounded-lg border border overflow-hidden"
            >
              <div
                className="p-4 hover:bg-accent cursor-pointer"
                onClick={() =>
                  setExpandedCall(expandedCall === call.id ? null : call.id)
                }
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center bg-accent`}
                    >
                      {call.outcome === "voicemail" ? (
                        <MessageSquare className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <PhoneCall className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-foreground">{call.contact}</h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(
                            call.urgencyLevel
                          )}`}
                        >
                          {call.urgencyLevel} urgency
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getOutcomeColor(
                            call.outcome
                          )}`}
                        >
                          {call.outcome.replace("_", " ")}
                        </span>
                        <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
                          {call.callType}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span>{call.phone}</span>
                        <span>•</span>
                        <span>{call.time}</span>
                        <span>•</span>
                        <span>{call.duration}</span>
                        {call.loanAmount && (
                          <>
                            <span>•</span>
                            <span className="font-medium text-foreground">{call.loanAmount}</span>
                          </>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{call.callSummary}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {call.crossSellOpportunities.length > 0 && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-accent text-foreground rounded-full text-xs font-medium">
                        <Sparkles className="w-3 h-3 text-primary" />
                        {call.crossSellOpportunities.length} cross-sell
                      </span>
                    )}
                    {expandedCall === call.id ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Next:</span>
                    <span className="text-sm font-medium text-foreground">
                      {call.nextSteps}
                    </span>
                    {call.followUpDate && (
                      <span className="text-sm text-muted-foreground">
                        • Due: {call.followUpDate}
                      </span>
                    )}
                  </div>
                  {call.duration !== "0:45" && (
                    <button className="text-sm text-primary hover:opacity-90 flex items-center gap-1">
                      <Play className="w-3 h-3" />
                      Play Recording
                    </button>
                  )}
                </div>
              </div>

              {expandedCall === call.id && (
                <div className="border-t border p-4 bg-secondary">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-4">
                      {call.propertyDetails.propertyType && (
                        <div>
                          <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                            <Home className="w-4 h-4 text-muted-foreground" />
                            Property Details
                          </h4>
                          <div className="bg-card rounded-lg p-3 space-y-1 text-sm">
                            <div>
                              <span className="text-muted-foreground">Type:</span>{" "}
                              <span className="font-medium">
                                {call.propertyDetails.propertyType}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Value:</span>{" "}
                              <span className="font-medium">
                                {call.propertyDetails.propertyValue}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Location:</span>{" "}
                              <span className="font-medium">
                                {call.propertyDetails.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {call.clientProfile.employmentMentioned && (
                        <div>
                          <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                            <User className="w-4 h-4 text-muted-foreground" />
                            Client Profile
                          </h4>
                          <div className="bg-card rounded-lg p-3 space-y-1 text-sm">
                            <div>
                              <span className="text-muted-foreground">Employment:</span>{" "}
                              <span className="font-medium">
                                {call.clientProfile.employmentMentioned}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Family:</span>{" "}
                              <span className="font-medium">
                                {call.clientProfile.familyStatus}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Goals:</span>{" "}
                              <span className="font-medium">
                                {call.clientProfile.financialGoals}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {call.lifeEvents.length > 0 && (
                        <div>
                          <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-muted-foreground" />
                            Life Events
                          </h4>
                          <div className="bg-card rounded-lg p-3 space-y-1">
                            {call.lifeEvents.map((event, idx) => (
                              <div key={idx} className="text-sm flex items-start gap-2">
                                <span className="text-primary mt-0.5">•</span>
                                <span>{event}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      {call.keyPoints.length > 0 && (
                        <div>
                          <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4 text-muted-foreground" />
                            Key Discussion Points
                          </h4>
                          <div className="bg-card rounded-lg p-3 space-y-1">
                            {call.keyPoints.map((point, idx) => (
                              <div key={idx} className="text-sm flex items-start gap-2">
                                <CheckCircle className="w-3 h-3 text-primary mt-0.5" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {call.objections.length > 0 && (
                        <div>
                          <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-muted-foreground" />
                            Objections & Responses
                          </h4>
                          <div className="space-y-2">
                            {call.objections.map((obj, idx) => (
                              <div key={idx} className="bg-card rounded-lg p-3 text-sm">
                                <div className="text-destructive font-medium">
                                  {obj.objection}
                                </div>
                                <div className="text-primary mt-1">
                                  → {obj.broker_response}
                                </div>
                                {obj.objection_timestamp && (
                                  <div className="text-xs text-muted-foreground mt-1">
                                    {obj.objection_timestamp} → {obj.response_timestamp}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {call.strengths.length > 0 && (
                        <div>
                          <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-muted-foreground" />
                            Call Strengths
                          </h4>
                          <div className="bg-secondary rounded-lg p-3 space-y-1">
                            {call.strengths.map((strength, idx) => (
                              <div key={idx} className="text-sm flex items-start gap-2">
                                <span className="text-primary">✓</span>
                                <span>
                                  {strength.strength} {strength.timestamp}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      {call.crossSellOpportunities.length > 0 && (
                        <div>
                          <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            Cross-sell Opportunities
                          </h4>
                          <div className="space-y-2">
                            {call.crossSellOpportunities.map((opp, idx) => (
                              <div
                                key={idx}
                                className="bg-accent border border rounded-lg p-3"
                              >
                                <div className="font-medium text-foreground">
                                  {opp.product}
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">
                                  {opp.reason}
                                </div>
                                <button className="text-xs text-primary hover:opacity-90 mt-2">
                                  Add to pipeline →
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {call.rateDiscussion.currentRate && (
                        <div>
                          <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-muted-foreground" />
                            Rate Discussion
                          </h4>
                          <div className="bg-card rounded-lg p-3 space-y-1 text-sm">
                            <div>
                              <span className="text-muted-foreground">Current:</span>{" "}
                              <span className="font-medium">
                                {call.rateDiscussion.currentRate}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Desired:</span>{" "}
                              <span className="font-medium">
                                {call.rateDiscussion.desiredRate}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Rate Sensitive:</span>{" "}
                              <span
                                className={`font-medium ${
                                  call.rateDiscussion.rateSensitive
                                    ? "text-destructive"
                                    : "text-foreground"
                                }`}
                              >
                                {call.rateDiscussion.rateSensitive ? "Yes" : "No"}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {call.competitorMentions.length > 0 && (
                        <div>
                          <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                            <Building className="w-4 h-4 text-muted-foreground" />
                            Competition
                          </h4>
                          <div className="bg-secondary rounded-lg p-3">
                            {call.competitorMentions.map((comp, idx) => (
                              <div key={idx} className="text-sm flex items-center gap-2">
                                <AlertTriangle className="w-3 h-3 text-foreground" />
                                <span>{comp}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-muted-foreground" />
                          Call Quality
                        </h4>
                        <div className="bg-card rounded-lg p-3 space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Engagement:</span>
                            <span
                              className={`font-medium ${
                                call.callQuality.clientEngagement === "high"
                                  ? "text-foreground"
                                  : call.callQuality.clientEngagement === "medium"
                                  ? "text-foreground"
                                  : "text-destructive"
                              }`}
                            >
                              {call.callQuality.clientEngagement}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Next Contact:</span>
                            <span className="font-medium">
                              {call.callQuality.nextContactAgreed ? "Yes" : "No"}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Timeline Given:</span>
                            <span className="font-medium">
                              {call.callQuality.specificTimeframeGiven ? "Yes" : "No"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};