"use client";
import { motion } from "framer-motion";
import service1 from "../public/images/service4.jpg";
import service2 from "../public/images/service5.jpg";
import service3 from "../public/images/service6.jpg";
import Image from "next/image";

const services = [
  { title: "Web Design", desc: "Responsive and modern website designs.", img: service1 },
  { title: "Web Development", desc: "Clean, maintainable code for robust websites.", img: service2 },
  { title: "SEO & Marketing", desc: "Boost your digital presence and reach.", img: service3 },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <Image src={service.img} alt={service.title} width={120} height={120} className="rounded-full mb-4" />
            <h3 className="font-bold text-xl mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
