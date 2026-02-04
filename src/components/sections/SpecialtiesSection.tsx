"use client";

import React from "react";
import { motion } from "framer-motion";
import { ImageMask } from "@/components/ui/ImageMask";

const specialties = [
  {
    title: "Anxiety & Panic Therapy",
    description:
      "Find relief from constant worry, tension, and the overwhelming sense that something will go wrong. Using CBT and mindfulness-based techniques, we'll work together to help you feel more grounded and at ease.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  },
  {
    title: "Trauma Therapy (EMDR)",
    description:
      "Whether you've experienced a single traumatic event or complex, long-standing trauma, I offer specialized EMDR therapy to help you process difficult experiences with care, safety, and compassion.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
  },
  {
    title: "Burnout & Professional Stress",
    description:
      "For entrepreneurs, creatives, and high-achievers feeling exhausted by perfectionism and internal pressure, therapy can be a space to slow down, reconnect with yourself, and develop sustainable ways of working and living.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const SpecialtiesSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-heading mb-4">How I Can Help</h2>
          <p className="text-lg text-dark-lighter">
            I specialize in helping high-achieving adults navigate anxiety, trauma, and burnout with evidence-based, compassionate care.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center space-y-6 p-6"
            >
              <ImageMask
                src={specialty.image}
                alt={specialty.title}
                mask="circle"
                className="w-64 h-64"
              />
              <h3 className="font-heading text-xl">{specialty.title}</h3>
              <p className="text-base leading-relaxed text-dark-lighter">{specialty.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
