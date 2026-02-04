"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="font-heading">Meet Dr. Maya Reynolds</h2>
          <p className="text-base md:text-lg leading-relaxed text-dark-lighter">
            I'm a licensed clinical psychologist based in Santa Monica, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-dark-lighter">
            Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge. If you're navigating constant worry, relationship challenges, or the weight of past trauma, I'm here to help you find your way forward.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-dark-lighter">
            I take a warm, collaborative, and grounded approach, integrating evidence-based methods like CBT, EMDR, and mindfulness-based practices to help you understand both the emotional and physical sides of what you're experiencing.
          </p>
          <Button size="large" variant="secondary" className="w-full md:w-auto mt-8">
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
