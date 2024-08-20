import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    title: "Teaching Assistant",
    location: "Trondheim, Norway",
    description: 
      "I worked as a teaching assistant for the course TDT4100 at NTNU. I was responsible for designing and overseeing realistic mock exams for one of Norway’s largest courses, ensuring assessment accuracy and relevance.",
    icon: React.createElement(GiTeacher),
    date: "2024-present",
  },
  {
    title: "Learning Assistant",
    location: "Trondheim, Norway",
    description: 
      "I worked as a learning assistant for the courses TDT4109 and TDT4110 at NTNU. I helped students with their assignments and approved/disproved their assignments.",
    icon: React.createElement(PiStudentBold),
    date: "2023-2024",
  },
  {
    title: "MSc in Computer Science",
    location: "Trondheim, Norway",
    description:
      "I studied computer science at NTNU. I learned about algorithms, data structures, databases, web development, and more.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-present",
  },
  {
    title: "Retail Worker",
    location: "Sarpsborg, Norway",
    description: 
      "I worked as a retail worker at a grocery store, where I learned about customer service, teamwork, and responsibility. I worked my way up to having the reponsibility of closing the store.",
    icon: React.createElement(CgWorkAlt),
    date: "2018-present",
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
] as const;