import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

// Example project images from Unsplash (replace with your own if needed)
const projectImages = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80", // Case Management
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQap62vDxruBYp1XW7orivrXlSdk6_8ORseFA&s", // Food Catering
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80", // Voice CLI
];

const projects = [
  {
    title: "Case Management System – Fundamental Credit Reviewer",
    stack: "Spring Boot, Microservices, React, JWT",
    img: projectImages[0],
    points: [
      "Developed a secure banking case management system using Spring Boot, Microservices, and React, with role-based dashboards and real-time updates.",
      "Integrated RabbitMQ for asynchronous notifications and Spring Scheduler for automation, optimizing database queries with JDBC Template, improving performance by 30%.",
      "Enhanced security with JWT-based authentication and streamlined workflows, reducing case resolution time by 40%.",
      "Implemented automated email notifications for real-time case status updates using Scheduler, improving customer engagement by 25%.",
      "Introduced role-based access control (RBAC) for different user levels, improving system security and ensuring only authorized access to sensitive information."
    ]
  },
  {
    title: "Food Catering Application",
    stack: "Microservices, JWT, RabbitMQ, React, Redux, MySQL",
    img: projectImages[1],
    github: "https://github.com/Food-Catering-Project",
    points: [
      "Developed a scalable food catering web application with Microservices and React, improving real-time updates by 30%.",
      "Integrated RabbitMQ and WebClient for efficient asynchronous notifications and API handling, reducing response time by 25%.",
      "Implemented JWT-based authentication, enhancing security and improving login efficiency by 20%.",
      "Optimized order processing with SQL queries, increasing performance by 35%.",
      "Added a 'Forgot Password' feature with OTP verification for secure password recovery."
    ]
  },
  {
    title: "Voice Enabled Command Line Interface using Symbl.ai (NLP Tool)",
    stack: "HTML, CSS, React.js, symbl.ai",
    img: projectImages[2],
    github: "https://github.com/Lokeshkhadse/FinalYearProject",
    points: [
      "Experienced developer in designing and maintaining voice-enabled command line interfaces using Symbl.ai, enhancing user experience.",
      "Proficient in developing innovative solutions, diagnosing issues, and ensuring seamless system functionality.",
      "Skilled in optimizing operations, improving scalability, and providing efficient system support."
    ]
  }
];

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -80 : 80,
    scale: 0.95,
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.2,
      type: "spring"
    }
  })
};

const Projects = () => {
  return (
    <section id="projects" className="pt-28 pb-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4 sm:px-6 md:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-10 text-cyan-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="relative flex flex-col items-center">
          {/* Vertical Road */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-500 rounded opacity-60 z-0" />
          <div className="w-full flex flex-col gap-16 z-10">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                className={`
                  relative max-w-2xl mx-auto bg-gradient-to-tr
                  ${idx % 2 === 0
                    ? 'from-cyan-900 to-gray-800'
                    : 'from-gray-800 to-cyan-900'}
                  p-4 sm:p-6 rounded-xl shadow-2xl flex flex-col sm:flex-row items-center
                  ${idx % 2 === 0 ? 'sm:self-start' : 'sm:self-end'}
                  group border border-cyan-700
                `}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                {/* Road Node */}
                <div className={`
                  absolute top-6 sm:top-1/2 sm:-translate-y-1/2
                  ${idx % 2 === 0 ? '-left-8 sm:-left-12' : '-right-8 sm:-right-12'}
                  w-6 h-6 bg-cyan-400 border-4 border-gray-900 rounded-full z-20 shadow-lg
                `} />
                {/* Project Image */}
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg border-4 border-cyan-400 shadow-md mb-4 sm:mb-0 sm:mr-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                <div className="flex-1 w-full">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 text-cyan-300">{project.title}</h3>
                  <div className="text-xs sm:text-sm font-semibold text-cyan-200 mb-2">{project.stack}</div>
                  <ul className="list-disc list-inside text-gray-100 space-y-1 pl-2">
                    {project.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                  {/* GitHub Link for projects with github property */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-cyan-300 hover:text-cyan-400 transition text-base sm:text-lg font-semibold"
                    >
                      <FaGithub className="text-2xl" /> View on GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
