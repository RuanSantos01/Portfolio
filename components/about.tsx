"use client";

import { motion } from "framer-motion";
import { User, Download } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const personalDetails = [
  { title: "Birthday", info: "Sep 05, 2001" },
  { title: "Phone", info: "+55 (61) 99696-7904" },
  { title: "Email", info: "ruanchristian00@gmail.com" },
  { title: "From", info: "Brasília, Brazil" },
  { title: "Language", info: "English, Portuguese" },
];

export default function About() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center bg-zinc-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1320px] mx-auto"
      >
        <div className="flex flex-col items-center mb-9 pt-10 md:pt-0">
          <div className="inline-flex items-center gap-3 p-2 px-4 bg-primary/10 rounded-full mb-4">
            <User className="h-6 w-6 text-primary" />
            <h1 className=" text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary  via-primary/50 to-primary">
              About Me
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-primary/5 via-primary to-primary/5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative h-[28rem] w-[24rem] md:w-full md:h-[20rem] sm:h-[25rem] lg:h-[40rem] mx-auto">
            <Image
              src="/assets/eu.jpeg"
              alt="Profile picture"
              fill
              className="object-cover rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.2)] dark:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              priority
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-between w-[24rem] mx-auto md:w-full">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl mb-4">
                Hi There! I'm Ruan Christian
              </h2>
              <h4 className="text-xl text-primary sm:text-xl lg:text-3xl mb-4 text-primary_green">
                Software Engineer
              </h4>
            </div>

            <div className="prose dark:prose-invert">
              <p className="text-justify text-lg text-black tracking-wide">
                FullStack Developer with over 4 years of experience in web
                development, system migration, and process optimization. Proven
                ability to build and enhance systems, develop intuitive
                interfaces, and design scalable architectures. Delivered
                improvements in authentication, automated file imports, platform
                migrations, and new feature development across front-end and
                back-end projects using Angular, React, Node and Java.
              </p>
            </div>

            <div className="space-y-3 mt-5 md:mt-0">
              {personalDetails.map((detail) => (
                <div
                  key={detail.title}
                  className="flex flex-col sm:flex-row gap-5"
                >
                  <span className="font-bold text-primary min-w-[108px] text-primary_green">
                    {detail.title}:
                  </span>
                  <span className=" text-black">{detail.info}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="group w-full rounded-full text-lg hover:scale-105 transition-all duration-300 bg-primary_green hover:bg-white hover:text-primary_green my-8 md:my-0"
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}
