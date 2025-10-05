import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Award, ChevronRight } from 'lucide-react';
import { workExperience } from '../data/portfolio';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const getExperienceIcon = (title: string) => {
    if (title.includes('Developer')) return '💻';
    if (title.includes('Penetration')) return '🔒';
    if (title.includes('Freelance')) return '🚀';
    return '💼';
  };

  const getExperienceColor = (index: number) => {
    const colors = [
      'from-blue-500 to-cyan-500',
      'from-red-500 to-pink-500',
      'from-green-500 to-emerald-500',
      'from-purple-500 to-indigo-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
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
              Work <span className="text-cyan-400">Experience</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey in software development and cybersecurity, building real-world solutions and gaining valuable industry experience.
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <motion.div
              variants={timelineVariants}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 transform md:-translate-x-1/2 origin-top"
            />

            {/* Experience Items */}
            <div className="space-y-12">
              {workExperience.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-r ${getExperienceColor(index)} rounded-full transform md:-translate-x-1/2 z-10 border-4 border-gray-900 shadow-lg`}
                  />

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-500 shadow-2xl ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    } md:w-5/12 w-full`}
                  >
                    {/* Experience Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`bg-gradient-to-r ${getExperienceColor(index)} p-3 rounded-xl text-2xl`}>
                        {getExperienceIcon(experience.title)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                        <p className="text-cyan-400 font-semibold mb-2">{experience.company}</p>
                        <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase size={16} />
                            <span>{experience.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">{experience.description}</p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <Award className="text-yellow-400" size={20} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achievementIndex * 0.1 }}
                            className="text-gray-300 flex items-start gap-3"
                          >
                            <ChevronRight className="text-cyan-400 mt-0.5 flex-shrink-0" size={16} />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-cyan-600 hover:text-white transition-colors cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer"
            >
              <Briefcase size={20} />
              <span>Let's Work Together</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;