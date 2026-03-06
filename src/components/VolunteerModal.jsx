import { X, CheckCircle2, User, Phone, MapPin, ClipboardList } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function VolunteerModal({ onClose }) {
    // ID real ativado: mykngren
    const [state, handleSubmit] = useForm("mykngren");

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '2rem'
        }} onClick={onClose}>
            <div className="glass animate-fade-in" style={{
                background: 'white',
                width: '100%',
                maxWidth: '500px',
                borderRadius: 'var(--radius-lg)',
                padding: '3rem',
                position: 'relative',
                boxShadow: 'var(--shadow-lg)'
            }} onClick={e => e.stopPropagation()}>
                <button onClick={onClose} style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    background: 'none',
                    color: 'var(--text-muted)'
                }}>
                    <X size={24} />
                </button>

                {!state.succeeded ? (
                    <>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Seja um <span style={{ color: 'var(--primary)' }}>Voluntário</span></h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Preencha seus dados para entrar em nossa lista de espera.</p>

                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="_subject" value="Nova Inscrição de Voluntário - Patinhas na Nuvem" />

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.2rem' }}>
                                <div>
                                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.85rem' }}>Nome</label>
                                    <input id="name" name="Nome" required className="glass" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee' }} />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                                </div>
                                <div>
                                    <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.85rem' }}>Telefone</label>
                                    <input id="phone" name="Telefone" required className="glass" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee' }} />
                                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.2rem' }}>
                                <label htmlFor="area" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.85rem' }}>Área de Interesse</label>
                                <select id="area" name="Área de Interesse" className="glass" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee', background: 'white' }}>
                                    <option>Passeio com Animais</option>
                                    <option>Limpeza e Organização</option>
                                    <option>Eventos e Marketing</option>
                                    <option>Fotografia de Pets</option>
                                </select>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label htmlFor="reason" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.85rem' }}>Por que quer ser voluntário?</label>
                                <textarea id="reason" name="Motivação" required style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee', height: '100px', fontFamily: 'inherit' }}></textarea>
                                <ValidationError prefix="Reason" field="reason" errors={state.errors} />
                            </div>

                            <button type="submit" className="btn btn-primary" disabled={state.submitting} style={{ width: '100%', padding: '1.2rem', justifyContent: 'center' }}>
                                {state.submitting ? 'Enviando...' : 'Enviar Inscrição'}
                            </button>
                        </form>
                    </>
                ) : (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <div style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}><CheckCircle2 size={64} /></div>
                        <h2 style={{ marginBottom: '1rem' }}>Inscrição Recebida!</h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            Obrigado por querer ajudar! Nossa equipe analisará seu perfil e entrará em contato em até 5 dias úteis.
                        </p>
                        <button className="btn btn-primary" style={{ marginTop: '2.5rem', width: '100%' }} onClick={onClose}>
                            Fechar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
