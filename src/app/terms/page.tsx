import Image from "next/image";
import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '../../components/Footer';  // 导入 Footer 组件

export const metadata: Metadata = {
  title: 'Terms of Service - Funny Shooter 2',
  description: 'Terms of Service for Funny Shooter 2 - Understand our game rules and user agreement.',
};

export default function TermsOfService() {
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

      {/* Terms of Service content */}
      <div className="bg-black bg-opacity-50 p-8 flex-grow">
        <h2 className="text-4xl font-bold text-center mb-12">Terms of Service</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-blue-600 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using Funny Shooter 2, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the game.
            </p>
          </section>

          <section className="bg-green-600 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">2. User Accounts</h2>
            <p className="mb-4">
              You are responsible for safeguarding the password you use to access Funny Shooter 2 and for any activities or actions under your password. You must immediately notify us of any unauthorized use of your account.
            </p>
          </section>

          <section className="bg-yellow-600 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">3. Game Rules and Fair Play</h2>
            <p className="mb-4">
              Users must adhere to fair play principles and not engage in cheating, hacking, or exploiting game vulnerabilities. Violation of these rules may result in account suspension or termination.
            </p>
          </section>

          <section className="bg-red-600 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="mb-4">
              Funny Shooter 2 and its original content, features, and functionality are owned by [Your Company Name] and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="bg-purple-600 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">5. User-Generated Content</h2>
            <p className="mb-4">
              By posting content in Funny Shooter 2, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the game.
            </p>
          </section>

          <section className="bg-indigo-600 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">6. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="bg-pink-600 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall [Your Company Name], nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="bg-teal-600 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">8. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
            </p>
          </section>
        </div>

        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our game after those revisions become effective, you agree to be bound by the revised terms.
          </p>
          <p className="mb-4">
            {`Last updated: [Insert Date]`}
          </p>
          <p className="mb-4">
            {`If you have any questions about these Terms, please contact us at [Insert Contact Information].`}
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}