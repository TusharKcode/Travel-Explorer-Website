import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="contact-section py-16 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Title */}
        <div className="text-center mb-12">
          {loading ? (
            <div className="animate-pulse">
              <div className="h-8 w-48 mx-auto bg-gray-200 rounded mb-4"></div>
              <div className="h-4 w-80 mx-auto bg-gray-200 rounded"></div>
            </div>
          ) : (
            <>
              <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600">
                Have questions or ready to plan your trip? We'd love to hear from you!
              </p>
            </>
          )}
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact Form */}
          {loading ? (
            <div className="animate-pulse space-y-4 bg-white shadow-lg rounded-2xl p-8">
              <div className="h-6 w-40 bg-gray-300 rounded mb-4"></div>
              <div className="h-10 w-full bg-gray-200 rounded"></div>
              <div className="h-10 w-full bg-gray-200 rounded"></div>
              <div className="h-24 w-full bg-gray-200 rounded"></div>
              <div className="h-12 w-full bg-gray-300 rounded"></div>
            </div>
          ) : (
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Send us a message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-sm hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          )}

          {/* Contact Info */}
          {loading ? (
            <div className="animate-pulse space-y-6">
              <div className="h-6 w-40 bg-gray-300 rounded"></div>
              <div className="h-4 w-72 bg-gray-200 rounded"></div>
              <div className="h-5 w-64 bg-gray-200 rounded"></div>
              <div className="h-5 w-48 bg-gray-200 rounded"></div>
              <div className="h-5 w-56 bg-gray-200 rounded"></div>
              <div className="h-64 w-full bg-gray-300 rounded"></div>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Get in Touch</h3>
                <p className="text-gray-600">
                  Reach out to us for personalized assistance and travel planning support.
                </p>
              </div>
              <div className="space-y-6">
                <p className="flex items-center gap-4 text-gray-700">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  123 Explorer Street, New Delhi, India
                </p>
                <p className="flex items-center gap-4 text-gray-700">
                  <FaPhoneAlt className="text-blue-600 text-xl" />
                  +91 98765 43210
                </p>
                <p className="flex items-center gap-4 text-gray-700">
                  <FaEnvelope className="text-blue-600 text-xl" />
                  support@travelexplorer.com
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83924060495!2d77.06889739999999!3d28.527582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b63c5b9cf%3A0x8f4d345f1e7b0d!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1694599999999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
