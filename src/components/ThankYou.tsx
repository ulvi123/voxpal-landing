// ThankYou.jsx or ThankYou.tsx
import React from 'react';

const ThankYou: React.FC = () => (
  <section className="py-20 bg-blue-600 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-8">Thank You!</h2>
      <p className="mb-8 max-w-2xl mx-auto">
        Thank you for joining our waitlist! We'll be in touch soon with exciting updates.
      </p>
    </div>
  </section>
);

export default ThankYou;
