import Image from 'next/image';
import PackageCard from '@/components/PackageCard'; 

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

export default function Package() {
  const travelPackages: TravelPackage[] = [
    {
      id: 1,
      title: "Majestic Maldives",
      region: "Asia",
      duration: "5 Days/ 6 Nights",
      image: "/images/australia.jpg",
      price: "₹1,05,450",
      rating: 5,
      services: ["Hotel", "Car", "Cruises", "Flights"],
      note: "This price is lower than the average price in April",
    },
    {
      id: 2,
      title: "Bali Bliss Retreat",
      region: "Asia",
      duration: "4 Days/ 5 Nights",
      image: "/images/egypt.jpg",
      price: "₹89,990",
      rating: 4,
      services: ["Hotel", "Flights", "Cruises"],
      note: "Includes cultural experiences and beach stays",
    },
    {
      id: 3,
      title: "European Explorer",
      region: "Europe",
      duration: "10 Days/ 9 Nights",
      image: "/images/london.jpg",
      price: "₹2,40,000",
      rating: 5,
      services: ["Hotel", "Car", "Flights"],
      note: "Multi-city tour across France, Italy, and Switzerland",
    },
  ];

  return (
    <>
      <section className="relative h-screen w-full">
        <Image
          src="/images/hero.jpg"
          alt="Package Image"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />

        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-4 z-10">
          <span className="bg-orange-200 text-black px-4 py-1 rounded-full text-xl font-medium mb-4">
            Our Packages
          </span>
          <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
            Discover Your <br /> Perfect Adventure
          </h1>
        </div>
      </section>

      <section className="py-16 px-4 lg:px-20 flex flex-col items-center gap-10 bg-gray-50">
        {travelPackages.map((pkg) => (
          <PackageCard key={pkg.id} data={pkg} />
        ))}
      </section>
    </>
  );
}