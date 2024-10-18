import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400" size={20} fill="#FBBF24" />
              ))}
            </div>
            <p className="mb-4">"Voxpal has revolutionized my international business calls. It's like having a professional interpreter at my fingertips!"</p>
            <p className="font-semibold">- Sarah T., Business Owner</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400" size={20} fill="#FBBF24" />
              ))}
            </div>
            <p className="mb-4">"I used Voxpal on my vacation to Japan, and it made communicating with locals a breeze. Highly recommended for travelers!"</p>
            <p className="font-semibold">- Mike R., Travel Enthusiast</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400" size={20} fill="#FBBF24" />
              ))}
            </div>
            <p className="mb-4">"As a language teacher, I'm impressed by Voxpal's accuracy. It's an excellent tool for students to practice with native speakers."</p>
            <p className="font-semibold">- Elena M., Language Educator</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;