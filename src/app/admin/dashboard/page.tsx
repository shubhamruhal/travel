'use client';

import OverviewCards from '@/components/AdminComponents/OverviewCards';
import RevenueChart from '@/components/AdminComponents/RevenueChart';
import PopularDestinations from '@/components/AdminComponents/PopularDestinations';
import BookingTable from '@/components/AdminComponents/BookingTable';

export default function DashboardPage() {
  return (
    <main className="space-y-6 pb-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-6 md:p-8 mb-6 shadow-lg">
        <div className="max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, Admin! 👋</h1>
          <p className="text-blue-100">Here&#39;s what&#39;s happening with your travel business today.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-8">
        <OverviewCards />
      </div>

      {/* Charts & Analytics Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RevenueChart />
        <PopularDestinations />
      </div>

      {/* Recent Bookings Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Bookings</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
        </div>
        <BookingTable />
      </div>
    </main>
  );
}
