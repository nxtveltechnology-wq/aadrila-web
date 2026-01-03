import React from 'react';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const BlogCard = ({ blog }) => {
  return (
    <div className="relative group h-full w-full">
      {/* Main Card */}
      <div className="relative z-10 bg-white border border-gray-100 rounded-3xl h-full flex flex-col overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        
        {/* Category Badge */}
        <div className="absolute top-6 right-6 z-20">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#a05a2c] to-[#c77340] text-white text-xs font-semibold shadow-lg">
            <Tag size={12} />
            {blog.category}
          </span>
        </div>

        {/* Content Container */}
        <div className="p-8 flex flex-col flex-1">
          
          {/* Date & Read Time */}
          <div className="flex items-center gap-4 mb-4 text-gray-500 text-sm">
            <span className="font-medium">{blog.date}</span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {blog.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-[#a05a2c] transition-colors duration-300">
            {blog.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1 line-clamp-3">
            {blog.desc}
          </p>

          {/* Read More Link */}
          <div className="mt-auto">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-[#a05a2c] font-semibold text-sm hover:gap-3 transition-all duration-300 group/link"
            >
              Read More 
              <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="h-1 w-full bg-gradient-to-r from-[#a05a2c] via-[#c77340] to-[#a05a2c] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-br from-[#a05a2c]/20 via-orange-200/30 to-amber-200/20 rounded-3xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default BlogCard;
