
import React, { useState } from 'react';

const SecurityAudit: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-cyan-500">health_and_safety</span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-silver-100">Security Audit Results</h3>
        </div>
        <button 
          onClick={handleScan}
          disabled={isScanning}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 text-xs font-black uppercase tracking-widest hover:bg-cyan-500/20 transition-all border border-cyan-500/20 shadow-sm disabled:opacity-50"
        >
          <span className={`material-symbols-outlined text-[18px] rounded-full ${isScanning ? 'animate-spin' : 'security-scan-pulse'}`}>
            refresh
          </span>
          {isScanning ? 'Scanning...' : 'Run Global Scan'}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="vault-glass rounded-3xl p-6 border-yellow-500/20 bg-yellow-500/[0.03]">
          <div className="flex items-center justify-between mb-5">
            <div className="size-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20">
              <span className="material-symbols-outlined text-[28px]">lock_reset</span>
            </div>
            <div className="text-right">
              <span className="text-xl font-bold text-yellow-500">12</span>
              <p className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest">Identified</p>
            </div>
          </div>
          <h4 className="font-bold text-silver-100 text-lg">Weak Passwords</h4>
          <p className="text-sm text-silver-400 mt-2 mb-6 leading-relaxed">System identified entries using common words or short character counts.</p>
          <button className="w-full py-3 rounded-xl bg-yellow-500/10 hover:bg-yellow-500/20 text-[11px] font-black text-yellow-500 uppercase tracking-widest transition-all border border-yellow-500/10">Strengthen Items</button>
        </div>
        
        <div className="vault-glass rounded-3xl p-6 border-red-500/20 bg-red-500/[0.03]">
          <div className="flex items-center justify-between mb-5">
            <div className="size-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
              <span className="material-symbols-outlined text-[28px]">content_copy</span>
            </div>
            <div className="text-right">
              <span className="text-xl font-bold text-red-500">4</span>
              <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">Duplicates</p>
            </div>
          </div>
          <h4 className="font-bold text-silver-100 text-lg">Reused Passwords</h4>
          <p className="text-sm text-silver-400 mt-2 mb-6 leading-relaxed">Identical credentials used across multiple distinct accounts.</p>
          <button className="w-full py-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-[11px] font-black text-red-500 uppercase tracking-widest transition-all border border-red-500/10">Diversify Keys</button>
        </div>
      </div>
    </section>
  );
};

export default SecurityAudit;
