import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    // Formulário real configurado com o ID fornecido: mykngren
    const [state, handleSubmit] = useForm("mykngren");

    if (state.succeeded) {
        return (
            <div className="section-padding" style={{ marginTop: '60px', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                        <CheckCircle2 size={80} />
                    </div>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Mensagem <span style={{ color: 'var(--primary)' }}>Enviada!</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Obrigado pelo contato. Recebemos sua mensagem e nossa equipe responderá em breve através do e-mail fornecido.
                    </p>
                    <button onClick={() => window.location.reload()} className="btn btn-primary">Enviar outra mensagem</button>
                </div>
            </div>
        );
    }

    return (
        <div className="section-padding" style={{ marginTop: '60px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Fale <span style={{ color: 'var(--primary)' }}>Conosco</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        Dúvidas, sugestões ou quer apenas dizer um oi? Estamos aqui para ouvir você.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    {/* Contact Info */}
                    <div className="animate-fade-in">
                        <h2 style={{ marginBottom: '2rem' }}>Informações de Contato</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {[
                                { icon: <MapPin size={24} />, label: 'Endereço', text: 'Rua das Patinhas, 123 - Nuvem, São Paulo - SP' },
                                { icon: <Phone size={24} />, label: 'Telefone', text: '(11) 98765-4321' },
                                { icon: <Mail size={24} />, label: 'E-mail', text: 'contato@patinhasnanuvem.org' },
                                { icon: <Clock size={24} />, label: 'Horário de Atendimento', text: 'Segunda à Sexta, das 09h às 18h' }
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
                                    <div>
                                        <h4 style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>{item.label}</h4>
                                        <p style={{ fontSize: '1.1rem' }}>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '3rem', borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '250px', border: '1px solid #eee' }}>
                            <img
                                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
                                alt="Map Placeholder"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }}
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass animate-fade-in" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', animationDelay: '0.1s' }}>
                        <h2 style={{ marginBottom: '2rem' }}>Mande uma Mensagem</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Formspree Configuration */}
                            <input type="hidden" name="_subject" value="Nova Mensagem de Contato - Patinhas na Nuvem" />

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Seu Nome</label>
                                <input id="name" name="Nome" required type="text" className="glass" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee' }} />
                                <ValidationError prefix="Name" field="name" errors={state.errors} />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>E-mail</label>
                                <input id="email" name="Email" required type="email" className="glass" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee' }} />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Assunto</label>
                                <select id="subject" name="Assunto" className="glass" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee', background: 'white' }}>
                                    <option>Dúvida sobre Adoção</option>
                                    <option>Quero ser Voluntário</option>
                                    <option>Doação de Mantimentos</option>
                                    <option>Outros</option>
                                </select>
                            </div>
                            <div style={{ marginBottom: '2rem' }}>
                                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Mensagem</label>
                                <textarea id="message" name="Mensagem" required style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee', height: '150px', fontFamily: 'inherit' }}></textarea>
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={state.submitting} style={{ width: '100%', padding: '1rem', justifyContent: 'center' }}>
                                {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
