const Navbar = ({ setActiveView }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-slate-800">TeamSpace</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setActiveView('projects')}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Projects
            </button>
            <button
              onClick={() => setActiveView('activity')}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Activity
            </button>
            <div className="ml-4 flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                alt="User"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;