import React from 'react'

export default function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-4 md:px-6 py-4 bg-black bg-opacity-60 backdrop-blur-md z-50">
        <h1 className="text-xl md:text-2xl font-bold text-yellow-400">Yuvraj Mishra</h1>
        <ul className="hidden md:flex gap-4 md:gap-6">
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}
