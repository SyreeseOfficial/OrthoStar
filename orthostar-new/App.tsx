import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { Home } from './components/Home';
import { Privacy } from './components/legal/Privacy';
import { Terms } from './components/legal/Terms';
import { HipaaCompliance } from './components/legal/HipaaCompliance';
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-brand-accent/30">
        <Header onOpenDemo={openDemo} />

        <Routes>
          <Route path="/" element={<Home onOpenDemo={openDemo} />} />
          <Route path="/index.html" element={<Home onOpenDemo={openDemo} />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/hipaa-compliance" element={<HipaaCompliance />} />
        </Routes>

        <Footer />
        <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
      </div>
    </Router>
  );
};

export default App;