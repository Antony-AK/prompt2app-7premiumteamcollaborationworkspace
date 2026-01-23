import { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCards from './components/ProjectCards';
import ProjectDetail from './components/ProjectDetail';
import ActivityFeed from './components/ActivityFeed';
import ProjectDashboard from './components/ProjectDashboard';

const App = () => {
  const [activeView, setActiveView] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      members: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100',
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100'
      ],
      status: 'In Progress',
      tasks: [
        { id: 1, title: 'Design homepage', status: 'Done', assignedTo: 'Alex' },
        { id: 2, title: 'Develop components', status: 'In Progress', assignedTo: 'Jamie' },
        { id: 3, title: 'Content review', status: 'To Do', assignedTo: 'Taylor' }
      ]
    },
    {
      id: 2,
      name: 'Mobile App Launch',
      members: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
      ],
      status: 'Planning',
      tasks: [
        { id: 1, title: 'Wireframe screens', status: 'In Progress', assignedTo: 'Morgan' },
        { id: 2, title: 'Set up backend', status: 'To Do', assignedTo: 'Casey' }
      ]
    }
  ];

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setActiveView('detail');
  };

  const handleBackToProjects = () => {
    setActiveView('projects');
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar setActiveView={setActiveView} />
      <div className="container mx-auto px-4 py-8">
        {activeView === 'projects' && (
          <>
            <ProjectCards projects={projects} onSelect={handleProjectSelect} />
            <ProjectDashboard projects={projects} />
          </>
        )}
        {activeView === 'detail' && selectedProject && (
          <ProjectDetail project={selectedProject} onBack={handleBackToProjects} />
        )}
        {activeView === 'activity' && <ActivityFeed />}
      </div>
    </div>
  );
};

export default App;