import React from "react";

export default function Skill() {
  // Define skill categories as a union type
  type SkillCategory = "Frontend" | "Backend / Language" | "Styling / UI" | "Tools & Platforms";

  const skills: Record<SkillCategory, string[]> = {
    "Frontend": ["ReactJS", "TypeScript", "JavaScript"],
    "Backend / Language": ["Python"],
    "Styling / UI": ["Tailwind CSS", "Bootstrap", "Material-UI"],
    "Tools & Platforms": ["GitHub"],
  };

  const icons: Record<SkillCategory, string> = {
    "Frontend": "🧠",
    "Backend / Language": "💻",
    "Styling / UI": "🎨",
    "Tools & Platforms": "🛠️",
  };

  return (
    <div>
      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 md:px-6 bg-black"
        data-aos="fade-up"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-10">
          Technical Skills
        </h2>

        <div className="space-y-16">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                {icons[category as SkillCategory]} {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6 text-center">
                {skillList.map((skill) => (
                  <div
                    key={skill}
                    className="py-5 px-3 border border-gray-700 rounded-xl cursor-pointer hover:bg-yellow-400 hover:text-black transition text-base md:text-lg font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}