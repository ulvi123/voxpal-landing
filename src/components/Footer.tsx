import React from 'react';
import { Mic, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Mic size={32} className="mr-2" />
            <span className="text-2xl font-bold">Voxpal</span>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
            <a href="#features" className="hover:text-blue-400 transition duration-300">Features</a>
            <a href="#testimonials" className="hover:text-blue-400 transition duration-300">Testimonials</a>
            <a href="#pricing" className="hover:text-blue-400 transition duration-300">Pricing</a>
            <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition duration-300"><Twitter size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition duration-300"><Facebook size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition duration-300"><Linkedin size={24} /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Voxpal. All rights reserved. | <a href="s/privacy_policy.html" className="hover:text-blue-400 transition duration-300">Privacy Policy</a> | <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;