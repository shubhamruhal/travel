import Image from "next/image";

export type DestinationCardProps = {
  title: string;
  country: string;
  packages: number;
  image: string;
};

export default function DestinationCard({
  title,
  country,
  packages,
  image,
}: DestinationCardProps) {
  return (
    <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-md">
      <div className="relative w-full h-[420px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-black/40 rounded-3xl" />

        {/* Bottom overlay content - force equal height */}
        <div className="absolute inset-x-6 bottom-4 text-white z-10 flex items-end justify-between h-20">
          {/* Left side: title + country */}
          <div className="flex flex-col justify-left align-left">
            <h3 className="text-xl font-bold leading-tight">{title}</h3>
            <p className="text-sm text-gray-200">{country}</p>
          </div>

          {/* Right side: package count */}
          <div className="text-sm text-gray-200">{packages} Packages</div>
        </div>
      </div>
    </div>
  );
}
