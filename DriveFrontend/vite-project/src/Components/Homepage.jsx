import React from "react";
import { useNavigate } from "react-router";
import { FaCloudUploadAlt, FaUserFriends, FaShieldAlt } from "react-icons/fa";
import landingImage from "../assets/react.svg";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";

const Homepage = () => {
  const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (cookies.token) {
          setIsLoggedIn(true);
        }
        else{
            setIsLoggedIn(false);
        }
      }, [cookies]);


  return (
    <div className="bg-gradient-to-br from-blue-100 to-white min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-20">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Welcome to <span className="text-yellow-300">UrDrive</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              Your ultimate solution for secure file storage, sharing, and collaboration.
            </p>
            {
                !isLoggedIn ? 
            (<button
              onClick={() => navigate("/register")}
              className="bg-yellow-300 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
            >
              Get Started
            </button> ) : (<button
                onClick={() => navigate("/files")}
                className="bg-yellow-300 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
              >
                Start Uploading
              </button>)
            }
          </div>
          
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-8 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-12">
          Why Choose UrDrive?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <FaCloudUploadAlt className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800">Easy Upload</h3>
            <p className="text-gray-600">
              Quickly upload and organize your files with our user-friendly
              interface.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <FaUserFriends className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800">
              Seamless Collaboration
            </h3>
            <p className="text-gray-600">
              Share files and work together in real-time with your team.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800">Secure</h3>
            <p className="text-gray-600">
              We prioritize your privacy with end-to-end encryption.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 w-full py-16">
        <div className="container mx-auto text-center px-8 md:px-20">
          <h2 className="text-3xl font-bold text-blue-800 mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Testimonial 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                "UrDrive has completely transformed how we store and share files.
                It's so intuitive and secure!"
              </p>
              <h4 className="mt-4 font-bold text-blue-800">- Jane Doe</h4>
            </div>
            {/* Testimonial 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                "The real-time collaboration feature is a game-changer for my
                team. Highly recommend!"
              </p>
              <h4 className="mt-4 font-bold text-blue-800">- John Smith</h4>
            </div>
            {/* Testimonial 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                "I love how secure UrDrive is. It gives me peace of mind knowing
                my files are safe."
              </p>
              <h4 className="mt-4 font-bold text-blue-800">- Emily Johnson</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-blue-800 py-12">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          {
                !isLoggedIn ? 
            (<button
              onClick={() => navigate("/register")}
              className="bg-yellow-300 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
            >
              Join Us
            </button> ) : (<button
                onClick={() => navigate("/files")}
                className="bg-yellow-300 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
              >
                Access Your Files
              </button>)
            }
        </div>
      </section>
    </div>
  );
};

export default Homepage;
