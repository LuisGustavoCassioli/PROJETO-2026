import { Cloud, Heart, Target, Users } from 'lucide-react';

export default function AboutUs() {
    return (
        <div className="section-padding" style={{ marginTop: '60px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Nossa <span style={{ color: 'var(--primary)' }}>História</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        Transformando o abandono em amor, uma patinha por vez, desde 2020.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '6rem'
                }}>
                    {[
                        {
                            title: 'Missão',
                            icon: <Target size={32} />,
                            text: 'Garantir que nenhum animal sofra por falta de um lar seguro e amoroso.'
                        },
                        {
                            title: 'Visão',
                            icon: <Cloud size={32} />,
                            text: 'Ser a plataforma líder em adoções responsáveis e fomento ao voluntariado animal.'
                        },
                        {
                            title: 'Valores',
                            icon: <Heart size={32} />,
                            text: 'Ética, transparência, compromisso com a vida e amor incondicional aos animais.'
                        }
                    ].map((item, i) => (
                        <div key={i} className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                            <h3 style={{ marginBottom: '1rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="glass" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    alignItems: 'center',
                    gap: '4rem',
                    padding: '4rem',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: '6rem'
                }}>
                    <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '400px' }}>
                        <img
                            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=687"
                            alt="People with animals"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Quem Somos</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            A Patinhas na Nuvem nasceu da união de desenvolvedores e protetores de animais que viram na tecnologia uma ponte para facilitar encontros felizes.
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            Hoje, somos uma rede de mais de 50 abrigos parceiros e milhares de voluntários dedicados a mudar a realidade de cães e gatos em todo o Brasil.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
