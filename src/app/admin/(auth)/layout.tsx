import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Login - Adventure Aura',
  description: 'Admin login page',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning={true} className="bg-gray-50">
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white w-full max-w-6xl rounded-2xl shadow-lg overflow-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
