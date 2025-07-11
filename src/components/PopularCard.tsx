// components/PackageCard.tsx

import Image from "next/image";
import { Star } from "lucide-react"; 

interface PackageCardProps {
  imageSrc: string;
  title: string;
  category: string;
  price: string;
}

export default function PackageCard({
  imageSrc,
  title,
  category,
  price,
}: PackageCardProps) {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-[2.5rem] shadow-xl bg-white transition-transform duration-300 hover:scale-95">
      {/* Top Image */}
      <div className="relative h-86 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-[2.5rem]"
        />
      </div>

      {/* Bottom Content */}
      <div className="bg-white px-6 py-6 text-center">
        <div className="flex justify-center mb-2 text-orange-500">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-orange-500 stroke-orange-500"
              />
            ))}
        </div>

        <div className="bg-[#ffece3] text-orange-600 text-xs font-semibold px-3 py-1 inline-block rounded-full uppercase tracking-wide mb-3">
          {category}
        </div>

        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500 text-sm">
          From {price}
        </p>
      </div>
    </div>
  );
}
