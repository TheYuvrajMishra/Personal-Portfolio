import React from 'react'

export default function Contact() {
  return (
    <div>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-6 bg-black text-center" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 md:mb-8">Let’s Connect</h2>
        <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">Shoot me a message or connect on social media.</p>
        <a href="mailto:yuvraj@email.com" className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:scale-105 transition text-sm md:text-base">
          📧 yuvraj@email.com
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
