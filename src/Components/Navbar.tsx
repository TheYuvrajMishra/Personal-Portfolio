import React from 'react'

export default function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between border-y border-white/20 items-center px-4 md:px-6 py-4 bg-[rgba(255, 255, 255, 0.04)] backdrop-blur-md z-50">
      <h1 className="text-xl md:text-2xl font-bold border border-y-white/10 px-5 py-1 rounded-full text-yellow-400 mx-auto md:mx-0 text-center md:text-left">
  Yuvraj Mishra
</h1>

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
