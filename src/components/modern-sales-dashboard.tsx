'use client';

import React, { useState } from 'react';
import { Phone, Calendar, DollarSign, Users, ChevronRight, Search, MessageSquare, Trophy, Flame, ArrowUp, ArrowDown, Award, FileText } from 'lucide-react';

// Minimal type hints
type Team = {
  name: string;
  stats: { applications: number; docsComplete: number; approvals: number };
  trend: 'up' | 'down' | 'same';
  rank: number;
  isYours?: boolean;
};

type Task = {
  id: number;
  type: 'follow-up' | 'pipeline' | 'prospecting';
  priority: 'urgent' | 'high' | 'normal';
  contact: string;
  action: string;
  reason: string;
  amount?: string;
  stage?: string;
  hotPotato?: string;
  phone: string | null;
  competitiveNote?: string;
};

export const ModernSalesDashboard: React.FC = () => {
  const [activeView, setActiveView] = useState<'today' | 'prospecting' | 'pipeline' | 'book'>('today');
  const [showTeamView, setShowTeamView] = useState(false);

  const personalProgress = {
    current: { applications: 8, appraisals: 5, docsComplete: 72, approvals: 3 },
    lastWeek: { applications: 6, appraisals: 7, docsComplete: 68, approvals: 2 },
    personalBest: { applications: 12, appraisals: 9, docsComplete: 85, approvals: 5 },
    monthlyGoal: { applications: 40, appraisals: 25, docsComplete: 80, approvals: 15 },
    currentProgress: { applications: 22, appraisals: 14, docsComplete: 72, approvals: 8 },
  };

  const teamStandings: Team[] = [
    { name: "Nav's Team", stats: { applications: 18, docsComplete: 75, approvals: 7 }, trend: 'up', rank: 1 },
    { name: 'Your Team (Sunny)', stats: { applications: 16, docsComplete: 72, approvals: 6 }, trend: 'up', rank: 2, isYours: true },
    { name: "Alika's Team", stats: { applications: 15, docsComplete: 78, approvals: 5 }, trend: 'same', rank: 3 },
    { name: "Bowie's Team", stats: { applications: 14, docsComplete: 68, approvals: 4 }, trend: 'down', rank: 4 },
  ];

  const todaysTasks: Task[] = [
    { id: 1, type: 'follow-up', priority: 'urgent', contact: 'Sarah Johnson', action: 'Send application documents', reason: 'Promised by EOD yesterday', amount: '$45,000', stage: 'Application', hotPotato: 'You', phone: '(604) 555-0123', competitiveNote: '1 more app to beat your daily record!' },
    { id: 2, type: 'pipeline', priority: 'high', contact: 'Michael Chen', action: 'Check underwriter status', reason: 'Been with underwriter 3 days', amount: '$120,000', stage: 'Underwriting', hotPotato: 'Underwriter', phone: '(778) 555-0456' },
    { id: 3, type: 'prospecting', priority: 'normal', contact: 'New Web Leads (5)', action: 'Initial outreach calls', reason: 'Leads aging > 24 hours', phone: null },
  ];

  const achievements = [
    { id: 1, name: 'Speed Demon', description: '3 apps in one day', progress: 66, icon: Award },
    { id: 2, name: 'Quality Master', description: '90% approval rate', progress: 80, icon: Award },
    { id: 3, name: 'Doc Warrior', description: '100% docs complete', progress: 72, icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-semibold text-gray-900">Broker Command Center</h1>
            <div className="flex gap-2">
              {(['today','prospecting','pipeline','book'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveView(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeView === tab ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab === 'today' ? "Today's Focus" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowTeamView(!showTeamView)}
              className={`px-3 py-2 rounded-lg flex items-center gap-2 ${
                showTeamView ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Trophy className="w-4 h-4" />
              Team Stats
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900"><Calendar className="w-5 h-5" /></button>
            <button className="p-2 text-gray-600 hover:text-gray-900"><Search className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      {/* Personal Progress Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-sm">
              <div className="text-blue-100 text-xs">Your Progress Today</div>
              <div className="flex items-center gap-4 mt-1">
                <span className="flex items-center gap-1">
                  <span className="font-semibold">{personalProgress.current.applications}</span>
                  <span className="text-xs text-blue-200">apps</span>
                  {personalProgress.current.applications > personalProgress.lastWeek.applications && (
                    <ArrowUp className="w-3 h-3 text-green-300" />
                  )}
                </span>
                <span className="text-blue-300">•</span>
                <span className="flex items-center gap-1">
                  <span className="font-semibold">{personalProgress.current.appraisals}</span>
                  <span className="text-xs text-blue-200">appraisals</span>
                </span>
                <span className="text-blue-300">•</span>
                <span className="flex items-center gap-1">
                  <span className="font-semibold">{personalProgress.current.docsComplete}%</span>
                  <span className="text-xs text-blue-200">docs</span>
                </span>
                <span className="text-blue-300">•</span>
                <span className="flex items-center gap-1">
                  <span className="font-semibold">{personalProgress.current.approvals}</span>
                  <span className="text-xs text-blue-200">approvals</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div>
              <div className="text-xs text-blue-200">Personal Best</div>
              <div className="flex items-center gap-1">
                <Trophy className="w-3 h-3 text-yellow-300" />
                <span>{personalProgress.personalBest.applications} apps/day</span>
              </div>
            </div>
            <div>
              <div className="text-xs text-blue-200">Month Progress</div>
              <div className="flex items-center gap-2">
                <div className="w-24 bg-blue-800 rounded-full h-2">
                  <div
                    className="bg-green-400 h-2 rounded-full"
                    style={{ width: `${(personalProgress.currentProgress.applications / personalProgress.monthlyGoal.applications) * 100}%` }}
                  />
                </div>
                <span className="text-xs">{Math.round((personalProgress.currentProgress.applications / personalProgress.monthlyGoal.applications) * 100)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Competition View */}
      {showTeamView && (
        <div className="bg-purple-50 border-b border-purple-200 px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-purple-900">Team Standings - This Week</h3>
            <button className="text-sm text-purple-600 hover:text-purple-700">View Details →</button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {teamStandings.map((team) => (
              <div key={team.name} className={`bg-white rounded-lg p-3 border-2 ${team.isYours ? 'border-purple-400' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-lg font-bold ${team.rank === 1 ? 'text-yellow-600' : team.rank === 2 ? 'text-gray-500' : team.rank === 3 ? 'text-orange-600' : 'text-gray-400'}`}>#{team.rank}</span>
                    <span className="font-medium text-gray-900 text-sm">{team.name}</span>
                  </div>
                  {team.trend === 'up' && <ArrowUp className="w-4 h-4 text-green-600" />}
                  {team.trend === 'down' && <ArrowDown className="w-4 h-4 text-red-600" />}
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between"><span className="text-gray-600">Apps:</span><span className="font-medium">{team.stats.applications}</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Approvals:</span><span className="font-medium">{team.stats.approvals}</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Docs:</span><span className="font-medium">{team.stats.docsComplete}%</span></div>
                </div>
                {team.isYours && <div className="mt-2 pt-2 border-t border-purple-200 text-xs text-purple-600 font-medium">Your Team</div>}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 mt-3 text-sm">
            <span className="text-purple-700">🎯 Team Goal: Beat last week's 62 applications</span>
            <span className="text-purple-700">•</span>
            <span className="text-purple-700">Current: 58/62 (94%)</span>
          </div>
        </div>
      )}

      {/* Main Content (Today view only for initial integration) */}
      {activeView === 'today' && (
        <div className="grid grid-cols-3 gap-6 p-6">
          {/* Left: Tasks */}
          <div className="col-span-2 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">What needs your attention today</h2>
                <span className="text-sm text-gray-600">{todaysTasks.filter((t) => t.priority === 'urgent').length} urgent items</span>
              </div>
              <div className="space-y-3">
                {todaysTasks.map((task) => (
                  <div key={task.id} className={`bg-white rounded-lg border ${task.priority === 'urgent' ? 'border-red-200' : 'border-gray-200'} p-4 hover:shadow-md transition-shadow`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${task.priority === 'urgent' ? 'bg-red-100 text-red-700' : task.priority === 'high' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}>{task.priority}</span>
                          <span className={`px-2 py-1 rounded text-xs ${task.type === 'follow-up' ? 'bg-blue-100 text-blue-700' : task.type === 'pipeline' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'}`}>{task.type}</span>
                          {task.hotPotato && <span className="text-xs text-gray-600">Hot Potato: <span className="font-medium">{task.hotPotato}</span></span>}
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{task.contact}</h3>
                        <p className="text-sm text-gray-700 mb-2">{task.action}</p>
                        <p className="text-xs text-gray-500">{task.reason}</p>
                        {task.competitiveNote && (
                          <p className="text-xs text-purple-600 mt-2 flex items-center gap-1">
                            <Flame className="w-3 h-3" />
                            {task.competitiveNote}
                          </p>
                        )}
                      </div>
                      <div className="text-right ml-4">
                        {task.amount && <div className="text-lg font-semibold text-gray-900">{task.amount}</div>}
                        {task.stage && <div className="text-xs text-gray-600">{task.stage}</div>}
                        <div className="flex gap-2 mt-3">
                          {task.phone && (
                            <button className="p-2 bg-green-600 text-white rounded hover:bg-green-700"><Phone className="w-4 h-4" /></button>
                          )}
                          <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"><MessageSquare className="w-4 h-4" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Today's Achievements</h3>
              <div className="space-y-3">
                {achievements.map((a) => {
                  const Icon = a.icon as React.ElementType;
                  return (
                    <div key={a.id} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-900">{a.name}</span>
                          <span className="text-xs text-gray-600">{a.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full transition-all duration-300" style={{ width: `${a.progress}%` }} />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{a.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Insights and Quick actions */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">You vs You</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Applications</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{personalProgress.current.applications}</span>
                      <span className={`text-xs ${personalProgress.current.applications > personalProgress.lastWeek.applications ? 'text-green-600' : 'text-red-600'}`}>vs {personalProgress.lastWeek.applications} last week</span>
                  </div></div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`h-2 rounded-full ${personalProgress.current.applications > personalProgress.lastWeek.applications ? 'bg-green-600' : 'bg-gray-400'}`} style={{ width: `${(personalProgress.current.applications / personalProgress.personalBest.applications) * 100}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Approvals</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{personalProgress.current.approvals}</span>
                      <span className={`text-xs ${personalProgress.current.approvals > personalProgress.lastWeek.approvals ? 'text-green-600' : 'text-red-600'}`}>vs {personalProgress.lastWeek.approvals} last week</span>
                  </div></div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`h-2 rounded-full ${personalProgress.current.approvals > personalProgress.lastWeek.approvals ? 'bg-green-600' : 'bg-gray-400'}`} style={{ width: `${(personalProgress.current.approvals / personalProgress.personalBest.approvals) * 100}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Document Completion</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{personalProgress.current.docsComplete}%</span>
                      <span className={`text-xs ${personalProgress.current.docsComplete > personalProgress.lastWeek.docsComplete ? 'text-green-600' : 'text-red-600'}`}>vs {personalProgress.lastWeek.docsComplete}% last week</span>
                  </div></div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`h-2 rounded-full ${personalProgress.current.docsComplete >= 80 ? 'bg-green-600' : 'bg-yellow-600'}`} style={{ width: `${personalProgress.current.docsComplete}%` }} />
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-800"><strong>Focus:</strong> You're {personalProgress.personalBest.applications - personalProgress.current.applications} apps away from your personal best!</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium text-sm">Start Call Session</div>
                        <div className="text-xs text-gray-600">5 leads waiting</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm">Check Documents</div>
                        <div className="text-xs text-gray-600">3 pending review</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-4">
              <p className="text-sm text-gray-800 italic">"The only person you should try to be better than is the person you were yesterday."</p>
              <p className="text-xs text-gray-600 mt-2">- Your best self is waiting</p>
            </div>
          </div>
        </div>
      )}

      {/* Placeholders for other tabs (optional minimal) */}
      {activeView !== 'today' && (
        <div className="p-6">
          <div className="rounded-lg border bg-white p-6 text-sm text-gray-600">{activeView} view coming soon</div>
        </div>
      )}
    </div>
  );
};

export default ModernSalesDashboard;