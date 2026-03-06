import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cloud, Search, User, X } from 'lucide-react';
import AuthModal from './AuthModal';

export default function Navbar() {
  const location = useLocation();
  const [showAuth, setShowAuth] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="glass" style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1rem 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cloud size={32} color="var(--primary)" fill="var(--primary)" fillOpacity={0.1} />
            <span style={{
              fontFamily: 'Outfit',
              fontWeight: 800,
              fontSize: '1.5rem',
              background: 'var(--grad-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Patinhas na Nuvem
            </span>
          </Link>

          <div style={{ display: 'flex', gap: '2rem', fontWeight: 500, color: 'var(--text-muted)' }}>
            <Link to="/" style={{ color: isActive('/') ? 'var(--text-main)' : 'inherit' }}>Início</Link>
            <Link to="/adopt" style={{ color: isActive('/adopt') ? 'var(--text-main)' : 'inherit' }}>Adotar</Link>
            <Link to="/how-to-help" style={{ color: isActive('/how-to-help') ? 'var(--text-main)' : 'inherit' }}>Como Ajudar</Link>
            <Link to="/about" style={{ color: isActive('/about') ? 'var(--text-main)' : 'inherit' }}>Sobre Nós</Link>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {showSearchBar ? (
              <div className="glass animate-fade-in" style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--primary)',
                background: 'white'
              }}>
                <input
                  autoFocus
                  type="text"
                  placeholder="Pesquisar..."
                  style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '0.9rem', width: '150px' }}
                  onKeyDown={e => e.key === 'Enter' && setShowSearchBar(false)}
                />
                <button onClick={() => setShowSearchBar(false)} style={{ background: 'none', color: 'var(--text-muted)' }}>
                  <X size={16} />
                </button>
              </div>
            ) : (
              <button
                className="glass"
                style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}
                onClick={() => setShowSearchBar(true)}
              >
                <Search size={20} />
              </button>
            )}

            <button className="btn btn-primary" onClick={() => setShowAuth(true)}>
              <User size={18} />
              <span>Entrar</span>
            </button>
          </div>
        </div>
      </nav>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
}
