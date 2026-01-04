
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Workshop from './components/Workshop';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WoodConsultant from './components/WoodConsultant';

const App: React.FC = () => {
  const [selectedProductForBudget, setSelectedProductForBudget] = useState<string | null>(null);

  const handleRequestBudget = (productName: string) => {
    setSelectedProductForBudget(productName);
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        <section id="consultor" className="py-16 bg-[#1B3022]/5">
           <div className="max-w-7xl mx-auto px-4">
              <WoodConsultant />
           </div>
        </section>

        <section id="catalogo">
          <Catalog onBudgetRequest={handleRequestBudget} />
        </section>
        
        <section id="taller">
          <Workshop />
        </section>
        
        <section id="contacto">
          <Contact prefilledProduct={selectedProductForBudget || ''} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
