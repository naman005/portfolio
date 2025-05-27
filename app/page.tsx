"use client";

import Image from "next/image";
import profile from "../public/profile.jpeg";
import ThemeToggle from "../components/ui/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from 'react-icons/fi';
import image1 from "../public/expense-tracker.png";
import image2 from "../public/portfolio.png";
import image3 from "../public/simon.png";
import image4 from "../public/moneycare.png";



export default function Home() {
  return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <div className="mx-auto max-w-xl px-4 py-20">
          <motion.header
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}

          className="flex items-center justify-between mb-12">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image src={profile} alt="profile picture" className="cursor-pointer transition-all duration-300 hover:scale-110"></Image>
          </div>
          <ThemeToggle />
          </motion.header>

          <main className="space-y-10">
          <section className="space-y-10">
          <motion.div 
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}
          className="space-y-1"
          >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
            Naman Chaturvedi
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Web Developer & Aspiring SDE</p>
          <p className="text-gray-600 dark:text-gray-400">India</p>
          </motion.div>

          <motion.div
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}
          className="space-y-3"
          >
            <h2 className="text-lg font-semibold">Building Scalable Web Solutions for Tomorrow</h2>
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
              I &apos; m a <span className="text-black dark:text-white">MERN </span>stack web developer focused on building clean, responsive, and scalable web applications.
              I work with <span className="text-black dark:text-white"> MongoDB, Express, React, and Node.js, </span> and I also use  <span className="text-black dark:text-white">PostgreSQL </span> for robust relational data handling.
From designing <span className="text-black dark:text-white">RESTful APIs </span>to deploying full-stack apps, I create solutions that are fast, user-friendly, and built to grow.
            </p>
          </motion.div>

          <motion.div 
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}
          className="flex items-center gap-3"
          >
            <a href="/resume.pdf" download>
          <Button className="cursor-pointer rounded-full bg-gradient-to-r from-rose-400 to-indigo-600 text-white transition-transform hover:scale-105">Resume</Button>
          </a>
          <Link href="https://github.com/naman005" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          <FaGithub className="w-6 h-6" />
          </Link>

          <Link href="https://www.linkedin.com/in/naman005" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          <FaLinkedin className="w-6 h-6" />
          </Link>

          </motion.div>

          </section>

          <motion.section
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="space-y-8"
          >
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Education</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-600 dark:text-gray-400">July, 2022 - 2025</p>
                <p className="font-medium">Bachelor of Computer Applications</p>
                <p className="text-blue-600 dark:text-blue-400">Sanskriti University, Mathura</p>
              </div>

            </div>

          </div>
          </motion.section>
           <motion.section
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="space-y-8"
>
  <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
    Projects
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
      >
        <CardContent>
          <Image src={image1} alt="expense-tracker" className="rounded-lg mb-4 w-full h-auto" />
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Expense Tracker</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MongoDB, Express.js, React.js, Node.js, JWT, Recharts, TailwindCSS</p>
            </div>
            <div>
             <Link href="https://github.com/naman005/expense-tracker" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FaGithub className="w-6 h-6" />
            </Button>
            </Link>

            <Link href="https://expense-tracker-gray-one.vercel.app" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FiExternalLink className="w-6 h-6" />
            </Button>
            </Link>

            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
      >
        <CardContent>
          <Image src={image2} alt="portfolio" className="rounded-lg mb-4 w-full h-auto" />
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Portfolio</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400"> Next.js, Framer Motion, shadcn/ui, Vercel</p>
            </div>
            <div>
             <Link href="https://github.com/naman005/portfolio" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FaGithub className="w-6 h-6" />
          
            </Button>
            </Link>
  <Link href="#" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FiExternalLink className="w-6 h-6" />
            </Button>
                      </Link>

            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
      >
        <CardContent>
          <Image src={image3} alt="Simon Says" className="rounded-lg mb-4 w-full h-auto" />
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Simon Says</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400"> HTML, CSS, JavaScript, Netlify</p>
            </div>
            <div>
             <Link href="https://github.com/naman005/simon-game" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FaGithub className="w-6 h-6" />
          
            </Button>
            </Link>
            <Link href="https://simon-memorygame.netlify.app/ " className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FiExternalLink className="w-6 h-6" />
          
            </Button>
            </Link>
            </div>
          </div>
        </CardContent>
      </Card>
  </div>
</motion.section>
<motion.section
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="space-y-8"
>
  <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
    Freelance
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
      >
        <CardContent>
          <Image src={image4} alt="Money Care" className="rounded-lg mb-4 w-full h-auto" />
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">MoneyCare Learn</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">HTML, TailwindCSS, JavaScript, Netlify</p>
            </div>
            <div>

            
            
             <Link href="https://moneycarelearn.netlify.app/" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          <Button variant="ghost">
          <FiExternalLink className="w-6 h-6" />
          </Button>
          </Link>
            
            </div>
          </div>
        </CardContent>
      </Card>
      
  </div>

</motion.section>
  <p className="text-gray-500">© 2025 Naman Chaturvedi</p>
</main>
        </div>
        </div>
  );
}
