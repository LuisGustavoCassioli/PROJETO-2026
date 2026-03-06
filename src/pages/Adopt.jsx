import { useState } from 'react';
import PetFilters from '../components/PetFilters';
import PetCard from '../components/PetCard';

const EXTENDED_MOCK_PETS = [
    {
        id: 1,
        name: 'Bidu',
        breed: 'Golden Retriever',
        species: 'Cachorro',
        age: 'Adulto',
        size: 'Grande',
        location: 'São Paulo, SP',
        image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=612'
    },
    {
        id: 2,
        name: 'Luna',
        breed: 'SRD (Vira-lata)',
        species: 'Cachorro',
        age: 'Filhote',
        size: 'Médio',
        location: 'Rio de Janeiro, RJ',
        image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1169'
    },
    {
        id: 3,
        name: 'Thor',
        breed: 'Pastor Alemão',
        species: 'Cachorro',
        age: 'Jovem',
        size: 'Grande',
        location: 'Curitiba, PR',
        image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=1074'
    },
    {
        id: 4,
        name: 'Mel',
        breed: 'Beagle',
        species: 'Cachorro',
        age: 'Adulto',
        size: 'Pequeno',
        location: 'Belo Horizonte, MG',
        image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=694'
    },
    {
        id: 5,
        name: 'Max',
        breed: 'Labrador',
        species: 'Cachorro',
        age: 'Sênior',
        size: 'Grande',
        location: 'Porto Alegre, RS',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=687'
    },
    {
        id: 6,
        name: 'Amora',
        breed: 'Gato Siamês',
        species: 'Gato',
        age: 'Filhote',
        size: 'Pequeno',
        location: 'Salvador, BA',
        image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=735'
    },
    {
        id: 7,
        name: 'Simba',
        breed: 'Maine Coon',
        species: 'Gato',
        age: 'Jovem',
        size: 'Grande',
        location: 'São Paulo, SP',
        image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=735'
    },
    {
        id: 8,
        name: 'Pipoca',
        breed: 'SRD',
        species: 'Gato',
        age: 'Adulto',
        size: 'Médio',
        location: 'Fortaleza, CE',
        image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=715'
    }
];

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
