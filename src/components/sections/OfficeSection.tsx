"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const OfficeSection: React.FC = () => {
  return (
    <section id="office" className="section-padding bg-light">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-heading mb-4">A Calm Space for Healing</h2>
          <p className="text-lg text-dark-lighter">
            My office in Santa Monica is designed to feel safe, comfortable, and grounding—a quiet, private space where you can feel at ease from the moment you arrive.
          </p>
        </motion.div>

        {/* Office Images Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src="/images/office1.jpeg"
              alt="Comfortable therapy office with natural light and calming seating area"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src="/images/office2.jpeg"
              alt="Private counseling space with comfortable chairs and calming decor"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Office Details */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Location */}
          <motion.div
            variants={cardVariants}
            className="text-center p-6 bg-white rounded-lg"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-lg mb-2">Location</h3>
            <p className="text-dark-lighter">123th Street 45 W<br />Santa Monica, CA 90401</p>
          </motion.div>

          {/* Session Types */}
          <motion.div
            variants={cardVariants}
            className="text-center p-6 bg-white rounded-lg"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-heading text-lg mb-2">Session Options</h3>
            <p className="text-dark-lighter">In-person sessions in Santa Monica / Hybrid sessions<br />Secure telehealth for California residents</p>
          </motion.div>

          {/* Environment */}
          <motion.div
            variants={cardVariants}
            className="text-center p-6 bg-white rounded-lg"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-heading text-lg mb-2">Private & Safe</h3>
            <p className="text-dark-lighter">Comfortable, uncluttered environment<br />Designed for privacy and ease</p>
          </motion.div>
        </motion.div>

        {/* Additional Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <p className="text-base md:text-lg text-dark-lighter leading-relaxed">
            With natural light and a comfortable, uncluttered environment, my office provides a peaceful setting for reflection and growth. Clients often share that they feel more at ease the moment they arrive—ready to engage fully in the therapeutic process.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
