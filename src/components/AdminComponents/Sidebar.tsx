'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Home, Package, Book, Users, FileText, Settings,
  MessageSquareText, MapPin, Mail, X, Menu,
  LogOut, User, ChevronLeft, ChevronRight, Plane
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  isCollapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
}

const navItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: Home },
  { name: 'Packages', href: '/admin/dashboard/packages', icon: Package },
  { name: 'Bookings', href: '/admin/dashboard/bookings', icon: Book },
  { name: 'Members', href: '/admin/dashboard/members', icon: Users },
  { name: 'Testimonials', href: '/admin/dashboard/testimonials', icon: MessageSquareText },
  { name: 'Popular Destinations', href: '/admin/dashboard/populardestinations', icon: MapPin },
  { name: 'Email Templates', href: '/admin/dashboard/emailtemplates', icon: Mail },
  { name: 'Documentation', href: '/admin/dashboard/documentation', icon: FileText },
  { name: 'Settings', href: '/admin/dashboard/settings', icon: Settings },
];

export default function Sidebar({ isOpen, onOpenChange, isCollapsed, onCollapsedChange }: SidebarProps) {
  const pathname = usePathname();
  const [isMobileView, setIsMobileView] = useState(false);
  
  // Update mobile view state
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileView(isMobile);
      if (isMobile) {
        onCollapsedChange(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [onCollapsedChange]);

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobileView) {
      onOpenChange(false);
    }
  }, [pathname, onOpenChange, isMobileView]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onOpenChange(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onOpenChange]);

  // Control body scroll
  useEffect(() => {
    if (isMobileView) {
      document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isMobileView]);

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40 md:hidden"
          onClick={() => onOpenChange(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 h-screen z-50
          ${isCollapsed && !isMobileView ? 'w-[80px]' : 'md:w-[220px] lg:w-[250px] xl:w-[280px]'}
          w-full md:w-auto
          bg-white shadow-[2px_0_20px_0_rgba(0,0,0,0.04)]
          transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Mobile Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-[26px] right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors md:hidden text-gray-500"
          aria-label="Close menu"
        >
          <X className="w-7 h-7" />
        </button>

        {/* Desktop Toggle button */}
        <button
          onClick={() => onCollapsedChange(!isCollapsed)}
          className="absolute -right-4 top-8 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 text-gray-500 hover:text-gray-700"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>

        {/* Logo Header */}
        <div className={`p-4 ${isCollapsed && !isMobileView ? 'text-center' : ''}`}>
          <div className={`px-4 py-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg ${isCollapsed && !isMobileView ? 'px-2' : ''}`}>
            <div className="flex items-center justify-center gap-2">
              <Plane 
                className={`text-blue-600 transform rotate-45 transition-all duration-300 ${
                  isCollapsed && !isMobileView ? 'w-6 h-6' : 'w-7 h-7'
                }`} 
              />
              {(!isCollapsed || isMobileView) && (
                <h2 className="font-bold text-2xl text-blue-600">
                  Adventure Aura
                </h2>
              )}
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="px-3 py-2 mt-2">
          <nav className="space-y-0.5">
            {navItems.map(({ name, href, icon: Icon }) => {
              const isActive = pathname === href || (href !== '/admin/dashboard' && pathname.startsWith(href));

              return (
                <Link
                  key={name}
                  href={href}
                  onClick={() => isMobileView && onOpenChange(false)}
                  className={`
                    flex items-center gap-2.5 px-3 py-2 rounded-lg
                    text-sm transition-all duration-200
                    ${isActive 
                      ? 'bg-blue-100 text-blue-600 font-medium shadow-sm' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                  title={isCollapsed && !isMobileView ? name : undefined}
                >
                  <Icon className={`flex-shrink-0 ${isCollapsed && !isMobileView ? 'w-5 h-5' : 'w-4 h-4'}`} />
                  {(!isCollapsed || isMobileView) && <span className="truncate">{name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg px-3 py-2.5">
            {isCollapsed && !isMobileView ? (
              <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-center p-2 hover:bg-white/90 rounded-lg transition-colors"
                aria-label="Logout"
                title="Logout"
              >
                <LogOut className="w-5 h-5 text-gray-600" />
              </button>
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm text-gray-900 truncate">John Doe</h3>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
                <button 
                  onClick={handleLogout}
                  className="p-1.5 hover:bg-white/90 rounded-lg transition-colors"
                  aria-label="Logout"
                >
                  <LogOut className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
