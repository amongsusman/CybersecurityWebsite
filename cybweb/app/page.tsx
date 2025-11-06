"use client";

import Image from "next/image";
import NavBar from "./components/NavBar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 font-serif text-white">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg"
        >
          Learn All About <span className="text-yellow-300">Cybersecurity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mb-8 text-blue-100"
        >
          Explore the essential principles of digital safety — from the CIA Triad to threat awareness and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="/triad"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Start Learning
          </a>
        </motion.div>
      </section>

      {/* Decorative wave at bottom */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180"
        >
          <path
            fill="#ffffff33"
            fillOpacity="1"
            d="M0,64L60,106.7C120,149,240,235,360,240C480,245,600,171,720,160C840,149,960,203,1080,197.3C1200,192,1320,128,1380,96L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </main>
  );
}
