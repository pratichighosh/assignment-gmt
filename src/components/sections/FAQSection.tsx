"use client";

import React from "react";
import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/Accordion";
import Image from "next/image";

const faqs = [
  {
    title: "Do you offer both in-person and telehealth sessions?",
    content: "Yes, I offer in-person therapy at my Santa Monica office as well as secure telehealth sessions for clients located anywhere in California. Both options provide the same quality of care in a confidential, supportive environment.",
  },
  {
    title: "What can I expect in our first session?",
    content: "In our first session, we'll discuss what brought you to therapy, your goals, and any immediate concerns. This is also a chance for you to ask questions and see if we're a good fit. I want you to feel comfortable and understood from the start.",
  },
  {
    title: "How long does therapy typically last?",
    content: "The length of therapy varies based on your needs and goals. Some clients find relief in a few months, while others benefit from longer-term work. We'll regularly check in on your progress and adjust as needed—this is a collaborative process.",
  },
  {
    title: "What methods do you use in therapy?",
    content: "I integrate evidence-based approaches including cognitive-behavioral therapy (CBT), EMDR for trauma processing, mindfulness-based practices, and body-oriented techniques. I tailor my approach to what works best for each individual client.",
  },
  {
    title: "Who do you typically work with?",
    content: "I primarily work with high-achieving adults navigating anxiety, panic, trauma, and burnout. Many of my clients are entrepreneurs, creatives, and professionals dealing with perfectionism, work-related stress, and the challenge of balancing achievement with self-care.",
  },
];

export const FAQSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
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
                src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?w=800&q=80"
                alt="Therapy questions and answers"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right: FAQs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-heading">Common Questions</h2>
            <Accordion items={faqs} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
