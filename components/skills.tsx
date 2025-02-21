"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import * as SimpleIcons from "simple-icons";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      {
        name: "Java",
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50"><path d="M 28.1875 0 C 30.9375 6.363281 18.328125 10.292969 17.15625 15.59375 C 16.082031 20.464844 24.648438 26.125 24.65625 26.125 C 23.355469 24.109375 22.398438 22.449219 21.09375 19.3125 C 18.886719 14.007813 34.535156 9.207031 28.1875 0 Z M 36.5625 8.8125 C 36.5625 8.8125 25.5 9.523438 24.9375 16.59375 C 24.6875 19.742188 27.847656 21.398438 27.9375 23.6875 C 28.011719 25.558594 26.0625 27.125 26.0625 27.125 C 26.0625 27.125 29.609375 26.449219 30.71875 23.59375 C 31.949219 20.425781 28.320313 18.285156 28.6875 15.75 C 29.039063 13.324219 36.5625 8.8125 36.5625 8.8125 Z M 19.1875 25.15625 C 19.1875 25.15625 9.0625 25.011719 9.0625 27.875 C 9.0625 30.867188 22.316406 31.089844 31.78125 29.25 C 31.78125 29.25 34.296875 27.519531 34.96875 26.875 C 28.765625 28.140625 14.625 28.28125 14.625 27.1875 C 14.625 26.179688 19.1875 25.15625 19.1875 25.15625 Z M 38.65625 25.15625 C 37.664063 25.234375 36.59375 25.617188 35.625 26.3125 C 37.90625 25.820313 39.84375 27.234375 39.84375 28.84375 C 39.84375 32.46875 34.59375 35.875 34.59375 35.875 C 34.59375 35.875 42.71875 34.953125 42.71875 29 C 42.71875 26.296875 40.839844 24.984375 38.65625 25.15625 Z M 16.75 30.71875 C 15.195313 30.71875 12.875 31.9375 12.875 33.09375 C 12.875 35.417969 24.5625 37.207031 33.21875 33.8125 L 30.21875 31.96875 C 24.351563 33.847656 13.546875 33.234375 16.75 30.71875 Z M 18.1875 35.9375 C 16.058594 35.9375 14.65625 37.222656 14.65625 38.1875 C 14.65625 41.171875 27.371094 41.472656 32.40625 38.4375 L 29.21875 36.40625 C 25.457031 37.996094 16.015625 38.238281 18.1875 35.9375 Z M 11.09375 38.625 C 7.625 38.554688 5.375 40.113281 5.375 41.40625 C 5.375 48.28125 40.875 47.964844 40.875 40.9375 C 40.875 39.769531 39.527344 39.203125 39.03125 38.9375 C 41.933594 45.65625 9.96875 45.121094 9.96875 41.15625 C 9.96875 40.253906 12.320313 39.390625 14.5 39.8125 L 12.65625 38.75 C 12.113281 38.667969 11.589844 38.636719 11.09375 38.625 Z M 44.625 43.25 C 39.226563 48.367188 25.546875 50.222656 11.78125 47.0625 C 25.542969 52.695313 44.558594 49.535156 44.625 43.25 Z"></path></svg>',
          hex: "#007396",
        },
      },
      {
        name: "JavaScript",
        icon: SimpleIcons.siJavascript,
      },
      {
        name: "TypeScript",
        icon: SimpleIcons.siTypescript,
      },
      {
        name: "Python",
        icon: SimpleIcons.siPython,
      },
      {
        name: "SQL",
        icon: SimpleIcons.siSqlite,
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: "🛠️",
    skills: [
      { name: "React", icon: SimpleIcons.siReact },
      { name: "Next.js", icon: SimpleIcons.siNextdotjs },
      { name: "Node.js", icon: SimpleIcons.siNodedotjs },
      { name: "Express", icon: SimpleIcons.siExpress },
      { name: "Spring", icon: SimpleIcons.siSpring },
      { name: "Angular", icon: SimpleIcons.siAngular },
      { name: "TailwindCSS", icon: SimpleIcons.siTailwindcss },
      { name: "Bootstrap", icon: SimpleIcons.siBootstrap },
    ],
  },
  {
    title: "Software Architecture",
    icon: "🏗️",
    skills: [
      { name: "Docker", icon: SimpleIcons.siDocker },
      { name: "Kubernetes", icon: SimpleIcons.siKubernetes },
      { name: "REST API", icon: SimpleIcons.siOpenapiinitiative },
      { name: "Microservices", icon: SimpleIcons.siApachekafka },
    ],
  },
  {
    title: "Cloud Services",
    icon: "☁️",
    skills: [
      { name: "AWS", icon: SimpleIcons.siAmazonaws },
      { name: "Vercel", icon: SimpleIcons.siVercel },
      { name: "Netlify", icon: SimpleIcons.siNetlify },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "⚙️",
    skills: [
      { name: "Git", icon: SimpleIcons.siGit },
      { name: "GitHub", icon: SimpleIcons.siGithub },
      { name: "GitLab", icon: SimpleIcons.siGitlab },
      { name: "Jenkins", icon: SimpleIcons.siJenkins },
      { name: "CI/CD", icon: SimpleIcons.siCircleci },
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", icon: SimpleIcons.siMongodb },
      { name: "MySQL", icon: SimpleIcons.siMysql },
      { name: "DB2", icon: SimpleIcons.siIbm },
      { name: "Oracle", icon: SimpleIcons.siOracle },
    ],
  },
  {
    title: "Testing",
    icon: "🧪",
    skills: [
      { name: "Jest", icon: SimpleIcons.siJest },
      { name: "Selenium", icon: SimpleIcons.siSelenium },
      { name: "Postman", icon: SimpleIcons.siPostman },
      { name: "jUnit5", icon: SimpleIcons.siJunit5 },
      { name: "Jasmine", icon: SimpleIcons.siJasmine },
    ],
  },
  {
    title: "Project Management",
    icon: "📊",
    skills: [
      { name: "Jira", icon: SimpleIcons.siJira },
      { name: "Trello", icon: SimpleIcons.siTrello },
      { name: "Notion", icon: SimpleIcons.siNotion },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function Skills() {
  return (
    <div className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1320px] mx-auto"
      >
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-3 p-2 px-4 bg-primary/10 rounded-full mb-4">
            <span className="text-2xl">💻</span>
            <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Technical Skills
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-primary/5 via-primary to-primary/5 rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-primary_green via-primary_green/60 to-primary_green text-white">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h2 className="text-xl font-semibold">{category.title}</h2>
                  </div>
                </div>
                <div className="p-6 pt-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                        whileHover="hover"
                      >
                        <motion.div
                          variants={iconVariants}
                          className="text-2xl"
                          dangerouslySetInnerHTML={{
                            __html: skill.icon.svg,
                          }}
                          style={{
                            width: "24px",
                            height: "24px",
                            color: `#${skill.icon.hex}`,
                          }}
                        />
                        <span className="text-sm font-medium text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
