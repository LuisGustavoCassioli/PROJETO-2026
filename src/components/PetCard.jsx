import { useNavigate } from 'react-router-dom';
import { MapPin, Info } from 'lucide-react';

export default function PetCard({ pet }) {
    const navigate = useNavigate();

    return (
        <div className="glass" style={{
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            transition: 'var(--transition)',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)'
        }}
            onClick={() => navigate(`/pet/${pet.id}`)}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}>
            <div style={{ position: 'relative', height: '250px' }}>
                <img
                    src={pet.image}
                    alt={pet.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    padding: '0.4rem 0.8rem',
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    boxShadow: 'var(--shadow-sm)'
                }}>
                    {pet.age}
                </div>
            </div>

            <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem' }}>{pet.name}</h3>
                    <span style={{
                        fontSize: '0.75rem',
                        background: 'var(--bg-main)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-muted)'
                    }}>{pet.breed}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                    <MapPin size={14} />
                    <span>{pet.location}</span>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn btn-primary" style={{ flex: 1, padding: '0.6rem', fontSize: '0.85rem' }} onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/pet/${pet.id}`);
                    }}>
                        Adotar
                    </button>
                    <button className="btn glass" style={{ padding: '0.6rem' }} onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/pet/${pet.id}`);
                    }}>
                        <Info size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
