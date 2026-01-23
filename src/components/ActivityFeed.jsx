const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      user: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      action: 'completed the task "Design homepage"',
      time: '2 hours ago',
      project: 'Website Redesign'
    },
    {
      id: 2,
      user: 'Jamie Smith',
      avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100',
      action: 'started working on "Develop components"',
      time: '4 hours ago',
      project: 'Website Redesign'
    },
    {
      id: 3,
      user: 'Morgan Lee',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
      action: 'uploaded new wireframes',
      time: '1 day ago',
      project: 'Mobile App Launch'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">Recent Activity</h2>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start pb-4 border-b border-slate-100 last:border-0">
              <img className="w-10 h-10 rounded-full mr-3" src={activity.avatar} alt={activity.user} />
              <div>
                <div className="text-sm text-slate-800">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {activity.time} · {activity.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;