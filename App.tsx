
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Workshop from './components/Workshop';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WoodConsultant from './components/WoodConsultant';
import Sustainability from './components/Sustainability';
import Testimonials from './components/Testimonials';

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
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        
        <section id="consultor" className="py-24 bg-white relative">
           <div className="max-w-7xl mx-auto px-4">
              <WoodConsultant />
           </div>
        </section>

        <section id="catalogo" className="bg-[#FDFBF7]">
          <Catalog onBudgetRequest={handleRequestBudget} />
        </section>

        <Sustainability />
        
        <section id="taller">
          <Workshop />
        </section>

        <Testimonials />
        
        <section id="contacto">
          <Contact prefilledProduct={selectedProductForBudget || ''} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
