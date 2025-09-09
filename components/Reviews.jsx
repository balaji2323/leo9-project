"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import client1 from "../public/images/client1.jpg";
import client2 from "../public/images/client2.jpg";
import client3 from "../public/images/client3.jpg";


const reviews = [
  { name: "John Doe", feedback: "Amazing work! Our website looks incredible.", img: client1 },
  { name: "Jane Smith", feedback: "Highly professional team. Very responsive.", img: client2 },
  { name: "Mike Johnson", feedback: "Our traffic and engagement increased dramatically.", img: client3 },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Client Reviews</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {reviews.map((review, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Image src={review.img} alt={review.name} width={100} height={100} className="rounded-full mx-auto mb-4" />
            <p className="text-gray-600 mb-2">"{review.feedback}"</p>
            <h4 className="font-bold">{review.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
