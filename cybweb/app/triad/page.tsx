import Image from 'next/image';
import NavBar from '../components/NavBar'
export default function Home() {
  return (
    <main className="flex flex-col h-[100vh] bg-gradient-to-r from-blue-300 to-blue-600 font-serif">
      {/* Navbar */}
      <NavBar></NavBar>
      {/* Main content */}
      <div className="h-1/14"></div>
      <div className="justify-center h-1/14 flex text-white text-4xl">
        <p>What is the CIA Triad?</p>
      </div>
    </main>
  );
}
