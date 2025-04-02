

export default function Contact() {
  return (
    <div>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-6 bg-Transparent text-center" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 md:mb-8">Let’s Connect</h2>
        <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">Shoot me a message or connect on social media.</p>
        <a href="mailto:yuvraj17mishra11@email.com" className="inline-block px-6 py-3 border border-red text-White font-semibold rounded-full hover:bg-white hover:text-black transition text-sm md:text-base">
          📧 yuvraj17mishra11@email.com
        </a>
        <div className="mt-4 md:mt-6 flex justify-center gap-4 md:gap-6 text-sm md:text-base">
          <a href="#" className="hover:text-yellow-400">LinkedIn</a>
          <a href="#" className="hover:text-yellow-400">GitHub</a>
          <a href="#" className="hover:text-yellow-400">Behance</a>
        </div>
      </section>
    </div>
  )
}
