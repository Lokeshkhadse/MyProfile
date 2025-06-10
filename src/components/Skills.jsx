import React from 'react';
import { motion } from 'framer-motion';
import {
    FaJava, FaReact, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt, FaGithub, FaLinux, FaWindows,
    FaDatabase, FaTools
} from 'react-icons/fa';
import {
    SiSpringboot, SiHibernate, SiTailwindcss, SiMysql, SiOracle, SiJavascript,
    SiRedis, SiKubernetes, SiPostman, SiIntellijidea, SiEclipseide
} from 'react-icons/si';

const skills = [
    {
        category: "Language",
        items: [
            { name: "Java", icon: <FaJava className="text-orange-500" /> }
        ]
    },
    {
        category: "🚀 Backend",
        items: [
            { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
            { name: "Spring MVC", icon: <SiSpringboot className="text-green-500" /> },
            { name: "Spring Security", icon: <SiSpringboot className="text-green-700" /> },
            { name: "Microservices", icon: <FaTools className="text-orange-400" /> },
            { name: "JWT", icon: <SiJavascript className="text-yellow-400" /> },
            { name: "OAuth2", icon: <FaTools className="text-blue-700" /> },
            { name: "Hibernate", icon: <SiHibernate className="text-yellow-700" /> },
            { name: "Spring Data JPA", icon: <SiSpringboot className="text-green-400" /> },
            { name: "REST API", icon: <FaTools className="text-blue-700" /> },
            { name: "JdbcTemplate", icon: <FaDatabase className="text-blue-400" /> },
            { name: "Spring AOP", icon: <SiSpringboot className="text-green-300" /> },
            { name: "Eureka Server", icon: <FaTools className="text-blue-500" /> },
            { name: "API Gateway", icon: <FaTools className="text-purple-500" /> },
            { name: "Kafka", icon: <FaTools className="text-black" /> },
            { name: "RabbitMQ", icon: <FaTools className="text-orange-500" /> },
            { name: "Email", icon: <FaTools className="text-blue-500" /> },
            { name: "WebClient", icon: <FaTools className="text-blue-400" /> },
            { name: "FeignClient", icon: <FaTools className="text-green-500" /> },
            { name: "JUnit", icon: <FaTools className="text-green-700" /> },
            { name: "Mockito", icon: <FaTools className="text-yellow-400" /> }
        ]
    },
    {
        category: "🌐 Frontend",
        items: [
            { name: "React", icon: <FaReact className="text-cyan-400" /> },
            { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> }
        ]
    },
    {
        category: "💾 Database",
        items: [
            { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
            { name: "Oracle", icon: <SiOracle className="text-red-500" /> },
            { name: "Redis", icon: <SiRedis className="text-red-600" /> }
        ]
    },
    {
        category: "⚙️ DevOps & Tools",
        items: [
            { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
            { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
            { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
            { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
            { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
            { name: "IntelliJ", icon: <SiIntellijidea className="text-black" /> },
            { name: "STS", icon: <SiSpringboot className="text-green-400" /> },
            { name: "Eclipse", icon: <SiEclipseide className="text-purple-700" /> }
        ]
    },
    {
        category: "🖥️ Operating System",
        items: [
            { name: "Windows", icon: <FaWindows className="text-blue-500" /> },
            { name: "Linux", icon: <FaLinux className="text-yellow-200" /> }
        ]
    }
];

const listVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring" } }
};

const Skills = () => {
    return (
        <section id="skills" className="pt-28 pb-20 bg-gray-900 text-white px-4 sm:px-6 md:px-8 min-h-screen">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    className="text-2xl sm:text-3xl font-bold mb-10 text-cyan-400"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    Skills
                </motion.h2>
                <div className="flex flex-col gap-10">
                    {skills.map((group, idx) => (
                        <motion.div
                            key={group.category}
                            className="mb-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={listVariants}
                        >
                            <div className="text-lg sm:text-xl font-semibold text-cyan-300 mb-3 flex items-center justify-center gap-2">
                                {group.category}
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                                {group.items.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        className="flex flex-col items-center bg-gray-800 px-3 py-3 sm:px-4 rounded-xl shadow-md min-w-[100px] sm:min-w-[120px] hover:scale-105 transition"
                                        variants={itemVariants}
                                    >
                                        <span className="text-2xl sm:text-3xl mb-1">{skill.icon}</span>
                                        <span className="font-medium text-gray-100 text-xs sm:text-sm">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
