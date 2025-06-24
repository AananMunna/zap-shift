import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Logo & Description */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Profast</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enjoy fast, reliable portal delivery with real-time tracking and zero hassle. 
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Coverage</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">About Us</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Blog</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10">
          <a href="#" className="text-gray-500 hover:text-blue-500 transition">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-400 transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-pink-500 transition">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-700 transition">
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Profast. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;