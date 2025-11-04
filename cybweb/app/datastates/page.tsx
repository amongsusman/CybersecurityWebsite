import Image from 'next/image';
import NavBar from '../components/NavBar'
export default function Home() {
  return (
    <main className="flex flex-col h-[100vh] bg-gradient-to-r from-blue-300 to-blue-600 font-serif">
      {/* Navbar */}
      <NavBar></NavBar>
      {/* Main content */}
      <div className="flex flex-1 items-center justify-center text-white text-4xl">
        <p>Learn all about Cybersecurity!</p>
      </div>
    </main>
  );
}
