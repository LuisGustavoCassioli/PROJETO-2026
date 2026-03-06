import { useState } from 'react';
import { X, Send, Heart } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function AdoptionModal({ pet, onClose }) {
    const [step, setStep] = useState(1);
    const [state, handleSubmit] = useForm("mykngren"); // ID real ativado


    if (state.succeeded || step === 3) {
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
                    padding: '2.5rem',
                    position: 'relative',
                    boxShadow: 'var(--shadow-lg)'
                }} onClick={e => e.stopPropagation()}>
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'rgba(16, 185, 129, 0.1)',
                            color: 'var(--secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem'
                        }}>
                            <Heart size={40} fill="currentColor" />
                        </div>
                        <h2 style={{ marginBottom: '1rem' }}>Solicitação Enviada!</h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            Obrigado pelo seu interesse! O abrigo analisará sua solicitação e entrará em contato via e-mail em até 48 horas.
                        </p>
                        <button className="btn btn-primary" style={{ marginTop: '2rem', width: '100%' }} onClick={onClose}>
                            Entendido
                        </button>
                    </div>
                </div>
            </div>
        );
    }

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
                padding: '2.5rem',
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

                {step === 1 && (
                    <>
                        <h2 style={{ marginBottom: '0.5rem' }}>Interesse em {pet.name}</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                            Preencha seus dados para que o abrigo possa entrar em contato com você.
                        </p>

                        <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                            {/* Configuração Formspree */}
                            <input type="hidden" name="_subject" value={`Interesse em Adoção: ${pet.name}`} />

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Nome Completo</label>
                                <input
                                    required
                                    id="name"
                                    name="Nome do Interessado"
                                    type="text"
                                    className="glass"
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee' }}
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>E-mail</label>
                                <input
                                    required
                                    id="email"
                                    name="Email de Contato"
                                    type="email"
                                    className="glass"
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee' }}
                                    placeholder="seu@email.com"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                                Próximo Passo
                            </button>
                        </form>
                    </>
                )}

                {step === 2 && (
                    <>
                        <h2 style={{ marginBottom: '0.5rem' }}>Quase lá!</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                            Conte-nos um pouco sobre sua experiência com animais.
                        </p>

                        <form onSubmit={handleSubmit}>
                            {/* Campos ocultos do step anterior para o Formspree receber tudo junto */}
                            <input type="hidden" name="Pet Selecionado" value={pet.name} />
                            <input type="hidden" name="ID do Pet" value={pet.id} />

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label htmlFor="reason" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Por que você quer adotar o {pet.name}?</label>
                                <textarea
                                    required
                                    id="reason"
                                    name="Motivação"
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee', height: '100px', fontFamily: 'inherit' }}
                                    placeholder="Conte-nos sua motivação..."
                                />
                                <ValidationError prefix="Reason" field="reason" errors={state.errors} />
                            </div>
                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Já teve outros pets?</label>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <label><input type="radio" name="Já teve pets?" value="sim" defaultChecked /> Sim</label>
                                    <label><input type="radio" name="Já teve pets?" value="nao" /> Não</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={state.submitting} style={{ width: '100%', padding: '1rem' }}>
                                {state.submitting ? 'Enviando...' : 'Enviar Solicitação'}
                                <Send size={18} />
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
