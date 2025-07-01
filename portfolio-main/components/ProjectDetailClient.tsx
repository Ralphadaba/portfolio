"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // or use any other arrow icon library

type Project = {
  img: string;
  summary: string;
  services: string[];
  header: string;
  description: string;
  challenges: string;
  solution: string;
  liveLink?: string;
};

type Props = {
  project: Project;
};

export default function ProjectDetailClient({ project }: Props) {
  return (
    <main className="text-white">
      {/* Cover Image */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img
          src={project.img}
          alt="project cover"
          className="w-full h-full object-cover"
        />

        {/* Live Site Prompt */}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-5 right-5 md:top-6 md:right-8 bg-purple text-white text-sm md:text-base px-4 py-2 rounded-full flex items-center gap-2 hover:bg-purple/80 transition-all z-10
                       md:flex-row flex-col md:items-center md:space-y-0 space-y-1"
          >
            <span>View Live Site</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 animate-slide" />
          </a>
        )}
      </div>

      {/* Summary Below Image */}
      <div className="px-6 sm:px-12 md:px-20 mt-10 text-center">
        <p className="text-lg md:text-2xl text-gray-300 font-light max-w-4xl mx-auto">
          {project.summary}
        </p>
      </div>

      {/* Project Content Section */}
      <section className="px-6 sm:px-12 md:px-20 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Services Sidebar */}
        <aside className="md:col-span-1">
          <h2 className="text-xl font-semibold text-purple mb-4">
            Services Offered
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            {project.services.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </aside>

        {/* Main Project Details */}
        <div className="md:col-span-3 space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold"
          >
            {project.header}
          </motion.h1>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-purple mb-2">
              Project Description
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </motion.section>

          <section>
            <h2 className="text-2xl font-semibold text-purple mb-2">
              Development Challenges
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {project.challenges}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple mb-2">
              My Solution
            </h2>
            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
          </section>

          {/* Live Link Prompt */}
          {project.liveLink && (
            <div className="mt-16">
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-purple hover:text-white transition-colors duration-300"
              >
                <span className="text-lg font-medium mr-2">
                  Visit Live Project
                </span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Spacer before footer */}
      <div className="mb-24" />
    </main>
  );
}
