import React from 'react';
import { Mic, Globe, Zap, Users, Brain, Smartphone } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Voxpal's Superpowers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Mic className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Voice-to-Voice Magic</h3>
            <p>Speak naturally and hear translations in real-time, maintaining the flow of conversation.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Globe className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">100+ Languages</h3>
            <p>From Spanish to Swahili, communicate effortlessly in over 100 languages.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Brain className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Accuracy</h3>
            <p>Leverage advanced LLMs for context-aware, nuanced translations.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Users className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Group Chat Support</h3>
            <p>Host multilingual meetings and group chats with ease.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Zap className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Offline Mode</h3>
            <p>Download language packs for translations even without internet.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Smartphone className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
            <p>Use Voxpal on your smartphone, tablet, or computer seamlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;