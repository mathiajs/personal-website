import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaConnectdevelop, FaDesktop, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import icebreakersImg from "@/public/icebreakers.png";
import thecursedwebsiteImg from "@/public/thecursedwebsite.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Research Assistant",
    location: "Trondheim, Norway",
    description:
      "I'm currently working as a research assistant in the course tdt4109 at NTNU. My job involves holding lectures and being involved with the daily operation of the course, I formerly worked the same job in course tdt4100.",
    icon: React.createElement(GiTeacher),
    date: "January 2025 - present",
  },
  {
    title: "Software Developer Volunteer",
    location: "Trondheim, Norway",
    description:
      "I'm currently working as a software developer volunteer for NTNUI Sprint. My job involves ensuring that all IT solutions of the organization are up to date, while also developing new features requested by the club.",
    icon: React.createElement(GiTeacher),
    date: "September 2025 - present",
  },
  {
    title: "Software Developer Intern",
    location: "Lysaker, Norway",
    description:
      "I worked as a software developer intern at Genus, the leading no-code software development company in the Nordics. My project involved developing a support system to make handling secrets easier for developers using their platform.",
    icon: React.createElement(FaDesktop),
    date: "June 2025 - August 2025",
  },
  {
    title: "Teaching Assistant",
    location: "Trondheim, Norway",
    description:
      "I worked as a teaching assistant for the course TDT4109 at NTNU. I was responsible for designing and overseeing realistic mock exams for one of Norway’s largest courses, ensuring assessment accuracy and relevance.",
    icon: React.createElement(GiTeacher),
    date: "August 2024 - December 2024",
  },
  {
    title: "Learning Assistant",
    location: "Trondheim, Norway",
    description:
      "I worked as a learning assistant for the courses TDT4109 and TDT4100 at NTNU. I helped students with their assignments and approved/disproved their assignments.",
    icon: React.createElement(PiStudentBold),
    date: "August 2023 - May 2024",
  },
  {
    title: "MSc in Computer Science",
    location: "Trondheim, Norway",
    description:
      "I studied computer science at NTNU. I learned about algorithms, data structures, databases, web development, and more.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2022 - present",
  },
  {
    title: "Retail Worker",
    location: "Sarpsborg, Norway",
    description:
      "I worked as a retail worker at a grocery store, where I learned about customer service, teamwork, and responsibility. I worked my way up to having the reponsibility of closing the store.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "The Cursed Website",
    description:
      "I made a website where i could experiment with different web technologies. I did this project to learn more about React.",
    tags: ["React", "JavaScript", "Node.js"],
    imageUrl: thecursedwebsiteImg,
  },
  {
    title: "Icebreakers",
    description:
      "A course project where we made a website application for creating and sharing icebreakers. I worked full-stack on this project.",
    tags: ["React", "JavaScript", "Next.js", "Firebase"],
    imageUrl: icebreakersImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
  "Java",
  "Firebase",
  ".NET",
  "C#",
  "Docker",
  "Django",
  "Kubernetes",
  "Vue.js",
] as const;
