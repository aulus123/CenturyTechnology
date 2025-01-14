import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleGetStarted = () => {
    // Add navigation logic here
    console.log('Get Started clicked');
  };

  return (
    <div className="relative h-[50vh] w-full">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/public/hero-bg3.jpg')` // Using the exact path to your image
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full w-full">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-black mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl font-bold text-black  mb-8">
              We create innovative digital solutions that help businesses grow. From stunning websites 
              to effective digital marketing strategies, we're your partner in the digital world.
            </p>
            <button
              onClick={handleGetStarted}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;