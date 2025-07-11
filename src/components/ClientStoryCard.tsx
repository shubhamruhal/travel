import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import Image from "next/image";

export default function ClientStoryCard({ videoUrl, username, thumbnailUrl, logoUrl }) {
  return (
    <div className="relative w-80 h-[500px] bg-neutral-900 rounded-3xl overflow-hidden flex flex-col justify-between p-6 text-white shadow-xl transition-transform duration-300 hover:scale-105">
      
      {/* Top Section: Logo + Username */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 bg-white rounded-full overflow-hidden flex items-center justify-center">
          {logoUrl && (
            <Image src={logoUrl} alt="logo" width={36} height={36} />
          )}
        </div>
        <span className="text-lg font-semibold">{username}</span>
      </div>

      {/* Middle Section: Video */}
      <div className="w-full h-72 rounded-xl overflow-hidden shadow-md">
        <iframe
          className="w-full h-full rounded-xl"
          src={videoUrl}
          title="Client story"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Bottom Section: Caption */}
      <p className="text-base mt-4 text-gray-300 leading-relaxed">
        It’s amazing to shop with good quality and great service...
      </p>
    </div>
  );
}
