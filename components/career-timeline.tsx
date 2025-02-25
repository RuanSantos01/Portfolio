"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, Calendar, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {BackgroundSlideshow} from "@/components/backgroundSlideShow";

const experiences = [
  {
    title: "Java Developer",
    organization: "ACT DIGITAL",
    date: "Aug 2021 - Present",
    description:
      "Full Stack development, data monitoring solutions, and participation in the internal COOPERA system using agile methodologies.",
  },
  {
    title: "Information Systems Programmer",
    organization: "Stefanini Group",
    date: "Sep 2020 - Aug 2021",
    description:
      "Test automation, internal application development, and implementation of unit tests following agile methodologies.",
  },
];

const education = [
  {
    title:
      "Specialization in Software Architecture, Cybersecurity, and Data Science",
    organization: "PUC-CAMPINAS & PUCPR",
    date: "2025 - Present",
    type: "Postgraduate Studies",
    status: "In Progress",
  },
  {
    title: "Bachelor's Degree in Computer Science",
    organization: "Centro Universitário de Brasília (UNICEUB)",
    date: "2019 - 2023",
    description:
      "Undergraduate degree focused on software development and computer science fundamentals.",
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

export default function CareerTimeline() {
  return (
    <section className="min-h-[calc(100vh-4rem)] pb-10">
      <BackgroundSlideshow />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1320px] mx-auto px-4"
      >
        <div className="flex flex-col items-center mb-9 pt-10 md:pt-10">
          <div className="inline-flex items-center gap-3 p-2 px-4 bg-primary_green/10 rounded-full mb-4">
            <Briefcase className="h-6 w-6 text-primary_green" />
            <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary_green via-primary_green/90 to-primary_green">
              Career Journey
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-primary_green via-primary_green/5 to-primary_green rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Experience Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 sm:space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 sm:gap-3 p-2 bg-primary/10 rounded-lg">
                <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Professional Experience
                </h2>
              </div>
            </div>

            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 hover:border-l-primary_green border-l-primary_green/50 hover:scale-105">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                      <div className="space-y-1">
                        <CardTitle className="text-lg sm:text-xl group-hover:text-primary_green text-black transition-colors ">
                          {exp.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {exp.organization}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm bg-primary_green/40 px-3 py-1 rounded-full w-fit">
                        <Calendar className="h-4 w-4 shrink-0 text-black " />
                        <span className="whitespace-nowrap text-black font-semibold">
                          {exp.date}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Education Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 sm:space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 sm:gap-3 p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Education
                </h2>
              </div>
            </div>

            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 hover:border-l-primary_green border-l-primary_green/50 hover:scale-105">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex flex-col gap-3 sm:gap-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
                        <div className="space-y-1 flex-1 min-w-0">
                          <CardTitle className="text-lg sm:text-xl group-hover:text-primary_green text-black transition-colors ">
                            {edu.title}
                          </CardTitle>
                          <p className="text-muted-foreground text-sm line-clamp-1">
                            {edu.organization}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm bg-primary_green/40 px-3 py-1 rounded-full w-fit">
                          <Calendar className="h-4 w-4 text-black" />
                          <span className="whitespace-nowrap text-black font-semibold">
                            {edu.date}
                          </span>
                        </div>
                      </div>
                      {edu.status && (
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary w-fit">
                          {edu.status}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  {edu.description && (
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
