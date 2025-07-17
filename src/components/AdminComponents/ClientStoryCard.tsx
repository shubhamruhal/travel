'use client'

import Image from "next/image"
import { Pencil, Trash2 } from "lucide-react"

interface ClientStoryCardProps {
  name: string
  imageUrl: string
  videoUrl: string
  feedback: string
  onEdit?: () => void
  onDelete?: () => void
}

export default function ClientStoryCard({
  name,
  imageUrl,
  videoUrl,
  feedback,
  onEdit,
  onDelete,
}: ClientStoryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
        <div className="relative w-9 h-9 rounded-full overflow-hidden">
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        </div>
        <span className="font-semibold text-sm text-gray-900">{name}</span>
      </div>

      <div className="aspect-[9/16] overflow-hidden rounded-lg m-4">
        <iframe
          src={videoUrl}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="px-4 py-3 text-sm text-gray-600 text-center border-t border-gray-100">
        {feedback}
      </div>

      <div className="flex gap-2 p-4 pt-0">
        <button
          onClick={onEdit}
          className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 gap-1"
        >
          <Pencil size={16} />
          Edit
        </button>
        <button
          onClick={onDelete}
          className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200 gap-1"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  )
}
