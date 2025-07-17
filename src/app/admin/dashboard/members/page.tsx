'use client'

import MemberCard from "@/components/AdminComponents/MemberCard"
import { Plus } from 'lucide-react';
import { useState } from "react"

const dummyTeam = [
  {
    id: 1,
    name: "Alice Smith",
    role: "Founder & CEO",
    imageUrl: "/images/team1.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Travel Specialist",
    imageUrl: "/images/team2.jpg",
  },
  {
    id: 3,
    name: "Maria Liu",
    role: "Operations Head",
    imageUrl: "/images/team3.jpg",
  },
  {
    id: 4,
    name: "Carlos Ruiz",
    role: "Customer Success",
    imageUrl: "/images/team4.jpg",
  },
]

export default function TeamAdminPage() {
  const [team] = useState(dummyTeam)

  const handleEdit = (id: number) => {
    console.log("Edit member", id)
  }

  const handleDelete = (id: number) => {
    console.log("Delete member", id)
  }

  return (
    <div className="max-w-[1600px] mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-8">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Team Members</h1>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm hover:shadow-md">
            <Plus size={20} />
            <span>Add Member</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map(member => (
            <MemberCard
              key={member.id}
              {...member}
              onEdit={() => handleEdit(member.id)}
              onDelete={() => handleDelete(member.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
