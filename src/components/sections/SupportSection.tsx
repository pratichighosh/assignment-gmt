"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const challenges = [
  "Constant worry or tension in your body that won't ease",
  "Difficulty sleeping or feeling like you're always bracing for something to go wrong",
  "The weight of past experiences affecting your present relationships",
  "Feeling exhausted from pushing through stress at work",
  "Struggling to find balance between achievement and self-care",
];

export const SupportSection: React.FC = () => {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
                alt="Person finding peace and calm"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-heading">
              You don't have to navigate this <em>alone</em>
            </h2>
            <p className="text-base md:text-lg text-dark-lighter">
              Many of my clients come to therapy experiencing:
            </p>
            
            <ul className="space-y-3">
              {challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-base text-dark-lighter">{challenge}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-base md:text-lg text-dark-lighter">
              Through a warm, collaborative approach, we'll work together to help you develop insight, resilience, and a stronger relationship with yourself.
            </p>

            <Button size="large" variant="secondary" className="w-full md:w-auto">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
