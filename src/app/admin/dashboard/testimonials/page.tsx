'use client'

import { useState } from "react"
import { Plus } from "lucide-react"
import ClientStoryCard from "@/components/AdminComponents/ClientStoryCard"

const dummyStories = [
  {
    name: "Alan_walker",
    imageUrl: "/images/team1.jpg",
    videoUrl: "https://www.youtube.com/embed/TN3FI4E-Rk8",
    feedback: "It’s amazing to shop with good quality and great service...",
  },
  {
    name: "Emma_luvs",
    imageUrl: "/images/team2.jpg",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    feedback: "I felt supported throughout my journey, truly memorable!",
  },
  {
    name: "TravelWithSam",
    imageUrl: "/images/team3.jpg",
    videoUrl: "https://www.youtube.com/embed/ixZKUy9-L9A",
    feedback: "Affordable packages and helpful staff. Loved it!",
  },
]

export default function ClientStoriesPage() {
  const [stories] = useState(dummyStories)

  const handleEdit = (name: string) => {
    console.log("Edit story:", name)
  }

  const handleDelete = (name: string) => {
    console.log("Delete story:", name)
  }

  return (
    <div className="max-w-[1600px] mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-8">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h1 className="text-2xl font-semibold text-gray-900">Client Stories</h1>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm hover:shadow-md">
            <Plus size={20} />
            <span>Add Story</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <ClientStoryCard
              key={index}
              {...story}
              onEdit={() => handleEdit(story.name)}
              onDelete={() => handleDelete(story.name)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
