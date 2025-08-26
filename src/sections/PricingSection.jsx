import React from 'react';

const PricingSection = () => {
  return (
    <div id="pricing" className="pricing-section section-padding">
      <h2 className="text-4xl font-bold text-center mb-6">Website and Portfolio Pricing</h2>
      <p className="text-center mb-12">Professional web development services tailored to your needs. All packages include responsive design and modern technologies.</p>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border p-4">Service</th>
            <th className="border p-4">Price</th>
            <th className="border p-4">Includes</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-700 text-white">
            <td className="border p-4">Basic Portfolio</td>
            <td className="border p-4">KSH 15,000</td>
            <td className="border p-4">
              <ul>
                <li>Up to 5 pages</li>
                <li>Responsive design</li>
                <li>Basic SEO optimization</li>
              </ul>
            </td>
          </tr>
          <tr className="bg-gray-600 text-white">
            <td className="border p-4">Advanced Portfolio</td>
            <td className="border p-4">KSH 25,000</td>
            <td className="border p-4">
              <ul>
                <li>Up to 10 pages</li>
                <li>Responsive design</li>
                <li>SEO optimization</li>
                <li>Custom animations</li>
              </ul>
            </td>
          </tr>
          <tr className="bg-gray-700 text-white">
            <td className="border p-4">Business Website</td>
            <td className="border p-4">KSH 35,000+</td>
            <td className="border p-4">
              <ul>
                <li>Up to 15 pages</li>
                <li>Booking system integration</li>
                <li>Responsive design</li>
                <li>SEO optimization</li>
              </ul>
            </td>
          </tr>
          <tr className="bg-gray-800 text-white">
            <td className="border p-4">Hosting</td>
            <td className="border p-4">KSH 5,000/year</td>
            <td className="border p-4">
              <ul>
                <li>Reliable hosting</li>
                <li>24/7 Support</li>
                <li>Free SSL Certificate</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingSection;
