import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';

const CATEGORIES = {
    species: ['Cachorro', 'Gato', 'Outros'],
    age: ['Filhote', 'Jovem', 'Adulto', 'Sênior'],
    size: ['Pequeno', 'Médio', 'Grande']
};

export default function PetFilters({ filters, setFilters }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFilter = (type, value) => {
        setFilters(prev => {
            const current = prev[type];
            const next = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [type]: next };
        });
    };

    const clearFilters = () => {
        setFilters({
            species: [],
            age: [],
            size: [],
            search: ''
        });
    };

    const activeCount = filters.species.length + filters.age.length + filters.size.length;

    return (
        <div className="container" style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                {/* Search Bar */}
                <div className="glass" style={{
                    flex: 1,
                    minWidth: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.5rem 1.5rem',
                    borderRadius: 'var(--radius-full)',
                    boxShadow: 'var(--shadow-sm)'
                }}>
                    <Search size={20} color="var(--text-muted)" />
                    <input
                        type="text"
                        placeholder="Pesquisar por nome, raça ou cidade..."
                        value={filters.search}
                        onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            outline: 'none',
                            padding: '0.8rem',
                            width: '100%',
                            fontSize: '1rem',
                            fontFamily: 'inherit'
                        }}
                    />
                </div>

                {/* Filter Trigger */}
                <button
                    className={`btn ${activeCount > 0 ? 'btn-primary' : 'glass'}`}
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ position: 'relative' }}
                >
                    <Filter size={20} />
                    <span>Filtros</span>
                    {activeCount > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: '-5px',
                            right: '-5px',
                            background: 'var(--accent)',
                            color: 'white',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            fontSize: '0.7rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '2px solid white'
                        }}>
                            {activeCount}
                        </span>
                    )}
                </button>

                {activeCount > 0 && (
                    <button
                        className="btn"
                        onClick={clearFilters}
                        style={{ color: 'var(--accent)', fontSize: '0.9rem', padding: '0.5rem' }}
                    >
                        Limpar tudo
                    </button>
                )}
            </div>

            {/* Filter Panel */}
            {isOpen && (
                <div className="glass animate-fade-in" style={{
                    marginTop: '1.5rem',
                    padding: '2rem',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-md)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem'
                }}>
                    {Object.entries(CATEGORIES).map(([key, options]) => (
                        <div key={key}>
                            <h4 style={{ marginBottom: '1rem', textTransform: 'capitalize', fontSize: '1rem' }}>
                                {key === 'species' ? 'Espécie' : key === 'age' ? 'Idade' : 'Porte'}
                            </h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {options.map(option => (
                                    <button
                                        key={option}
                                        onClick={() => toggleFilter(key, option)}
                                        style={{
                                            padding: '0.4rem 1rem',
                                            borderRadius: 'var(--radius-full)',
                                            fontSize: '0.85rem',
                                            background: filters[key].includes(option) ? 'var(--primary)' : 'rgba(0,0,0,0.05)',
                                            color: filters[key].includes(option) ? 'white' : 'var(--text-main)',
                                            border: 'none',
                                            cursor: 'pointer',
                                            transition: 'var(--transition)'
                                        }}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
