const destinations = [
  { location: 'Bali, Indonesia', bookings: 458, change: '+12%', color: 'blue' },
  { location: 'Santorini, Greece', bookings: 385, change: '+8%', color: 'green' },
  { location: 'Paris, France', bookings: 324, change: '+5%', color: 'purple' },
  { location: 'Rome, Italy', bookings: 287, change: '+3%', color: 'yellow' },
];

export default function PopularDestinations() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Popular Destinations</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">View All</a>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <ul className="space-y-3">
          {destinations.map((d) => (
          <li key={d.location} className="flex justify-between items-center">
            <span>{d.location}</span>
            <span className="text-sm text-gray-500">{d.bookings} bookings</span>
            <span className="text-sm text-green-600">{d.change}</span>
          </li>
        ))}
      </ul>
        </div>
    </div>
  );
}
