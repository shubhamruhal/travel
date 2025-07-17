'use client'

import Image from "next/image"
import { Pencil, Trash2 } from "lucide-react"

interface MemberCardProps {
  id: number
  name: string
  role: string
  imageUrl: string
  onEdit?: () => void
  onDelete?: () => void
}

export default function MemberCard({
  name,
  role,
  imageUrl,
  onEdit,
  onDelete,
}: MemberCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{role}</p>
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
