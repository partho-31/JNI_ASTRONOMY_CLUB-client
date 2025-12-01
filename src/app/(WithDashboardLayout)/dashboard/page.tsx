const AdminDashboard = () => {
  return (
    <div className="flex lg:pt-0 pt-10 bg-slate-900 text-white">
    
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
       

        {/* Stats Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Visitors */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 font-medium">Total Visitors</h3>
              <div className="text-2xl">👁️</div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">24,568</div>
            <div className="flex items-center gap-1 text-green-400 text-sm">
              <span>↑ 12.4%</span>
              <span>from last month</span>
            </div>
          </div>

          {/* Published Articles */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 font-medium">Published Articles</h3>
              <div className="text-2xl">📄</div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">156</div>
            <div className="flex items-center gap-1 text-cyan-400 text-sm">
              <span>+8 this month</span>
            </div>
          </div>

          {/* Active Magazines */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 font-medium">Active Magazines</h3>
              <div className="text-2xl">📚</div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">23</div>
            <div className="flex items-center gap-1 text-purple-400 text-sm">
              <span>3 new this month</span>
            </div>
          </div>

          {/* User Registrations */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 font-medium">User Registrations</h3>
              <div className="text-2xl">👥</div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,247</div>
            <div className="flex items-center gap-1 text-green-400 text-sm">
              <span>↑ 5.2%</span>
              <span>growth</span>
            </div>
          </div>
        </div>

        {/* Charts and Analytics */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Traffic Chart */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
           
          </div>

          {/* Content Distribution */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
           </div>
        </div>

        {/* Recent Activity and Quick Stats */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
            <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 hover:bg-slate-700 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  📄
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium">New article published</div>
                  <div className="text-gray-400 text-sm">Cosmic Evolution Theories by Dr. Maria Johnson</div>
                </div>
                <div className="text-gray-400 text-sm">2 hours ago</div>
              </div>

              <div className="flex items-center gap-4 p-3 hover:bg-slate-700 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  👥
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium">New user registration</div>
                  <div className="text-gray-400 text-sm">Ryan Kim joined as amateur astronomer</div>
                </div>
                <div className="text-gray-400 text-sm">5 hours ago</div>
              </div>

              <div className="flex items-center gap-4 p-3 hover:bg-slate-700 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
                  💬
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium">New review submitted</div>
                  <div className="text-gray-400 text-sm">4.8⭐ rating for Black Hole Physics</div>
                </div>
                <div className="text-gray-400 text-sm">1 day ago</div>
              </div>

              <div className="flex items-center gap-4 p-3 hover:bg-slate-700 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white">
                  📚
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium">Magazine updated</div>
                  <div className="text-gray-400 text-sm">Space Exploration Monthly new issue released</div>
                </div>
                <div className="text-gray-400 text-sm">2 days ago</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
            <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-cyan-600 hover:bg-cyan-500 rounded-lg p-4 text-white font-medium transition-colors flex flex-col items-center gap-2">
                <div className="text-2xl">📄</div>
                <span>Create Article</span>
              </button>

              <button className="bg-purple-600 hover:bg-purple-500 rounded-lg p-4 text-white font-medium transition-colors flex flex-col items-center gap-2">
                <div className="text-2xl">📚</div>
                <span>New Magazine</span>
              </button>

              <button className="bg-green-600 hover:bg-green-500 rounded-lg p-4 text-white font-medium transition-colors flex flex-col items-center gap-2">
                <div className="text-2xl">👥</div>
                <span>Manage Users</span>
              </button>

              <button className="bg-amber-600 hover:bg-amber-500 rounded-lg p-4 text-white font-medium transition-colors flex flex-col items-center gap-2">
                <div className="text-2xl">📊</div>
                <span>View Reports</span>
              </button>
            </div>

            {/* System Status */}
            <div className="mt-6 pt-6 border-t border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Server Uptime</span>
                  <span className="text-green-400 font-medium">99.9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Storage Usage</span>
                  <span className="text-cyan-400 font-medium">68%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Active Sessions</span>
                  <span className="text-white font-medium">247</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;