
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex h-16 items-center justify-between px-6 border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-navy-950/80 backdrop-blur-md z-30 sticky top-0">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 dark:text-silver-400">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </div>
          <input 
            className="block w-full rounded-lg border-0 bg-slate-100 dark:bg-navy-900 py-2.5 pl-10 pr-4 text-sm text-slate-900 dark:text-silver-200 placeholder-slate-500 dark:placeholder-silver-400/50 focus:ring-2 focus:ring-cyan-500 transition-all border border-transparent dark:border-white/5" 
            placeholder="Search Vault..." 
            type="text"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden xl:flex items-center gap-3 px-4 py-2 rounded-full bg-navy-900 border border-cyan-500/20">
          <span className="material-symbols-outlined text-[18px] text-cyan-400">lock_clock</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-silver-400 uppercase">Auto-lock:</span>
            <span className="text-[11px] font-black text-cyan-400">15 MIN</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors relative" title="Security Score">
            <span className="material-symbols-outlined text-[22px] text-cyan-400">shield_with_heart</span>
            <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full border-2 border-navy-950"></span>
          </button>
          <button className="flex items-center justify-center p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors">
            <span className="material-symbols-outlined text-[22px]">settings</span>
          </button>
        </div>
        
        <div className="h-6 w-px bg-slate-200 dark:bg-white/10 mx-1"></div>
        
        <button className="flex items-center gap-3 pl-2 group">
          <div 
            className="size-9 rounded-full bg-cover bg-center ring-2 ring-cyan-500/30 group-hover:ring-cyan-500 transition-all" 
            style={{backgroundImage: `url('https://picsum.photos/seed/user/200')`}}
          ></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
