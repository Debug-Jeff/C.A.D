import React from 'react';
import { ArrowRight, Code, Layout, Users, Mail } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm border-b z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold text-blue-600">CompanyName</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Build Something Amazing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create beautiful, responsive websites with our modern platform. Start your journey today.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Code />}
              title="Clean Code"
              description="Write beautiful, maintainable code with our modern development tools."
            />
            <FeatureCard 
              icon={<Layout />}
              title="Responsive Design"
              description="Create websites that look great on any device with our flexible layouts."
            />
            <FeatureCard 
              icon={<Users />}
              title="Team Collaboration"
              description="Work together seamlessly with built-in collaboration features."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-8">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border rounded-lg"
                />
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">CompanyName</h3>
              <p className="text-gray-400">Building the future of web development.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2025 CompanyName. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="flex justify-center mb-4">
        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default App;