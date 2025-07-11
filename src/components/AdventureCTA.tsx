'use client';

import Image from 'next/image';

export default function AdventureCTA() {
  return (
    <section className="h-screen w-full relative overflow-hidden flex flex-col">
      {/* Background Image */}
      <div className="h-5/8 bg-white z-10 flex items-center">
        <Image
          src="/images/hero.jpg"
          alt="Travel Girl"
          fill
          className="w-full h-full object-cover absolute inset-0 opacity-50"
          priority
        />
      </div>

      {/* CTA Content */}
      <div className="h-3/8 bg-orange-500 text-white rounded-t-3xl flex items-center justify-center px-6 lg:px-12 relative z-20">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Let us help you create the perfect journey. Our travel experts are ready to
            craft your dream vacation.
          </p>
          <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-orange-100 transition-all inline-flex items-center">
            Start Planning <span className="ml-2">➔</span>
          </button>
        </div>
      </div>
    </section>
  );
}
