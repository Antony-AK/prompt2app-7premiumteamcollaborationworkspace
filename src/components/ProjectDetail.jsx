import { useState } from 'react';

const ProjectDetail = ({ project, onBack, onTaskAdd }) => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    assignedTo: '',
    status: 'Pending'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskAdd(newTask);
    setNewTask({
      title: '',
      assignedTo: '',
      status: 'Pending'
    });
    setShowTaskForm(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <button
        onClick={onBack}
        className="mb-4 flex items-center text-sm text-slate-500 hover:text-slate-700"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to projects
      </button>
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-slate-800">{project.name}</h2>
        <span className={`px-3 py-1 text-sm rounded-full ${project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {project.status}
        </span>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium text-slate-800 mb-4">Team Members</h3>
        <div className="flex -space-x-2">
          {project.members.map((member, index) => (
            <img
              key={index}
              className="w-10 h-10 rounded-full border-2 border-white"
              src={member}
              alt="Team member"
            />
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-slate-800">Tasks</h3>
          <button
            onClick={() => setShowTaskForm(!showTaskForm)}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
          >
            {showTaskForm ? 'Cancel' : 'Add New Task'}
          </button>
        </div>

        {showTaskForm && (
          <form onSubmit={handleSubmit} className="mb-6 p-4 border border-slate-200 rounded-lg bg-slate-50">
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">Task Title</label>
              <input
                type="text"
                name="title"
                value={newTask.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">Assigned To</label>
              <select
                name="assignedTo"
                value={newTask.assignedTo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              >
                <option value="">Select a team member</option>
                {project.members.map((member, index) => (
                  <option key={index} value={member.split('/').pop().split('.')[0]}>
                    {member.split('/').pop().split('.')[0]}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
              <select
                name="status"
                value={newTask.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save Task
            </button>
          </form>
        )}
        
        <div className="space-y-3">
          {project.tasks.map((task) => (
            <div
              key={task.id}
              className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-move"
            >
              <div className="flex justify-between items-center">
                <span className="text-slate-800">{task.title}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${task.status === 'Done' ? 'bg-green-100 text-green-800' : task.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-800'}`}>
                  {task.status}
                </span>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-xs text-slate-500">Assigned to {task.assignedTo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;