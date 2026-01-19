// pages/index.tsx
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar />
      <main className="p-4">Hello Next.js with Dark Mode!</main>
    </div>
  );
}
