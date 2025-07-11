import Image from 'next/image';
import AdventureCTA from '@/components/AdventureCTA';
import TeamSection from '@/components/TeamSection';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function AboutPage() {
  return (
    <main className="space-y-0">

      {/* Hero Section */}
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
            Who We Are
          </span>
          <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
            Discover Your <br /> Perfect Adventure Partners
          </h1>
        </div>
      </section>
      <WhyChooseUs />
      <TeamSection />
      <AdventureCTA />
    </main>
  );
}
