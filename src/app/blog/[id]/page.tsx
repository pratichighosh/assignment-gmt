import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ImageMask } from "@/components/ui/ImageMask";

// Sample blog post data
const blogPostData: { [key: string]: any } = {
  "1": {
    title: "5 Signs You Might Benefit from Therapy",
    date: "January 15, 2024",
    readTime: "5 min read",
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
    content: `
      <p>Taking the step to start therapy can feel daunting. Many people wonder if their struggles are "serious enough" to warrant professional help. The truth is, therapy isn't just for crisis situations—it's a valuable tool for personal growth and mental wellbeing at any stage of life.</p>

      <h2>1. You Feel Overwhelmed by Daily Life</h2>
      <p>When everyday tasks feel insurmountable and you're struggling to keep up with your responsibilities, it might be time to seek support. Feeling constantly overwhelmed can be a sign that you need tools and strategies to manage stress more effectively.</p>

      <h2>2. Your Relationships Are Suffering</h2>
      <p>If you notice patterns of conflict in your relationships, difficulty maintaining connections, or feelings of isolation, therapy can help you develop healthier communication patterns and relationship skills.</p>

      <h2>3. You're Using Unhealthy Coping Mechanisms</h2>
      <p>Turning to substances, excessive work, or other avoidance behaviors to manage difficult emotions is a red flag. A therapist can help you develop healthier coping strategies.</p>

      <h2>4. You Feel Stuck</h2>
      <p>Whether it's in your career, relationships, or personal growth, feeling stagnant or unable to move forward can benefit from professional guidance. Therapy provides a space to explore what's holding you back.</p>

      <h2>5. You Want to Grow</h2>
      <p>You don't need to be in crisis to benefit from therapy. Many people seek therapy for personal development, self-awareness, and to build resilience for future challenges.</p>

      <h2>Taking the Next Step</h2>
      <p>If any of these signs resonate with you, consider reaching out to a mental health professional. Remember, seeking help is a sign of strength, not weakness. You deserve support on your journey to better mental health.</p>
    `,
  },
  "2": {
    title: "Managing Burnout in Your Career",
    date: "January 8, 2024",
    readTime: "7 min read",
    category: "Self-Care",
    image: "/images/specialty-2.jpg",
    content: `
      <p>Burnout has become increasingly common in our fast-paced, always-connected work culture. It's more than just feeling tired—it's a state of emotional, physical, and mental exhaustion caused by prolonged stress.</p>

      <h2>Recognizing the Signs</h2>
      <p>Burnout manifests in various ways: chronic fatigue, cynicism about work, reduced productivity, and feeling emotionally drained. You might find yourself dreading Monday mornings or feeling detached from your accomplishments.</p>

      <h2>Understanding the Causes</h2>
      <p>Burnout often stems from a combination of factors: unrealistic workload, lack of control, unclear job expectations, or misalignment with your values. Identifying these root causes is the first step toward recovery.</p>

      <h2>Practical Recovery Strategies</h2>
      <p>Recovery from burnout isn't about pushing through—it's about fundamental changes in how you approach work and self-care. This includes setting boundaries, prioritizing rest, and seeking support when needed.</p>

      <h2>Setting Healthy Boundaries</h2>
      <p>Learning to say no, disconnecting after work hours, and protecting your personal time are essential skills. Your work is important, but so is your wellbeing.</p>

      <h2>When to Seek Professional Help</h2>
      <p>If burnout is significantly impacting your mental health or daily functioning, don't hesitate to reach out to a therapist. Professional support can provide strategies tailored to your specific situation.</p>
    `,
  },
  "3": {
    title: "Building Healthy Relationships",
    date: "December 20, 2023",
    readTime: "6 min read",
    category: "Relationships",
    image: "/images/specialty-3.jpg",
    content: `
      <p>Healthy relationships are fundamental to our wellbeing and happiness. Whether romantic, familial, or platonic, strong relationships provide support, joy, and meaning to our lives.</p>

      <h2>Communication is Key</h2>
      <p>Open, honest communication forms the foundation of any healthy relationship. This means expressing your needs clearly, listening actively, and being willing to have difficult conversations when necessary.</p>

      <h2>Maintaining Individuality</h2>
      <p>While connection is important, maintaining your individual identity within relationships is equally crucial. Healthy relationships allow space for personal growth and independence.</p>

      <h2>Trust and Respect</h2>
      <p>Trust is built through consistency, honesty, and reliability. Respect means valuing each other's opinions, boundaries, and autonomy—even when you disagree.</p>

      <h2>Navigating Conflict</h2>
      <p>Conflict is natural in any relationship. What matters is how you handle it. Approach disagreements with curiosity rather than defensiveness, and focus on understanding rather than winning.</p>

      <h2>Growing Together</h2>
      <p>Healthy relationships evolve over time. They require ongoing effort, patience, and willingness to adapt as both individuals grow and change.</p>
    `,
  },
};

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPostData[params.id];

  // If post doesn't exist, show a nice 404
  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container-custom section-padding text-center">
          <h1 className="font-heading mb-6">Post Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the blog post you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <Button variant="primary" size="medium">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom section-padding">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:opacity-70 transition-opacity"
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            {/* Category & Read Time */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="text-primary font-medium">{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="font-heading mb-6">{post.title}</h1>

            {/* Date */}
            <p className="text-gray-500">{post.date}</p>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <ImageMask
              src={post.image}
              alt={post.title}
              mask="none"
              className="w-full h-96 rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.8",
            }}
          />

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-light rounded-lg">
            <h3 className="font-heading text-xl mb-4">About the Author</h3>
            <p className="text-gray-600 mb-6">
              Hi, I'm Lilac. I'm a licensed therapist specializing in helping adults navigate
              life's challenges and build fulfilling lives. Through my blog, I share insights
              and practical tools for mental health and wellbeing.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="medium">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="font-heading text-2xl mb-8 text-center">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(blogPostData)
                .filter(([id]) => id !== params.id)
                .slice(0, 2)
                .map(([id, relatedPost]) => (
                  <Link
                    key={id}
                    href={`/blog/${id}`}
                    className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48">
                      <ImageMask
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        mask="none"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="font-heading text-lg mb-2">{relatedPost.title}</h4>
                      <p className="text-sm text-gray-500">{relatedPost.date}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
