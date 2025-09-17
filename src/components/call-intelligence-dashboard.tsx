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
        return "text-red-600 bg-red-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "low":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getOutcomeColor = (outcome: string) => {
    switch (outcome) {
      case "application_started":
        return "text-green-700 bg-green-100";
      case "quoted":
        return "text-blue-700 bg-blue-100";
      case "follow_up_scheduled":
        return "text-purple-700 bg-purple-100";
      case "not_interested":
        return "text-red-700 bg-red-100";
      case "voicemail":
        return "text-yellow-700 bg-yellow-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Call Intelligence Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">AI-powered analysis of your calls</p>
          </div>
          <div className="flex gap-3">
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg"
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Start Calling
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white px-6 py-4 border-b border-gray-200">
        <div className="grid grid-cols-6 gap-6">
          <div>
            <div className="text-3xl font-bold text-gray-900">{stats.totalCalls}</div>
            <div className="text-sm text-gray-600">Total Calls</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">{stats.connected}</div>
            <div className="text-sm text-gray-600">Connected</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">{stats.applications}</div>
            <div className="text-sm text-gray-600">Applications</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">{stats.avgObjHandling}%</div>
            <div className="text-sm text-gray-600">Objections Handled</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">{stats.crossSellsIdentified}</div>
            <div className="text-sm text-gray-600">Cross-sells Found</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600">{stats.highUrgency}</div>
            <div className="text-sm text-gray-600">High Urgency</div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {callData.map((call) => (
            <div
              key={call.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <div
                className="p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() =>
                  setExpandedCall(expandedCall === call.id ? null : call.id)
                }
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        call.outcome === "voicemail"
                          ? "bg-yellow-100"
                          : call.outcome === "application_started"
                          ? "bg-green-100"
                          : "bg-blue-100"
                      }`}
                    >
                      {call.outcome === "voicemail" ? (
                        <MessageSquare className="w-5 h-5 text-yellow-600" />
                      ) : (
                        <PhoneCall className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-gray-900">{call.contact}</h3>
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
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          {call.callType}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                        <span>{call.phone}</span>
                        <span>•</span>
                        <span>{call.time}</span>
                        <span>•</span>
                        <span>{call.duration}</span>
                        {call.loanAmount && (
                          <>
                            <span>•</span>
                            <span className="font-medium">{call.loanAmount}</span>
                          </>
                        )}
                      </div>
                      <p className="text-sm text-gray-700 mt-2">{call.callSummary}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {call.crossSellOpportunities.length > 0 && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        <Sparkles className="w-3 h-3" />
                        {call.crossSellOpportunities.length} cross-sell
                      </span>
                    )}
                    {expandedCall === call.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Next:</span>
                    <span className="text-sm font-medium text-gray-900">
                      {call.nextSteps}
                    </span>
                    {call.followUpDate && (
                      <span className="text-sm text-gray-500">
                        • Due: {call.followUpDate}
                      </span>
                    )}
                  </div>
                  {call.duration !== "0:45" && (
                    <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      <Play className="w-3 h-3" />
                      Play Recording
                    </button>
                  )}
                </div>
              </div>

              {expandedCall === call.id && (
                <div className="border-t border-gray-200 p-4 bg-gray-50">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-4">
                      {call.propertyDetails.propertyType && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                            <Home className="w-4 h-4 text-gray-600" />
                            Property Details
                          </h4>
                          <div className="bg-white rounded-lg p-3 space-y-1 text-sm">
                            <div>
                              <span className="text-gray-600">Type:</span>{" "}
                              <span className="font-medium">
                                {call.propertyDetails.propertyType}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-600">Value:</span>{" "}
                              <span className="font-medium">
                                {call.propertyDetails.propertyValue}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-600">Location:</span>{" "}
                              <span className="font-medium">
                                {call.propertyDetails.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {call.clientProfile.employmentMentioned && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-600" />
                            Client Profile
                          </h4>
                          <div className="bg-white rounded-lg p-3 space-y-1 text-sm">
                            <div>
                              <span className="text-gray-600">Employment:</span>{" "}
                              <span className="font-medium">
                                {call.clientProfile.employmentMentioned}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-600">Family:</span>{" "}
                              <span className="font-medium">
                                {call.clientProfile.familyStatus}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-600">Goals:</span>{" "}
                              <span className="font-medium">
                                {call.clientProfile.financialGoals}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {call.lifeEvents.length > 0 && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-gray-600" />
                            Life Events
                          </h4>
                          <div className="bg-white rounded-lg p-3 space-y-1">
                            {call.lifeEvents.map((event, idx) => (
                              <div key={idx} className="text-sm flex items-start gap-2">
                                <span className="text-purple-600 mt-0.5">•</span>
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
                          <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4 text-gray-600" />
                            Key Discussion Points
                          </h4>
                          <div className="bg-white rounded-lg p-3 space-y-1">
                            {call.keyPoints.map((point, idx) => (
                              <div key={idx} className="text-sm flex items-start gap-2">
                                <CheckCircle className="w-3 h-3 text-green-600 mt-0.5" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {call.objections.length > 0 && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-gray-600" />
                            Objections & Responses
                          </h4>
                          <div className="space-y-2">
                            {call.objections.map((obj, idx) => (
                              <div key={idx} className="bg-white rounded-lg p-3 text-sm">
                                <div className="text-red-700 font-medium">
                                  {obj.objection}
                                </div>
                                <div className="text-green-700 mt-1">
                                  → {obj.broker_response}
                                </div>
                                {obj.objection_timestamp && (
                                  <div className="text-xs text-gray-500 mt-1">
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
                          <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-gray-600" />
                            Call Strengths
                          </h4>
                          <div className="bg-green-50 rounded-lg p-3 space-y-1">
                            {call.strengths.map((strength, idx) => (
                              <div key={idx} className="text-sm flex items-start gap-2">
                                <span className="text-green-600">✓</span>
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
                          <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-purple-600" />
                            Cross-sell Opportunities
                          </h4>
                          <div className="space-y-2">
                            {call.crossSellOpportunities.map((opp, idx) => (
                              <div
                                key={idx}
                                className="bg-purple-50 border border-purple-200 rounded-lg p-3"
                              >
                                <div className="font-medium text-purple-900">
                                  {opp.product}
                                </div>
                                <div className="text-sm text-purple-700 mt-1">
                                  {opp.reason}
                                </div>
                                <button className="text-xs text-purple-600 hover:text-purple-700 mt-2">
                                  Add to pipeline →
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {call.rateDiscussion.currentRate && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-gray-600" />
                            Rate Discussion
                          </h4>
                          <div className="bg-white rounded-lg p-3 space-y-1 text-sm">
                            <div>
                              <span className="text-gray-600">Current:</span>{" "}
                              <span className="font-medium">
                                {call.rateDiscussion.currentRate}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-600">Desired:</span>{" "}
                              <span className="font-medium">
                                {call.rateDiscussion.desiredRate}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-600">Rate Sensitive:</span>{" "}
                              <span
                                className={`font-medium ${
                                  call.rateDiscussion.rateSensitive
                                    ? "text-red-600"
                                    : "text-green-600"
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
                          <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                            <Building className="w-4 h-4 text-gray-600" />
                            Competition
                          </h4>
                          <div className="bg-yellow-50 rounded-lg p-3">
                            {call.competitorMentions.map((comp, idx) => (
                              <div key={idx} className="text-sm flex items-center gap-2">
                                <AlertTriangle className="w-3 h-3 text-yellow-600" />
                                <span>{comp}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-gray-600" />
                          Call Quality
                        </h4>
                        <div className="bg-white rounded-lg p-3 space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Engagement:</span>
                            <span
                              className={`font-medium ${
                                call.callQuality.clientEngagement === "high"
                                  ? "text-green-600"
                                  : call.callQuality.clientEngagement === "medium"
                                  ? "text-yellow-600"
                                  : "text-red-600"
                              }`}
                            >
                              {call.callQuality.clientEngagement}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Next Contact:</span>
                            <span className="font-medium">
                              {call.callQuality.nextContactAgreed ? "Yes" : "No"}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Timeline Given:</span>
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