

export default function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-[100vh] flex flex-col justify-center items-center text-center px-4 pt-24" id="home" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">I don’t just build websites —</h2>
        <h3 className="text-yellow-400 text-2xl md:text-4xl font-bold animate-pulse">I create digital art.</h3>
        <p className="mt-6 max-w-xl text-gray-300 text-sm md:text-base">
          Self-taught designer & developer from Kolkata, India. Passionate about building beautiful, performant websites.
        </p>
        <a href="#contact" className="mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:scale-105 transition text-sm md:text-base">Let's Connect</a>
      </section>
    </div>
  )
}
