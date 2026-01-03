import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlogCard from './BlogCard';

// Blog Data fitting the reference image
const blogs = [
  {
    id: 1,
    title: "How AI is Revolutionizing Document Management for Enterprises",
    date: "24 July, 2023",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
  {
    id: 2,
    title: "Top 5 Fraud Prevention Strategies for Financial Institutions",
    date: "24 July, 2023",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
  {
    id: 3,
    title: "The Future of OCR: From Basic Extraction to AI-Driven Intelligence",
    date: "24 July, 2023",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
  {
    id: 4,
    title: "Navigating Compliance in the Digital Age",
    date: "25 July, 2023",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
  {
    id: 5,
    title: "The Future of OCR: From Basic Extraction to AI-Driven Intelligence",
    date: "24 July, 2023",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
  {
    id: 6,
    title: "Navigating Compliance in the Digital Age",
    date: "25 July, 2023",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
];

const Blog = () => {
    // Basic slider logic (for simplicity, shows 3 at a time on desktop)
    // A more robust slider would use a library or complex drag constraints
    // Here we'll implement a simple index-based view
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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Dots Decoration */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
        <div className="w-24 h-24 bg-[radial-gradient(#a05a2c_2px,transparent_2px)] [background-size:16px_16px]" />
      </div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
         <div className="w-32 h-32 bg-[radial-gradient(#a05a2c_2px,transparent_2px)] [background-size:16px_16px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Blogs</h2>
          <p className="text-[#a05a2c] text-lg max-w-2xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            <br className="hidden md:block" />
            Lorem Ipsum has been the industry's standard.
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
                        className="grid grid-cols-3 gap-8 absolute w-full top-0 left-0"
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
                        className="flex justify-center absolute w-full top-0 left-0"
                    >
                        <BlogCard blog={blogs[currentIndex]} />
                    </motion.div>
                </AnimatePresence>
            </div>
           </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-lg bg-[#3b5998] text-white flex items-center justify-center hover:bg-[#2d4373] transition-colors shadow-lg active:scale-95 z-20"
            >
                <ArrowLeft size={24} />
            </button>
            <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-lg bg-[#3b5998] text-white flex items-center justify-center hover:bg-[#2d4373] transition-colors shadow-lg active:scale-95 z-20"
            >
                <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
