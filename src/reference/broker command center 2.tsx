import React, { useState } from 'react';
import { Phone, Calendar, DollarSign, Users, Clock, AlertCircle, ChevronRight, Search, Filter, MessageSquare, Target, TrendingUp, BookOpen, RotateCw, User, Building, FileText, CheckCircle, Trophy, Flame, ArrowUp, ArrowDown, Award, BarChart3, Zap } from 'lucide-react';

const ModernSalesDashboard = () => {
  const [activeView, setActiveView] = useState('today');
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showTeamView, setShowTeamView] = useState(false);

  // Personal Progress Data
  const personalProgress = {
    current: {
      applications: 8,
      appraisals: 5,
      docsComplete: 72,
      approvals: 3
    },
    lastWeek: {
      applications: 6,
      appraisals: 7,
      docsComplete: 68,
      approvals: 2
    },
    personalBest: {
      applications: 12,
      appraisals: 9,
      docsComplete: 85,
      approvals: 5
    },
    monthlyGoal: {
      applications: 40,
      appraisals: 25,
      docsComplete: 80,
      approvals: 15
    },
    currentProgress: {
      applications: 22,
      appraisals: 14,
      docsComplete: 72,
      approvals: 8
    }
  };

  // Team Competition Data
  const teamStandings = [
    {
      name: "Nav's Team",
      leader: "Nav Cheema",
      stats: {
        applications: 18,
        appraisals: 12,
        docsComplete: 75,
        approvals: 7
      },
      trend: "up",
      rank: 1
    },
    {
      name: "Your Team (Sunny)",
      leader: "Sunny Chen",
      stats: {
        applications: 16,
        appraisals: 10,
        docsComplete: 72,
        approvals: 6
      },
      trend: "up",
      rank: 2,
      isYours: true
    },
    {
      name: "Alika's Team",
      leader: "Alika Patel",
      stats: {
        applications: 15,
        appraisals: 11,
        docsComplete: 78,
        approvals: 5
      },
      trend: "same",
      rank: 3
    },
    {
      name: "Bowie's Team",
      leader: "Bowie Nan",
      stats: {
        applications: 14,
        appraisals: 8,
        docsComplete: 68,
        approvals: 4
      },
      trend: "down",
      rank: 4
    }
  ];

  // Today's priorities with competitive context
  const todaysTasks = [
    {
      id: 1,
      type: 'follow-up',
      priority: 'urgent',
      contact: 'Sarah Johnson',
      action: 'Send application documents',
      reason: 'Promised by EOD yesterday',
      amount: '$45,000',
      stage: 'Application',
      hotPotato: 'You',
      phone: '(604) 555-0123',
      competitiveNote: '1 more app to beat your daily record!'
    },
    {
      id: 2,
      type: 'pipeline',
      priority: 'high',
      contact: 'Michael Chen',
      action: 'Check underwriter status',
      reason: 'Been with underwriter 3 days',
      amount: '$120,000',
      stage: 'Underwriting',
      hotPotato: 'Underwriter',
      phone: '(778) 555-0456'
    },
    {
      id: 3,
      type: 'prospecting',
      priority: 'normal',
      contact: 'New Web Leads (5)',
      action: 'Initial outreach calls',
      reason: 'Leads aging > 24 hours',
      phone: null
    }
  ];

  const achievements = [
    { id: 1, name: 'Speed Demon', description: '3 apps in one day', progress: 66, icon: Zap },
    { id: 2, name: 'Quality Master', description: '90% approval rate', progress: 80, icon: Award },
    { id: 3, name: 'Doc Warrior', description: '100% docs complete', progress: 72, icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-semibold text-gray-900">Broker Command Center</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveView('today')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeView === 'today' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Today's Focus
              </button>
              <button
                onClick={() => setActiveView('prospecting')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeView === 'prospecting' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Prospecting
              </button>
              <button
                onClick={() => setActiveView('pipeline')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeView === 'pipeline' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Pipeline
              </button>
              <button
                onClick={() => setActiveView('book')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeView === 'book' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Book
              </button>
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
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Calendar className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Personal Progress Bar - Always Visible */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-sm">
              <div className="text-blue-100 text-xs">Your Progress Today</div>
              <div className="flex items-center gap-4 mt-1">
                <span className="flex items-center gap-1">
                  <span className="font-semibold">{personalProgress.current.applications}</span>
                  <span className="text-xs text-blue-200">apps</span>
                  {personalProgress.current.applications > personalProgress.lastWeek.applications && 
                    <ArrowUp className="w-3 h-3 text-green-300" />
                  }
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
                    style={{width: `${(personalProgress.currentProgress.applications / personalProgress.monthlyGoal.applications) * 100}%`}}
                  ></div>
                </div>
                <span className="text-xs">{Math.round((personalProgress.currentProgress.applications / personalProgress.monthlyGoal.applications) * 100)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Competition View - Toggleable */}
      {showTeamView && (
        <div className="bg-purple-50 border-b border-purple-200 px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-purple-900">Team Standings - This Week</h3>
            <button className="text-sm text-purple-600 hover:text-purple-700">View Details →</button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {teamStandings.map((team) => (
              <div 
                key={team.name} 
                className={`bg-white rounded-lg p-3 border-2 ${
                  team.isYours ? 'border-purple-400' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-lg font-bold ${
                      team.rank === 1 ? 'text-yellow-600' :
                      team.rank === 2 ? 'text-gray-500' :
                      team.rank === 3 ? 'text-orange-600' :
                      'text-gray-400'
                    }`}>
                      #{team.rank}
                    </span>
                    <span className="font-medium text-gray-900 text-sm">{team.name}</span>
                  </div>
                  {team.trend === 'up' && <ArrowUp className="w-4 h-4 text-green-600" />}
                  {team.trend === 'down' && <ArrowDown className="w-4 h-4 text-red-600" />}
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Apps:</span>
                    <span className="font-medium">{team.stats.applications}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Approvals:</span>
                    <span className="font-medium">{team.stats.approvals}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Docs:</span>
                    <span className="font-medium">{team.stats.docsComplete}%</span>
                  </div>
                </div>
                {team.isYours && (
                  <div className="mt-2 pt-2 border-t border-purple-200 text-xs text-purple-600 font-medium">
                    Your Team
                  </div>
                )}
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

      {/* Main Content */}
      <div className="flex h-[calc(100vh-140px)]">
        {/* Today's Focus View */}
        {activeView === 'today' && (
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-6 p-6">
              {/* Left Column - Tasks and Actions */}
              <div className="col-span-2 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">What needs your attention today</h2>
                    <span className="text-sm text-gray-600">
                      {todaysTasks.filter(t => t.priority === 'urgent').length} urgent items
                    </span>
                  </div>

                  <div className="space-y-3">
                    {todaysTasks.map((task) => (
                      <div key={task.id} className={`bg-white rounded-lg border ${
                        task.priority === 'urgent' ? 'border-red-200' : 'border-gray-200'
                      } p-4 hover:shadow-md transition-shadow cursor-pointer`}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                task.priority === 'urgent' ? 'bg-red-100 text-red-700' :
                                task.priority === 'high' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {task.priority}
                              </span>
                              <span className={`px-2 py-1 rounded text-xs ${
                                task.type === 'follow-up' ? 'bg-blue-100 text-blue-700' :
                                task.type === 'pipeline' ? 'bg-purple-100 text-purple-700' :
                                'bg-green-100 text-green-700'
                              }`}>
                                {task.type}
                              </span>
                              {task.hotPotato && (
                                <span className="text-xs text-gray-600">
                                  Hot Potato: <span className="font-medium">{task.hotPotato}</span>
                                </span>
                              )}
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
                            {task.amount && (
                              <div className="text-lg font-semibold text-gray-900">{task.amount}</div>
                            )}
                            {task.stage && (
                              <div className="text-xs text-gray-600">{task.stage}</div>
                            )}
                            <div className="flex gap-2 mt-3">
                              {task.phone && (
                                <button className="p-2 bg-green-600 text-white rounded hover:bg-green-700">
                                  <Phone className="w-4 h-4" />
                                </button>
                              )}
                              <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                <MessageSquare className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievement Progress */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Today's Achievements</h3>
                  <div className="space-y-3">
                    {achievements.map((achievement) => {
                      const Icon = achievement.icon;
                      return (
                        <div key={achievement.id} className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-gray-900">{achievement.name}</span>
                              <span className="text-xs text-gray-600">{achievement.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                                style={{width: `${achievement.progress}%`}}
                              ></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{achievement.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column - Performance Insights */}
              <div className="space-y-4">
                {/* Personal Performance vs Last Week */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">You vs You</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">Applications</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{personalProgress.current.applications}</span>
                          <span className={`text-xs ${
                            personalProgress.current.applications > personalProgress.lastWeek.applications 
                              ? 'text-green-600' : 'text-red-600'
                          }`}>
                            vs {personalProgress.lastWeek.applications} last week
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            personalProgress.current.applications > personalProgress.lastWeek.applications 
                              ? 'bg-green-600' : 'bg-gray-400'
                          }`} 
                          style={{width: `${(personalProgress.current.applications / personalProgress.personalBest.applications) * 100}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">Approvals</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{personalProgress.current.approvals}</span>
                          <span className={`text-xs ${
                            personalProgress.current.approvals > personalProgress.lastWeek.approvals 
                              ? 'text-green-600' : 'text-red-600'
                          }`}>
                            vs {personalProgress.lastWeek.approvals} last week
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            personalProgress.current.approvals > personalProgress.lastWeek.approvals 
                              ? 'bg-green-600' : 'bg-gray-400'
                          }`} 
                          style={{width: `${(personalProgress.current.approvals / personalProgress.personalBest.approvals) * 100}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">Document Completion</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{personalProgress.current.docsComplete}%</span>
                          <span className={`text-xs ${
                            personalProgress.current.docsComplete > personalProgress.lastWeek.docsComplete 
                              ? 'text-green-600' : 'text-red-600'
                          }`}>
                            vs {personalProgress.lastWeek.docsComplete}% last week
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            personalProgress.current.docsComplete >= 80 
                              ? 'bg-green-600' : 'bg-yellow-600'
                          }`} 
                          style={{width: `${personalProgress.current.docsComplete}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs text-blue-800">
                      <strong>Focus:</strong> You're {personalProgress.personalBest.applications - personalProgress.current.applications} apps away from your personal best!
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
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

                {/* Motivational Quote */}
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-4">
                  <p className="text-sm text-gray-800 italic">
                    "The only person you should try to be better than is the person you were yesterday."
                  </p>
                  <p className="text-xs text-gray-600 mt-2">- Your best self is waiting</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Prospecting View */}
        {activeView === 'prospecting' && (
          <div className="flex-1 p-6 bg-gray-50">
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
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">New Leads</p>
                      <p className="text-2xl font-bold text-blue-600">8</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-green-600">+3 today</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Follow-ups</p>
                      <p className="text-2xl font-bold text-yellow-600">4</p>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <RotateCw className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-red-600">2 overdue</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Conversion Rate</p>
                      <p className="text-2xl font-bold text-green-600">24%</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-green-600">+8% this week</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Calls Today</p>
                      <p className="text-2xl font-bold text-purple-600">23</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-600">Goal: 30/day</div>
                </div>
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
                      {[
                        {
                          name: "Jennifer Martinez",
                          phone: "(604) 555-0234",
                          email: "j.martinez@email.com",
                          source: "Website",
                          amount: "$85,000",
                          property: "Condo • Vancouver",
                          priority: "hot",
                          lastContact: "2 hours ago",
                          notes: "Pre-approved, looking to close in 30 days"
                        },
                        {
                          name: "David Kim",
                          phone: "(778) 555-0567",
                          email: "dkim.realtor@gmail.com",
                          source: "Referral",
                          amount: "$120,000",
                          property: "Townhouse • Burnaby",
                          priority: "hot",
                          lastContact: "4 hours ago",
                          notes: "First-time buyer, very responsive"
                        },
                        {
                          name: "Lisa Thompson",
                          phone: "(604) 555-0789",
                          email: "lisa.t.home@outlook.com",
                          source: "Google Ads",
                          amount: "$95,000",
                          property: "House • Surrey",
                          priority: "warm",
                          lastContact: "1 day ago",
                          notes: "Comparing rates, needs follow-up"
                        },
                        {
                          name: "Michael Rodriguez",
                          phone: "(778) 555-0321",
                          email: "m.rodriguez@techcorp.com",
                          source: "LinkedIn",
                          amount: "$150,000",
                          property: "Condo • Downtown",
                          priority: "warm",
                          lastContact: "2 days ago",
                          notes: "High income, investment property"
                        }
                      ].map((prospect, idx) => (
                        <div key={idx} className="p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold text-gray-900">{prospect.name}</h4>
                                <span className={`px-2 py-1 rounded text-xs font-medium ${
                                  prospect.priority === 'hot' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                                }`}>
                                  {prospect.priority}
                                </span>
                                <span className="text-xs text-gray-500">{prospect.lastContact}</span>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                                <span>{prospect.phone}</span>
                                <span>•</span>
                                <span>{prospect.source}</span>
                                <span>•</span>
                                <span className="font-medium text-green-600">{prospect.amount}</span>
                              </div>
                              <div className="text-sm text-gray-700 mb-1">{prospect.property}</div>
                              <div className="text-xs text-gray-500">{prospect.notes}</div>
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
                      <div className="bg-white h-2 rounded-full" style={{width: '66%'}}></div>
                    </div>
                    <div className="text-xs opacity-75">2 of 3 completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pipeline View */}
        {activeView === 'pipeline' && (
          <div className="flex-1 p-6 bg-gray-50">
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

              {/* Pipeline Overview Cards */}
              <div className="grid grid-cols-5 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">8</div>
                    <div className="text-sm text-blue-700">Application</div>
                    <div className="text-xs text-blue-600 mt-1">$680K</div>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">5</div>
                    <div className="text-sm text-yellow-700">Processing</div>
                    <div className="text-xs text-yellow-600 mt-1">$425K</div>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">6</div>
                    <div className="text-sm text-purple-700">Underwriting</div>
                    <div className="text-xs text-purple-600 mt-1">$720K</div>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">3</div>
                    <div className="text-sm text-orange-700">Appraisal</div>
                    <div className="text-xs text-orange-600 mt-1">$285K</div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">4</div>
                    <div className="text-sm text-green-700">Ready to Fund</div>
                    <div className="text-xs text-green-600 mt-1">$340K</div>
                  </div>
                </div>
              </div>

              {/* Pipeline Table */}
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
                      {[
                        {
                          client: "Sarah Johnson",
                          amount: "$85,000",
                          property: "Condo • Vancouver",
                          stage: "Processing",
                          stageColor: "yellow",
                          daysActive: 5,
                          nextAction: "Submit to lender",
                          priority: "high"
                        },
                        {
                          client: "Michael Chen",
                          amount: "$120,000",
                          property: "Townhouse • Burnaby",
                          stage: "Underwriting",
                          stageColor: "purple",
                          daysActive: 12,
                          nextAction: "Chase underwriter",
                          priority: "urgent"
                        },
                        {
                          client: "Emma Wilson",
                          amount: "$95,000",
                          property: "House • Surrey",
                          stage: "Appraisal",
                          stageColor: "orange",
                          daysActive: 8,
                          nextAction: "Schedule appraisal",
                          priority: "normal"
                        },
                        {
                          client: "David Rodriguez",
                          amount: "$150,000",
                          property: "Condo • Richmond",
                          stage: "Ready to Fund",
                          stageColor: "green",
                          daysActive: 18,
                          nextAction: "Confirm funding date",
                          priority: "high"
                        },
                        {
                          client: "Lisa Thompson",
                          amount: "$75,000",
                          property: "Townhouse • Coquitlam",
                          stage: "Application",
                          stageColor: "blue",
                          daysActive: 2,
                          nextAction: "Collect documents",
                          priority: "normal"
                        },
                        {
                          client: "James Park",
                          amount: "$110,000",
                          property: "House • Vancouver",
                          stage: "Processing",
                          stageColor: "yellow",
                          daysActive: 7,
                          nextAction: "Income verification",
                          priority: "high"
                        }
                      ].map((deal, idx) => (
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
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              deal.stageColor === 'blue' ? 'bg-blue-100 text-blue-700' :
                              deal.stageColor === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
                              deal.stageColor === 'purple' ? 'bg-purple-100 text-purple-700' :
                              deal.stageColor === 'orange' ? 'bg-orange-100 text-orange-700' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {deal.stage}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="text-sm text-gray-600">{deal.daysActive} days</div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${
                                deal.priority === 'urgent' ? 'bg-red-500' :
                                deal.priority === 'high' ? 'bg-yellow-500' :
                                'bg-green-500'
                              }`}></span>
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
        )}

        {/* Book View */}
        {activeView === 'book' && (
          <div className="flex-1 p-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Client Book</h2>
                  <p className="text-gray-600 mt-1">Manage relationships and find opportunities • 84 funded clients</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Search
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Add Client
                  </button>
                </div>
              </div>

              {/* Book Overview */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Clients</p>
                      <p className="text-2xl font-bold text-blue-600">84</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-green-600">+6 this month</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Renewal Eligible</p>
                      <p className="text-2xl font-bold text-orange-600">12</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <RotateCw className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-orange-600">Next 6 months</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Referral Potential</p>
                      <p className="text-2xl font-bold text-purple-600">28</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-purple-600">High satisfaction</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Volume</p>
                      <p className="text-2xl font-bold text-green-600">$8.2M</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-green-600">Lifetime funded</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {/* Client List */}
                <div className="col-span-2">
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Recent Clients</h3>
                        <div className="flex gap-2">
                          <button className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded">All</button>
                          <button className="text-sm text-gray-600 hover:text-gray-900">Renewals</button>
                          <button className="text-sm text-gray-600 hover:text-gray-900">Referrals</button>
                        </div>
                      </div>
                    </div>
                    <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
                      {[
                        {
                          name: "Alexandra Smith",
                          phone: "(604) 555-0123",
                          email: "alex.smith@email.com",
                          originalAmount: "$85,000",
                          property: "Condo • Vancouver",
                          fundedDate: "2024-01-15",
                          renewalDate: "2025-01-15",
                          status: "renewal-soon",
                          satisfaction: "high",
                          referrals: 2
                        },
                        {
                          name: "Robert Johnson",
                          phone: "(778) 555-0456",
                          email: "rjohnson@gmail.com",
                          originalAmount: "$120,000",
                          property: "House • Surrey",
                          fundedDate: "2023-08-22",
                          renewalDate: "2025-08-22",
                          status: "active",
                          satisfaction: "high",
                          referrals: 1
                        },
                        {
                          name: "Maria Garcia",
                          phone: "(604) 555-0789",
                          email: "m.garcia@outlook.com",
                          originalAmount: "$95,000",
                          property: "Townhouse • Burnaby",
                          fundedDate: "2024-03-10",
                          renewalDate: "2025-03-10",
                          status: "active",
                          satisfaction: "medium",
                          referrals: 0
                        },
                        {
                          name: "Kevin Wong",
                          phone: "(778) 555-0321",
                          email: "kwong.business@gmail.com",
                          originalAmount: "$150,000",
                          property: "Condo • Richmond",
                          fundedDate: "2023-11-05",
                          renewalDate: "2025-11-05",
                          status: "referral-potential",
                          satisfaction: "high",
                          referrals: 3
                        },
                        {
                          name: "Jennifer Lee",
                          phone: "(604) 555-0654",
                          email: "jen.lee.home@yahoo.com",
                          originalAmount: "$75,000",
                          property: "Condo • Vancouver",
                          fundedDate: "2024-02-28",
                          renewalDate: "2025-02-28",
                          status: "renewal-soon",
                          satisfaction: "high",
                          referrals: 1
                        },
                        {
                          name: "Thomas Anderson",
                          phone: "(778) 555-0987",
                          email: "t.anderson@techcorp.com",
                          originalAmount: "$110,000",
                          property: "House • Coquitlam",
                          fundedDate: "2023-12-18",
                          renewalDate: "2025-12-18",
                          status: "active",
                          satisfaction: "high",
                          referrals: 2
                        }
                      ].map((client, idx) => (
                        <div key={idx} className="p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold text-gray-900">{client.name}</h4>
                                <span className={`px-2 py-1 rounded text-xs font-medium ${
                                  client.status === 'renewal-soon' ? 'bg-orange-100 text-orange-700' :
                                  client.status === 'referral-potential' ? 'bg-purple-100 text-purple-700' :
                                  'bg-green-100 text-green-700'
                                }`}>
                                  {client.status === 'renewal-soon' ? 'Renewal Due' :
                                   client.status === 'referral-potential' ? 'Referral Star' : 'Active'}
                                </span>
                                <div className="flex items-center gap-1">
                                  {[...Array(client.satisfaction === 'high' ? 5 : 3)].map((_, i) => (
                                    <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                                  ))}
                                </div>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                                <span>{client.phone}</span>
                                <span>•</span>
                                <span className="font-medium text-green-600">{client.originalAmount}</span>
                                <span>•</span>
                                <span>{client.referrals} referrals</span>
                              </div>
                              <div className="text-sm text-gray-700 mb-1">{client.property}</div>
                              <div className="text-xs text-gray-500">
                                Funded: {new Date(client.fundedDate).toLocaleDateString()} • 
                                Renewal: {new Date(client.renewalDate).toLocaleDateString()}
                              </div>
                            </div>
                            <div className="flex gap-2 ml-4">
                              <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                <Phone className="w-4 h-4" />
                              </button>
                              <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                <MessageSquare className="w-4 h-4" />
                              </button>
                              <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                                <FileText className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Opportunities Panel */}
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Renewal Opportunities</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <div className="font-medium text-sm text-orange-900">Alexandra Smith</div>
                        <div className="text-xs text-orange-700">Renewal due in 45 days</div>
                        <div className="text-xs text-orange-600 mt-1">$85,000 • High satisfaction</div>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <div className="font-medium text-sm text-orange-900">Jennifer Lee</div>
                        <div className="text-xs text-orange-700">Renewal due in 52 days</div>
                        <div className="text-xs text-orange-600 mt-1">$75,000 • High satisfaction</div>
                      </div>
                    </div>
                    <button className="w-full mt-3 text-sm text-orange-600 hover:text-orange-700">
                      View all renewals →
                    </button>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Referral Champions</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="font-medium text-sm text-purple-900">Kevin Wong</div>
                        <div className="text-xs text-purple-700">3 successful referrals</div>
                        <div className="text-xs text-purple-600 mt-1">Business contacts network</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="font-medium text-sm text-purple-900">Thomas Anderson</div>
                        <div className="text-xs text-purple-700">2 successful referrals</div>
                        <div className="text-xs text-purple-600 mt-1">Tech industry connections</div>
                      </div>
                    </div>
                    <button className="w-full mt-3 text-sm text-purple-600 hover:text-purple-700">
                      Request referrals →
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 text-white">
                    <h3 className="font-semibold mb-2">Client Satisfaction</h3>
                    <div className="text-3xl font-bold mb-1">94%</div>
                    <p className="text-sm opacity-90 mb-3">Average rating across all clients</p>
                    <div className="text-xs opacity-75">28 clients gave 5-star reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernSalesDashboard;