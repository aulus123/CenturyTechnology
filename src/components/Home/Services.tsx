import React from 'react';
import { Globe, Share2, Target, Search } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-12 h-12 text-blue-600" />,
    title: 'Web Development',
    description: 'Custom websites that engage visitors and drive conversions.'
  },
  {
    icon: <Share2 className="w-12 h-12 text-blue-600" />,
    title: 'Social Media Management',
    description: 'Strategic social media presence to build your brand and engage your audience.'
  },
  {
    icon: <Target className="w-12 h-12 text-blue-600" />,
    title: 'Paid Traffic (PPC)',
    description: 'Targeted advertising campaigns that deliver measurable results.'
  },
  {
    icon: <Search className="w-12 h-12 text-blue-600" />,
    title: 'SEO Optimization',
    description: 'Improve your search rankings and drive organic traffic to your website.'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;