import { Briefcase, CalendarCheck, Users, DollarSign } from 'lucide-react';

const stats = [
  { 
    label: 'Total Packages', 
    value: 24, 
    icon: Briefcase, 
    change: '+12%',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    changeType: 'increase'
  },
  { 
    label: 'Total Bookings', 
    value: 156, 
    icon: CalendarCheck, 
    change: '+8%',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    changeType: 'increase'
  },
  { 
    label: 'Total Users', 
    value: '1,254', 
    icon: Users, 
    change: '+5%',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    changeType: 'increase'
  },
  { 
    label: 'Total Revenue', 
    value: '$24,568', 
    icon: DollarSign, 
    change: '+15%',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
    changeType: 'increase'
  },
];

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
      {stats.map(({ label, value, icon: Icon, change, bgColor, iconColor, changeType }) => (
        <div 
          key={label} 
          className="bg-white rounded-2xl shadow-md overflow-hidden p-4 sm:p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center justify-between">
              <div className={`p-2.5 sm:p-3 ${bgColor} rounded-2xl transition-transform duration-300 hover:scale-110`}>
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} />
              </div>
              <div className={`text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-full ${
                changeType === 'increase' 
                  ? 'text-green-600 bg-green-100' 
                  : 'text-red-600 bg-red-100'
              }`}>
                {change}
              </div>
            </div>
            
            <div>
              <h3 className="text-gray-600 text-xs sm:text-sm font-medium">{label}</h3>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mt-1">{value}</p>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Compared to last month</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
