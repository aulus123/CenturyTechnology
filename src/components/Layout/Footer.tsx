import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Century Technology</h3>
            <p className="text-gray-400 mb-4">
              Your partner in digital transformation. We specialize in web development, 
              social media management, PPC, and SEO solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/CenturyTech" className="hover:text-blue-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/CenturyTech" className="hover:text-blue-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/centurytech" className="hover:text-blue-400">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                978-416-4422
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                contact@centurytech.com
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                59 Merriam Ave. Suite #6B
                <br />Leominster MA 01453
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>Website Development</li>
              <li>Social Media Management</li>
              <li>Paid Traffic (PPC)</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Century Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;