import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adventure Aura',
  description: 'Explore the world with us',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
