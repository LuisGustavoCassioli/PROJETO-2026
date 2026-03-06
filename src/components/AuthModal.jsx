import { useState } from 'react';
import { X, Mail, Lock, User, Github } from 'lucide-react';

export default function AuthModal({ onClose }) {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '2rem'
        }} onClick={onClose}>
            <div className="glass animate-fade-in" style={{
                background: 'white',
                width: '100%',
                maxWidth: '400px',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                position: 'relative',
                boxShadow: 'var(--shadow-lg)'
            }} onClick={e => e.stopPropagation()}>
                <button onClick={onClose} style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    background: 'none',
                    color: 'var(--text-muted)'
                }}>
                    <X size={24} />
                </button>

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                        {isLogin ? 'Bem-vindo de volta' : 'Crie sua conta'}
                    </h2>
                    <p style={{ color: 'var(--text-muted)' }}>
                        {isLogin ? 'Entre para gerenciar suas adoções.' : 'Junte-se à nossa comunidade pet.'}
                    </p>
                </div>

                <form onSubmit={e => { e.preventDefault(); alert('Simulação de login concluída!'); onClose(); }}>
                    {!isLogin && (
                        <div style={{ marginBottom: '1.2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Nome</label>
                            <div style={{ position: 'relative' }}>
                                <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                <input required type="text" className="glass" style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee' }} placeholder="Seu nome" />
                            </div>
                        </div>
                    )}

                    <div style={{ marginBottom: '1.2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>E-mail</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input required type="email" className="glass" style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee' }} placeholder="seu@email.com" />
                        </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Senha</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input required type="password" className="glass" style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee' }} placeholder="••••••••" />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                        {isLogin ? 'Entrar' : 'Cadastrar'}
                    </button>
                </form>

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Ou continue com</p>
                    <button className="btn glass" style={{ width: '100%', justifyContent: 'center', gap: '0.5rem' }}>
                        <Github size={20} />
                        GitHub
                    </button>
                </div>

                <p style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem' }}>
                    {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
                    <button onClick={() => setIsLogin(!isLogin)} style={{ background: 'none', color: 'var(--primary)', fontWeight: 700, marginLeft: '0.5rem' }}>
                        {isLogin ? 'Cadastre-se' : 'Faça Login'}
                    </button>
                </p>
            </div>
        </div>
    );
}
