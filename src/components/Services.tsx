import { Sun, Moon, Star, Heart, Users, Home } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sun className="h-8 w-8 text-amber-500" />,
      title: "Janma Kundali Analysis",
      description: "Detailed analysis of your birth chart to reveal your dharma and life purpose."
    },
    {
      icon: <Moon className="h-8 w-8 text-blue-400" />,
      title: "Graha Maitri (Planetary Harmony)",
      description: "Understanding relationships through planetary positions and remedies."
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-400" />,
      title: "Karma Yog Guidance",
      description: "Vedic insights for righteous career path and professional growth."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Vivah Milan (Marriage Matching)",
      description: "Traditional Ashtakoota matching and Mangal Dosha analysis."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Kutumb Samadhan",
      description: "Vedic remedies for family harmony and ancestral blessings."
    },
    {
      icon: <Home className="h-8 w-8 text-green-500" />,
      title: "Vastu Shastra",
      description: "Ancient wisdom for creating sacred spaces aligned with cosmic energies."
    }
  ];

  return (
    <div id="services" className="py-24 bg-gradient-to-b from-orange-50 to-amber-50 relative overflow-hidden">
      {/* Divine pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ib3JhbmdlIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4 font-serif">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-red-600">
              Divine Services
            </span>
          </h2>
          <div className="flex justify-center items-center">
            <div className="h-px w-16 bg-amber-400 mx-2"></div>
            <p className="text-orange-800 italic">Blessed by Hanuman Ji's grace</p>
            <div className="h-px w-16 bg-amber-400 mx-2"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-all transform hover:-translate-y-1 relative overflow-hidden border border-amber-100"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 transform rotate-45 origin-bottom-left"></div>
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-amber-100 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-orange-900 mb-3 font-serif">{service.title}</h3>
                <p className="text-orange-800">{service.description}</p>
                <div className="mt-4">
                  <span className="text-xs font-medium px-3 py-1 bg-amber-100 text-amber-800 rounded-full">
                    Hanuman Kripa
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 transition-colors"
          >
            <Heart className="mr-2 h-5 w-5" />
            Receive Divine Guidance
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;