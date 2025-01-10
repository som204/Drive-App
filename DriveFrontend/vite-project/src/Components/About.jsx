import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r bg-gray-100 px-6 py-10">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6">About Us</h1>
      <p className="max-w-3xl text-center text-gray-700 text-lg leading-relaxed">
        Welcome to <span className="font-bold text-blue-600">UrDrive</span>, your trusted platform for secure file management and data storage. Our journey began with a simple yet powerful idea—to create a seamless experience for individuals and businesses to store, organize, and access their files anytime, anywhere.
      </p>
      <p className="max-w-3xl text-center text-gray-700 text-lg leading-relaxed mt-4">
        Over the years, we have evolved into a dynamic team of tech enthusiasts, dedicated to innovation and excellence. Our platform is designed with cutting-edge technology to ensure your data remains safe, accessible, and organized. 
      </p>
      <p className="max-w-3xl text-center text-gray-700 text-lg leading-relaxed mt-4">
        At <span className="font-bold text-blue-600">UrDrive</span>, we are more than just a service—we are a partner in your digital journey. Thank you for trusting us to handle what matters most to you.
      </p>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Core Values</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li><span className="font-semibold">Innovation:</span> We continuously push the boundaries of technology to improve user experiences.</li>
          <li><span className="font-semibold">Security:</span> Protecting your data is our top priority.</li>
          <li><span className="font-semibold">Accessibility:</span> Easy access to your files, wherever you are.</li>
          <li><span className="font-semibold">Customer Focus:</span> Your satisfaction drives our every decision.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
