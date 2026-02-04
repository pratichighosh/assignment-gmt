"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-md aspect-[2/3] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/Dr. Maya Reynolds.png"
                alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
          >
            <h1 className="font-heading">
              Anxiety & Trauma Therapy <br />
              in Santa Monica
            </h1>
            <p className="text-lg md:text-xl max-w-md text-dark-lighter">
              Find clarity, calm, and resilience. Compassionate therapy for high-achieving adults navigating anxiety, burnout, and life transitions.
            </p>
            <Button size="medium" variant="primary">
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
