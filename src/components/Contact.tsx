// Contact.jsx or Contact.tsx
import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const location = useLocation();

  // Check if form submission was successful
  const query = new URLSearchParams(location.search);
  const isFormSubmitted = query.get('success') === 'true';

  if (isFormSubmitted) {
    return <Navigate to="/thank-you" replace />;
  }

  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Join the Voxpal Revolution</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Be among the first to experience the future of language translation. Sign up for our waitlist and get exclusive early access, special offers, and a chance to shape the future of global communication.
        </p>
        <form
          name="waitlist"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/contact?success=true"
          className="max-w-md mx-auto"
        >
          <input type="hidden" name="form-name" value="waitlist" />
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div className="flex">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-grow px-4 py-2 rounded-l-lg text-black"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 font-bold py-2 px-6 rounded-r-lg hover:bg-blue-100 transition duration-300"
            >
              Join Waitlist
            </button>
          </div>
        </form>
        {/* Hidden form for Netlify to detect */}
        <form name="waitlist" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="email" name="email" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
