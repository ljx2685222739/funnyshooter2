import Image from "next/image";
import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Blogs - Funny Shooter 2',
  description: 'Read the latest blogs and updates about Funny Shooter 2.',
  alternates: {
    canonical: 'https://funnyshooter2.online/blogs',
  },
};

export default function Blogs() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 text-white">
      {/* Navigation bar */}
      <nav className="flex justify-between items-center p-4 bg-black bg-opacity-50">
        <div className="flex items-center">
          <Image src="/logo.jpg" alt="Logo" width={50} height={50} className="mr-2" />
          <h1 className="text-2xl font-bold">Funny Shooter 2</h1>
        </div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-yellow-300">Home</Link>
          <Link href="/blogs" className="hover:text-yellow-300">Blogs</Link>
          <Link href="/terms" className="hover:text-yellow-300">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-yellow-300">Privacy Policy</Link>
        </div>
      </nav>

      {/* Blogs content */}
      <div className="bg-black bg-opacity-50 p-8 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-12">Funny Shooter 2 Blogs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Add blog post previews here */}
          <article className="bg-blue-600 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Latest Update: New Weapons!</h2>
            <p className="mb-4">
              Check out the newest additions to our arsenal in Funny Shooter 2. Get ready for some hilarious new ways to take down your opponents!
            </p>
            <Link href="/blog/new-weapons" className="text-yellow-300 hover:underline">Read more</Link>
          </article>

          <article className="bg-green-600 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Community Spotlight: Best Funny Moments</h2>
            <p className="mb-4">
              {`We've compiled the funniest moments from our community. Prepare to laugh out loud at these incredible gameplay clips!`}
            </p>
            <Link href="/blog/funny-moments" className="text-yellow-300 hover:underline">Read more</Link>
          </article>
        </div>
      </div>

      <Footer />
    </main>
  );
}