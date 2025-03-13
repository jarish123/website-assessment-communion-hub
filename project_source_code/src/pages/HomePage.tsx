import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Calendar, Globe, BookOpen, HandHeart } from 'lucide-react';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80"
            alt="Community gathering"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate-slide-up">
              <span className="block">Building Bridges Across</span>
              <span className="block text-indigo-200">Faith Communities</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-indigo-100 sm:max-w-3xl animate-fade-in-up">
              Join our vibrant community where people from all faiths come together to share experiences,
              learn from each other, and create meaningful connections.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <button
                  onClick={() => navigate('/events')}
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 md:py-4 md:text-lg md:px-10"
                >
                  Explore Events
                </button>
                <button
                  onClick={() => navigate('/about')}
                  className="flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all duration-300 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase animate-fade-in">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl animate-slide-up">
              Fostering Understanding Through Connection
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto animate-fade-in-up">
              We believe in the power of community to bridge divides and create understanding across different faiths and cultures.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg animate-bounce">
                        <Globe className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Global Community</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Connect with people from diverse backgrounds and faiths from around the world.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg animate-bounce delay-100">
                        <BookOpen className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Interfaith Learning</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Explore and learn about different faith traditions through direct interaction and dialogue.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg animate-bounce delay-200">
                        <HandHeart className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Community Service</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Join hands in service projects that make a positive impact in our communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-indigo-600 animate-pulse" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Community Building</h3>
              <p className="mt-2 text-base text-gray-500">
                Connect with like-minded individuals and build meaningful relationships across faith traditions.
              </p>
            </div>

            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <Calendar className="h-12 w-12 text-indigo-600 animate-pulse delay-100" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Event Organization</h3>
              <p className="mt-2 text-base text-gray-500">
                Create and join interfaith events, discussions, and celebrations that matter to your community.
              </p>
            </div>

            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <Heart className="h-12 w-12 text-indigo-600 animate-pulse delay-200" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Support Network</h3>
              <p className="mt-2 text-base text-gray-500">
                Find support and give back through our network of faith communities and service initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-white">
        <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
            alt="People collaborating"
          />
          <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-500 animate-fade-in">Join Our Community</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl animate-slide-up">Ready to get started?</p>
            <p className="mt-3 text-lg text-gray-500 animate-fade-in-up">
              Join our growing community of faith leaders, seekers, and community builders. Together, we can create meaningful connections and foster understanding across faiths.
            </p>
            <div className="mt-8">
              <button
                onClick={() => navigate('/events')}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300"
              >
                Explore Our Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}