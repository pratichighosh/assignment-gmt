"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const CTASection: React.FC = () => {
  return (
    <section className="section-padding bg-dark text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container-custom text-center space-y-8"
      >
        <h3 className="font-heading text-white">Ready to Start Your Healing Journey?</h3>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          If you're feeling overwhelmed by anxiety, stuck in patterns from the past, or exhausted from trying to do it all alone—therapy can help. <br className="hidden md:block" />
          <span className="mt-4 block">Let's work together to help you find clarity, calm, and resilience.</span>
        </p>
        <Button size="medium" variant="primary" className="text-white border-white hover:bg-white hover:text-dark">
          Schedule a Consultation
        </Button>
      </motion.div>
    </section>
  );
};
