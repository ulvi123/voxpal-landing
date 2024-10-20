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
        {/* Updated the className here */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
          {/* Pricing Card 1 */}
          <div className="flex-1 bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Basic Plan</h3>
            <p className="text-4xl font-bold mb-6">
              $13.99<span className="text-lg font-normal">/month</span>
            </p>
            <ul className="mb-8">
              <li className="flex items-center mb-2">
                <Check className="text-green-500 mr-2" size={20} /> Up to 60 minutes of session time
              </li>
              <li className="flex items-center mb-2">
                <Check className="text-green-500 mr-2" size={20} /> AI tutor 24x7
              </li>
              <li className="flex items-center mb-2">
                <Check className="text-green-500 mr-2" size={20} /> Speech and sentiment analysis
              </li>
              <li className="flex items-center mb-2">
                <Check className="text-green-500 mr-2" size={20} /> Native speaker performance review
              </li>
              <li className="flex items-center mb-2">
                <Check className="text-green-500 mr-2" size={20} /> Weekly reporting
              </li>
            </ul>
            <button
              onClick={() => handleSubscribe('basic')}
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Start Basic
            </button>
          </div>

          {/* Pricing Card 2 */}
          <div className="flex-1 bg-blue-50 p-8 rounded-lg shadow-md border-2 border-blue-600">
            <h3 className="text-2xl font-semibold mb-4">Pro Plan</h3>
            <p className="text-4xl font-bold mb-6">
              $49.99<span className="text-lg font-normal">/month</span>
            </p>
            <ul className="mb-8">
              <li className="flex items-center mb-2">
                <Check className="text-green-500 mr-2" size={20} /> Everything in basic plan
              </li>
              <li className="flex items-center mb-2">
                <Check className="text-green-500 mr-2" size={20} /> Admin dashboard integration
              </li>
              <li className="flex items-center mb-2">
                <Check className="text-green-500 mr-2" size={20} /> Priority customer support
              </li>
              <li className="flex items-center mb-2">
                <Check className="text-green-500 mr-2" size={20} /> On-demand native speaker review
              </li>
              <li className="flex items-center mb-2">
                <Check className="text-green-500 mr-2" size={20} /> 120+ minutes of session time
              </li>
            </ul>
            <button
              onClick={() => handleSubscribe('pro')}
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Go Pro
            </button>
          </div>

          {/* Pricing Card 3 */}
          <div className="flex-1 bg-blue-50 p-8 rounded-lg shadow-md border-1 border-blue-600">
            <h3 className="text-2xl font-semibold mb-4">Enterprise Plan</h3>
            <p className="text-4xl font-bold mb-6">
              {/* $49.99<span className="text-lg font-normal">/month</span> */}
              <h2>Talk to us!</h2>
            </p>
            <ul className="mb-8">
              <li className="flex items-center mb-2">
                <Check className="text-green-500 mr-2" size={20} /> Everything in Pro plan
              </li>
              <li className="flex items-center mb-2">
                <Check className="text-green-500 mr-2" size={20} /> Customized solutions
              </li>
              <li className="flex items-center mb-2">
                <Check className="text-green-500 mr-2" size={20} /> Dedicated account manager
              </li>
              <li className="flex items-center mb-2">
                <Check className="text-green-500 mr-2" size={20} /> Unlimited session time
              </li>
              <li className="flex items-center mb-2">
                <Check className="text-green-500 mr-2" size={20} /> Advanced analytics
              </li>
            </ul>
            <button
              onClick={() => handleSubscribe('enterprise')}
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Enterprise
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
