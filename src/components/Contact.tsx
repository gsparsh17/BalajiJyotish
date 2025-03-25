import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { Phone, Mail, MapPin, Clock, Flame, BookOpen } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    prayer: '',
    status: 'pending',
    createdAt: new Date()
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, "prayerRequests"), {
        ...formData,
        createdAt: new Date()
      });
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        prayer: '',
        status: 'pending',
        createdAt: new Date()
      });
    } catch (error) {
      console.error("Error submitting prayer request: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="py-24 bg-gradient-to-b from-orange-50 to-amber-50 relative overflow-hidden">
      {/* Sacred pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ib3JhbmdlIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4 font-serif">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-red-600">
              प्रार्थना संपर्क (Divine Contact)
            </span>
          </h2>
          <div className="flex justify-center items-center">
            <div className="h-px w-16 bg-amber-400 mx-2"></div>
            <p className="text-orange-800 italic">Seek Hanuman Ji's Guidance</p>
            <div className="h-px w-16 bg-amber-400 mx-2"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-amber-500 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-orange-900 mb-6 font-serif flex items-center">
              <Flame className="h-6 w-6 text-amber-500 mr-2" />
              Divine Connection
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-amber-100 mr-4">
                  <Phone className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-orange-800 font-medium">Sacred Helpline</p>
                  <p className="text-orange-700">+91 98XXX XXXXX (WhatsApp)</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-amber-100 mr-4">
                  <Mail className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-orange-800 font-medium">Divine Mail</p>
                  <p className="text-orange-700">blessings@hanumatjyotish.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-amber-100 mr-4">
                  <MapPin className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-orange-800 font-medium">Sacred Ashram</p>
                  <p className="text-orange-700">Hanuman Mandir Road, Ayodhya Dham</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-amber-100 mr-4">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-orange-800 font-medium">Puja Timings</p>
                  <p className="text-orange-700">5:00 AM - 9:00 PM (IST) Daily</p>
                  <p className="text-sm text-amber-600 mt-1">Special consultations: 10 AM - 6 PM</p>
                </div>
              </div>

              <div className="pt-4 border-t border-amber-100">
                <p className="text-orange-700 italic flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-amber-500" />
                  "संकट मोचन हनुमान आपकी सभी समस्याओं का समाधान करेंगे"
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold text-orange-900 mb-6 font-serif flex items-center">
            <svg className="h-6 w-6 text-red-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L4 12l8 10 8-10z"/>
            </svg>
            Blessing Request Form
          </h3>

          {submitSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
              Your prayer request has been submitted successfully! We will contact you soon.
            </div>
          )}
          
          <div>
            <label className="block text-orange-800 font-medium mb-2">Your Divine Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-orange-800 font-medium mb-2">Sacred Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-orange-800 font-medium mb-2">Mantra Contact*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-orange-800 font-medium mb-2">Select Service*</label>
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            >
              <option value="">-- Choose Divine Service --</option>
              <option value="Birth Chart Analysis">Birth Chart Analysis</option>
              <option value="Hanuman Puja">Hanuman Puja</option>
              <option value="Mangal Dosha Solution">Mangal Dosha Solution</option>
              <option value="Marriage Compatibility">Marriage Compatibility</option>
              <option value="Career Guidance">Career Guidance</option>
              <option value="Personal Consultation">Personal Consultation</option>
            </select>
          </div>
          
          <div>
            <label className="block text-orange-800 font-medium mb-2">Your Prayer*</label>
            <textarea
              name="prayer"
              value={formData.prayer}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent h-32"
              placeholder="Share your concerns and prayers..."
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 px-6 rounded-md hover:from-amber-700 hover:to-orange-700 transition-colors shadow-md flex items-center justify-center disabled:opacity-70"
          >
            {isSubmitting ? (
              'Submitting...'
            ) : (
              <>
                <Flame className="h-5 w-5 mr-2" />
                Submit for Divine Blessings
              </>
            )}
          </button>

          <p className="text-sm text-orange-700 text-center">
            *All requests are sanctified with Hanuman Chalisa recitation
          </p>
        </form>
      </div>
    </div>
  </div>
);
};

export default Contact;