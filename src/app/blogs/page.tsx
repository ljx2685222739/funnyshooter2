import Image from "next/image";
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Funny Shooter 2',
  description: 'Privacy Policy for Funny Shooter 2 - Learn how we protect your personal information and data.',
};

export default function PrivacyPolicy() {
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
</main>)
}