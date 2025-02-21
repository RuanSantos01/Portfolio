"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const education = [
  {
    institution: "Stanford University",
    location: "Stanford, CA",
    degree: "Master of Science in Computer Science",
    period: "2015 - 2017",
    gpa: "3.92",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    achievements: [
      "Specialized in Artificial Intelligence and Machine Learning",
      "Teaching Assistant for Advanced Algorithms course",
      "Published research paper on distributed systems",
    ],
  },
  {
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    degree: "Bachelor of Science in Computer Science",
    period: "2011 - 2015",
    gpa: "3.85",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    achievements: [
      "Dean's List all semesters",
      "Led Computer Science Student Association",
      "Completed honors thesis on cloud computing optimization",
    ],
  },
];

const certifications = [
  {
    name: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "December 2023",
    logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud Platform",
    date: "October 2023",
    logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
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

export default function Education() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1320px] mx-auto"
      >
        <div className="flex items-center gap-2 mb-8">
          <GraduationCap className="h-8 w-8" />
          <h1 className="text-4xl font-bold">Education</h1>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {education.map((edu) => (
            <motion.div key={edu.institution} variants={itemVariants}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={edu.logo}
                          alt={edu.institution}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <CardTitle className="text-lg sm:text-xl truncate">
                          {edu.institution}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm sm:text-base">
                          {edu.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center sm:flex-col sm:items-end gap-4 sm:gap-1">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 shrink-0" />
                        <span>{edu.period}</span>
                      </div>
                      <p className="text-sm">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="font-semibold text-base sm:text-lg">
                    {edu.degree}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm sm:text-base">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index} className="leading-relaxed">
                        <span className="ml-[-0.5em]">•</span>{" "}
                        <span className="ml-2">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 mb-8 flex items-center gap-2">
          <Award className="h-8 w-8" />
          <h2 className="text-2xl font-bold">Certifications</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.name} variants={itemVariants}>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={cert.logo}
                        alt={cert.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-base sm:text-lg truncate">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-muted-foreground truncate">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
