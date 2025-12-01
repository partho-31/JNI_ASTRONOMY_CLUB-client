const Page = () => {
  return (
    <div className="min-h-screen py-20 bg-slate-900 text-white">
      {/* Article Header */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Meta */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-cyan-600 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
              Deep Space Research
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">15 minutes read</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            First Deep Field: Galaxies at the Edge of Time and the Revolution of
            Modern Astronomy
          </h1>

          <p className="text-xl text-cyan-300 mb-6 leading-relaxed">
            How the James Webb Space Telescope inaugural deep field image is
            reshaping our understanding of cosmic dawn and challenging
            fundamental cosmological models.
          </p>

          <div className="flex items-center gap-4 pt-4 border-t border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                AS
              </div>
              <div>
                <div className="text-white font-semibold">
                  Doctor Alex Sterling
                </div>
                <div className="text-gray-400 text-sm">
                  Senior Astrophysicist • December 15, 2024
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-400 ml-auto">
              <span>4.2 thousand views</span>
              <span>128 comments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 max-w-4xl mb-8">
        <div className="bg-slate-700 h-64 flex items-center justify-center"></div>
        <p className="text-center text-gray-400 text-sm mt-2">
          James Webb Space Telescope first deep field image of galaxy cluster
          SMACS 0723
        </p>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 max-w-3xl mb-16">
        <article className="prose prose-invert prose-lg max-w-none">
          {/* Introduction */}
          <p className="text-xl text-gray-300 leading-relaxed mb-6 font-light">
            In the quiet expanse of space, nearly one million miles from Earth,
            the James Webb Space Telescope turned its golden eye toward a
            seemingly empty patch of sky. What it revealed would forever change
            our understanding of the universe infancy. The first deep field
            image, released on July 11, 2022, unveiled thousands of
            galaxies—some dating back to within 400 million years after the Big
            Bang—in stunning, unprecedented detail.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            This single image, targeting the galaxy cluster SMACS 0723,
            represents more than just a technological achievement. It is a
            portal to the cosmic dawn, offering glimpses of the universe during
            its formative years. The data challenges existing models of galaxy
            formation and provides revolutionary insights into the timeline of
            cosmic evolution, dark matter distribution, and the processes that
            shaped the universe as we know it today.
          </p>

          {/* Main Content Sections */}
          <h2 className="text-3xl font-bold mt-12 mb-6 text-cyan-400 border-b border-slate-700 pb-2">
            The Cosmic Time Machine
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Gravitational lensing, a phenomenon predicted by Einstein theory of
            general relativity, serves as nature magnifying glass. The massive
            foreground galaxy cluster SMACS 0723 bends and amplifies light from
            more distant background galaxies, making visible what would
            otherwise remain hidden in the darkness of deep space. This cosmic
            magnification allows the James Webb Space Telescope to peer further
            back in time than any telescope before it.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            The technical achievement behind this observation cannot be
            overstated. James Webb Space Telescope Near-Infrared Camera captured
            the image through twelve hours of exposure across different infrared
            wavelengths. The resulting composite reveals features and structures
            with a clarity that continues to astonish astronomers months after
            its initial release.
          </p>

          {/* Key Discovery Section */}
          <div className="bg-slate-800 border-l-4 border-cyan-500 pl-6 py-4 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              Breakthrough Discovery
            </h3>
            <p className="text-gray-300 italic">
              We are seeing galaxies that existed when the universe was just two
              percent of its current age, yet they appear remarkably mature and
              structured. This suggests either galaxy formation began much
              earlier than we thought, or our understanding of dark matter needs
              revision.
            </p>
            <p className="text-cyan-400 mt-2 font-semibold">
              — Doctor Alex Sterling, Lead Researcher
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-cyan-400 border-b border-slate-700 pb-2">
            Challenging Cosmological Models
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            The presence of well-formed, complex galaxies so early in cosmic
            history presents a significant challenge to the Lambda Cold Dark
            Matter model, the prevailing theory of cosmic evolution. According
            to current simulations, there should not have been enough time for
            such massive, structured galaxies to form within the first 400
            million years after the Big Bang.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Several galaxies in the deep field show evidence of disk-like
            structures and spiral arms—features that theoretically require
            billions of years to develop. Their existence mere hundreds of
            millions of years after the Big Bang suggests either accelerated
            formation processes or fundamental gaps in our understanding of dark
            matter and gravitational interactions in the early universe.
          </p>

          {/* Technical Details */}
          <h3 className="text-2xl font-bold mt-10 mb-4 text-purple-400">
            Spectroscopic Revelations
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            Follow-up observations using James Webb Space Telescope
            Near-Infrared Spectrograph have provided even more startling
            revelations. Spectroscopy of these ancient galaxies reveals chemical
            signatures indicating rapid enrichment with heavy elements—the
            products of multiple generations of star formation and supernova
            explosions.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            This chemical maturity implies that star formation began even
            earlier than we can currently observe, pushing the timeline of the
            first stars and galaxies further back into the cosmic dark ages. The
            universe appears to have been bustling with activity during what we
            previously considered its quiet, formative years.
          </p>

          {/* Implications Section */}
          <h2 className="text-3xl font-bold mt-12 mb-6 text-cyan-400 border-b border-slate-700 pb-2">
            Implications for Cosmic Evolution
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            The implications of these findings extend far beyond galaxy
            formation timelines. They touch upon fundamental questions about
            dark matter, the rate of cosmic expansion, and the nature of the
            first stars. If galaxies formed earlier and faster than predicted,
            our models of dark matter may need adjustment, potentially pointing
            toward different particle properties or interaction mechanisms.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            The early abundance of massive galaxies also has implications for
            the timeline of cosmic reionization—the period when the first stars
            and galaxies ionized the neutral hydrogen that filled the early
            universe. James Webb Space Telescope observations suggest this
            process may have begun earlier and progressed more rapidly than
            previously estimated.
          </p>

          {/* Conclusion */}
          <h2 className="text-3xl font-bold mt-12 mb-6 text-cyan-400 border-b border-slate-700 pb-2">
            A New Chapter in Astronomy
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            The first deep field image from the James Webb Space Telescope
            represents more than just a beautiful picture—it is a fundamental
            shift in our understanding of cosmic history. Each galaxy in that
            frame tells a story of formation, evolution, and the complex
            interplay of physical processes that shaped our universe.
          </p>

          <p className="text-gray-300 leading-relaxed mb-12">
            As analysis continues and more observations are conducted, we stand
            at the threshold of a new era in astronomy. The questions raised by
            this single image will drive research for decades to come, pushing
            the boundaries of our knowledge and reminding us that the universe
            always has new surprises in store for those who dare to look deeper.
          </p>
        </article>

        {/* Reviews and Rating Section */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 mt-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Rating Overview */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Community Reviews
              </h2>

              {/* Overall Rating */}
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-cyan-400 mb-2">4.8</div>
                <div className="flex justify-center mb-2">
                  <span className="text-amber-400 text-xl">⭐</span>
                  <span className="text-amber-400 text-xl">⭐</span>
                  <span className="text-amber-400 text-xl">⭐</span>
                  <span className="text-amber-400 text-xl">⭐</span>
                  <span className="text-amber-400 text-xl">⭐</span>
                </div>
                <div className="text-gray-400 text-sm">
                  Based on 128 reviews
                </div>
              </div>

              {/* Write Review Button */}
              <button className="w-full bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
                Write Review
              </button>
            </div>

            {/* Reviews List */}
            <div className="lg:w-2/3">
              {/* Review 1 */}
              <div className="bg-slate-700 rounded-xl p-6 mb-4 border border-slate-600">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                      MJ
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        Doctor Maria Johnson
                      </div>
                      <div className="text-gray-400 text-sm">
                        Astrophysics Professor
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-amber-400">⭐ ⭐ ⭐ ⭐ ⭐</span>
                    <span className="text-gray-400 text-sm ml-2">
                      2 days ago
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Absolutely brilliant analysis. The depth of research and
                  clarity of explanation makes complex cosmological concepts
                  accessible. The section on gravitational lensing implications
                  was particularly insightful. This article should be required
                  reading for anyone interested in modern astronomy.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                    24 helpful
                  </button>
                  <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                    Reply
                  </button>
                  <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                    Report
                  </button>
                </div>
              </div>

              {/* Load More Reviews */}
              <div className="text-center">
                <button className="bg-slate-700 border border-slate-600 hover:border-cyan-500 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200">
                  Load More Reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="border-t border-slate-700 bg-slate-800">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 text-center bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Continue Reading
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Article Card */}
            <div className="group bg-slate-700 rounded-xl p-6 border border-slate-600 hover:border-cyan-500 transition-all duration-300">
              <h3 className="font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                Exoplanet Atmospheric Studies with James Webb Space Telescope
              </h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                Analyzing chemical compositions of distant worlds and searching
                for biosignatures in planetary atmospheres.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>12 minutes read</span>
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Read Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
