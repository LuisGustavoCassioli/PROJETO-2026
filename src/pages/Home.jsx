import Hero from '../components/Hero';
import PetGallery from '../components/PetGallery';

export default function Home() {
    return (
        <>
            <Hero />
            <PetGallery />

            {/* Call to Action Section */}
            <section className="section-padding" style={{ background: 'var(--primary)', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Pronto para mudar uma vida?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>
                        Se você não pode adotar, ainda pode ajudar sendo um voluntário ou doando.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '1rem 2rem' }}>
                            Quero ser Voluntário
                        </button>
                        <button className="btn" style={{ border: '2px solid white', color: 'white', padding: '1rem 2rem' }}>
                            Fazer uma Doação
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
