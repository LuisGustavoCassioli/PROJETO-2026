import { useNavigate } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section className="section-padding" style={{
            marginTop: '60px',
            background: 'radial-gradient(circle at top right, rgba(99, 102, 241, 0.05), transparent), radial-gradient(circle at bottom left, rgba(16, 185, 129, 0.05), transparent)'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                alignItems: 'center',
                gap: '4rem'
            }}>
                <div className="animate-fade-in">
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: 'var(--primary)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        marginBottom: '1.5rem'
                    }}>
                        <Heart size={16} fill="var(--primary)" />
                        <span>Mais de 200 pets encontraram um lar este mês</span>
                    </div>

                    <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
                        Amor que vem das <span style={{ color: 'var(--primary)' }}>Nuvens</span> direto para você.
                    </h1>

                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '540px' }}>
                        A Patinhas na Nuvem conecta corações solitários a companheiros leais.
                        Nossa missão é garantir que cada animal encontre o lar que merece.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn btn-primary" style={{ padding: '1rem 2rem' }} onClick={() => navigate('/adopt')}>
                            Quero Adotar
                            <ArrowRight size={20} />
                        </button>
                        <button className="btn glass" style={{ padding: '1rem 2rem' }} onClick={() => navigate('/how-to-help')}>
                            Como Ajudar
                        </button>
                    </div>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '0.2s', position: 'relative' }}>
                    <div style={{
                        width: '100%',
                        height: '500px',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-lg)',
                        border: '8px solid white'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1074"
                            alt="Happy Dog"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Decorative elements */}
                    <div className="glass" style={{
                        position: 'absolute',
                        bottom: '-20px',
                        left: '-20px',
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: 'var(--shadow-md)',
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: 'var(--radius-full)',
                            background: 'var(--grad-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white'
                        }}>
                            <Heart size={24} fill="white" />
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>100% Gratuito</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Adote com responsabilidade</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
