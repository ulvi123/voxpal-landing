import React from 'react';
import { Mic, Globe, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Mic size={32} />
          <span className="text-2xl font-bold">Voxpal</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-200 transition duration-300">About</a>
          <a href="#features" className="hover:text-blue-200 transition duration-300">Features</a>
          <a href="#testimonials" className="hover:text-blue-200 transition duration-300">Testimonials</a>
          <a href="#pricing" className="hover:text-blue-200 transition duration-300">Pricing</a>
          <a href="#contact" className="hover:text-blue-200 transition duration-300">Contact</a>
        </nav>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;