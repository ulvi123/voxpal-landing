import React from 'react';
import { Globe, Headphones } from 'lucide-react';

const Hero: React.FC = () => {
  const handleTryVoxpal = () => {
    // Replace with your actual payment or signup page URL
    window.location.href = 'https://app.voxpal.com/signup';
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-8">
          <Globe size={48} className="mr-4" />
          <Headphones size={48} />
        </div>
        <h1 className="text-5xl font-bold mb-6">Speak Globally with Voxpal</h1>
        <p className="text-xl mb-8">Experience the magic of real-time voice translation powered by advanced AI</p>
        <button 
          onClick={handleTryVoxpal}
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300 shadow-lg"
        >
          Try Voxpal Now
        </button>
      </div>
    </section>
  );
};

export default Hero;