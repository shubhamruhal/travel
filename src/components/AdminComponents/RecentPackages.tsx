'use client';

import Image from 'next/image';
import { Calendar, MapPin, Users, Edit2, Trash2 } from 'lucide-react';

interface RecentPackagesProps {}

interface Package {
  title: string;
  location: string;
  status: string;
  price: string;
  days: number;
  booked: number;
  image: string;
  category: string;
}

const packages: Package[] = [
  {
    title: 'Bali Beach Getaway',
    location: 'Bali, Indonesia',
    status: 'Active',
    price: '$1,450',
    days: 7,
    booked: 24,
    image: '/images/australia.jpg',
    category: 'beach'
  },
  {
    title: 'Santorini Escape',
    location: 'Santorini, Greece',
    status: 'Active',
    price: '$1,850',
    days: 8,
    booked: 18,
    image: '/images/egypt.jpg',
    category: 'cultural'
  },
  {
    title: 'Paris City Tour',
    location: 'Paris, France',
    status: 'Draft',
    price: '$1,200',
    days: 5,
    booked: 12,
    image: '/images/london.jpg',
    category: 'city'
  },
  {
    title: 'Bali Beach Getaway',
    location: 'Bali, Indonesia',
    status: 'Active',
    price: '$1,450',
    days: 7,
    booked: 24,
    image: '/images/australia.jpg',
    category: 'beach'
  },
];

export default function RecentPackages({}: RecentPackagesProps) {
  return (
    <div className="space-y-6">
      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, idx) => (
          <div 
            key={idx} 
            className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Image Container */}
            <div className="relative w-full h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10 group-hover:from-black/70 transition-all duration-300" />
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover"
              />
              {/* Status Badge */}
              <span className={`absolute top-4 right-4 z-20 text-xs px-3 py-1.5 rounded-full font-medium ${
                pkg.status === 'Active' 
                  ? 'bg-green-500/90 text-white' 
                  : 'bg-yellow-500/90 text-white'
              }`}>
                {pkg.status}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Package Title */}
              <h3 className="font-bold text-xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {pkg.title}
              </h3>
              
              {/* Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{pkg.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{pkg.days} Days</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <span className="text-sm">{pkg.price}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{pkg.booked} people booked</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-3 border-t border-gray-100">
                <button className="flex-1 text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
                  <div className="flex items-center justify-center gap-2">
                    <Edit2 className="w-4 h-4" />
                    <span>Edit</span>
                  </div>
                </button>
                <button className="flex-1 text-sm font-medium text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition-colors shadow-sm hover:shadow-md">
                  <div className="flex items-center justify-center gap-2">
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
