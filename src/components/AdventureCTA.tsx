'use client';

import Image from 'next/image';

export default function AdventureCTA() {
  return (
    <section className="relative w-full flex flex-col min-h-[80vh] md:min-h-[90vh]">
      {/* Background Image Container */}
      <div className="relative flex-1">
        <Image
          src="/images/hero.jpg"
          alt="Travel Girl"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      {/* CTA Content */}
      <div className="bg-orange-500 text-white px-6 py-12 md:px-12 rounded-t-3xl -mt-12 md:-mt-24 relative z-20 text-center shadow-lg">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Ready to Start Your Adventure?
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Let us help you create the perfect journey. Our travel experts are ready to
          craft your dream vacation.
        </p>
        <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-orange-100 transition-all inline-flex items-center">
          Start Planning <span className="ml-2">➔</span>
        </button>
      </div>
    </section>
  );
}
