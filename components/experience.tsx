"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Led the development of scalable web applications using Next.js and TypeScript. Implemented CI/CD pipelines and mentored junior developers.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2019 - 2021",
    description:
      "Developed and maintained multiple client projects using React and Node.js. Collaborated with design team to implement responsive UI components.",
  },
  {
    title: "Software Developer",
    company: "StartUp Hub",
    period: "2017 - 2019",
    description:
      "Built and deployed web applications using modern JavaScript frameworks. Worked in an agile environment with daily stand-ups and sprint planning.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Experience() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{experience.title}</span>
                    <span className="text-sm text-muted-foreground">
                      {experience.period}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Building2 className="mr-2 h-4 w-4" />
                    {experience.company}
                  </div>
                  <p className="text-muted-foreground">
                    {experience.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
