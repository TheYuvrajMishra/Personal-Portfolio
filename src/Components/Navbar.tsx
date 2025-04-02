export default function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-4 md:px-8 py-4 bg-[rgba(0,0,0,0.5)] backdrop-blur-md border-b border-white/10 shadow-lg z-50">
        {/* Brand / Logo */}
        <h1 className="text-xl md:text-2xl font-semibold text-yellow-400 border border-yellow-400/30 px-6 py-1.5 rounded-full shadow-md hover:shadow-yellow-400/30 transition duration-300 backdrop-blur-sm bg-yellow-400/5">
  Yuvraj Mishra
</h1>


        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          {["about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="relative group transition-all duration-300"
              >
                <span className="text-white group-hover:text-yellow-400">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
