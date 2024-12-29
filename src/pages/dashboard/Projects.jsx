import React from 'react';
import { motion } from 'framer-motion';
import { RiProjectorLine, RiTimeLine, RiTeamLine, RiCheckLine } from 'react-icons/ri';

const Projects = () => {
  const projects = [
    {
      name: 'Website Rebrand',
      status: 'In Progress',
      progress: 75,
      team: ['John D.', 'Sarah M.', 'Mike R.'],
      deadline: '2024-04-15'
    },
    {
      name: 'Social Media Campaign',
      status: 'Planning',
      progress: 30,
      team: ['Emma S.', 'Tom B.'],
      deadline: '2024-04-20'
    },
    {
      name: 'Product Launch',
      status: 'Review',
      progress: 90,
      team: ['Alex K.', 'Lisa P.', 'David M.'],
      deadline: '2024-04-10'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950  via-violet-950 to-gray-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-white">Projects</h1>
            <p className="text-blue-200 mt-2">Manage your brand projects and campaigns</p>
          </div>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
            New Project
          </button>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-xl font-semibold text-white">{project.name}</h2>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-blue-200 text-sm flex items-center">
                      <RiProjectorLine className="mr-1" /> {project.status}
                    </span>
                    <span className="text-blue-200 text-sm flex items-center">
                      <RiTimeLine className="mr-1" /> Due {project.deadline}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {project.team.map((member, i) => (
                      <div
                        key={member}
                        className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border-2 border-blue-900"
                        title={member}
                      >
                        {member.charAt(0)}
                      </div>
                    ))}
                  </div>
                  <div className="w-32">
                    <div className="h-2 bg-white/10 rounded-full">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 