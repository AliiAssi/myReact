import React, { useState } from 'react';

const AccessibilityDemo = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${JSON.stringify(formData)}`);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Accessible Form */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Accessible Form</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-gray-100 p-6 rounded-lg"
          aria-labelledby="form-heading"
        >
          <h3 id="form-heading" className="text-lg font-semibold">
            Contact Form
          </h3>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            aria-required="true"
            required
          />
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            aria-required="true"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-live="polite"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Accessible Button with ARIA Attributes */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Accessible Button</h2>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Open modal"
          aria-haspopup="dialog"
        >
          Open Modal
        </button>
      </div>

      {/* Accessible Link */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Accessible Link</h2>
        <a
          href="#"
          className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Go to homepage"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default AccessibilityDemo;
