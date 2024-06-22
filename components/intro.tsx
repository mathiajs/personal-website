"use client";

import Image from 'next/image';
import React from 'react';
import profilepicImg from '@/public/profilepic.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);


  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
              <motion.div
                initial={{ scale: 0, opacity: 0}}
                animate={{ scale: 1, opacity: 1}}
                transition={{
                  type: 'tween',
                  delay: 0.4,
                  duration: 0.25,
                }}
              >
                <Image
                  src={profilepicImg}
                  alt='Profile picture'
                  width={192}
                  height={192}
                  quality={95}
                  priority={true}
                  className='h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl'
                />
              </motion.div>


              <motion.span className='absolute bottom-0 right-0 text-4xl'
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{
                  type: 'spring',
                  stiffness: 125,
                  delay: 0.5,
                  duration: 0.5,
                }}
              >
                👋
              </motion.span>
            </div>
        </div>

        <motion.h1 className='mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0}}
          transition={{
            delay: 0.3,
          }}
        >
          <span className='font-bold'>Hi, I'm Mathias</span>. I'm a{" "}
          <span className='font-bold'>third year computer science student</span> at NTNU in Trondheim, Norway. I enjoy learning new technologies and building cool stuff. I'm currently studying{" "}
          <span className='italic'>AI and machine learning,</span>  and I'm also interested in{" "} 
          <span className='underline'>full-stack development.</span> 
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0}}
          transition={{
            delay: 0.4,
          }}
        >
          {
          //Contact button
          }
          <Link 
            href='#contact'
            className='group bg-slate-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 transition'
          >
            Contact me here 
            <BsArrowRight
            className='opacity-70 group-hover:translate-x-1 transition' />
          </Link>

          {
          //Download CV button
          }
          <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10' 
            href='/CV.pdf' download={true}>
            Download CV 
            <HiDownload
            className='opacity-60 group-hover:translate-y-1 transition' />
          </a>

          {
          //LinkedIn button
          }
          <a className='bg-white p-4 text-slate-700 hover:text-slate-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] transition cursor-pointer border border-black/10'
            href='https://www.linkedin.com/in/mathias-skogen-karstensen-0a8a1926a/' target='_blank'  
          >
            <BsLinkedin />
          </a>

          {
          //Github button
          }
          <a className='bg-white p-4 text-slate-700 hover:text-slate-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] transition cursor-pointer border border-black/10'
            href='https://github.com/mathiajs' target='_blank'
          >
            <FaGithubSquare />
          </a>
        </motion.div>
    </section>
  )
}

