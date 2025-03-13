import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users } from 'lucide-react';

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600';
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Users className="h-8 w-8 text-indigo-600" />
          <span className="text-xl font-bold text-gray-900">Communion Hub</span>
        </Link>
        
        <div className="flex space-x-8">
          <Link to="/" className={`${isActive('/')} font-medium`}>
            Home
          </Link>
          <Link to="/events" className={`${isActive('/events')} font-medium`}>
            Events
          </Link>
          <Link to="/about" className={`${isActive('/about')} font-medium`}>
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}