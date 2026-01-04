
import React, { useState, useEffect } from 'react';

interface ContactProps {
  prefilledProduct?: string;
}

const Contact: React.FC<ContactProps> = ({ prefilledProduct = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: prefilledProduct,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData(prev => ({ ...prev, product: prefilledProduct }));
  }, [prefilledProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <div className="py-24 bg-forest text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">Canal Directo</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">Iniciemos una <br /><span className="italic font-normal">conversación</span></h2>
            <p className="text-white/60 text-lg mb-12 font-light leading-relaxed">
              Cada mueble Robledo es un proyecto personal. Cuéntenos su visión y le acompañaremos en el proceso de creación de su pieza única.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1">El Taller</p>
                  <p className="text-white/40 text-sm font-light leading-relaxed">Camino Viejo de Burgos, Nave 4,<br />42004 Soria, España</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1">Teléfono & WhatsApp</p>
                  <p className="text-white/40 text-sm font-light">+34 975 12 34 56</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 shadow-2xl text-forest reveal" style={{ transitionDelay: '0.2s' }}>
            {submitted ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-8">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">Solicitud Recibida</h3>
                <p className="text-gray-400 font-light leading-relaxed">Nuestro equipo revisará su proyecto y le contactará en menos de 24 horas laborables.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Nombre Completo</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-gray-100 py-3 focus:border-accent outline-none transition-colors text-sm font-light"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Correo Electrónico</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-transparent border-b border-gray-100 py-3 focus:border-accent outline-none transition-colors text-sm font-light"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-accent">Teléfono (Prioridad)</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-transparent border-b-2 border-accent/20 py-3 focus:border-accent outline-none transition-colors text-sm font-bold"
                      placeholder="+34 ..."
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Pieza de Interés</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-gray-100 py-3 focus:border-accent outline-none transition-colors text-sm font-light"
                      value={formData.product}
                      onChange={e => setFormData({...formData, product: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Mensaje o Medidas Específicas</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-gray-50 border-none p-4 focus:ring-1 focus:ring-accent outline-none transition-all text-sm font-light"
                    placeholder="Describa el mueble de sus sueños..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-5 bg-forest text-white font-bold uppercase tracking-[0.4em] text-[11px] hover:bg-accent transition-all shadow-xl hover:-translate-y-1"
                >
                  Enviar Propuesta
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos abstractos */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full -ml-48 -mb-48"></div>
    </div>
  );
};

export default Contact;
