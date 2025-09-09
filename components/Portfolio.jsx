"use client"; 
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { title: "Project One", img: "/images/service12.jpg" },
  { title: "Project Two", img: "/images/service5.jpg" },
  { title: "Project Three", img: "/images/service6.jpg" },
  { title: "Project Four", img: "/images/service7.jpg" },
  { title: "Project Five", img: "/images/service9.jpg" },
  { title: "Project Six", img: "/images/service10.jpg" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Portfolio</h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <Image src={project.img} alt={project.title} width={400} height={300} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
