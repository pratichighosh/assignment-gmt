"use client";

import React from "react";
import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/Accordion";

const credentials = [
  {
    title: "Education & Training",
    content:
      "Doctor of Psychology (PsyD) in Clinical Psychology. Specialized training in trauma-focused therapies, cognitive-behavioral interventions, and EMDR (Eye Movement Desensitization and Reprocessing). Additional training in mindfulness-based stress reduction and body-oriented therapeutic techniques.",
  },
  {
    title: "Licensure",
    content:
      "Licensed Clinical Psychologist in the State of California. Authorized to provide both in-person therapy in Santa Monica and telehealth services to clients throughout California.",
  },
  {
    title: "Areas of Expertise",
    content:
      "Anxiety disorders and panic, trauma and PTSD, burnout and professional stress, perfectionism and high achievement-related challenges. Evidence-based approaches including Cognitive-Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and somatic/body-oriented techniques.",
  },
];

export const CredentialsSection: React.FC = () => {
  return (
    <section className="section-padding bg-light">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container-custom max-w-4xl"
      >
        <h3 className="text-center font-heading mb-12">My Professional Background</h3>
        <Accordion items={credentials} />
      </motion.div>
    </section>
  );
};
