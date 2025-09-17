import React, { useState } from 'react';
import { User, Calendar, DollarSign, TrendingUp, AlertCircle, Phone, MessageSquare, FileText, Home, Users, Briefcase, Clock, ChevronDown, ChevronUp, Target, Shield, Car, GraduationCap, Heart, Sparkles, BarChart3, CheckCircle, XCircle, ArrowRight, Building } from 'lucide-react';

const ClientRenewalProfile = () => {
  const [expandedSections, setExpandedSections] = useState({
    dealHistory: true,
    lifeChanges: true,
    financialProfile: true,
    opportunities: true,
    talkingPoints: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Client renewal data
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
      type: "5-year fixed"
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
      whyTheyChose: "Best rate + trusted referral from sister"
    },
    propertyDetails: {
      currentValue: "$685,000",
      appreciation: "$155,000",
      equity: "$300,000",
      address: "1234 Oak Street, Vancouver",
      propertyType: "Single Family Home",
      yearBuilt: "2008"
    },
    clientProfile: {
      ages: "Jennifer (42), Robert (44)",
      occupations: "Jennifer - Marketing Director, Robert - Software Engineer",
      householdIncome: "$165,000",
      incomeChange: "+$25,000 since last deal",
      creditScores: "Jennifer: 782, Robert: 794"
    },
    lifeEvents: [
      {
        date: "2021",
        event: "Second child born (Emma)",
        impact: "Increased expenses, considering education savings",
        icon: Heart
      },
      {
        date: "2022",
        event: "Jennifer promoted to Director",
        impact: "Income increased by $20k, more stable employment",
        icon: Briefcase
      },
      {
        date: "2023",
        event: "Kitchen renovation completed",
        impact: "Spent ~$45k, increased home value",
        icon: Home
      },
      {
        date: "2024",
        event: "Started college fund for kids",
        impact: "Looking at long-term financial planning",
        icon: GraduationCap
      }
    ],
    financialSnapshot: {
      otherDebts: [
        { type: "Car Loan", amount: "$22,000", payment: "$425", rate: "5.99%" },
        { type: "Line of Credit", amount: "$15,000", payment: "$300", rate: "7.45%" }
      ],
      totalDebtPayments: "$2,737",
      disposableIncome: "~$4,500/month",
      savings: "Emergency fund established",
      investments: "RRSP: $85k, TFSA: $45k, RESP: $12k"
    },
    communicationHistory: [
      { date: "Jan 2024", type: "Email", topic: "Happy New Year check-in", response: "Positive, mentioned planning renovations" },
      { date: "Oct 2023", type: "Phone", topic: "Rate discussion", response: "Concerned about rising rates" },
      { date: "Apr 2023", type: "In-person", topic: "Annual review", response: "Happy with service, referred colleague" }
    ],
    opportunityAnalysis: {
      primary: {
        product: "Mortgage Renewal",
        strategy: "Blend and extend to lock in before rates rise",
        savings: "~$180/month vs current rate environment",
        urgency: "High - rates expected to increase"
      },
      secondary: [
        {
          product: "Debt Consolidation",
          reason: "High-rate car loan and LOC",
          potentialSaving: "$275/month",
          recommendation: "Roll into mortgage at renewal"
        },
        {
          product: "HELOC",
          reason: "Access equity for investment property",
          amount: "Up to $125,000",
          note: "Mentioned interest in rental income"
        },
        {
          product: "Life Insurance",
          reason: "Increased mortgage, 2 young children",
          gap: "Only has work coverage",
          recommendation: "Term life $1M each"
        }
      ]
    },
    competitorIntel: {
      currentOffers: [
        { lender: "TD (current)", rate: "5.84%", incentive: "$1,000 cash back" },
        { lender: "RBC", rate: "5.79%", incentive: "Free appraisal + $1,500 cash" },
        { lender: "Monoline", rate: "5.49%", incentive: "Lower penalty, portable" }
      ],
      clientLoyalty: "Medium - happy but price conscious",
      switchingBarriers: ["Convenience", "Existing relationship", "Other products at TD"]
    },
    recommendedApproach: {
      opening: "Congratulate on home value increase and Jennifer's career success",
      keyPoints: [
        "Market shifted significantly since 2020 - let's protect their rate",
        "Blend and extend could save $180/month starting now",
        "Debt consolidation opportunity - free up $275/month",
        "Growing family needs - insurance gap discussion"
      ],
      objectionHandling: {
        "Staying with TD": "I can often beat their renewal offer - let me show you the numbers",
        "Rates might drop": "Lock in now with option to blend down if rates fall",
        "Too busy": "I'll handle everything - 15 min phone call is all we need"
      }
    }
  };

  const renewalUrgency = clientData.currentMortgage.daysUntilRenewal <= 60 ? 'high' : 
                         clientData.currentMortgage.daysUntilRenewal <= 90 ? 'medium' : 'low';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-semibold text-gray-900">{clientData.name}</h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  renewalUrgency === 'high' ? 'bg-red-100 text-red-700' :
                  renewalUrgency === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  Renewal in {clientData.currentMortgage.daysUntilRenewal} days
                </span>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
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
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Send Message
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <FileText className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="px-6 py-3 bg-blue-50 border-t border-blue-100">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div>
                <span className="text-gray-600">Property Value:</span>
                <span className="font-semibold text-gray-900 ml-2">{clientData.propertyDetails.currentValue}</span>
                <span className="text-green-600 ml-1">(+29%)</span>
              </div>
              <div>
                <span className="text-gray-600">Available Equity:</span>
                <span className="font-semibold text-gray-900 ml-2">{clientData.propertyDetails.equity}</span>
              </div>
              <div>
                <span className="text-gray-600">Payment Room:</span>
                <span className="font-semibold text-gray-900 ml-2">~$2,500/mo</span>
              </div>
              <div>
                <span className="text-gray-600">Lifetime Value:</span>
                <span className="font-semibold text-green-600 ml-2">$8,450</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-purple-700">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">3 Cross-sell Opportunities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Historical Context */}
          <div className="col-span-2 space-y-6">
            {/* Original Deal Analysis */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div 
                className="px-4 py-3 border-b border-gray-200 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('dealHistory')}
              >
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  Original Deal Analysis (2020)
                </h3>
                {expandedSections.dealHistory ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
              {expandedSections.dealHistory && (
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Deal Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Original Amount:</span>
                          <span className="font-medium">{clientData.originalDeal.amount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Rate Secured:</span>
                          <span className="font-medium text-green-600">{clientData.originalDeal.rateAtTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Your Commission:</span>
                          <span className="font-medium">{clientData.originalDeal.commission}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Competitive Landscape</h4>
                      <div className="space-y-2 text-sm">
                        {clientData.originalDeal.competingOffers.map((offer, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <XCircle className="w-3 h-3 text-red-500" />
                            <span className="text-gray-600">{offer}</span>
                          </div>
                        ))}
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="w-3 h-3" />
                          <span className="font-medium">You won with best rate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-700">
                      <strong>Why they chose you:</strong> {clientData.originalDeal.whyTheyChose}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Life Events Timeline */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div 
                className="px-4 py-3 border-b border-gray-200 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('lifeChanges')}
              >
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Life Changes Since Last Deal
                </h3>
                {expandedSections.lifeChanges ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
              {expandedSections.lifeChanges && (
                <div className="p-4">
                  <div className="space-y-4">
                    {clientData.lifeEvents.map((event, idx) => {
                      const Icon = event.icon;
                      return (
                        <div key={idx} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                              <Icon className="w-5 h-5 text-purple-600" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-gray-900">{event.event}</span>
                              <span className="text-sm text-gray-500">({event.date})</span>
                            </div>
                            <p className="text-sm text-gray-600">{event.impact}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Financial Profile */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div 
                className="px-4 py-3 border-b border-gray-200 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('financialProfile')}
              >
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  Current Financial Snapshot
                </h3>
                {expandedSections.financialProfile ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
              {expandedSections.financialProfile && (
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Income & Employment</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-600">Household Income:</span>
                          <span className="font-medium ml-2">{clientData.clientProfile.householdIncome}</span>
                          <span className="text-green-600 ml-1">(+$25k)</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Jennifer:</span>
                          <span className="ml-2">{clientData.clientProfile.occupations.split(',')[0]}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Robert:</span>
                          <span className="ml-2">{clientData.clientProfile.occupations.split(',')[1]}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Other Debts</h4>
                      <div className="space-y-2">
                        {clientData.financialSnapshot.otherDebts.map((debt, idx) => (
                          <div key={idx} className="text-sm bg-gray-50 rounded p-2">
                            <div className="flex justify-between">
                              <span className="font-medium">{debt.type}</span>
                              <span>{debt.amount}</span>
                            </div>
                            <div className="flex justify-between text-xs text-gray-600 mt-1">
                              <span>Payment: {debt.payment}/mo</span>
                              <span className="text-red-600">Rate: {debt.rate}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{clientData.financialSnapshot.totalDebtPayments}</div>
                        <div className="text-xs text-gray-600">Total Debt Payments</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{clientData.financialSnapshot.disposableIncome}</div>
                        <div className="text-xs text-gray-600">Disposable Income</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">$142k</div>
                        <div className="text-xs text-gray-600">Total Investments</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Action Items */}
          <div className="space-y-6">
            {/* Primary Opportunity */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 p-4">
              <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Primary Opportunity
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-blue-900">{clientData.opportunityAnalysis.primary.product}</div>
                  <p className="text-sm text-blue-700 mt-1">{clientData.opportunityAnalysis.primary.strategy}</p>
                </div>
                <div className="bg-white/70 rounded p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-800">Potential Savings:</span>
                    <span className="font-bold text-blue-900">{clientData.opportunityAnalysis.primary.savings}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 rounded p-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{clientData.opportunityAnalysis.primary.urgency}</span>
                </div>
              </div>
            </div>

            {/* Cross-sell Opportunities */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div 
                className="px-4 py-3 border-b border-gray-200 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('opportunities')}
              >
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  Cross-sell Opportunities
                </h3>
                {expandedSections.opportunities ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
              {expandedSections.opportunities && (
                <div className="p-4 space-y-3">
                  {clientData.opportunityAnalysis.secondary.map((opp, idx) => (
                    <div key={idx} className="border-l-4 border-purple-400 pl-3">
                      <div className="font-medium text-gray-900">{opp.product}</div>
                      <p className="text-xs text-gray-600 mt-1">{opp.reason}</p>
                      {opp.potentialSaving && (
                        <p className="text-sm text-green-600 font-medium mt-1">Save {opp.potentialSaving}</p>
                      )}
                      {opp.amount && (
                        <p className="text-sm text-blue-600 font-medium mt-1">{opp.amount} available</p>
                      )}
                      {opp.gap && (
                        <p className="text-sm text-red-600 mt-1">Gap: {opp.gap}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Talking Points */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div 
                className="px-4 py-3 border-b border-gray-200 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('talkingPoints')}
              >
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  Conversation Strategy
                </h3>
                {expandedSections.talkingPoints ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
              {expandedSections.talkingPoints && (
                <div className="p-4">
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Opening:</h4>
                    <p className="text-sm text-gray-700 italic">"{clientData.recommendedApproach.opening}"</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Points:</h4>
                    <ul className="space-y-1">
                      {clientData.recommendedApproach.keyPoints.map((point, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Objection Handlers:</h4>
                    <div className="space-y-2">
                      {Object.entries(clientData.recommendedApproach.objectionHandling).map(([objection, response], idx) => (
                        <div key={idx} className="text-sm">
                          <div className="font-medium text-gray-700">"{objection}"</div>
                          <div className="text-gray-600 italic ml-4">→ {response}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Competitive Intel */}
            <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-4">
              <h3 className="font-semibold text-yellow-900 mb-2">⚠️ Competitive Alert</h3>
              <div className="space-y-2 text-sm">
                <p className="text-yellow-800">TD offering {clientData.competitorIntel.currentOffers[0].incentive}</p>
                <p className="text-yellow-800">RBC actively courting with {clientData.competitorIntel.currentOffers[1].rate} rate</p>
                <p className="font-medium text-yellow-900 mt-2">Client loyalty: {clientData.competitorIntel.clientLoyalty}</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-3">Quick Actions</h4>
              <div className="space-y-2">
                <button className="w-full text-left p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Generate Renewal Proposal</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Run New Scenarios</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Schedule Meeting</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
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

export default ClientRenewalProfile;