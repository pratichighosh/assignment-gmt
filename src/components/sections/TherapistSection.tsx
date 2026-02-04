"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const TherapistSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
                  alt="Calm therapeutic environment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1 space-y-6"
          >
            <h2 className="font-heading">My Approach to Therapy</h2>
            <p className="text-base md:text-lg leading-relaxed text-dark-lighter">
              I believe therapy works best when you feel respected, understood, and actively involved in the process. My goal isn't just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-dark-lighter">
              Sessions are structured yet flexible, leaving space for reflection and depth. I integrate evidence-based methods like <strong>cognitive-behavioral therapy (CBT)</strong>, <strong>EMDR</strong>, <strong>mindfulness-based practices</strong>, and <strong>body-oriented techniques</strong> to help you understand both the emotional and physiological sides of what you're experiencing.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-dark-lighter">
              If you're looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.
            </p>
            <Button size="medium" variant="primary">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
