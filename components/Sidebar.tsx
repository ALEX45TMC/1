
import React from 'react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'main', label: 'Main Vault', icon: 'enhanced_encryption' },
    { id: 'passwords', label: 'Passwords', icon: 'password' },
    { id: 'cards', label: 'Payment Cards', icon: 'credit_card' },
    { id: 'notes', label: 'Secure Notes', icon: 'sticky_note_2' },
  ];

  const protocolItems = [
    { id: 'audit', label: 'Security Audit', icon: 'analytics' },
    { id: 'emergency', label: 'Emergency Access', icon: 'family_restroom' },
    { id: 'offline', label: 'Offline Access', icon: 'vpn_lock' },
  ];

  return (
    <aside className="flex w-72 flex-col border-r border-slate-200 dark:border-white/5 bg-white dark:bg-navy-950 flex-shrink-0 transition-all duration-300 z-20">
      <div className="flex h-16 items-center px-6 border-b border-slate-200 dark:border-white/5">
        <div className="flex items-center gap-3 text-cyan-500">
          <svg className="size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
          </svg>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-silver-200">DataHub</h1>
        </div>
      </div>
      
      <div className="flex flex-col flex-1 overflow-y-auto no-scrollbar p-4 gap-6">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 transition-colors h-12 text-white shadow-lg shadow-cyan-500/20">
          <span className="material-symbols-outlined text-[20px]">add_circle</span>
          <span className="text-sm font-bold tracking-wide">Secure Entry</span>
        </button>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors font-medium ${
                activeSection === item.id 
                  ? 'bg-cyan-500/10 text-cyan-500 font-bold border border-cyan-500/20' 
                  : 'text-slate-600 dark:text-silver-400 hover:bg-slate-100 dark:hover:bg-navy-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined text-[20px] ${activeSection === item.id ? 'icon-fill' : ''}`}>{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </div>
              {activeSection === item.id && (
                <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></span>
              )}
            </button>
          ))}

          <div className="my-4 flex items-center gap-2 px-3">
            <span className="text-[10px] font-bold text-slate-400 dark:text-navy-700 uppercase tracking-widest">Advanced Protocols</span>
            <div className="h-px bg-slate-200 dark:bg-white/5 flex-1"></div>
          </div>

          {protocolItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${
                activeSection === item.id 
                  ? 'bg-cyan-500/10 text-cyan-500 font-bold border border-cyan-500/20' 
                  : 'text-slate-600 dark:text-silver-400 hover:bg-slate-100 dark:hover:bg-navy-800'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${activeSection === item.id ? 'icon-fill' : ''}`}>{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto">
          <div className="flex flex-col gap-4 p-4 bg-slate-50 dark:bg-navy-950/60 rounded-xl border border-slate-200 dark:border-cyan-500/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-cyan-500 text-[18px]">key_visualizer</span>
                <span className="text-xs font-bold text-slate-900 dark:text-silver-200 uppercase tracking-tighter">Zero-Knowledge</span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-bold uppercase">Locked</span>
            </div>
            <p className="text-[10px] text-silver-400 leading-relaxed">Your decryption keys never leave this device. AES-256 standard active.</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
