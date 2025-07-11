'use client';
import Image from 'next/image';

const teamMembers = [
  { name: 'Alice Smith', title: 'Founder & CEO', img: '/images/team1.jpg' },
  { name: 'John Doe', title: 'Travel Specialist', img: '/images/team2.jpg' },
  { name: 'Maria Liu', title: 'Operations Head', img: '/images/team3.jpg' },
  { name: 'Carlos Ruiz', title: 'Customer Success', img: '/images/team4.jpg' },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-orange-500 bg-orange-100 rounded-full px-4 py-1 text-lg font-semibold inline-block mb-4">
            OUR PEOPLE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            The Faces Behind <br className="hidden md:block" /> Your Dream Adventures
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={400}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end text-white">
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-200">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
