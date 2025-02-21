"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Download } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import About from "@/components/about";
import CareerTimeline from "@/components/career-timeline";
import Skills from "@/components/skills";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/ruan-christian/",
  instagram: "https://www.instagram.com/ruan_c5/",
  github: "https://github.com/RuanSantos01",
};

const MotionText = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.span>
);

export default function Home() {
  return (
    <div className="w-full">
      <section
        id="home"
        className="section-container animate-bg_black_animated py-16 md:py-0"
      >
        <div className="section-content">
          <div className="w-full max-w-[1320px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col space-y-8"
              >
                <div className="space-y-4">
                  <h1 className="text-2xl md:text-3xl text-white">
                    <MotionText>Hi I'm Ruan</MotionText>
                  </h1>
                  <h1 className="text-4xl md:text-6xl font-bold text-primary_green">
                    <MotionText>Software Engineer</MotionText>
                  </h1>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-white leading-relaxed max-w-prose text-justify"
                >
                  Software Enginner with over 4 years of experience in web
                  development, system migration, and process optimization. I
                  work with Angular, React, Node, and Java to deliver efficient
                  and scalable solutions.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <Button
                    size="lg"
                    className="group rounded-full text-lg hover:scale-105 transition-all duration-300 bg-primary_green hover:bg-white hover:text-primary_green"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/assets/RuanChristian.pdf";
                      link.download = "Ruan Christian.pdf";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    Download CV
                    <Download className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <div className="flex justify-center gap-6">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full text-primary_green border border-primary_green hover:border-white w-12 h-12 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:bg-primary_green hover:text-white"
                      onClick={() => window.open(socialLinks.github, "_blank")}
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full w-12 h-12 text-primary_green border border-primary_green hover:border-white hover:scale-110 transition-all duration-300 hover:shadow-lg hover:bg-primary_green hover:text-white"
                      onClick={() =>
                        window.open(socialLinks.linkedin, "_blank")
                      }
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full w-12 h-12 hover:scale-110 text-primary_green border border-primary_green hover:border-white transition-all duration-300 hover:shadow-lg hover:bg-primary_green hover:text-white"
                      onClick={() =>
                        window.open(socialLinks.instagram, "_blank")
                      }
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full aspect-square max-w-[600px] mx-auto animate-float"
              >
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
                  <div className="relative w-full h-full group">
                    <Image
                      src="/assets/homeimage.jpg"
                      alt="Profile picture"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 z-20"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay" />
                  </div>
                </div>

                {/* Decorative circles */}
                <div className="absolute -top-4 -right-1 md:w-24 md:h-24 w-16 h-16 rounded-full bg-primary/[0.3] animate-pulse" />
                <div className="absolute -bottom-4 -left-1 md:w-32 md:h-32 w-24 h-24 z-0 rounded-full bg-primary/[0.5] animate-pulse" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="section-container animate-bg_light_animated"
      >
        <About />
      </section>

      <section
        id="experience"
        className="section-container animate-bg_black_animated"
      >
        <CareerTimeline />
      </section>

      <section
        id="skills"
        className="section-container animate-bg_light_animated"
      >
        <Skills />
      </section>
    </div>
  );
}
