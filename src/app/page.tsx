import Image from "next/image";
import type { Metadata } from 'next';
import GameArea from '../components/GameArea';
import Link from 'next/link';
import Footer from '../components/Footer';  // 导入 Footer 组件


export default function Home() {
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

      {/* Game area */}
      <GameArea />

      {/* Redesigned Game content */}
      <div className="bg-black bg-opacity-50 p-8">
        <h1 className="text-4xl font-bold text-center mb-12">Funny Shooter 2: The Ultimate Online Shooting Experience</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <section className="bg-blue-600 bg-opacity-50 p-6 rounded-lg transform hover:scale-105 transition duration-300 lg:col-span-2">
            <h2 className="text-3xl font-semibold mb-4">Welcome to the World of Funny Shooter 2</h2>
            <p className="mb-4">Are you ready for an action-packed adventure that combines hilarity with intense gameplay? Look no further than Funny Shooter 2, the latest sensation in online multiplayer gaming. This exciting sequel takes everything you loved about the original Funny Shooter and cranks it up to eleven, delivering an unparalleled experience that will keep you coming back for more.</p>
            <Image src="/1.webp" alt="Funny Shooter 2 Gameplay" width={600} height={400} className="rounded-lg" />
          </section>

          <section className="bg-green-600 bg-opacity-50 p-6 rounded-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold mb-4">What is Funny Shooter 2?</h2>
            <p className="mb-4">
              {`Funny Shooter 2 is a fast-paced, multiplayer online shooter that blends comedy with intense action. Set in a vibrant, cartoon-style world, Funny Shooter 2 offers players a unique gaming experience where laughter and strategy go hand in hand. Whether you're a seasoned gamer or new to the world of online shooters, Funny Shooter 2 has something for everyone.`}
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Key Features of Funny Shooter 2</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Diverse cast of hilarious characters</li>
              <li>Wacky weapons and power-ups</li>
              <li>Dynamic, ever-changing maps</li>
              <li>Multiple game modes for endless fun</li>
              <li>Regular updates and new content</li>
            </ul>
          </section>

          <section className="bg-yellow-600 bg-opacity-50 p-6 rounded-lg transform hover:scale-105 transition duration-300 lg:col-span-2">
            <h2 className="text-3xl font-semibold mb-4">The History Behind Funny Shooter 2</h2>
            <h3 className="text-2xl font-semibold mt-6 mb-3">From Humble Beginnings to Online Sensation</h3>
            <p className="mb-4">The journey of Funny Shooter 2 began with the surprise hit of its predecessor. The original Funny Shooter captured players' hearts with its blend of humor and action, quickly gaining a dedicated fanbase. Building on this success, the developers set out to create Funny Shooter 2, aiming to elevate the franchise to new heights.</p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Evolution of Funny Shooter 2</h3>
            <p className="mb-4">Funny Shooter 2 took everything that made the original great and amplified it. The team behind Funny Shooter 2 listened to player feedback, introducing new features, refining gameplay mechanics, and expanding the game's universe. The result is a sequel that not only lives up to its predecessor but surpasses it in every way.</p>
            <Image src="/2.jpg" alt="Funny Shooter 2 Evolution" width={600} height={400} className="rounded-lg mt-4" />
          </section>

          <section className="bg-red-600 bg-opacity-50 p-6 rounded-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold mb-4">How to Play Funny Shooter 2</h2>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Getting Started</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Create your account on the official Funny Shooter 2 website</li>
              <li>Download and install the game client for your preferred platform</li>
              <li>Choose your character from a wide array of zany options</li>
              <li>Enter a match and start playing!</li>
            </ol>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Basic Controls</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>WASD: Move your character</li>
              <li>Mouse: Aim and shoot</li>
              <li>Spacebar: Jump</li>
              <li>Shift: Sprint</li>
              <li>E: Interact with objects</li>
              <li>Q: Use special ability</li>
            </ul>
          </section>

          <section className="bg-purple-600 bg-opacity-50 p-6 rounded-lg transform hover:scale-105 transition duration-300 lg:col-span-2">
            <h2 className="text-3xl font-semibold mb-4">Game Modes in Funny Shooter 2</h2>
            <p className="mb-4">Funny Shooter 2 offers a variety of game modes to keep the experience fresh and exciting:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Team Deathmatch: Work together to outscore the opposing team</li>
              <li>Free-for-All: Every player for themselves in this chaotic mode</li>
              <li>Capture the Flag: Steal the enemy's flag while protecting your own</li>
              <li>King of the Hill: Control designated areas to earn points</li>
              <li>Zombie Survival: Team up against waves of hilarious undead</li>
            </ul>
            <Image src="/3.jpg" alt="Funny Shooter 2 Game Modes" width={600} height={400} className="rounded-lg mt-4" />
          </section>

          <section className="bg-pink-600 bg-opacity-50 p-6 rounded-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold mb-4">Mastering Funny Shooter 2: Tips and Strategies</h2>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Beginner Tips</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Learn the maps: Familiarize yourself with each level's layout</li>
              <li>Experiment with weapons: Try different guns to find your favorite</li>
              <li>Use cover: Don't be afraid to hide behind objects for protection</li>
              <li>Communicate: In team modes, use voice chat to coordinate with allies</li>
              <li>Practice aiming: Spend time in the training mode to improve accuracy</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Advanced Techniques</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Master movement: Learn to bunny hop and strafe for better mobility</li>
              <li>Weapon combos: Discover powerful weapon combinations for maximum effect</li>
              <li>Map control: Dominate key areas of the map to control the flow of the game</li>
              <li>Economy management: In certain modes, manage your in-game currency wisely</li>
              <li>Team synergy: Coordinate character abilities with teammates for devastating combos</li>
            </ul>
          </section>

          <section className="bg-indigo-600 bg-opacity-50 p-6 rounded-lg transform hover:scale-105 transition duration-300 lg:col-span-3">
            <h2 className="text-3xl font-semibold mb-4">The Funny Shooter 2 Community</h2>
            <p className="mb-4">Funny Shooter 2 isn't just a game; it's a thriving community of players from around the world. Join forums, Discord servers, and social media groups to connect with fellow fans, share strategies, and stay up-to-date on the latest Funny Shooter 2 news.</p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Competitive Scene</h3>
            <p className="mb-4">For those seeking a greater challenge, Funny Shooter 2 offers a competitive ranked mode. Climb the leaderboards, participate in tournaments, and prove you're the funniest shooter around!</p>
            <Image src="/4.png" alt="Funny Shooter 2 Community" width={800} height={400} className="rounded-lg mt-4" />
          </section>
        </div>

        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Join the Fun?</h2>
          <p className="mb-4">
            {`Don't miss out on the gaming phenomenon that's taking the world by storm. Funny Shooter 2 offers an unparalleled blend of humor, action, and strategy that appeals to gamers of all skill levels. Whether you're looking for casual fun or intense competition, Funny Shooter 2 has something for everyone.`}
          </p>
          <p className="mb-4">
            {`Download Funny Shooter 2 now and experience the laughter, excitement, and thrill of this incredible online shooter. Get ready to laugh, shoot, and conquer in the wacky world of Funny Shooter 2!`}
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}