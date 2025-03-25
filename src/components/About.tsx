import jyotishImage from '../jyotish.png';

const About = () => {
  return (
    <div id="about" className="py-4 bg-gradient-to-b from-orange-50 to-amber-50 relative overflow-hidden">
      {/* Sacred pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ib3JhbmdlIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="relative">
            <img
              src={jyotishImage}
              alt="Hanumat Jyotish"
              className="relative flex m-auto rounded-lg w-[400px] justify-center items-center shadow-xl border-4 border-amber-100 transform hover:scale-105 transition-transform"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 m-6 font-serif">
              <span className="bg-clip-text text-transparent bg-gradient-to-r p-2 from-amber-600 to-red-600">
                श्री बालाजी ज्योतिष संस्थान
              </span>
            </h2>
            
            <div className="mb-6 relative">
              <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full"></div>
              <p className="text-orange-800 text-lg pl-4">
                With the blessings of Lord Hanuman, we have guided thousands with the divine wisdom of Vedic astrology for over two decades. Our practice merges ancient <span className="font-medium text-amber-600">Jyotish Shastra</span> with spiritual devotion.
              </p>
            </div>
            
            <div className="mb-6 relative">
              <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full"></div>
              <p className="text-orange-800 text-lg pl-4">
                Specializing in <span className="font-medium text-red-600">karmic remedies</span>, marriage compatibility, and life-purpose guidance, we provide solutions rooted in <span className="font-medium text-amber-600">Hanuman Bhakti</span> and planetary wisdom.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500 hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-amber-600 mb-2 font-serif">20+</div>
                <div className="text-orange-700">Years of Divine Service</div>
                <div className="mt-2 text-xs text-amber-600">Blessed by Hanuman Ji</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500 hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-red-600 mb-2 font-serif">10,000+</div>
                <div className="text-orange-700">Transformed Lives</div>
                <div className="mt-2 text-xs text-red-600">Through Cosmic Guidance</div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 transition-colors"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4 12l8 10 8-10z"/>
                </svg>
                Receive Hanuman's Blessings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;