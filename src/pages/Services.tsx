import React from 'react';
import ServiceCard from '../components/Services/ServiceCard';
import { Globe, Share2, Target, Search } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites that drive results and engage your audience.',
      features: [
        'Responsive Design',
        'Custom Development',
        'E-commerce Solutions',
        'Website Maintenance'
      ]
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Strategic social media presence to build your brand.',
      features: [
        'Content Creation',
        'Community Management',
        'Social Strategy',
        'Analytics & Reporting'
      ]
    },
    {
      icon: Target,
      title: 'Paid Traffic (PPC)',
      description: 'Targeted advertising campaigns that deliver ROI.',
      features: [
        'Google Ads',
        'Social Media Ads',
        'Retargeting',
        'Performance Tracking'
      ]
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and organic traffic.',
      features: [
        'Keyword Research',
        'On-Page SEO',
        'Technical SEO',
        'Link Building'
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed online.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;