"use client";

import Image from "next/image";
import profile from "../public/profile.jpeg";
import ThemeToggle from "../components/ui/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Link from "next/link";
import { FaFileImage, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from 'react-icons/fi';
import food from "../public/food-app.png"
import accord from "../public/accord.png"
import expense from "../public/expense-tracker.png";
import simon from "../public/simon.png";
import vector from "../public/vector.png"
import slooze from "../public/slooze.png"
import email from "../public/email-management.png"
import freelance from "../public/moneycare.png";
import aventisia from "../public/aventisia.png";




export default function Home() {
  return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <div className="mx-auto max-w-xl px-4 py-8">
          <motion.header
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}

          className="flex items-center justify-between mb-12">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image src={profile} alt="profile picture" className="transition-all duration-300 hover:scale-110"></Image>
          </div>
          <ThemeToggle />
          </motion.header>

          <main className="space-y-10">
          <section className="space-y-4">

                <div className="mono flex items-center gap-2 mb-5 text-xs font-medium"
                  style={{ color:"#f43f5e", letterSpacing:"0.12em" }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:"#f43f5e",
                    boxShadow:"0 0 0 3px rgba(244,63,94,0.22)" }} />
                  AVAILABLE FOR OPPORTUNITIES
                </div>
          <motion.div
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}
          className="space-y-1"
          >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
            Naman Chaturvedi
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Aspiring SWE | Open-Source Contributor</p>
          </motion.div>

          <motion.div
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}
          className="space-y-3"
          >
            <h2 className="text-lg font-semibold">Learning to Build Scalable and Robust Systems</h2>
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

          <Link href="https://linkedin.com/in/naman005" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          <FaLinkedin className="w-6 h-6" />
          </Link>

          </motion.div>
          <hr className="border-gray-300 dark:border-gray-800 my-4" />
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
              My core expertise lies in the<span className="text-black dark:text-white"> MERN stack</span>, though I&apos;ve expanded my toolkit to include<span className="text-black dark:text-white"> FastAPI, Next.js, NestJS, Prisma, TypeScript, and GraphQL.</span> I&apos;m a fast learner who leverages AI tools like<span className="text-black dark:text-white"> Gemini and Claude </span>to accelerate my workflow,
              while maintaining a strict commitment to shipping<span className="text-black dark:text-white"> clean, well-documented, and version-controlled code.</span>
            </p>
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
              I am an active open-source contributor, currently focused on the Learning-Unlimited organization where I&apos;ve had <span className="text-black dark:text-white">10+ PRs merged</span> across <span className="text-black dark:text-white">Python and Django</span> in <span className="text-black dark:text-white">Docker</span> environment.
              I consistently sharpen my problem-solving skills through <span className="text-black dark:text-white"> Data Structures and Algorithms in C++</span>, ensuring my logic remains as robust as my code.
              I'm always seeking new challenges that allow me to grow as an engineer and contribute to impactful web projects.
            </p>
          </motion.div>

          </section>
                      <hr className="border-gray-300 dark:border-gray-800 my-4" />

          <motion.section
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="space-y-4"
          >
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Education</h2>
          <div className="space-y-4">
              <div className="space-y-1">
                <p className="font-medium">Master of Computer Applications</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Aug, 2025 - Expected 2027</p>
                <p className="text-blue-600 dark:text-blue-400">GLA University, Mathura</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium">Bachelor of Computer Applications</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">July, 2022 - 2025 | CGPA - 7.87</p>
                <p className="text-sm text-gray-600 dark:text-gray-400"> — Cleared all rounds of Accenture's campus recruitment during graduation, demonstrating strong aptitude, communication, and technical skills.</p>
                <p className="text-blue-600 dark:text-blue-400">Sanskriti University, Mathura</p>
              </div>

          </div>
          </motion.section>
           <motion.section
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="space-y-8"
>
            <hr className="border-gray-300 dark:border-gray-800 my-4" />
            <div>
            <Button variant="ghost">
          <FaGithub className="w-6 h-6" /> Github Repository Link
            </Button>

            <Button variant="ghost">
          <FiExternalLink className="w-6 h-6" /> Live Demo
            </Button>

            <Button variant="ghost">
          <FaFileImage className="w-6 h-6" /> Screenshots | Recordings
            </Button>

            </div>


  <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
    Projects
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <Card className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
      >
        <CardContent>
          <Image src={food} alt="food-app" className="rounded-lg mb-4 w-full h-auto" />
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">QR-based Self Ordering Kiosk System</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">React, Firebase, shadcn/ui</p>
            </div>
            <div>
             <Link href="https://github.com/naman005/food-app" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FaGithub className="w-6 h-6" />
            </Button>
            </Link>

            <Link href="https://food-app-five-ruby.vercel.app/" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FiExternalLink className="w-6 h-6" />
            </Button>
            </Link>
            <Link href="/food-app-photos.pdf" target="_blank" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FaFileImage className="w-6 h-6" />

            </Button>
            </Link>

            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
      >
        <CardContent>
          <Image src={accord} alt="accord" className="rounded-lg mb-4 w-full h-auto" />
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Compatibility Questionnaire Builder</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400"> Next.js, Prisma, PostgreSQL, TypeScript</p>
            </div>
            <div>
             <Link href="https://github.com/naman005/accord" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FaGithub className="w-6 h-6" />

            </Button>
            </Link>
  <Link href="https://accord-mu.vercel.app/" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FiExternalLink className="w-6 h-6" />
            </Button>
                      </Link>

             <Link href="/accord-photos.pdf" target="_blank" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FaFileImage className="w-6 h-6" />

            </Button>
            </Link>

            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
      >
        <CardContent>
          <Image src={expense} alt="expense-tracker" className="rounded-lg mb-4 w-full h-auto" />
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Expense Tracker</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MongoDB, Express.js, React, Node.js, JWT, RESTful APIs, Recharts, TailwindCSS</p>
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
          <Image src={simon} alt="Simon Says" className="rounded-lg mb-4 w-full h-auto" />
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
          <hr className="border-gray-300 dark:border-gray-800 my-4" />


<motion.section
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="space-y-8"
>

  <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
    Take Home Assignments
  </h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">

  Real engineering problems given by companies during hiring processes.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <Card className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
      >
        <CardContent>
          <Image src={vector} alt="Vector Shift" className="rounded-lg mb-4 w-full h-auto" />
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">VectorShift (YC)</h3>
              <p className="text-sm text-gray-800 dark:text-gray-300">Build Pipeline & check circular dependencies</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">JavaScript, React, Python, FastAPI, Abstraction</p>
            </div>
            <div>
             <Link href="https://github.com/naman005/vector-shift/" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FaGithub className="w-6 h-6" />
            </Button>
            </Link>

            <Link href="https://vector-shift-snowy.vercel.app/" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FiExternalLink className="w-6 h-6" />
            </Button>
            </Link>
            <Link href="https://drive.google.com/file/d/1jH6owr8nuB90mz_RmDGMgwKVK9ByoKBr/view?usp=drive_link" target="_blank" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FaFileImage className="w-6 h-6" />

            </Button>
            </Link>

            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
      >
        <CardContent>
          <Image src={aventisia} alt="Aventisia" className="rounded-lg mb-4 w-full h-auto" />
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Aventisia</h3>
              <p className="text-sm text-gray-800 dark:text-gray-300">Backend: GitHub API connector | Frontend: Dashboard</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Python, FastAPI | Typescript, React, TailwindCSS</p>
            </div>
            <div>
            <Link href="https://github.com/naman005/aventisia-backend/" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FaGithub className="w-6 h-6" />
            </Button>
            </Link>

            <Link href="https://github.com/naman005/aventisia-frontend/" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FaGithub className="w-6 h-6" />
            </Button>
            </Link>
            <Link href="https://drive.google.com/file/d/1yJaVPV8XFBhOYqmx8abokEreFAEUCSMm/view?usp=drive_link" target="_blank" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FaFileImage className="w-6 h-6" />

            </Button>
            </Link>

            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
      >
        <CardContent>
          <Image src={slooze} alt="slooze" className="rounded-lg mb-4 w-full h-auto" />
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Slooze</h3>
                            <p className="text-sm text-gray-800 dark:text-gray-300"> Commodities Management System</p>

              <p className="text-sm text-gray-600 dark:text-gray-400"> NestJS, GraphQL, Prisma, Next.js, TypeScript, Role-Based Access Control</p>
            </div>
            <div>
             <Link href="https://github.com/naman005/front-end-challenge/" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FaGithub className="w-6 h-6" />

            </Button>
            </Link>
  <Link href="https://front-end-challenge-vert.vercel.app/" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

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
          <Image src={email} alt="Lucid Growth" className="rounded-lg mb-4 w-full h-auto" />
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Lucid Growth</h3>
                            <p className="text-sm text-gray-800 dark:text-gray-300">Email Management System</p>

              <p className="text-sm text-gray-600 dark:text-gray-400"> NestJs, IMAP, MongoDB, React, TypeScript</p>
            </div>
            <div>
             <Link href="https://github.com/naman005/Email-Management/" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FaGithub className="w-6 h-6" />

            </Button>
            </Link>
            <Link href="https://email-management-sigma.vercel.app/" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FiExternalLink className="w-6 h-6" />

            </Button>
            </Link>
            <Link href="/email-management-recording.mp4" target="_blank" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FaFileImage className="w-6 h-6" />

            </Button>
            </Link>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
      >
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Converse AI Labs</h3>
                            <p className="text-sm text-gray-800 dark:text-gray-300">Broken Auth Debugging Assignment</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Node.js, Express.js, JavaScript, Postman</p>
            </div>
            <div>
             <Link href="https://github.com/naman005/broken_auth_assignment" className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">

            <Button variant="ghost">
          <FaGithub className="w-6 h-6" />
            </Button>
            </Link>


            </div>
          </div>
        </CardContent>
      </Card>



  </div>
</motion.section>
          <hr className="border-gray-300 dark:border-gray-800 my-4" />

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
          <Image src={freelance} alt="Money Care" className="rounded-lg mb-4 w-full h-auto" />
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
          <hr className="border-gray-300 dark:border-gray-800 my-4" />

<motion.div
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}
          className="flex justify-center items-center gap-3"
          >


          <Link href="tel:+918394075641" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          Contact
          </Link>

          <Link href="mailto:namanchaturvedi@hotmail.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          Mail
          </Link>
          <Link href="https://github.com/naman005" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          GitHub
          </Link>

          <Link href="https://linkedin.com/in/naman005" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          LinkedIn
          </Link>
  <span className="text-gray-500">© {new Date().getFullYear()} Naman Chaturvedi</span>

          </motion.div>
</main>
        </div>
        </div>
  );
}
