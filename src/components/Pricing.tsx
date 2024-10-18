import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const handleSubscribe = (plan: string) => {
    // Replace with your actual payment processing URL
    window.location.href = `https://app.voxpal.com/subscribe?plan=${plan}`;
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Basic Plan</h3>
            <p className="text-4xl font-bold mb-6">$9.99<span className="text-lg font-normal">/month</span></p>
            <ul className="mb-8">
              <li className="flex items-center mb-2"><Check className="text-green-500 mr-2" size={20} /> 100 minutes of translation</li>
              <li className="flex items-center mb-2"><Check className="text-green-500 mr-2" size={20} /> 20 languages supported</li>
              <li className="flex items-center mb-2"><Check className="text-green-500 mr-2" size={20} /> Basic customer support</li>
              <li className="flex items-center mb-2"><Check className="text-green-500 mr-2" size={20} /> Mobile app access</li>
            </ul>
            <button 
              onClick={() => handleSubscribe('basic')}
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Start Basic
            </button>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg shadow-md border-2 border-blue-600">
            <h3 className="text-2xl font-semibold mb-4">Pro Plan</h3>
            <p className="text-4xl font-bold mb-6">$24.99<span className="text-lg font-normal">/month</span></p>
            <ul className="mb-8">
              <li className="flex items-center mb-2"><Check className="text-green-500 mr-2" size={20} /> Unlimited translation minutes</li>
              <li className="flex items-center mb-2"><Check className="text-green-500 mr-2" size={20} /> All 100+ languages supported</li>
              <li className="flex items-center mb-2"><Check className="text-green-500 mr-2" size={20} /> Priority customer support</li>
              <li className="flex items-center mb-2"><Check className="text-green-500 mr-2" size={20} /> Advanced AI features</li>
              <li className="flex items-center mb-2"><Check className="text-green-500 mr-2" size={20} /> Offline mode</li>
              <li className="flex items-center mb-2"><Check className="text-green-500 mr-2" size={20} /> Multi-device sync</li>
            </ul>
            <button 
              onClick={() => handleSubscribe('pro')}
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Go Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;