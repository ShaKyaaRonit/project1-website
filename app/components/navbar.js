"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop:blur-md">
      <div className="px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">DevLoop</h1>

        <div className="space-x-8 text-gray-700 font-medium">
          <Link href="#home" className="hover:text-blue-600 transition">Home</Link>
          <Link href="#about" className="hover:text-blue-600 transition">About</Link>
          <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
