'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WeatherData {
  temperature: number;
  condition: string;
}

export default function Footer() {
  const [visitOpen, setVisitOpen] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    // Fetch weather data for Woodbridge, Suffolk, UK
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      // Using wttr.in API for weather data
      const response = await fetch('https://wttr.in/Woodbridge,Suffolk,UK?format=j1');
      const data = await response.json();

      if (data?.current_condition?.[0]) {
        const current = data.current_condition[0];
        setWeather({
          temperature: Math.round(parseInt(current.temp_C)),
          condition: current.weatherDesc[0].value.toLowerCase(),
        });
      }
    } catch (error) {
      console.error('Failed to fetch weather:', error);
      // Fallback weather data
      setWeather({
        temperature: 15,
        condition: 'partly cloudy',
      });
    }
  };

  return (
    <>
      {/* Visit Overlay */}
      <AnimatePresence>
        {visitOpen && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#F0EEDE] noise-bg overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={() => setVisitOpen(false)}
              className="fixed top-6 right-6 text-gray-800 hover:opacity-60 transition-opacity text-2xl"
            >
              ×
            </button>

            {/* Visit Content */}
            <div className="min-h-screen flex items-center justify-center px-8 py-24">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h1 className="text-5xl md:text-7xl font-serif font-normal mb-12">Visit Us</h1>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                      <h2 className="text-2xl font-serif font-normal mb-6">Location</h2>
                      <address className="not-italic text-lg text-gray-700 leading-relaxed">
                        Butley Mills Studio<br />
                        Butley<br />
                        Woodbridge<br />
                        Suffolk<br />
                        IP12 3NR<br />
                        United Kingdom
                      </address>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-normal mb-6">Opening Hours</h2>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        By appointment only<br />
                        Monday – Friday<br />
                        9:00 AM – 5:00 PM
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Please contact us in advance to arrange your visit.
                      </p>
                    </div>
                  </div>

                  <div className="mt-16">
                    <h2 className="text-2xl font-serif font-normal mb-6">Getting Here</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      We're located in the beautiful Suffolk countryside, approximately 10 miles northeast of Ipswich and 2 miles from Woodbridge town centre.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Free parking is available on-site. The nearest train station is Woodbridge, with regular services to Ipswich and London Liverpool Street.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-300 bg-[#F0EEDE]/80 backdrop-blur-md h-[48px]">
        <div className="h-full flex items-center justify-between px-6">
          {/* Left Side - Visit and Credits */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setVisitOpen(true)}
              className="text-xs text-gray-800 hover:opacity-60 transition-opacity"
              style={{ letterSpacing: '0.08em', fontWeight: 500 }}
            >
              Visit
            </button>
            <button
              onClick={() => setShowCredits(!showCredits)}
              className="text-xs text-gray-800 hover:opacity-60 transition-opacity"
              style={{ letterSpacing: '0.08em', fontWeight: 500 }}
            >
              Credits
            </button>

            {/* Credits Text */}
            <AnimatePresence>
              {showCredits && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs text-gray-600"
                  style={{ letterSpacing: '0.08em', fontWeight: 400 }}
                >
                  Design and development by Possible Worlds
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Right Side - Weather */}
          <div className="text-xs text-gray-600" style={{ letterSpacing: '0.08em', fontWeight: 400 }}>
            {weather ? (
              <span>{weather.temperature} degrees, {weather.condition}</span>
            ) : (
              <span>Loading weather...</span>
            )}
          </div>
        </div>
      </footer>
    </>
  );
}
