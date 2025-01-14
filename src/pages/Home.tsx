import React from 'react';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import Stats from '../components/Home/Stats';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Stats />
    </div>
  );
};

export default Home;