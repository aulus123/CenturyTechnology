import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="text-blue-600 text-sm font-semibold">{category}</span>
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;