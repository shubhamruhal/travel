'use client'

import { useState } from "react"
import { Plus } from "lucide-react"
import DestinationCard from "@/components/AdminComponents/DestinationCard"

const dummyDestinations = [
  {
    id: 1,
    country: "Spain",
    region: "Europe",
    price: 2499,
    rating: 5,
    imageUrl: "/images/spain.jpg",
  },
  {
    id: 2,
    country: "Australia",
    region: "Oceania",
    price: 2499,
    rating: 5,
    imageUrl: "/images/australia.jpg",
  },
  {
    id: 3,
    country: "Egypt",
    region: "Africa",
    price: 2499,
    rating: 5,
    imageUrl: "/images/egypt.jpg",
  },
]

export default function PopularDestinationsAdminPage() {
  const [destinations] = useState(dummyDestinations)

  const handleEdit = (id: number) => {
    console.log("Edit destination", id)
  }

  const handleDelete = (id: number) => {
    console.log("Delete destination", id)
  }

  return (
    <div className="max-w-[1600px] mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-8">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h1 className="text-2xl font-semibold text-gray-900">Popular Destinations</h1>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm hover:shadow-md">
            <Plus size={20} />
            <span>Add Destination</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map(dest => (
            <DestinationCard
              key={dest.id}
              {...dest}
              onEdit={() => handleEdit(dest.id)}
              onDelete={() => handleDelete(dest.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
