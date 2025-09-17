import React, { useState } from 'react';
import { Play, Pause, Phone, Clock, Calendar, FileText, AlertCircle, Target, ChevronDown, ChevronUp, TrendingUp } from 'lucide-react';

const CallAnalysisDetail = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    summary: true,
    keyPoints: true,
    opportunities: true
  });

  // Realistic call data that LLMs can extract
  const callData = {
    id: "CALL-2024-03-12-001",
    contact: "Sarah Johnson",
    agent: "Nav Cheema",
    date: "March 12, 2024",
    time: "10:32 AM",
    duration: "18:52",
    outcome: "Application Started"
  };

  const callAnalysis = {
    summary: "Customer called about debt consolidation for three credit cards totaling approximately $45,000. She mentioned her husband recently got a new job with better pay, and they want to get their finances in order. Current monthly payments across all cards are around $1,200. Main concern was about interest rates. Also mentioned they're planning a kitchen renovation this summer. Customer seemed positive about moving forward and agreed to start an application.",
    
    keyInformation: [
      "Total debt: ~$45,000 across 3 credit cards",
      "Current monthly payments: $1,200",
      "Husband has new job (increased household income)",
      "Main objection: Interest rate concerns",
      "Planning kitchen renovation this summer",
      "Agreed to start application"
    ],
    
    customerQuestions: [
      "What interest rate would I qualify for?",
      "How much would my monthly payment be?",
      "How long does the application process take?",
      "Would this affect my ability to get a home equity loan later?"
    ],
    
    agentResponses: [
      "Focused on monthly payment savings rather than rate",
      "Quoted potential payment of $650-700 (saving ~$500/month)",
      "Mentioned 24-48 hour approval timeline",
      "Explained debt consolidation could improve credit score"
    ],
    
    crossSellOpportunities: [
      {
        product: "Home Equity Line of Credit",
        trigger: "Mentioned kitchen renovation plans",
        timing: "After personal loan approval",
        notes: "Customer asking about future home equity options"
      }
    ],
    
    followUpActions: [
      "Send application link via email",
      "Follow up tomorrow if application not completed",
      "Schedule call post-approval to discuss HELOC for renovation",
      "Add note about husband's new employment"
    ]
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Call Recording & Analysis</h1>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {callData.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {callData.time}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                {callData.duration}
              </span>
              <span>Agent: {callData.agent}</span>
              <span>Contact: {callData.contact}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Download Recording
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Add to Training Library
            </button>
          </div>
        </div>
      </div>

      {/* Simple Player */}
      <div className="bg-gray-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              <div>
                <div className="text-sm">Call Recording</div>
                <div className="text-xs text-gray-400">{callData.duration} duration</div>
              </div>
            </div>
            <div className="text-sm">
              <span className="text-gray-400">Outcome:</span>
              <span className="ml-2 px-2 py-1 bg-green-800 rounded">{callData.outcome}</span>
            </div>
          </div>
          
          {/* Simple progress bar */}
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{width: '35%'}}></div>
          </div>
        </div>
      </div>

      {/* Analysis Content */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="space-y-4">
          {/* Call Summary */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div 
              className="px-4 py-3 border-b border-gray-200 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('summary')}
            >
              <h3 className="font-semibold text-gray-900">Call Summary</h3>
              {expandedSections.summary ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
            {expandedSections.summary && (
              <div className="p-4">
                <p className="text-gray-700 mb-4">{callAnalysis.summary}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Customer Questions</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {callAnalysis.customerQuestions.map((question, idx) => (
                        <li key={idx}>• {question}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">How We Responded</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {callAnalysis.agentResponses.map((response, idx) => (
                        <li key={idx}>• {response}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Key Information */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div 
              className="px-4 py-3 border-b border-gray-200 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('keyPoints')}
            >
              <h3 className="font-semibold text-gray-900">Key Information Captured</h3>
              {expandedSections.keyPoints ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
            {expandedSections.keyPoints && (
              <div className="p-4">
                <ul className="space-y-2">
                  {callAnalysis.keyInformation.map((info, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span className="text-gray-700">{info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Cross-sell Opportunities */}
          {callAnalysis.crossSellOpportunities.length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200">
              <div 
                className="px-4 py-3 border-b border-gray-200 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('opportunities')}
              >
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Cross-Sell Opportunities Identified
                </h3>
                {expandedSections.opportunities ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
              {expandedSections.opportunities && (
                <div className="p-4">
                  {callAnalysis.crossSellOpportunities.map((opp, idx) => (
                    <div key={idx} className="bg-purple-50 rounded-lg p-3">
                      <div className="font-medium text-purple-900">{opp.product}</div>
                      <div className="text-sm text-purple-700 mt-1">Trigger: {opp.trigger}</div>
                      <div className="text-sm text-purple-700">Timing: {opp.timing}</div>
                      {opp.notes && (
                        <div className="text-sm text-purple-600 mt-2">Note: {opp.notes}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Follow-up Actions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-3">Recommended Follow-up Actions</h3>
            <ul className="space-y-2">
              {callAnalysis.followUpActions.map((action, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <input type="checkbox" className="mt-0.5" />
                  <span className="text-blue-800">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallAnalysisDetail;