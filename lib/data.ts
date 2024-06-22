import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "MSc in Computer Science",
    location: "Trondheim, Norway",
    description:
      "I studied computer science at NTNU. I learned about algorithms, data structures, databases, web development, and more.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-present",
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