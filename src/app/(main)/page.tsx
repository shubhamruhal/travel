"use client";

import Head from "next/head";
import Image from "next/image";
import { ArrowRightCircle, PlayCircle } from "lucide-react";

import Button from "@/components/Button";
import PopularCard from "@/components/PopularCard";
import ClientStoryCard from "@/components/ClientStoryCard";
import AdventureCTA from "@/components/AdventureCTA";
import DestinationCard, { DestinationCardProps } from "@/components/DestinationCard";

const destinations: DestinationCardProps[] = [
	{ title: "Bali", country: "Indonesia", packages: 3, image: "/images/australia.jpg" },
	{ title: "Dubai City", country: "UAE", packages: 2, image: "/images/spain.jpg" },
	{ title: "Shizuoka", country: "Japan", packages: 7, image: "/images/london.jpg" },
];

const clientStories = [
	{
		username: "Alan_walker",
		videoUrl: "https://www.youtube.com/embed/gCRNEJxDJKM",
		logoUrl: "/images/client1.jpg",
	},
	{
		username: "Emma_luvs",
		videoUrl: "https://www.youtube.com/embed/XHOmBV4js_E",
		logoUrl: "/images/client2.jpg",
	},
	{
		username: "TravelWithSam",
		videoUrl: "https://www.youtube.com/embed/zpOULjyy-n8",
		logoUrl: "/images/client3.jpg",
	},
];

const packages = [
	{ imageSrc: "/images/spain.jpg", title: "Spain", category: "Europe", price: "$2,499" },
	{ imageSrc: "/images/australia.jpg", title: "Australia", category: "Europe", price: "$2,499" },
	{ imageSrc: "/images/egypt.jpg", title: "Egypt", category: "Europe", price: "$2,499" },
];

export default function MainPage() {
	return (
		<main className="flex flex-col" aria-label="Travel Landing Page">
			<Head>
				<title>Luxury Travel | Explore the World</title>
				<meta
					name="description"
					content="Curated journeys to the world's most extraordinary destinations. Transform your travel dreams into unforgettable memories."
				/>
			</Head>

			{/* Hero Section */}
			<section className="relative min-h-screen text-white flex items-center px-6 lg:px-12">
				<Image
					src="/images/hero.jpg"
					alt="Scenic travel background"
					fill
					priority
					sizes="100vw"
					className="object-cover z-0"
				/>
				<div className="absolute inset-0 bg-black/50 z-10" />
				<div className="relative z-20 max-w-3xl">
					<span className="bg-white/10 backdrop-blur-sm text-white border border-white/20 mb-8 inline-block px-4 py-2 text-sm font-medium tracking-wide rounded-full">
						EXPERIENCE LUXURY TRAVEL
					</span>
					<h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
						Explore the World <br /> Like Never Before
					</h1>
					<p className="text-white/90 text-lg lg:text-xl mb-8 leading-relaxed max-w-xl">
						Curated journeys to the world&apos;s most extraordinary destinations. Let us transform your travel dreams into
						unforgettable memories.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-lg flex items-center justify-center group">
							Start Planning{" "}
							<ArrowRightCircle className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
						</Button>
						<Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-lg font-medium text-lg flex items-center justify-center">
							Watch Video <PlayCircle className="ml-2 h-5 w-5" />
						</Button>
					</div>
				</div>
			</section>

			{/* Package Section */}
			<section className="bg-[#fffaf5] py-20 text-center">
				<div className="max-w-6xl mx-auto px-4">
					<h2 className="text-4xl font-bold mb-12">Popular Destinations</h2>
					<div className="flex flex-wrap justify-center gap-5">
						{packages.map((pkg, index) => (
							<PopularCard key={`pkg-${index}`} {...pkg} />
						))}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="bg-[#fff4e8] py-20 px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
				<div className="flex-1 flex justify-center">
					<Image
						src="/images/london.jpg"
						alt="London Landmarks"
						width={500}
						height={600}
						priority
						className="rounded-xl shadow-lg"
					/>
				</div>
				<div className="flex-1">
					<span className="bg-white text-orange-500 px-4 py-1 rounded-full font-medium text-sm tracking-wide inline-block mb-4">
						ABOUT US
					</span>
					<h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-snug">
						Your Journey, Our <br className="hidden md:block" /> Passion
					</h2>
					<p className="text-lg text-gray-700 mb-8">
						We believe that travel is more than just visiting new places; it&apos;s about creating memories,
						experiencing diverse cultures, and discovering the wonders of the world.
					</p>
					<div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
						<div className="w-full sm:w-1/2 rounded-xl overflow-hidden">
							<iframe
								className="w-full h-56 rounded-xl"
								src="https://www.youtube.com/embed/gCRNEJxDJKM"
								title="Promotional Travel Video"
								loading="lazy"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
						<ul className="text-base text-gray-800 space-y-3">
							<li className="flex items-center">
								<span className="text-orange-500 mr-2">✔</span> Budget-Friendly
							</li>
							<li className="flex items-center">
								<span className="text-orange-500 mr-2">✔</span> Luxurious Getaways
							</li>
							<li className="flex items-center">
								<span className="text-orange-500 mr-2">✔</span> Trusted Local Guides
							</li>
						</ul>
					</div>
					<Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium text-lg flex items-center group">
						Learn More{" "}
						<ArrowRightCircle className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
					</Button>
				</div>
			</section>

			{/* Trending Destinations Section */}
			<section className="py-20 px-6 md:px-20 bg-white text-center">
				<span className="text-orange-500 bg-orange-100 rounded-full px-4 py-1 text-xl font-semibold">
					TRENDING PACKAGES
				</span>
				<h2 className="text-3xl md:text-5xl font-bold mt-4">
					Destinations You Don’t <br /> Wanna Miss
				</h2>
				<div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
					{destinations.map((item, idx) => (
						<DestinationCard key={`destination-${idx}`} {...item} />
					))}
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="bg-[#fffaf5] py-20 px-6 text-center">
				<h2 className="text-4xl font-bold mb-10">Our Clients Stories</h2>
				<div className="flex flex-wrap justify-center gap-6">
					{clientStories.map((story, index) => (
						<ClientStoryCard
							key={`story-${index}`}
							username={story.username}
							videoUrl={story.videoUrl}
							logoUrl={story.logoUrl}
						/>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<AdventureCTA />
		</main>
	);
}
