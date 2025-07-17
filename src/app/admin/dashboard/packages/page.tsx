'use client';

import { Plus } from 'lucide-react';
import RecentPackages from '@/components/AdminComponents/RecentPackages';

export default function AdminPackagesPage() {
    return (
        <div className="max-w-[1600px] mx-auto p-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-8">
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">Packages</h1>
                    </div>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm hover:shadow-md">
                        <Plus size={20} />
                        <span>Add Package</span>
                    </button>
                </div>
                <RecentPackages />
            </div>
        </div>
    );
}