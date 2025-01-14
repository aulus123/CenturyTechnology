import React from 'react';

const stats = [
  { number: '250+', label: 'Projects Completed' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '15+', label: 'Expert Team Members' },
  { number: '5+', label: 'Years of Experience' }
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;