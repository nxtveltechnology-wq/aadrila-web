import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="relative group h-full pb-4 w-full">
      <div className="relative z-10 bg-white border border-gray-100 p-8 rounded-2xl h-full flex flex-col items-start gap-4 shadow-sm group-hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-gray-900 leading-snug min-h-[3.5rem]">
            {blog.title}
        </h3>
        <span className="text-blue-500 text-sm font-medium">
            {blog.date}
        </span>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
            {blog.desc}
        </p>
      </div>
       <div className="absolute -bottom-2 -left-2 top-4 right-4 bg-gradient-to-br from-purple-200 to-blue-100 rounded-3xl -z-10 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default BlogCard;
