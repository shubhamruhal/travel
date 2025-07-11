'use client';

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 min-h-screen flex flex-col justify-center py-12 px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-orange-500 bg-orange-100 rounded-full px-4 py-1 text-lg md:text-xl font-semibold inline-block mb-4">
          Why Choose Us
        </span>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          What Makes Every Journey <br className="hidden md:block" /> Truly Unforgettable
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
          We don’t just plan trips—we create experiences that last a lifetime. Discover why thousands trust us to guide their adventures across the globe.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center w-full">
        {[
          {
            title: 'Our Mission',
            desc:
              'To offer enriching adventures that inspire, empower, and bring people together through exceptional service and personalized experiences.',
          },
          {
            title: 'Our Vision',
            desc:
              'To be the world’s most beloved travel company—trusted for our expertise, creativity, and commitment to creating unforgettable memories.',
          },
          {
            title: 'Our Values',
            desc:
              'We stand for integrity, cultural respect, sustainability, and putting our travelers at the heart of every journey.',
          },
          {
            title: 'What Drives Us',
            desc:
              'A deep love for exploration and a belief that travel is the most powerful tool for growth, connection, and transformation.',
          },
        ].map((item) => (
          <div className="space-y-4" key={item.title}>
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
