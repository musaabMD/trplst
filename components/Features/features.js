'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, Camera, Compass, Star } from 'lucide-react'
import { Suspense } from 'react';

const features = [
  {
    icon: MapPin,
    title: 'Plan Your Routes',
    description: 'Map out your perfect journey with interactive route planning'
  },
  {
    icon: Calendar,
    title: 'Schedule Activities',
    description: 'Organize your daily itinerary with our easy scheduling system'
  },
  {
    icon: Users,
    title: 'Group Travel',
    description: 'Coordinate with friends and family for group adventures'
  },
  {
    icon: Camera,
    title: 'Photo Memories',
    description: 'Capture and share your travel moments with others'
  },
  {
    icon: Compass,
    title: 'Discover Places',
    description: 'Find hidden gems and popular destinations nearby'
  },
  {
    icon: Star,
    title: 'Save Favorites',
    description: 'Bookmark your favorite locations for future trips'
  }
]

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
    <Suspense>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
          </div>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
      </Suspense>
      </>
  )
}

