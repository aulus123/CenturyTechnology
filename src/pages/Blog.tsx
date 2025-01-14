import React from 'react';
import BlogCard from '../components/Blog/BlogCard';

const Blog: React.FC = () => {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'The Future of Web Development in 2024',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
      date: 'Mar 15, 2024',
      category: 'Web Development'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Maximizing ROI with PPC Campaigns',
      excerpt: 'Learn how to optimize your PPC campaigns for better returns on investment.',
      date: 'Mar 12, 2024',
      category: 'Digital Marketing'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Social Media Strategies That Work',
      excerpt: 'Discover effective social media strategies for business growth.',
      date: 'Mar 10, 2024',
      category: 'Social Media'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights and trends in digital marketing and web development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;