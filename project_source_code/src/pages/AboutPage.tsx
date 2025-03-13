import React from 'react';
import { Mail, Phone, MapPin, Globe, Users, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-16 bg-white">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                About Us
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Welcome to Communion Hub
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              Communion Hub is a platform dedicated to fostering meaningful connections and understanding across different faith communities. We believe in the power of bringing people together to share experiences, learn from one another, and build lasting relationships.
            </p>
          </div>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-indigo-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Our Vision</h3>
                </div>
                <p className="mt-4 text-gray-500">
                  To create a world where people of all faiths can come together, share their beliefs, and build a more understanding and inclusive society.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Our Community</h3>
                </div>
                <p className="mt-4 text-gray-500">
                  A diverse group of individuals and organizations committed to interfaith dialogue and community building.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <Heart className="h-6 w-6 text-indigo-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Our Values</h3>
                </div>
                <p className="mt-4 text-gray-500">
                  Respect, understanding, and compassion guide everything we do as we work to bring communities together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Contact Information
              </h2>
              <div className="mt-8">
                <div className="mt-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>+91 9345307745</p>
                      <p className="mt-1">Mon-Fri 9am to 6pm IST</p>
                    </div>
                  </div>
                  <div className="mt-6 flex">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>communionhub@gmail.com</p>
                    </div>
                  </div>
                  <div className="mt-6 flex">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>Chennai, Tamil Nadu</p>
                      <p className="mt-1">India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 sm:mt-16 md:mt-0">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Connect With Us
              </h2>
              <div className="mt-8 bg-white">
                <div className="grid grid-cols-1 gap-y-6">
                  <p className="text-base text-gray-500">
                    We're always looking to connect with individuals and organizations interested in interfaith dialogue and community building. Reach out to us to learn more about how you can get involved.
                  </p>
                  <div className="mt-4">
                    <a
                      href="mailto:communionhub@gmail.com"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Send us an email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}