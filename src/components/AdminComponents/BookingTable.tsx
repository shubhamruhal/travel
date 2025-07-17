const bookings = [
  { name: 'Sarah Johnson', email: 'sarah@example.com', package: 'Bali Beach Getaway', date: 'Jul 15, 2023', amount: '$1450', status: 'Pending' },
  { name: 'Michael Brown', email: 'michael@example.com', package: 'Paris City Tour', date: 'Jul 12, 2023', amount: '$1200', status: 'Approved' },
  { name: 'Emily Wilson', email: 'emily@example.com', package: 'Greek Islands Cruise', date: 'Jul 10, 2023', amount: '$2300', status: 'Rejected' },
  { name: 'David Lee', email: 'david@example.com', package: 'Tokyo Adventure', date: 'Jul 08, 2023', amount: '$1850', status: 'Pending' },
  { name: 'Jessica Taylor', email: 'jessica@example.com', package: 'Rome Historical Tour', date: 'Jul 05, 2023', amount: '$1350', status: 'Approved' },
];

export default function BookingTable() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="pb-3">Customer</th>
              <th className="pb-3">Package</th>
              <th className="pb-3">Date</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-3">
                  <p className="font-medium">{b.name}</p>
                  <p className="text-xs text-gray-500">{b.email}</p>
                </td>
                <td className="py-3">{b.package}</td>
                <td className="py-3">{b.date}</td>
                <td className="py-3">{b.amount}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    b.status === 'Approved' ? 'bg-green-100 text-green-700' :
                    b.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
