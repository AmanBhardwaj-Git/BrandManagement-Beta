import React from 'react';
import { motion } from 'framer-motion';
import { RiTeamLine, RiPaletteLine, RiShieldLine, RiRocketLine, RiInstagramFill, RiTwitterXFill, RiGithubFill } from 'react-icons/ri';
import dayalImage1 from '../assets/images/dayal-1.jpeg';
import dayalImage2 from '../assets/images/dayal-2.jpeg';
import dayalImage3 from '../assets/images/dayal-3.jpeg';

const About = () => {
  const features = [
    {
      icon: RiPaletteLine,
      title: 'Brand Management',
      description: 'Comprehensive tools for managing your brand identity and assets'
    },
    {
      icon: RiTeamLine,
      title: 'Team Collaboration',
      description: 'Seamless collaboration features for your entire team'
    },
    {
      icon: RiShieldLine,
      title: 'Secure Platform',
      description: 'Enterprise-grade security for your brand assets'
    },
    {
      icon: RiRocketLine,
      title: 'Performance Analytics',
      description: 'Detailed insights into your brand performance'
    }
  ];

  const team = [
    {
      name: "Dayal-1",
      role: "Frontend Developer",
      quote: "Innovation is our driving force.",
      image: dayalImage1,
      socials: {
        instagram: "https://instagram.com/amanbhardwaj0tw",
        twitter: "https://x.com/bhardWAman",
        github: "https://github.com/amanbhardwaj-Git"
      }
    },
    {
      name: "Delta-2",
      role: "Backend Developer",
      quote: "Innovation is our driving force.",
      image: dayalImage2,
      socials: {
        instagram: "https://instagram.com/amanbhardwaj0tw",
        twitter: "https://x.com/bhardWAman",
        github: "https://github.com/amanbhardwaj-Git"
      }
    },
    {
      name: "Dayal-3",
      role: "UI/UX Designer",
      quote: "Design is intelligence made visible.",    
      image: dayalImage3,
      socials: {
        instagram: "https://www.instagram.com/amanbhardwaj0tw",
        twitter: "https://x.com/bhardWAman",
        github: "https://github.com/amanbhardwaj-Git"
      }
    },
    // Add more team members as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950  via-violet-950 to-gray-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Our Platform
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            We're building the future of brand management, helping companies maintain
            consistency and excellence across all their brand touchpoints.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1 
              }}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10
                hover:bg-white/15 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 
                    transition-colors duration-300"
                >
                  <feature.icon className="text-blue-400 text-2xl" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white 
                  group-hover:text-blue-200 transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-blue-200 leading-relaxed pl-1"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <div className="flex justify-center items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-12 
              w-full max-w-2xl mx-auto 
              border border-white/10 mb-16 
              text-center 
              hover:bg-white/20 transition-colors duration-300"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Mission
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed">
              To empower brands with the tools they need to maintain consistency,
              collaborate effectively, and make data-driven decisions in an
              ever-evolving digital landscape.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-3xl font-bold text-white mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className={`
                  group [perspective:1000px]
                  ${team.length % 2 !== 0 && index === team.length - 1 
                    ? 'col-start-1 col-end-3 sm:col-auto justify-self-center w-[160px] sm:w-full' 
                    : 'w-full'
                  }
                  h-[200px] sm:h-[250px]
                `}
              >
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front of card */}
                  <div className="absolute w-full h-full [backface-visibility:hidden]">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="h-full w-full bg-white/5 backdrop-blur-sm 
                        rounded-full sm:rounded-lg p-3 sm:p-4 border border-white/10 
                        flex flex-col items-center justify-center gap-2 sm:gap-3
                        group-hover:border-purple-500/20"
                    >
                      <motion.div 
                        className="w-28 h-28 sm:w-36 sm:h-36 rounded-full 
                          bg-gradient-to-br from-blue-500/10 to-purple-500/10
                          flex items-center justify-center relative overflow-hidden
                          border-2 border-white/10 group-hover:border-purple-500/20
                          transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        {member.image ? (
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover rounded-full"
                            loading="lazy"
                          />
                        ) : (
                          <span className="text-2xl sm:text-3xl text-white/90 font-medium">
                            {member.name[0]}
                          </span>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                      <h3 className="text-sm sm:text-base font-medium text-white truncate max-w-[90%]">
                        {member.name}
                      </h3>
                      <p className="text-xs text-blue-200/80 hidden sm:block truncate max-w-[90%]">
                        {member.role}
                      </p>
                    </motion.div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="h-full w-full bg-gradient-to-br from-purple-500/5 to-blue-500/5 backdrop-blur-sm 
                      rounded-lg p-3 sm:p-4 border border-white/10 
                      flex flex-col items-center justify-between">
                      {/* Quote - Hidden on mobile */}
                      <div className="hidden sm:flex flex-1 items-center justify-center px-2">
                        <p className="text-white/80 italic text-xs sm:text-sm leading-relaxed line-clamp-4">
                          {member.quote || 'Innovation is our driving force.'}
                        </p>
                      </div>
                      
                      {/* Role - Shown on mobile */}
                      <div className="sm:hidden text-xs text-blue-200/80 mb-2 truncate max-w-[90%]">
                        {member.role}
                      </div>
                      
                      {/* Social Links */}
                      <div className="w-full px-2 pt-2 border-t border-white/10">
                        <div className="flex items-center justify-center space-x-4">
                          {member.socials?.instagram && (
                            <motion.a 
                              whileHover={{ scale: 1.2, y: -2 }}
                              href={member.socials.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-300 hover:text-blue-200 transition-colors"
                            >
                              <RiInstagramFill className="text-lg sm:text-xl" />
                            </motion.a>
                          )}
                          {member.socials?.twitter && (
                            <motion.a 
                              whileHover={{ scale: 1.2, y: -2 }}
                              href={member.socials.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-300 hover:text-blue-200 transition-colors"
                            >
                              <RiTwitterXFill className="text-lg sm:text-xl" />
                            </motion.a>
                          )}
                          {member.socials?.github && (
                            <motion.a 
                              whileHover={{ scale: 1.2, y: -2 }}
                              href={member.socials.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-300 hover:text-blue-200 transition-colors"
                            >
                              <RiGithubFill className="text-lg sm:text-xl" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 