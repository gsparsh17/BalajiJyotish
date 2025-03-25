// import { Stars, Sparkles, Orbit } from 'lucide-react';

// const Hero = () => {
//   return (
//     <div id="home" className="relative pt-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 text-white overflow-hidden">
//       {/* Mystical background elements */}
//       <div className="absolute inset-0 overflow-hidden opacity-20">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-700 filter blur-[80px]"></div>
//         <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-indigo-800 filter blur-[100px]"></div>
//         <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-violet-600 filter blur-[60px]"></div>
//       </div>

//       {/* Sacred geometry patterns */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-10">
//         <div className="absolute top-20 left-20">
//           <svg width="120" height="120" viewBox="0 0 120 120" className="text-purple-400">
//             <path d="M60 0L120 60L60 120L0 60Z" fill="currentColor" />
//           </svg>
//         </div>
//         <div className="absolute bottom-10 right-10">
//           <svg width="80" height="80" viewBox="0 0 80 80" className="text-indigo-300">
//             <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="2" fill="none" />
//             <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
//             <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="1" fill="none" />
//           </svg>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
//         <div className="text-center">
//           <div className="relative inline-block mb-8">
//             <Stars className="h-16 w-16 text-yellow-300 animate-pulse" />
//             <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-200 animate-spin" style={{ animationDuration: '8s' }} />
//             <Sparkles className="absolute -bottom-2 -left-2 h-5 w-5 text-purple-300 animate-pulse" />
//           </div>
          
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200">
//             Discover Your Divine Path
//           </h1>
          
//           <div className="flex justify-center mb-6">
//             <Orbit className="h-8 w-8 text-purple-300 mx-2 animate-spin" style={{ animationDuration: '15s' }} />
//             <p className="text-xl md:text-2xl mb-0 text-indigo-200 font-light italic">
//               "As above, so below"
//             </p>
//             <Orbit className="h-8 w-8 text-purple-300 mx-2 animate-spin" style={{ animationDuration: '20s' }} />
//           </div>
          
//           <p className="text-xl md:text-2xl mb-8 text-indigo-200 max-w-3xl mx-auto">
//             Unlock cosmic wisdom with authentic <span className="text-yellow-300">Vedic Astrology</span> and <span className="text-purple-300">Spiritual Guidance</span> for your soul's journey
//           </p>
          
//           <a
//             href="#contact"
//             className="relative inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-indigo-900 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-yellow-500/30 transition-all transform hover:scale-105"
//           >
//             <span className="relative z-10">Awaken Your Destiny</span>
//             <span className="absolute inset-0 rounded-full bg-yellow-400 opacity-0 hover:opacity-100 transition-opacity -z-0"></span>
//           </a>
//         </div>
//       </div>
      
//       <div className="h-32 bg-gradient-to-b from-purple-900/80 via-purple-900/40 to-transparent relative">
//         <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import { Flame, Mountain, Gauge, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative pt-16 bg-gradient-to-b from-orange-900 via-amber-900 to-orange-950 text-white overflow-hidden">
      {/* Divine light background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-700 filter blur-[80px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-orange-800 filter blur-[100px]"></div>
      </div>

      {/* Sacred Om symbol pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
      <div className="absolute top-20 left-20">
//           <svg width="120" height="120" viewBox="0 0 120 120" className="text-amber-400">
//             <path d="M60 0L120 60L60 120L0 60Z" fill="currentColor" />
//           </svg>
//         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <Flame className="h-16 w-16 text-amber-400 animate-pulse" />
            <div className="absolute -top-2 -right-2 h-6 w-6 text-red-500">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 12l8 10 8-10z"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl h-20 p-3 md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 font-serif">
            जय श्री हनुमान
          </h1>
          
          <div className="flex justify-center items-center mb-6">
            <Mountain className="h-8 w-8 text-amber-300 mx-2" />
            <p className="text-xl md:text-2xl mb-0 text-amber-200 font-light italic">
              "संकट कटै मिटै सब पीरा, जो सुमिरै हनुमत बलबीरा"
            </p>
            <BookOpen className="h-8 w-8 text-amber-300 mx-2" />
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl mx-auto">
            Receive divine blessings through authentic <span className="text-amber-300 font-medium">Hanuman Chalisa</span> and <span className="text-red-400 font-medium">Vedic Astrology</span> guidance
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#services"
              className="relative inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all transform hover:scale-105"
            >
              <Gauge className="mr-2 h-5 w-5" />
              <span className="relative z-10">Discover Remedies</span>
            </a>
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all transform hover:scale-105"
            >
              <Flame className="mr-2 h-5 w-5" />
              <span className="relative z-10">Book Puja</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="h-32 bg-gradient-to-b from-orange-900/80 via-orange-900/40 to-transparent relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <svg width="120" height="24" viewBox="0 0 120 24" className="text-amber-400">
            <path d="M0 12c10 0 10-8 20-8s10 8 20 8 10-8 20-8 10 8 20 8 10-8 20-8 10 8 20 8" stroke="currentColor" fill="none" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;