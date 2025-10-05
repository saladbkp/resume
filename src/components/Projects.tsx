import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Award } from 'lucide-react';
import { useRef } from 'react';
import { projects } from '../data/portfolio';

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef
  });

  const x = useTransform(scrollXProgress, [0, 1], ['0%', '-50%']);

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

  const getCategoryColor = (category: string) => {
    const colors = {
      'Hardware-Software Security': 'from-red-500 to-pink-500',
      'Reverse Engineering': 'from-purple-500 to-indigo-500',
      'Software Development': 'from-blue-500 to-cyan-500',
      'Networking': 'from-green-500 to-emerald-500',
      'AI': 'from-orange-500 to-yellow-500',
      'IOT': 'from-teal-500 to-blue-500',
      'WIN API': 'from-gray-500 to-slate-500',
      'Hardware': 'from-red-600 to-orange-600',
      'Android': 'from-green-600 to-lime-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="projects" className="py-20 bg-black overflow-hidden">
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
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              A showcase of my technical projects spanning cybersecurity, software development, and innovative solutions.
            </p>
            <div className="text-cyan-400 text-sm font-medium">
              ← Scroll horizontally to explore →
            </div>
          </motion.div>

          {/* Horizontal Scrolling Container */}
          <div 
            ref={containerRef}
            className="overflow-x-auto scrollbar-hide pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <motion.div 
              className="flex gap-8 w-max"
              style={{ x }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -10 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 shadow-2xl min-w-[400px] max-w-[450px]"
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`bg-gradient-to-r ${getCategoryColor(project.category)} p-3 rounded-xl`}>
                      <div className="w-6 h-6 bg-white rounded-sm"></div>
                    </div>
                    <div className="flex gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <Github size={20} />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                      >
                        <ExternalLink size={20} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="mb-6">
                    <span className={`bg-gradient-to-r ${getCategoryColor(project.category)} bg-clip-text text-transparent font-semibold text-sm mb-2 block`}>
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{project.type}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-cyan-600 hover:text-white transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Key Details */}
                  {project.details && project.details.length > 0 && (
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Details:</h4>
                      <ul className="space-y-2">
                        {project.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.1 }}
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center mt-8"
          >
            <div className="bg-gray-800 rounded-full p-4">
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-600"
                    whileHover={{ scale: 1.2, backgroundColor: '#06b6d4' }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;