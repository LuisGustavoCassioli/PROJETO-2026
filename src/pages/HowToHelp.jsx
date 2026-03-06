import { useState } from 'react';
import { Heart, Gift, Users, CreditCard } from 'lucide-react';
import VolunteerModal from '../components/VolunteerModal';
import DonationModal from '../components/DonationModal';

export default function HowToHelp() {
    const [showVolunteer, setShowVolunteer] = useState(false);
    const [showDonation, setShowDonation] = useState(false);

    return (
        <div className="section-padding" style={{ marginTop: '60px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Como <span style={{ color: 'var(--primary)' }}>Ajudar</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        Há muitas formas de fazer a diferença. Escolha a que mais combina com você!
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                    gap: '3rem',
                    marginBottom: '6rem'
                }}>
                    {/* Volunteer Section */}
                    <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: 'var(--radius-md)',
                                background: 'rgba(99, 102, 241, 0.1)',
                                color: 'var(--primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Users size={32} />
                            </div>
                            <div>
                                <h2 style={{ marginBottom: '0.5rem' }}>Seja um Voluntário</h2>
                                <p style={{ color: 'var(--text-muted)' }}>Doe seu tempo e carinho em um dos nossos abrigos parceiros.</p>
                            </div>
                        </div>

                        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Passeio com cães e recreação.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Auxílio em eventos de adoção.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Cuidado e limpeza dos espaços.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Apoio administrativo ou fotográfico.</li>
                        </ul>

                        <button className="btn btn-primary" style={{ width: '100%', padding: '1rem' }} onClick={() => setShowVolunteer(true)}>
                            Fazer Inscrição
                        </button>
                    </div>

                    {/* Donation Section */}
                    <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: 'var(--radius-md)',
                                background: 'rgba(16, 185, 129, 0.1)',
                                color: 'var(--secondary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CreditCard size={32} />
                            </div>
                            <div>
                                <h2 style={{ marginBottom: '0.5rem' }}>Faça uma Doação</h2>
                                <p style={{ color: 'var(--text-muted)' }}>Sua contribuição financeira ajuda com ração, vacinas e cuidados médicos.</p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                            {['R$ 20', 'R$ 50', 'R$ 100', 'Outro Valor'].map(val => (
                                <button key={val} className="btn glass" style={{ padding: '1rem' }} onClick={() => setShowDonation(true)}>{val}</button>
                            ))}
                        </div>

                        <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', background: 'var(--grad-primary)' }} onClick={() => setShowDonation(true)}>
                            Doar Agora
                        </button>
                    </div>
                </div>

                <div className="glass" style={{
                    padding: '4rem',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center',
                    background: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1169")',
                    backgroundSize: 'cover'
                }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Outras Formas de Ajudar</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                        <div>
                            <div style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><Gift size={24} /></div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Doe Mantimentos</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Rações, cobertores e brinquedos.</p>
                        </div>
                        <div>
                            <div style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><Heart size={24} /></div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Lar Temporário</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Acolha um pet enquanto ele não é adorado.</p>
                        </div>
                    </div>
                </div>
            </div>

            {showVolunteer && <VolunteerModal onClose={() => setShowVolunteer(false)} />}
            {showDonation && <DonationModal onClose={() => setShowDonation(false)} />}
        </div>
    );
}
