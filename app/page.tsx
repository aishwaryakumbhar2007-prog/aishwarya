"use client";

import { motion } from "framer-motion";

export default function Home() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Java",
    "Python",
    "API Integration",
    "Canva Editing",
  ];

  const hobbies = [
    "Learning New Technologies",
    "Coding",
    "Drawing",
    "Painting",
    "Editing (Using Canva)",
    "Reading",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white overflow-hidden relative">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">

        {/* HEADER */}
        <motion.section
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* Profile Image */}
            <motion.img
              whileHover={{ scale: 1.08 }}
              src="/Aish.jpeg"
              alt="profile"
              className="w-44 h-44 rounded-full border-4 border-pink-500 shadow-2xl object-cover"
            />

            {/* Personal Info */}
            <div className="text-center md:text-left">

              <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Aishwarya
              </h1>

              <p className="text-2xl mt-3 text-gray-300">
                Frontend Developer | Next.js Developer
              </p>

              <div className="mt-6 space-y-2 text-lg text-gray-300">

                <p>📍 Address: Namakkal</p>

                <p>📞 Phone: 8056573948</p>

                <p>📧 Email: aishwaryakumbhar2007@gmail.com</p>

                <p>🎓 College: Paavai Polytechnic College</p>

              </div>

            </div>

          </div>

        </motion.section>

        {/* ABOUT ME */}
        <motion.section
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-4xl font-bold text-pink-400">
            About Me
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-9">

            Passionate frontend developer interested in creating
            modern and responsive web applications using React,
            Next.js and Tailwind CSS. I enjoy learning new
            technologies and building creative websites with
            attractive UI designs.

          </p>

        </motion.section>

        {/* CAREER OBJECTIVE */}
        <motion.section
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-4xl font-bold text-pink-400">
            Career Objective
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-9">

            Seeking an opportunity to improve my frontend
            development skills and gain industry experience
            while contributing to innovative and creative
            software projects.

          </p>

        </motion.section>

        {/* EDUCATION */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-4xl font-bold text-pink-400">
            Education
          </h2>

          <div className="mt-6 text-lg text-gray-300 leading-9">

            <h3 className="text-2xl font-semibold text-white">
              Paavai Polytechnic College
            </h3>

            <p>Diploma in Computer Engineering</p>

            <p>2023 - 2026</p>

          </div>

        </motion.section>

        {/* PROJECT */}
        <motion.section
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-4xl font-bold text-pink-400">
            Project
          </h2>

          <div className="mt-6 text-lg text-gray-300 leading-9">

            <h3 className="text-2xl font-semibold text-white">
              Tiny Online Shop
            </h3>

            <p>

              A mini online shopping website where users can
              order small products like pencils, pens,
              colour crayons, A4 sheets, shampoo packets,
              rings and other daily useful items.

            </p>

          </div>

        </motion.section>

        {/* INTERNSHIP EXPERIENCE */}
        <motion.section
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-4xl font-bold text-pink-400">
            Internship Experience
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-9">

            Completed internship training focused on frontend
            web development and modern web technologies.
            Gained knowledge in React, Next.js and responsive
            website design.

          </p>

        </motion.section>

        {/* ACHIEVEMENTS */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-4xl font-bold text-pink-400">
            Achievements
          </h2>

          <div className="mt-6 text-lg text-gray-300 leading-9">

            <ul className="list-disc ml-6 space-y-3">

              <li>
                Participated in Hackathon using Modern AI Creative Education.
              </li>

              <li>
                Built creative frontend projects using React and Next.js.
              </li>

              <li>
                Improved UI designing skills using Tailwind CSS and Canva.
              </li>

            </ul>

          </div>

        </motion.section>

        {/* SKILLS */}
        <motion.section
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-4xl font-bold text-pink-400">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-5 rounded-2xl text-center text-lg font-semibold shadow-xl"
              >
                {skill}
              </motion.div>
            ))}

          </div>

        </motion.section>

        {/* HOBBIES */}
        <motion.section
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-4xl font-bold text-pink-400">
            Hobbies
          </h2>

          <div className="flex flex-wrap gap-5 mt-8">

            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="bg-purple-600 px-6 py-3 rounded-full text-lg shadow-lg"
              >
                {hobby}
              </motion.div>
            ))}

          </div>

        </motion.section>

      </div>

    </main>
  );
}