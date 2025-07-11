import Image from "next/image";
import { FaHotel, FaCar, FaShip, FaPlane, FaStar, FaPlusCircle } from "react-icons/fa";
import type { ReactElement } from "react";

type TravelPackage = {
  id: number;
  title: string;
  region: string;
  duration: string;
  image: string;
  price: string;
  rating: number;
  services: string[];
  note: string;
};

type PackageCardProps = {
  data: TravelPackage;
};

export default function PackageCard({ data }: PackageCardProps) {
  const { title, region, duration, image, price, rating, services, note } = data;

  const serviceIcons: Record<string, ReactElement> = {
    Hotel: <FaHotel className="text-xl" />,
    Car: <FaCar className="text-xl" />,
    Cruises: <FaShip className="text-xl" />,
    Flights: <FaPlane className="text-xl" />,
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row max-w-5xl w-full p-4 md:p-6">
      <div className="relative w-full md:w-1/2 h-64 md:h-auto rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between p-4 md:p-6">
        <div>
          <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold mb-2">
            {region.toUpperCase()}
          </span>

          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
              <p className="text-gray-600 flex items-center gap-2 mt-1">
                <span>⏱</span> {duration}
              </p>
            </div>
            <div className="flex gap-1 text-orange-500">
              {Array.from({ length: rating }).map((_, idx) => (
                <FaStar key={idx} />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 text-orange-600 text-sm mt-4 flex-wrap">
            {services.map((service) => (
              <div key={service} className="flex flex-col items-center">
                {serviceIcons[service] || null}
                <span>{service}</span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-xl font-bold text-black">
              {price} <span className="text-base font-normal">/Person</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">{note}</p>
          </div>
        </div>

        <div className="mt-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2">
            Start Trip <FaPlusCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
