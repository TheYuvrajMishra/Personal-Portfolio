

export default function Projects() {
  const projectList = [
    {
      title: "SmartInterestAI",
      desc: "Futuristic UI/UX and intuitive design built with React and Tailwind.",
    },
    {
      title: "Compliance Report Generator",
      desc: "Clean UI for generating professional PDFs from raw input.",
    },
    {
      title: "Typing Faster",
      desc: "WPM tracker with sleek animations and a minimalist interface.",
    },
    {
      title: "Finhub Landing Page",
      desc: "Modern landing page using black/yellow theme and glassmorphism.",
    },
    {
      title: "TicTacToe-OnSteroids",
      desc: "Multiplayer version of TicTacToe with smart animations (JavaScript).",
    },
    {
      title: "Pattern Background",
      desc: "Reusable HTML/CSS background design using gradients and shapes.",
    },
    {
      title: "Experimental Invoice",
      desc: "HTML-based dynamic invoice template with visual sections. (Private)",
    },
    {
      title: "Monthly Compliance Report",
      desc: "Static UI for compliance reports – export-ready layout. (HTML)",
    },
  ];

  return (
    <div>
      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900 to-transparent"
        data-aos="fade-up"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 md:mb-8">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {projectList.map(({ title, desc }) => (
            <div
              key={title}
              className="border border-gray-700 p-4 md:p-6 rounded-lg hover:shadow-lg hover:scale-102 transition duration-300 ease-in-out"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
