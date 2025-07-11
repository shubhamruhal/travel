'use client';
import ContactForm from '@/components/ContactForm';

import Image from 'next/image';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="relative py-20 px-4 md:px-10 lg:px-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-600">
            We’re here to help and answer any question you might have
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoCard
              icon={<FaPhone className="text-black-400 text-2xl" />}
              title="Call Us"
              desc="Available 24/7"
              lines={['+1 (555) 123-4567', '+1 (555) 987-6543']}
            />
            <InfoCard
              icon={<FaEnvelope className="text-black-400 text-2xl" />}
              title="Email Us"
              desc="Drop us a message"
              lines={['info@traveladventure.com', 'support@traveladventure.com']}
            />
            <InfoCard
              icon={<FaMapMarkerAlt className="text-black-400 text-2xl" />}
              title="Visit Us"
              desc="Come say hello"
              lines={['123 Adventure Street', 'Travel City, TC 12345']}
            />
            <InfoCard
              icon={<FaClock className="text-black-400 text-2xl" />}
              title="Office Hours"
              desc="We're here for you"
              lines={['Mon - Fri: 9AM - 6PM', 'Sat - Sun: 10AM - 4PM']}
            />
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Map + Why Choose Us */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-3 mb-2">
              <FaMapMarkerAlt className="text-black-500 text-xl" />
              <h2 className="text-2xl font-bold text-gray-800">
                Find Us on the Map
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Located in the heart of the city, easy to reach by any transport
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.679417382105!2d-74.006015684594!3d40.71277577933032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31616a053f%3A0xc80b8f06e177fe62!2sCity%20Hall%20Park!5e0!3m2!1sen!2sin!4v1682452348327!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-md"
            />
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-lg shadow p-4 text-sm">
            <h3 className="text-lg font-semibold text-black-600 mb-3">
              Why Choose Travel Adventure?
            </h3>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>Expert consultants with 10+ years of experience</li>
              <li>24/7 travel assistance</li>
              <li>Best price guaranteed</li>
              <li>Customized plans for every budget</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Info Card
type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  lines: string[];
};

function InfoCard({ icon, title, desc, lines }: InfoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-center flex flex-col items-center space-y-2">
      <div className="bg-black-500 p-3 rounded-full">{icon}</div>
      <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-500 text-sm">{desc}</p>
      {lines.map((line, i) => (
        <p key={i} className="text-Black-600 font-semibold text-sm">
          {line}
        </p>
      ))}
    </div>
  );
}
