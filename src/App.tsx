import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPrayerRequests from './AdminPrayerRequests';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
        <Navbar />
        
        <Routes>
          {/* Main website routes */}
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <About />
              <Contact />
            </>
          } />
          
          {/* Admin route */}
          <Route path="/admin/prayer-requests" element={<AdminPrayerRequests />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;