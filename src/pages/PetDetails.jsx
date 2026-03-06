import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Beef, Heart, Share2, Info } from 'lucide-react';
import AdoptionModal from '../components/AdoptionModal';
import { EXTENDED_MOCK_PETS } from '../services/petService';

export default function PetDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const pet = EXTENDED_MOCK_PETS.find(p => p.id === parseInt(id));

    if (!pet) {
        return (
            <div className="container" style={{ marginTop: '120px', textAlign: 'center' }}>
                <h2>Pet não encontrado</h2>
                <Link to="/adopt" className="btn btn-primary" style={{ marginTop: '1rem' }}>Voltar para Adoção</Link>
            </div>
        );
    }

    return (
        <div className="section-padding" style={{ marginTop: '60px' }}>
            <div className="container">
                <button onClick={() => navigate(-1)} className="btn glass" style={{ marginBottom: '2rem' }}>
                    <ArrowLeft size={20} />
                    Voltar
                </button>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    {/* Image Gallery Mock */}
                    <div className="animate-fade-in">
                        <div style={{
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-lg)',
                            border: '8px solid white',
                            position: 'relative'
                        }}>
                            <img src={pet.image} alt={pet.name} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                            <div style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                display: 'flex',
                                gap: '0.5rem'
                            }}>
                                <button className="glass" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Share2 size={20} />
                                </button>
                                <button className="glass" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                                    <Heart size={20} fill="currentColor" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Details Content */}
                    <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                            <h1 style={{ fontSize: '3.5rem' }}>{pet.name}</h1>
                            <div style={{
                                background: 'rgba(16, 185, 129, 0.1)',
                                color: 'var(--secondary)',
                                padding: '0.5rem 1rem',
                                borderRadius: 'var(--radius-full)',
                                fontWeight: 700,
                                fontSize: '0.9rem'
                            }}>
                                Disponível
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', marginBottom: '2rem', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <MapPin size={18} />
                                <span>{pet.location}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <Calendar size={18} />
                                <span>Postado há 3 dias</span>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '1rem',
                            marginBottom: '2.5rem'
                        }}>
                            {[
                                { label: 'Idade', value: pet.age, icon: <Calendar size={20} /> },
                                { label: 'Gênero', value: pet.gender || 'Macho', icon: <Info size={20} /> },
                                { label: 'Peso', value: pet.weight || '15kg', icon: <Beef size={20} /> }
                            ].map((stat, i) => (
                                <div key={i} className="glass" style={{ padding: '1rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                                    <div style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{stat.label}</div>
                                    <div style={{ fontWeight: 700 }}>{stat.value}</div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ marginBottom: '1rem' }}>Sobre {pet.name}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                {pet.description}
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button className="btn btn-primary" style={{ flex: 2, padding: '1.2rem', fontSize: '1.1rem' }} onClick={() => setShowModal(true)}>
                                Tenho Interesse em Adotar
                            </button>
                            <button className="btn glass" style={{ flex: 1, padding: '1.2rem' }} onClick={() => navigate('/contact')}>
                                Falar com Abrigo
                            </button>
                        </div>

                        <div style={{
                            marginTop: '2rem',
                            padding: '1.5rem',
                            borderRadius: 'var(--radius-md)',
                            background: 'rgba(99, 102, 241, 0.05)',
                            display: 'flex',
                            gap: '1rem',
                            alignItems: 'center'
                        }}>
                            <Info size={24} color="var(--primary)" />
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                Ao clicar em "Tenho Interesse", você iniciará um processo de triagem para garantir uma adoção responsável.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && <AdoptionModal pet={pet} onClose={() => setShowModal(false)} />}
        </div>
    );
}
