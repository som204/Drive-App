import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 py-10">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Contact Us</h1>
      <p className="max-w-2xl text-center text-gray-700 text-lg mb-8">
        We’d love to hear from you! Whether you have a question, need support, or just want to share your thoughts, feel free to reach out to us through any of the methods below.
      </p>
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-3">
          <span className="text-xl font-semibold text-gray-700">📧 Email:</span>
          <a
            href="mailto:support@drive.com"
            className="text-blue-600 hover:underline"
          >
            support@drive.com
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xl font-semibold text-gray-700">📞 Phone:</span>
          <a
            href="tel:+1234567890"
            className="text-blue-600 hover:underline"
          >
            +123 456 7890
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xl font-semibold text-gray-700">📍 Address:</span>
          <p className="text-gray-700">
            123, Innovation Street, Tech City, Digital World
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Reach Out on Social Media
        </h2>
        <div className="flex space-x-6 justify-center">
          <a
            href="#"
            className="text-2xl text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            🌐 Facebook
          </a>
          <a
            href="#"
            className="text-2xl text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            🐦 Twitter
          </a>
          <a
            href="#"
            className="text-2xl text-purple-600 hover:text-purple-800 transition-colors duration-300"
          >
            📸 Instagram
          </a>
          <a
            href="#"
            className="text-2xl text-blue-700 hover:text-blue-900 transition-colors duration-300"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
