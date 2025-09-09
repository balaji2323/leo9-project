"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../public/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-500 to-blue-500 relative overflow-hidden">
      <Image src={heroImg} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-20" priority />
      <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-6xl font-bold mb-4 text-white z-10">
        We Build Stunning Websites
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="text-lg md:text-xl mb-6 max-w-xl text-white z-10">
        Crafting beautiful, responsive, and interactive web experiences that impress.
      </motion.p>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="bg-white text-purple-600 font-bold px-6 py-3 rounded-lg shadow-lg z-10">
        Get Started
      </motion.button>
    </section>
  );
}
