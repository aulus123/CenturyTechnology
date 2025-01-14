import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Get in touch with us to discuss your project or ask any questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p>978-416-4422</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p>contact@centurytech.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p>59 Merriam Ave. Suite #6B<br />Leominster MA 01453</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;