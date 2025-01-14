import React from 'react';
import { motion } from 'framer-motion';

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, excerpt, date, category }) => {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span className="text-blue-600">{category}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
        <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700">
          Read More →
        </button>
      </div>
    </motion.article>
  );
};

export default BlogCard;