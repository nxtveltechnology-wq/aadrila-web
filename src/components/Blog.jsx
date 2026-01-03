import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlogCard from './BlogCard';

// Updated Blog Data with categories and read times
const blogs = [
  {
    id: 1,
    title: "How AI is Revolutionizing Document Management for Enterprises",
    date: "24 July, 2023",
    category: "AI & ML",
    readTime: "5 min read",
    desc: "Discover how artificial intelligence is transforming the way enterprises handle, process, and extract insights from documents. Learn about the latest innovations in AI-powered document management systems and their impact on business efficiency.",
  },
  {
    id: 2,
    title: "Top 5 Fraud Prevention Strategies for Financial Institutions",
    date: "22 July, 2023",
    category: "Security",
    readTime: "7 min read",
    desc: "Explore cutting-edge fraud prevention techniques that financial institutions are implementing to protect their customers. From advanced analytics to real-time monitoring, discover the tools that are making a difference in fraud detection.",
  },
  {
    id: 3,
    title: "The Future of OCR: From Basic Extraction to AI-Driven Intelligence",
    date: "20 July, 2023",
    category: "Technology",
    readTime: "6 min read",
    desc: "OCR technology has evolved far beyond simple text extraction. Learn how modern AI-driven OCR systems are enabling intelligent document processing, automated data validation, and seamless integration with enterprise workflows.",
  },
  {
    id: 4,
    title: "Navigating Compliance in the Digital Age",
    date: "18 July, 2023",
    category: "Compliance",
    readTime: "8 min read",
    desc: "Regulatory compliance is more complex than ever in the digital era. Discover best practices for maintaining compliance while leveraging technology to streamline operations and reduce risk across your organization.",
  },
  {
    id: 5,
    title: "Building Scalable Document Processing Pipelines",
    date: "15 July, 2023",
    category: "Technology",
    readTime: "6 min read",
    desc: "Learn the architectural patterns and best practices for creating robust, scalable document processing pipelines that can handle millions of documents while maintaining accuracy and performance at enterprise scale.",
  },
  {
    id: 6,
    title: "The Role of Machine Learning in Modern Business Intelligence",
    date: "12 July, 2023",
    category: "AI & ML",
    readTime: "5 min read",
    desc: "Machine learning is revolutionizing business intelligence by uncovering patterns and insights that traditional analytics miss. Explore how ML models are helping organizations make data-driven decisions with unprecedented accuracy.",
  },
];

const Blog = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % blogs.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
    };

    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            items.push(blogs[(currentIndex + i) % blogs.length]);
        }
        return items;
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        exit: (direction) => ({
            x: direction > 0 ? "-100%" : "100%",
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        })
    };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-10 pointer-events-none">
        <div className="w-32 h-32 bg-[radial-gradient(#a05a2c_2px,transparent_2px)] [background-size:16px_16px]" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none hidden lg:block">
         <div className="w-40 h-40 bg-[radial-gradient(#a05a2c_2px,transparent_2px)] [background-size:16px_16px]" />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-[#a05a2c]/10 to-orange-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-amber-200/10 to-[#a05a2c]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#a05a2c] font-semibold tracking-wider uppercase text-sm bg-[#a05a2c]/10 px-4 py-1.5 rounded-full inline-block mb-4">
            Insights & Updates
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest trends, insights, and best practices in AI-powered document processing and business automation.
          </p>
        </div>

        <div className="relative">
          {/* Slider Container */}
          <div className="relative overflow-hidden min-h-[400px]">
             {/* Desktop Grid (3 visible) */}
            <div className="hidden lg:block">
                <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="grid grid-cols-3 gap-6 xl:gap-8 absolute w-full top-0 left-0"
                    >
                        {getVisibleItems().map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

             {/* Mobile/Tablet View (1 visible) */}
            <div className="lg:hidden block">
                 <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="flex justify-center absolute w-full top-0 left-0 px-4"
                    >
                        <BlogCard blog={blogs[currentIndex]} />
                    </motion.div>
                </AnimatePresence>
            </div>
           </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button 
                onClick={prevSlide}
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#a05a2c] text-white flex items-center justify-center hover:bg-[#8c4f26] transition-all shadow-lg hover:shadow-xl active:scale-95 hover:-translate-y-1 z-20 group"
                aria-label="Previous blog"
            >
                <ArrowLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
                onClick={nextSlide}
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#a05a2c] text-white flex items-center justify-center hover:bg-[#8c4f26] transition-all shadow-lg hover:shadow-xl active:scale-95 hover:-translate-y-1 z-20 group"
                aria-label="Next blog"
            >
                <ArrowRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
