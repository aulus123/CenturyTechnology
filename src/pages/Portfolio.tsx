import React from 'react';
import ProjectCard from '../components/Portfolio/ProjectCard';

const Portfolio: React.FC = () => {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'E-commerce Website',
      category: 'Web Development',
      description: 'A modern e-commerce platform with seamless user experience.'
    },
    {
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Social Media Campaign',
      category: 'Social Media',
      description: 'Successful social media campaign that increased engagement by 200%.'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'SEO Optimization',
      category: 'SEO',
      description: 'Improved search rankings and organic traffic for a local business.'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'PPC Campaign',
      category: 'Paid Traffic',
      description: 'High-converting PPC campaign with 300% ROI.'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our successful projects and see how we've helped businesses grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;