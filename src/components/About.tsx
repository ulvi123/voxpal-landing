import React from 'react';
import { Users, Zap, Lock, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Voxpal?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Users size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
            <p>Intuitive design for seamless communication across languages.</p>
          </div>
          <div className="text-center">
            <Zap size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Lightning-Fast</h3>
            <p>Real-time translations with minimal latency for smooth conversations.</p>
          </div>
          <div className="text-center">
            <Lock size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p>All Your conversations are protected with state-of-the-art encryption.</p>
          </div>
          <div className="text-center">
            <Globe size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p>Connect with people from all corners of the world effortlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;