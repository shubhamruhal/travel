import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function RevenueChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2023',
        backgroundColor: '#3B82F6',
        data: [18, 20, 22, 26, 28, 25, 24, 27, 29, 31, 33, 35],
      },
      {
        label: '2022',
        backgroundColor: '#93C5FD',
        data: [12, 15, 16, 17, 20, 18, 19, 21, 22, 24, 26, 27],
      },
    ],
  };

  return (
       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Revenue Overview</h2>
            <div className="space-x-2">
              <button className="px-3 py-1 rounded bg-blue-500 text-white">Monthly</button>
              <button className="px-3 py-1 rounded bg-gray-200">Yearly</button>
            </div>
          </div>
          <Bar data={data} />
        </div>
  );
}
