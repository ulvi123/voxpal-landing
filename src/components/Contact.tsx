import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const form = e.target as HTMLFormElement;
      const data = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as any).toString()
      });
      
      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to join waitlist. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Join the Voxpal Revolution</h2>
        <p className="mb-8 max-w-2xl mx-auto">Be among the first to experience the future of language translation. Sign up for our waitlist and get exclusive early access, special offers, and a chance to shape the future of global communication.</p>
        {submitted ? (
          <div className="bg-green-500 text-white p-4 rounded-lg inline-block">
            Thank you for joining our waitlist! We'll be in touch soon with exciting updates.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto" data-netlify="true" name="waitlist">
            <input type="hidden" name="form-name" value="waitlist" />
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
              <button type="submit" className="bg-white text-blue-600 font-bold py-2 px-6 rounded-r-lg hover:bg-blue-100 transition duration-300">
                Join Waitlist
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;