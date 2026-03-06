import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Adopt from './pages/Adopt';
import PetDetails from './pages/PetDetails';
import AboutUs from './pages/AboutUs';
import HowToHelp from './pages/HowToHelp';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Scroll to top component to ensure new pages start at the top
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/pet/:id" element={<PetDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/how-to-help" element={<HowToHelp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer style={{ padding: '4rem 0', background: 'var(--bg-card)', borderTop: '1px solid #eee' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <Link to="/" style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '0.5rem', display: 'block' }}>
                  Patinhas na Nuvem
                </Link>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  © 2026 Todos os direitos reservados.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <Link to="/">Início</Link>
                <Link to="/adopt">Adotar</Link>
                <Link to="/privacy">Privacidade</Link>
                <Link to="/terms">Termos</Link>
                <Link to="/contact">Contato</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
