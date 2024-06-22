"use client";

import React, { use, useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');


  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.475 }}
        id='about'
    >
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
        After graduating{" "}
        <span className="font-medium">high school</span>, I decided to pursue my
        passion for programming. I started my studies in{" "}
        <span className="font-medium">computer science</span> at NTNU in 2022, and have really enjoyed it so far.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. The technologies I'm most familiar with is{" "}
        <span className="font-medium">
          React, Python and Java
        </span>
        . I am also familiar with TypeScript and technologies in machine learning. I am always looking to
        learn new technologies. I am currently looking for{" "}
        <span className="font-medium">summer internships</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not at school</span>, I enjoy playing
        video games, watching sports, and hanging out with my girlfriend. I also enjoy{" "}
        <span className="font-medium">playing sports</span>. I have played{" "}
        <span className="font-medium">football</span> my whole life and really enjoy the team aspect of the sport.
      </p>
    </motion.section>
  )
}
