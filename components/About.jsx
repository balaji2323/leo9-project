"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600 text-lg">
          Fission Infotech  is a team of passionate designers and developers committed to delivering beautiful, responsive, and interactive websites for businesses of all sizes. We combine creativity with technology to help your brand stand out.
        </p>
      </motion.div>
    </section>
  );
}
