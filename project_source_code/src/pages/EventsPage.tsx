import React, { useState } from 'react';
import { Calendar, MapPin, Filter } from 'lucide-react';
import { format } from 'date-fns';

type Event = {
  id: number;
  title: string;
  date: Date;
  location: string;
  category: string;
  description: string;
  image: string;
};

type Category = 'All' | 'Religious' | 'Social' | 'Charity';

export function EventsPage() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: 'Interfaith Dialog Session',
      date: new Date('2024-04-15'),
      location: 'Community Center',
      category: 'Religious',
      description: 'Join us for an enlightening discussion about different faith traditions.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Community Picnic',
      date: new Date('2024-04-20'),
      location: 'Central Park',
      category: 'Social',
      description: 'A fun day out with games, food, and community bonding.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Food Drive',
      date: new Date('2024-04-25'),
      location: 'Local Food Bank',
      category: 'Charity',
      description: 'Help collect and distribute food to those in need.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    category: 'Social',
    description: '',
    image: ''
  });

  const filteredEvents = selectedCategory === 'All'
    ? events
    : events.filter(event => event.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const event: Event = {
      id: events.length + 1,
      title: newEvent.title,
      date: new Date(newEvent.date),
      location: newEvent.location,
      category: newEvent.category,
      description: newEvent.description,
      image: newEvent.image || 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80'
    };
    setEvents([...events, event]);
    setNewEvent({ title: '', date: '', location: '', category: 'Social', description: '', image: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 animate-fade-in">Community Events</h1>
        <div className="flex items-center space-x-4">
          <Filter className="h-5 w-5 text-gray-500 animate-pulse" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as Category)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transform hover:scale-105 transition-all duration-300"
          >
            <option>All</option>
            <option>Religious</option>
            <option>Social</option>
            <option>Charity</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Event List */}
        <div className="space-y-6">
          {filteredEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1 animate-pulse" />
                {format(event.date, 'MMMM d, yyyy')}
              </div>
              <div className="mt-1 flex items-center text-sm text-gray-500">
                <MapPin className="h-4 w-4 mr-1 animate-pulse" />
                {event.location}
              </div>
              <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                {event.category}
              </span>
              <p className="mt-2 text-sm text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>

        {/* Add Event Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 transform hover:shadow-lg transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Event</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                required
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transform hover:scale-105 transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                required
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transform hover:scale-105 transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                id="location"
                required
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transform hover:scale-105 transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                value={newEvent.category}
                onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transform hover:scale-105 transition-all duration-300"
              >
                <option>Religious</option>
                <option>Social</option>
                <option>Charity</option>
              </select>
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Image URL (optional)
              </label>
              <input
                type="url"
                id="image"
                value={newEvent.image}
                onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transform hover:scale-105 transition-all duration-300"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                required
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transform hover:scale-105 transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-all duration-300"
            >
              Add Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}