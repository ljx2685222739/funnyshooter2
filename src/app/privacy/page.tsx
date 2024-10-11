import Image from "next/image";
import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '../../components/Footer';  // 导入 Footer 组件

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

      {/* Privacy Policy content */}
      <div className="bg-black bg-opacity-50 p-8 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-blue-600 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              At Funny Shooter 2, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our game and related services.
            </p>
          </section>

          <section className="bg-green-600 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal information (e.g., name, email address)</li>
              <li>Game data (e.g., progress, achievements, in-game purchases)</li>
              <li>Device information (e.g., IP address, device type)</li>
              <li>Usage data (e.g., play time, feature usage)</li>
            </ul>
          </section>

          <section className="bg-yellow-600 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and improve our game services</li>
              <li>To personalize your gaming experience</li>
              <li>To communicate with you about updates and promotions</li>
              <li>To analyze game performance and user behavior</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="bg-red-600 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">Data Security</h2>
            <p className="mb-4">
              We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="bg-purple-600 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">Third-Party Services</h2>
            <p className="mb-4">
              We may use third-party services to support our game operations. These services may have access to your information solely to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section className="bg-indigo-600 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-4">
              You have the right to access, correct, or delete your personal information. You may also object to or restrict certain data processing activities. To exercise these rights, please contact us using the information provided at the end of this policy.
            </p>
          </section>
        </div>

        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Changes to This Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the {`"Last updated"`} date.
          </p>
          <p className="mb-4">
            {`Last updated`}
          </p>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at [Insert Contact Information].
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}