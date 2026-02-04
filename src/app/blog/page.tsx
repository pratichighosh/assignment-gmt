"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// Sample blog posts data
const featuredPost = {
  id: 1,
  title: "5 Signs You Might Benefit from Therapy",
  excerpt:
    "Discover the common signs that indicate it might be time to seek professional support for your mental health. Learn how therapy can help you navigate life's challenges.",
  date: "January 15, 2024",
  readTime: "5 min read",
  category: "Mental Health",
  image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
  author: "Dr. Maya Reynolds",
};

const blogPosts = [
  {
    id: 2,
    title: "Managing Burnout in Your Career",
    excerpt:
      "Learn practical strategies to recognize and address workplace burnout before it impacts your wellbeing.",
    date: "January 8, 2024",
    readTime: "7 min read",
    category: "Self-Care",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80",
  },
  {
    id: 3,
    title: "Building Healthy Relationships",
    excerpt:
      "Explore the key elements of healthy relationships and how to nurture meaningful connections.",
    date: "December 20, 2023",
    readTime: "6 min read",
    category: "Relationships",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
  },
  {
    id: 4,
    title: "Understanding Anxiety Triggers",
    excerpt:
      "Identify common anxiety triggers and learn effective coping strategies for daily life.",
    date: "December 15, 2023",
    readTime: "8 min read",
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
  },
  {
    id: 5,
    title: "The Power of Mindfulness",
    excerpt:
      "Discover how mindfulness practices can transform your mental health and daily experience.",
    date: "December 10, 2023",
    readTime: "6 min read",
    category: "Self-Care",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
  },
];

const categories = ["All", "Mental Health", "Self-Care", "Relationships"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-light to-white py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
              Latest Insights
            </span>
            <h1 className="font-heading mb-6">Therapy & Wellness Blog</h1>
            <p className="text-lg md:text-xl text-dark-lighter">
              Practical insights, expert advice, and thoughtful reflections on mental health, relationships, and personal growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter - NOW CLICKABLE! */}
      <section className="bg-white border-b border-gray-200 sticky top-[80px] z-40">
        <div className="container-custom py-4">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
                  category === selectedCategory
                    ? "bg-primary text-white shadow-md"
                    : "bg-light text-dark-lighter hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href={`/blog/${featuredPost.id}`}>
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-bright text-dark rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 bg-gradient-to-br from-light to-white flex flex-col justify-center">
                    <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4 w-fit">
                      {featuredPost.category}
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-dark-lighter text-lg mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-dark-lighter mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Recent Posts Grid - FILTERED! */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading mb-4">
              {selectedCategory === "All" ? "Recent Articles" : `${selectedCategory} Articles`}
            </h2>
            <p className="text-lg text-dark-lighter">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
            </p>
          </motion.div>

          {filteredPosts.length > 0 ? (
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="group"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary rounded-full text-xs font-semibold">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-heading text-2xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-dark-lighter mb-4 line-clamp-2 flex-grow">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-4 text-sm text-dark-lighter">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all text-sm">
                            <span>Read</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-light rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-dark-lighter" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl mb-2">No articles found</h3>
              <p className="text-dark-lighter mb-6">
                We don't have any articles in this category yet. Check back soon!
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
              >
                View All Articles
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="font-heading text-white mb-4">Stay Connected</h2>
            <p className="text-white/90 text-lg mb-8">
              Get weekly insights, practical tips, and the latest articles delivered straight to your inbox. Join our community of mindful readers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-dark focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-bright hover:bg-bright-darker text-dark rounded-full font-semibold transition-all hover:scale-105"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white/70 text-sm mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
