'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/UI/avatar';
import { Suspense } from 'react';

const features = [
  { emoji: '🗺️', title: 'Route Planning', description: 'Map your journey' },
  { emoji: '📅', title: 'Scheduling', description: 'Organize activities' },
  { emoji: '👥', title: 'Group Travel', description: 'Coordinate with friends' },
  { emoji: '📸', title: 'Photo Sharing', description: 'Capture memories' },
  { emoji: '🧭', title: 'Discover Places', description: 'Find hidden gems' },
  { emoji: '⭐', title: 'Favorites', description: 'Save for later' },
  { emoji: '💬', title: 'Travel Forums', description: 'Connect with travelers' },
  { emoji: '🏨', title: 'Accommodation', description: 'Find perfect stays' },
  { emoji: '🍽️', title: 'Local Cuisine', description: 'Discover food spots' },
  { emoji: '🚗', title: 'Transportation', description: 'Book rides easily' },
  { emoji: '🎒', title: 'Packing Lists', description: 'Never forget essentials' },
  { emoji: '💱', title: 'Currency Converter', description: 'Real-time rates' },
  { emoji: '🗣️', title: 'Language Tools', description: 'Communicate easily' },
  { emoji: '🌦️', title: 'Weather Forecast', description: 'Plan around climate' },
  { emoji: '🎫', title: 'Ticket Booking', description: 'Secure attractions' },
]

const userProfiles = [
  { name: 'Alex', image: '/placeholder.svg' },
  { name: 'Sam', image: '/placeholder.svg' },
  { name: 'Jordan', image: '/placeholder.svg' },
  { name: 'Taylor', image: '/placeholder.svg' },
  { name: 'Casey', image: '/placeholder.svg' },
]

export default function FeaturesPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsDismissed(true)
    localStorage.setItem('triplstPopupDismissed', 'true')
  }

  if (isDismissed) return null

  return (
    <>
    <Suspense>

  
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.1)] border border-blue-100"
          >
            <div className="p-8 sm:p-10">
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
              </button>

              {/* Logo and Header */}
              <div className="text-center mb-10">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">T</span>
                  </div>
                </div>
                <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Join Triplst Community 🌍
                </h2>
                <p className="text-xl text-gray-600">Connect with 50,000+ fellow travelers worldwide!</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {feature.emoji}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  className="flex-1 h-14 text-lg border-2 border-blue-200 text-blue-600 rounded-2xl hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300"
                >
                  Log In
                </button>
                <button
                  className="flex-1 h-14 text-lg text-white rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-600 transition-all duration-300 animate-gradient-x"
                >
                  Sign Up Now for Free
                </button>
              </div>

              {/* User Profiles */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex -space-x-3">
                  {userProfiles.map((profile, index) => (
                    <Avatar key={index} className="hover:-translate-y-1 transition-transform duration-300">
                      <AvatarImage src={profile.image} alt={profile.name} />
                      <AvatarFallback>{profile.name[0]}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <p className="text-gray-600">
                  Join 54,321 adventurers already on Triplst!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </Suspense>
    </>
  )
}
