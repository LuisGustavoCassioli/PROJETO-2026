import PetCard from './PetCard';

const MOCK_PETS = [
    {
        id: 1,
        name: 'Bidu',
        breed: 'Golden Retriever',
        age: '2 anos',
        location: 'São Paulo, SP',
        image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=612'
    },
    {
        id: 2,
        name: 'Luna',
        breed: 'SRD (Vira-lata)',
        age: '5 meses',
        location: 'Rio de Janeiro, RJ',
        image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1169'
    },
    {
        id: 3,
        name: 'Thor',
        breed: 'Pastor Alemão',
        age: '1 ano',
        location: 'Curitiba, PR',
        image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=1074'
    },
    {
        id: 4,
        name: 'Mel',
        breed: 'Beagle',
        age: '3 anos',
        location: 'Belo Horizonte, MG',
        image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=694'
    },
    {
        id: 5,
        name: 'Max',
        breed: 'Labrador',
        age: '4 anos',
        location: 'Porto Alegre, RS',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=687'
    },
    {
        id: 6,
        name: 'Amora',
        breed: 'Gato Siamês',
        age: '2 meses',
        location: 'Salvador, BA',
        image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=735'
    }
];

export default function PetGallery() {
    return (
        <section className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Conheça nossos Amiguinhos</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Cada um desses focinhos tem uma história e está esperando por uma família para chamar de sua.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {MOCK_PETS.map(pet => (
                        <PetCard key={pet.id} pet={pet} />
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <button className="btn glass" style={{ padding: '1rem 3rem' }}>
                        Ver todos os pets
                    </button>
                </div>
            </div>
        </section>
    );
}
