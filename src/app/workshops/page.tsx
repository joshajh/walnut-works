'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Workshop {
  id: number;
  title: string;
  slug: string;
  description: string;
  date: string;
  location: string;
  image_url: string | null;
  is_upcoming: number;
}

interface WorkshopExample {
  id: number;
  title: string;
  slug: string;
  description: string;
  image_url: string | null;
}

export default function WorkshopsPage() {
  const [upcomingWorkshops, setUpcomingWorkshops] = useState<Workshop[]>([]);
  const [examples, setExamples] = useState<WorkshopExample[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    workshop_id: null as number | null,
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    fetchWorkshops();
  }, []);

  const fetchWorkshops = async () => {
    try {
      const [upcomingRes, examplesRes] = await Promise.all([
        fetch('/api/workshops?upcoming=true'),
        fetch('/api/workshop-examples'),
      ]);
      const upcoming = await upcomingRes.json();
      const examplesData = await examplesRes.json();
      setUpcomingWorkshops(upcoming);
      setExamples(examplesData);
    } catch (error) {
      console.error('Failed to fetch workshops:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingForm),
      });

      if (res.ok) {
        setFormStatus('success');
        setBookingForm({ name: '', email: '', phone: '', message: '', workshop_id: null });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#F0EEDE] noise-bg">
      <Navigation />

      {/* Page Title */}
      <div className="fixed top-[48px] left-0 z-40 px-6 py-3 bg-[#F0EEDE]/80 backdrop-blur-md">
        <h1 className="text-2xl font-serif font-normal">Workshops</h1>
      </div>

      <div className="pt-24 px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xl text-gray-700 max-w-3xl">
            Join us for hands-on workshops in traditional bronze casting techniques.
            Learn from master craftspeople in our Suffolk studio.
          </p>
        </motion.div>

        {/* Upcoming Workshops */}
        {!loading && upcomingWorkshops.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-8">Upcoming Workshops</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingWorkshops.map((workshop, index) => (
                <motion.article
                  key={workshop.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <Link href={`/workshops/${workshop.slug}`} className="block group">
                    {workshop.image_url && (
                      <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
                        <img
                          src={workshop.image_url}
                          alt={workshop.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <p className="text-sm text-gray-600 mb-2">
                        {new Date(workshop.date).toLocaleDateString('en-GB', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                        {' • '}
                        {workshop.location}
                      </p>
                      <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-[#c4342e] transition-colors">
                        {workshop.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {workshop.description}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* Example Activities */}
        {!loading && examples.length > 0 && (
          <section className="mb-20">
            <div className="space-y-8">
              {examples.map((example, index) => (
                <motion.article
                  key={example.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <Link href={`/workshops/examples/${example.slug}`} className="block group md:flex">
                    {example.image_url && (
                      <div className="md:w-2/5 aspect-[16/9] md:aspect-auto bg-gray-200 overflow-hidden">
                        <img
                          src={example.image_url}
                          alt={example.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-8 md:w-3/5 flex flex-col justify-center">
                      <h3 className="text-3xl font-serif font-bold mb-4 group-hover:text-[#c4342e] transition-colors">
                        {example.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {example.description.split('\n\n')[0]}
                      </p>
                      <span className="text-[#c4342e] font-medium group-hover:underline">
                        Learn more →
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* Book a Workshop Section */}
        <section id="booking" className="mb-20 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-serif font-bold mb-6">Book a Workshop</h2>
          <p className="text-gray-700 mb-8">
            Interested in joining a workshop? Fill out the form below and we'll get back to you shortly.
          </p>

          <form onSubmit={handleBookingSubmit} className="max-w-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#c4342e]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#c4342e]"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={bookingForm.phone}
                onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#c4342e]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                value={bookingForm.message}
                onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-[#c4342e]"
                placeholder="Tell us which workshop you're interested in and any questions you have..."
                required
              />
            </div>

            {formStatus === 'success' && (
              <div className="p-4 bg-green-100 text-green-800 rounded">
                Thank you! Your booking request has been received. We'll contact you soon.
              </div>
            )}

            {formStatus === 'error' && (
              <div className="p-4 bg-red-100 text-red-800 rounded">
                Sorry, something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="px-8 py-3 bg-[#c4342e] text-white rounded hover:opacity-80 transition-opacity disabled:opacity-50"
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Submit Request'}
            </button>
          </form>
        </section>

      </div>

      <Footer />
    </div>
  );
}
