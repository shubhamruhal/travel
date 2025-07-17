'use client';

import Sidebar from '@/components/AdminComponents/Sidebar';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { ReactNode } from 'react';

interface LayoutDashboardProps {
  children: ReactNode;
}

export default function LayoutDashboard({ children }: LayoutDashboardProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        isOpen={mobileOpen}
        onOpenChange={setMobileOpen}
        isCollapsed={sidebarCollapsed}
        onCollapsedChange={setSidebarCollapsed}
      />
      {/* Sidebar spacer */}
      <div
        className={`hidden md:block ${
          sidebarCollapsed
            ? 'w-[80px]'
            : 'w-[220px] lg:w-[250px] xl:w-[280px]'
        } flex-shrink-0 transition-all duration-300`}
      />

      {/* Main content */}
      <div className="flex-1">
        {/* Mobile/Tablet Header */}
        <div className="sticky top-0 z-30 md:hidden">
          <div className="relative flex items-center justify-center h-20 bg-white shadow-sm">
            <button
              onClick={() => setMobileOpen(true)}
              className="absolute left-4 p-2.5 hover:bg-gray-50 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-bold text-blue-600">Adventure Aura</h1>
          </div>
        </div>

        {/* Page Content */}
        <div className="px-4 py-4 md:px-6 lg:px-8">{children}</div>
      </div>
    </div>
  );
}
