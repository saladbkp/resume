import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Languages, Monitor, Shield } from 'lucide-react';
import { education, technicalSkills, softSkills } from '../data/portfolio';

const About = () => {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: technicalSkills.programming,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Communication Languages",
      icon: Languages,
      skills: technicalSkills.languages,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Operating Systems",
      icon: Monitor,
      skills: technicalSkills.systems,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Security Interests",
      icon: Shield,
      skills: technicalSkills.interests,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
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
              About <span className="text-cyan-400">Me</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate about cybersecurity and software development, with a strong foundation in both theoretical knowledge and practical application.
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 shadow-2xl border border-gray-600">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-xl">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
                  <p className="text-cyan-400 font-semibold mb-2">{education.university}</p>
                  <p className="text-gray-400 mb-4">{education.location} • {education.period}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="text-yellow-400" size={20} />
                        <span className="text-white font-semibold">CGPA: {education.cgpa}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{education.activities}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Relevant Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {education.courses.map((course, index) => (
                          <span
                            key={index}
                            className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Skills Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Technical <span className="text-cyan-400">Skills</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg w-fit mb-4`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  
                  <h4 className="text-white font-semibold mb-4">{category.title}</h4>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="text-gray-300 text-sm bg-gray-700/50 px-3 py-2 rounded-lg"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Soft <span className="text-cyan-400">Skills</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-cyan-400 mb-3">{skill.name}</h4>
                  <p className="text-gray-300 leading-relaxed">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificates */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                {technicalSkills.certificates[0]}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;