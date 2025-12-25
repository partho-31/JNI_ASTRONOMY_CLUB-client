"use client"
import Image from 'next/image';

const EventCard = () => {
  return (
    <section  className="relative my-5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-14">
          <p className="uppercase tracking-widest text-cyan-400 mb-3">Upcoming Event</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Explore the Sky With Us
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Event Card */}
        <div data-aos="zoom-in-up" className="relative bg-linear-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-cyan-500/10 blur-3xl"></div>

          <div className="relative grid md:grid-cols-2 gap-4 md:gap-8 items-center p-4 md:p-8">
            {/* Event Image */}
            <div className="relative h-48 md:h-full">
              <Image 
                src="https://res.cloudinary.com/jniac-just/image/upload/v1766325691/Events_cot5fe.jpg"
                alt="Stargazing Event"
                fill
                className="rounded-xl object-fit  border border-white/10"
              />
            </div>

            {/* Event Details */}
            <div>
              <span className="inline-block mb-3 px-4 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400">
                Event Type
              </span>

              <h3 className="md:text-2xl text-xl font-semibold text-white mb-2">
                Night Sky Observation & Star Mapping
              </h3>

              <p className="text-gray-300 md:leading-relaxed mb-2">
                Join us for an exciting night sky observation session where we will
                identify constellations, observe planets, and learn basic star mapping
                techniques using mobile apps and simple instruments.
              </p>

              {/* Event Meta */}
              <div className="grid sm:grid-cols-3 gap-2 mb-2 md:mb-4">
                <div className="bg-white/5 border border-white/10 rounded-lg py-2 md:p-3 text-center">
                  <p className="text-sm text-gray-400">📅 Date</p>
                  <p className="text-white font-medium">15/12/2025</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg py-2 md:p-3 text-center">
                  <p className="text-sm text-gray-400">⏰ Time</p>
                  <p className="text-white font-medium">7:00 PM</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg py-2 md:p-3 text-center">
                  <p className="text-sm text-gray-400">📍 Venue</p>
                  <p className="text-white font-medium">JUST Campus</p>
                </div>
              </div>

              {/* CTA */}
              <a 
                href="#"
                className="flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-[#020617] font-semibold hover:bg-cyan-400 transition"
              >
                Register  →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCard;