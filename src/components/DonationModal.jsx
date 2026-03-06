import { useState } from 'react';
import { X, CreditCard, Heart, ArrowRight, Wallet } from 'lucide-react';

export default function DonationModal({ onClose }) {
    const [step, setStep] = useState(1);
    const [amount, setAmount] = useState('50');

    const handleNext = () => setStep(2);
    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(3);
    };

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
                maxWidth: '450px',
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

                {step === 1 && (
                    <>
                        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                            <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}><Heart size={48} fill="currentColor" /></div>
                            <h2 style={{ marginBottom: '0.5rem' }}>Faça uma <span style={{ color: 'var(--primary)' }}>Doação</span></h2>
                            <p style={{ color: 'var(--text-muted)' }}>Escolha o valor de sua contribuição única.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                            {['20', '50', '100', '200'].map(val => (
                                <button
                                    key={val}
                                    onClick={() => setAmount(val)}
                                    style={{
                                        padding: '1.2rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: '2px solid',
                                        borderColor: amount === val ? 'var(--primary)' : '#eee',
                                        background: amount === val ? 'rgba(99, 102, 241, 0.05)' : 'white',
                                        fontWeight: 700,
                                        fontSize: '1.2rem',
                                        color: amount === val ? 'var(--primary)' : 'var(--text-main)',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    R$ {val}
                                </button>
                            ))}
                        </div>

                        <button className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', justifyContent: 'center' }} onClick={handleNext}>
                            Continuar com R$ {amount}
                            <ArrowRight size={18} />
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <h2 style={{ marginBottom: '2rem' }}>Forma de Pagamento</h2>
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                                <label className="glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.2rem', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                                    <input type="radio" name="payment" defaultChecked />
                                    <CreditCard size={20} />
                                    <span>Cartão de Crédito</span>
                                </label>
                                <label className="glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.2rem', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                                    <input type="radio" name="payment" />
                                    <Wallet size={20} />
                                    <span>PIX (Instantâneo)</span>
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', justifyContent: 'center' }}>
                                Finalizar Doação
                            </button>
                        </form>
                    </>
                )}

                {step === 3 && (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <div style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}><ArrowRight size={64} style={{ transform: 'rotate(-45deg)' }} /></div>
                        <h2 style={{ marginBottom: '1rem' }}>Muito Obrigado!</h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            Sua doação de <strong>R$ {amount}</strong> foi processada com sucesso. Você acaba de ajudar a melhorar a vida de nossos pets!
                        </p>
                        <button className="btn btn-primary" style={{ marginTop: '2.5rem', width: '100%' }} onClick={onClose}>
                            De nada!
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
