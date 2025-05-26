import type { Metadata } from 'next';
import { Geist, Geist_Mono, Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider.';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mario Santos card',
  description: 'Portfolio de Mario Santos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning helps avoid React warnings
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} font-sans`}>
        {/* Wrap the entire content that should react to theme changes */}
        <ThemeProvider>
          {/* e.g., <Header /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
