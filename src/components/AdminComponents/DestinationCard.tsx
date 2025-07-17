'use client'

import Image from "next/image"
import { Pencil, Trash2, Star } from "lucide-react"

interface DestinationCardProps {
  id: number
  country: string
  region: string
  price: number
  rating: number
  imageUrl: string
  onEdit?: () => void
  onDelete?: () => void
}

export default function DestinationCard({
  country,
  region,
  price,
  rating,
  imageUrl,
  onEdit,
  onDelete,
}: DestinationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={country} fill className="object-cover" priority />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex gap-1 text-orange-500">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
        <span className="text-xs inline-block bg-orange-100 text-orange-700 rounded-full px-2 py-1 font-semibold">{region}</span>
        <h3 className="text-lg font-semibold text-gray-900">{country}</h3>
        <p className="text-sm text-gray-500">From ${price.toLocaleString()}</p>

        <div className="flex gap-2 mt-4">
          <button
            onClick={onEdit}
            className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 gap-1"
          >
            <Pencil size={16} />
            <span>Edit</span>
          </button>
          <button
            onClick={onDelete}
            className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200 gap-1"
          >
            <Trash2 size={16} />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  )
}
