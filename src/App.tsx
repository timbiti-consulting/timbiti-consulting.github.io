import Footer from '@/components/navigation/Footer';
import Navbar from '@/components/navigation/Navbar';
import ScrollToTop from '@/components/navigation/ScrollToTop';
import '@/css/index.css';
import '@/css/styles.css';
import About from '@/pages/about/About';
import Profile from '@/pages/about/Profile';
import Team from '@/pages/about/Team';
import Home from '@/pages/home/Home';
import Services from '@/pages/services/Services';
import TargetMarket from '@/pages/target_market/TargetMarket';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-primary text-primary-foreground">
        <Navbar />
        <div className="mx-auto w-full flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/target-market" element={<TargetMarket />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:profile_id" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
