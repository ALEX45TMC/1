
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SecurityAudit from './components/SecurityAudit';
import VaultList from './components/VaultList';
import ControlPanel from './components/ControlPanel';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('main');

  return (
    <div className="flex h-screen w-full relative">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex flex-1 flex-col h-full relative overflow-hidden bg-background-light dark:bg-background-dark">
        <Header />
        
        <div className="flex-1 overflow-y-auto scroll-smooth no-scrollbar">
          <HeroSection />
          
          <div className="p-8">
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Content Area */}
              <div className="lg:col-span-8 flex flex-col gap-10">
                <SecurityAudit />
                <VaultList />
              </div>
              
              {/* Side Panels */}
              <ControlPanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
