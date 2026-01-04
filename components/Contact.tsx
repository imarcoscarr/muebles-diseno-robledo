
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
    // Simulate sending
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-24 bg-forest text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">Empecemos su proyecto</h2>
            <p className="text-white/70 text-lg mb-10">
              Cada mueble Robledo comienza con una conversación. Cuéntenos qué tiene en mente y le ayudaremos a hacerlo realidad.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="font-bold">Nuestro Taller</p>
                  <p className="text-white/60">Cno. Viejo de Burgos, Nave 4, 42004 Soria, España</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="font-bold">Teléfono & WhatsApp</p>
                  <p className="text-white/60">+34 975 12 34 56</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-white/60">presupuestos@mueblesrobledo.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-sm p-8 md:p-12 shadow-2xl text-gray-800">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest">¡Mensaje Recibido!</h3>
                <p className="text-gray-600">Nos pondremos en contacto con usted en menos de 24 horas para discutir su presupuesto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Nombre Completo</label>
                    <input 
                      required
                      type="text" 
                      className="w-full border-b-2 border-gray-100 py-2 focus:border-forest outline-none transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full border-b-2 border-gray-100 py-2 focus:border-forest outline-none transition-colors"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      className="w-full border-b-2 border-gray-100 py-2 focus:border-forest outline-none transition-colors"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Pieza de Interés</label>
                    <input 
                      type="text" 
                      placeholder="Ej: Mesa Robledo Imperial"
                      className="w-full border-b-2 border-gray-100 py-2 focus:border-forest outline-none transition-colors"
                      value={formData.product}
                      onChange={e => setFormData({...formData, product: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Detalles del Proyecto</label>
                  <textarea 
                    rows={4}
                    className="w-full border-2 border-gray-100 p-3 focus:border-forest outline-none transition-colors rounded-sm"
                    placeholder="Cuéntenos medidas, tipo de madera o cualquier detalle..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 bg-forest text-white font-bold uppercase tracking-widest text-sm hover:bg-forest/90 transition-all shadow-lg"
                >
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48"></div>
    </div>
  );
};

export default Contact;
