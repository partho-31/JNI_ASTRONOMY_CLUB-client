"use client"
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section   className="relative py-16 md:py-30  overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Driven by Curiosity, Guided by Science
          </h2>
          <div className="w-24 h-1 mx-auto mt-6 bg-cyan-500 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left Image */}
          <div data-aos="fade-right" className="relative h-48 md:h-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-2xl"></div>
            <Image
              src="https://res.cloudinary.com/jniac-just/image/upload/v1766325729/WhoWeAreSection_udekwh.jpg"
              alt="JNIA Astronomy Club Group"
              fill
              className="relative rounded-2xl border border-white/10 shadow-2xl object-fit"
            />
          </div>

          {/* Right Content */}
          <div data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-cyan-500 mb-3">
              Who We Are
            </h3>

            <p className="text-gray-300 leading-relaxed mb-2">
              We are the Jamal Nazrul Islam Astronomy Club, a dynamic student
              organization within the Physics Department at Jashore University
              of Science and Technology (JUST).
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              Named after the renowned Bangladeshi mathematical physicist and
              cosmologist
              <span className="text-cyan-400 font-medium">
                {" "}
                Professor Jamal Nazrul Islam
              </span>
              , our club carries forward his legacy of curiosity and scientific
              exploration.
            </p>

            <div className="grid gap-3">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h4 className="text-white font-semibold">🔭 Observation</h4>
                <p className="text-sm text-gray-300">
                  Stargazing and sky tracking using accessible tools.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h4 className="text-white font-semibold">
                  📘 Writing & Magazines
                </h4>
                <p className="text-sm text-gray-300">
                  Publishing articles to spread astronomical knowledge.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h4 className="text-white font-semibold">🎤 Outreach</h4>
                <p className="text-sm text-gray-300">
                  Seminars and webinars to inspire future scientists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
