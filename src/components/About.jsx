import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    school: "Sinhgad Institute of Technology, Lonavala",
    year: "2020 – 2024",
    detail: "CGPA: 9.20/10"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Purandar Junior College, Saswad",
    year: "2020",
    detail: "Percentage: 65.69%"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "MES Waghire Highschool, Saswad",
    year: "2018",
    detail: "Percentage: 89.20%"
  }
];

const experience = [
  {
    company: "Eidiko Systems Integrators",
    role: "Java Full Stack Developer",
    designation: "Software Engineer",
    date: "July 2024 - Present",
    details: [
      "Designed scalable REST APIs using Java, Spring Boot, Hibernate, and Microservices, improving performance and maintainability while optimizing MySQL and Oracle SQL queries, reducing response time by 30%.",
      "Developed responsive front-end components with React, JavaScript, HTML, and CSS, enhancing UX and reducing page load time by 20% for better application performance.",
      "Integrated Docker & Jenkins for CI/CD, streamlining DevOps and cutting deployment time 50%."
    ]
  }
];

const points = [
  "Passionate <strong>Java Full Stack Developer</strong> with a focus on scalable, secure, and high-performance web applications.",
  "Proficient in <strong>Java, Spring Boot, Microservices, React, MySQL, Oracle SQL, Docker, and Kubernetes</strong>.",
  "Skilled in designing <strong>robust backend systems</strong> and building <strong>intuitive frontend interfaces</strong>.",
  "Enjoys solving complex engineering problems with clean, efficient code.",
  "Constantly exploring and adapting to new technologies in a fast-evolving tech landscape."
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring" } }
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* About Me Title Centered On Top */}
        <motion.h2
          className="text-3xl font-bold mb-10 text-cyan-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

       

        {/* Education */}
        <motion.h3
          className="text-2xl font-bold mb-6 text-center w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h3>
        <motion.ul
          className="mb-10 space-y-4 text-center mx-auto max-w-2xl w-full"
          initial="hidden"
          whileInView="visible"
          variants={listVariants}
          viewport={{ once: true }}
        >
          {education.map((edu, idx) => (
            <motion.li
              key={idx}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-4 shadow flex flex-col sm:flex-row sm:justify-between items-center"
            >
              <div>
                <span className="font-semibold text-cyan-300">{edu.degree}</span>
                <div className="text-gray-300 text-left">{edu.school}</div>
              </div>
              <div className="text-right mt-2 sm:mt-0">
                <div className="text-gray-400">{edu.year}</div>
                <div className="text-cyan-400 text-sm">{edu.detail}</div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Experience */}
        <motion.h3
          className="text-2xl font-bold mb-4 text-center w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h3>
        <motion.ul
          className="mb-10 space-y-4  mx-auto max-w-2xl w-full"
          initial="hidden"
          whileInView="visible"
          variants={listVariants}
          viewport={{ once: true }}
        >
          {experience.map((exp, idx) => (
            <motion.li
              key={idx}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-4 shadow flex flex-col sm:flex-row sm:justify-between items-center"
            >
              <div className="flex-1 text-left"> 
                <span className="font-semibold text-cyan-300">{exp.company}</span>
                <div className="text-gray-300">{exp.role}</div>
                <div className="text-gray-300">{exp.designation}</div>
                {exp.details && (
                  <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1 text-sm text-left">
                    {exp.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="text-right mt-2 sm:mt-0 min-w-[120px]">
                <div className="text-gray-400">{exp.date}</div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

         {/* Professional Points */}
        <motion.ul
          className="space-y-5 text-gray-300 leading-relaxed text-lg text-left mx-auto max-w-2xl w-full mb-12"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {points.map((point, idx) => (
            <motion.li
              key={idx}
              variants={itemVariants}
              className="flex items-start"
            >
              <span className="text-cyan-400 mr-2 mt-1">•</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: point.replace(
                    /<strong>(.*?)<\/strong>/g,
                    '<span class="font-semibold text-cyan-300">$1</span>'
                  )
                }}
              />
            </motion.li>
          ))}
        </motion.ul>


      </div>
    </section>
  );
};

export default About;
