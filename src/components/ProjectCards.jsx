const ProjectCards = ({ projects, onSelect }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">Your Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelect(project)}
            className="bg-white rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-medium text-slate-800 mb-2">{project.name}</h3>
            <div className="flex items-center mb-4">
              <span className={`px-2 py-1 text-xs rounded-full ${project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {project.status}
              </span>
            </div>
            <div className="flex -space-x-2">
              {project.members.map((member, index) => (
                <img
                  key={index}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  src={member}
                  alt="Team member"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;