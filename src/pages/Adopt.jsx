import { useState } from 'react';
import PetFilters from '../components/PetFilters';
import PetCard from '../components/PetCard';
import { EXTENDED_MOCK_PETS } from '../services/petService';

export default function Adopt() {
    const [filters, setFilters] = useState({
        species: [],
        age: [],
        size: [],
        search: ''
    });

    const filteredPets = EXTENDED_MOCK_PETS.filter(pet => {
        const matchesSpecies = filters.species.length === 0 || filters.species.includes(pet.species);
        const matchesAge = filters.age.length === 0 || filters.age.includes(pet.age);
        const matchesSize = filters.size.length === 0 || filters.size.includes(pet.size);
        const matchesSearch = pet.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            pet.breed.toLowerCase().includes(filters.search.toLowerCase()) ||
            pet.location.toLowerCase().includes(filters.search.toLowerCase());

        return matchesSpecies && matchesAge && matchesSize && matchesSearch;
    });

    return (
        <div className="section-padding" style={{ marginTop: '60px' }}>
            <div className="container" style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Encontre seu novo <span style={{ color: 'var(--primary)' }}>melhor amigo</span></h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px' }}>
                    Temos dezenas de animais esperando por um lar. Use os filtros abaixo para encontrar o pet ideal para o seu perfil.
                </p>
            </div>

            <PetFilters filters={filters} setFilters={setFilters} />

            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {filteredPets.map(pet => (
                        <PetCard key={pet.id} pet={pet} />
                    ))}
                </div>

                {filteredPets.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Nenhum pet encontrado</h3>
                        <p>Tente ajustar seus filtros ou pesquisar por outro termo.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
