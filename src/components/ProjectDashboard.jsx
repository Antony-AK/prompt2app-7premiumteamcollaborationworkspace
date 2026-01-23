import React from 'react';

const ProjectDashboard = ({ projects }) => {
  const getStatusCounts = () => {
    const statusCounts = {
      'Planning': 0,
      'In Progress': 0,
      'Completed': 0
    };

    projects.forEach(project => {
      statusCounts[project.status] = (statusCounts[project.status] || 0) + 1;
    });

    return statusCounts;
  };

  const getTaskStatusCounts = () => {
    const taskStatusCounts = {
      'To Do': 0,
      'In Progress': 0,
      'Done': 0
    };

    projects.forEach(project => {
      project.tasks.forEach(task => {
        taskStatusCounts[task.status] = (taskStatusCounts[task.status] || 0) + 1;
      });
    });

    return taskStatusCounts;
  };

  const statusCounts = getStatusCounts();
  const taskStatusCounts = getTaskStatusCounts();
  const totalProjects = projects.length;
  const totalTasks = Object.values(taskStatusCounts).reduce((a, b) => a + b, 0);

  const ProgressBar = ({ value, max, color }) => (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div 
        className={`h-4 rounded-full ${color}`}
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  );

  const StatCard = ({ title, value, max, color }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-sm">{value}/{max}</span>
      </div>
      <ProgressBar value={value} max={max} color={color} />
    </div>
  );

  return (
    <div className="mt-8 bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Project Dashboard</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Project Status ({totalProjects})</h3>
          <StatCard 
            title="Planning" 
            value={statusCounts['Planning']} 
            max={totalProjects} 
            color="bg-yellow-400" 
          />
          <StatCard 
            title="In Progress" 
            value={statusCounts['In Progress']} 
            max={totalProjects} 
            color="bg-blue-400" 
          />
          <StatCard 
            title="Completed" 
            value={statusCounts['Completed']} 
            max={totalProjects} 
            color="bg-green-400" 
          />
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Task Status ({totalTasks})</h3>
          <StatCard 
            title="To Do" 
            value={taskStatusCounts['To Do']} 
            max={totalTasks} 
            color="bg-red-400" 
          />
          <StatCard 
            title="In Progress" 
            value={taskStatusCounts['In Progress']} 
            max={totalTasks} 
            color="bg-blue-400" 
          />
          <StatCard 
            title="Done" 
            value={taskStatusCounts['Done']} 
            max={totalTasks} 
            color="bg-green-400" 
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;