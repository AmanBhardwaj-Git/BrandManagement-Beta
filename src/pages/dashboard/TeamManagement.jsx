import React from 'react';
import { motion } from 'framer-motion';
import { RiTeamLine, RiUserAddLine, RiAdminLine, RiUserLine } from 'react-icons/ri';

const TeamManagement = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Brand Manager',
      email: 'john@example.com',
      status: 'Active',
      access: 'Admin'
    },
    {
      name: 'Sarah Smith',
      role: 'Content Creator',
      email: 'sarah@example.com',
      status: 'Active',
      access: 'Editor'
    },
    {
      name: 'Mike Johnson',
      role: 'Designer',
      email: 'mike@example.com',
      status: 'Active',
      access: 'Designer'
    },
    {
      name: 'Emma Wilson',
      role: 'Marketing Lead',
      email: 'emma@example.com',
      status: 'Away',
      access: 'Editor'
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
            <h1 className="text-3xl font-bold text-white">Team Management</h1>
            <p className="text-blue-200 mt-2">Manage team members and their access levels</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
            <RiUserAddLine className="mr-2" />
            Add Member
          </button>
        </motion.div>

        {/* Team Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { title: 'Total Members', value: '12', icon: RiTeamLine },
            { title: 'Admins', value: '3', icon: RiAdminLine },
            { title: 'Active Now', value: '8', icon: RiUserLine }
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-white mt-1">{stat.value}</h3>
                </div>
                <stat.icon className="text-blue-400 text-3xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Members List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10"
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Team Members</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-200 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-200 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-200 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-200 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-200 uppercase tracking-wider">
                    Access Level
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {teamMembers.map((member, index) => (
                  <tr key={member.email} className="hover:bg-white/5">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-white">{member.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-blue-200">{member.role}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-blue-200">{member.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        member.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-blue-200">{member.access}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamManagement; 