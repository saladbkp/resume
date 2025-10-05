import { motion } from 'framer-motion';
import { Trophy, Medal, Users, Calendar, Target, Award, Star, Zap } from 'lucide-react';
import { personalInfo, ctfCompetitions, fsecRoles, workshops } from '../data/portfolio';

const CTF = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getRankColor = (rank: string) => {
    if (rank.includes('1st') || rank.includes('Winner')) return 'from-yellow-400 to-orange-500';
    if (rank.includes('2nd')) return 'from-gray-300 to-gray-500';
    if (rank.includes('3rd')) return 'from-orange-400 to-red-500';
    if (rank.includes('Top')) return 'from-blue-400 to-purple-500';
    return 'from-green-400 to-blue-500';
  };

  const getRankIcon = (rank: string) => {
    if (rank.includes('1st') || rank.includes('Winner')) return <Trophy className="text-yellow-400" size={24} />;
    if (rank.includes('2nd') || rank.includes('3rd')) return <Medal className="text-gray-300" size={24} />;
    if (rank.includes('Top')) return <Star className="text-blue-400" size={24} />;
    return <Target className="text-green-400" size={24} />;
  };

  return (
    <section id="ctf" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              CTF <span className="text-cyan-400">Competitions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing my cybersecurity expertise through competitive achievements in Capture The Flag competitions and security research.
            </p>
          </motion.div>

          {/* CTF Competitions Grid */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Competition <span className="text-cyan-400">Achievements</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ctfCompetitions.map((competition, index) => (
                <motion.div
                  key={competition.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 shadow-2xl"
                >
                  {/* Competition Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-r ${getRankColor(competition.rank)} p-3 rounded-xl`}>
                      {getRankIcon(competition.rank)}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Calendar size={14} />
                        <span>{competition.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Competition Info */}
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white mb-2">{competition.name}</h4>
                    <div className={`bg-gradient-to-r ${getRankColor(competition.rank)} bg-clip-text text-transparent font-bold text-lg mb-2`}>
                      {competition.rank}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{competition.description}</p>
                  </div>

                  {/* Team Info */}
                  {competition.teamSize && (
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Users size={16} />
                      <span className="text-sm">Team of {competition.teamSize}</span>
                    </div>
                  )}

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2">
                    {competition.categories.map((category, categoryIndex) => (
                      <motion.span
                        key={categoryIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: categoryIndex * 0.1 }}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs hover:bg-cyan-600 hover:text-white transition-colors"
                      >
                        {category}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FSEC Roles */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              FSEC <span className="text-cyan-400">Leadership</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {fsecRoles.map((role, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl">
                      <Award size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-2">{role.role}</h4>
                      <p className="text-cyan-400 font-semibold mb-2">{role.organization}</p>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                        <Calendar size={16} />
                        <span>{role.period}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-4">{role.description}</p>
                      
                      {/* Responsibilities */}
                      <div>
                        <h5 className="text-white font-semibold mb-2">Key Responsibilities:</h5>
                        <ul className="space-y-2">
                          {role.responsibilities.map((responsibility, respIndex) => (
                            <motion.li
                              key={respIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: respIndex * 0.1 }}
                              className="text-gray-300 text-sm flex items-start gap-2"
                            >
                              <Zap className="text-cyan-400 mt-0.5 flex-shrink-0" size={14} />
                              {responsibility}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Workshops */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Workshops &amp; <span className="text-cyan-400">Training</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-6 h-6 text-blue-400" />
                    <h4 className="text-xl font-semibold text-white">{workshop.title}</h4>
                  </div>
                  <p className="text-blue-300 mb-2">{workshop.role}</p>
                  <p className="text-gray-400">{workshop.date}</p>
                  <p className="text-gray-300 mt-3">{workshop.description}</p>
                  <div className="mt-3 text-sm text-gray-400">
                    <span>{workshop.duration} • {workshop.participants} participants</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Summary */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Competition <span className="text-cyan-400">Statistics</span>
              </h3>
              
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900 rounded-xl p-6"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{ctfCompetitions.length}</div>
                  <div className="text-gray-300 text-sm">Competitions</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900 rounded-xl p-6"
                >
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {ctfCompetitions.filter(c => c.rank.includes('1st') || c.rank.includes('Winner')).length}
                  </div>
                  <div className="text-gray-300 text-sm">First Places</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900 rounded-xl p-6"
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">{fsecRoles.length}</div>
                  <div className="text-gray-300 text-sm">Leadership Roles</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900 rounded-xl p-6"
                >
                  <div className="text-3xl font-bold text-green-400 mb-2">{workshops.length}</div>
                  <div className="text-gray-300 text-sm">Workshops</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTF;