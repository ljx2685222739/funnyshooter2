import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Play Funny Shooter 2 Online – Hilarious Action Game with Epic Challenges',
  description: 'Explore the world of "Funny Shooter 2," an exciting and humorous shooting game packed with quirky enemies, epic weapons, and intense action. Master advanced tips, upgrade your arsenal, and survive endless waves of hilarious foes. Perfect for casual and experienced players alike! Play Funny Shooter 2 now and enjoy hours of fun and laughter.',
  icons: [
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    { rel: 'manifest', url: '/site.webmanifest' },
  ],
  metadataBase: new URL('https://funnyshooter2.online'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
