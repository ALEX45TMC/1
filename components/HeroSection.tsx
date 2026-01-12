
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="vault-gradient border-b border-cyan-900/30 px-8 py-12 relative overflow-hidden">
      <div className="scanline"></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')"}}></div>
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#22d3ee 0.5px, transparent 0)", backgroundSize: "32px 32px"}}></div>
      
      <div className="mx-auto max-w-7xl relative">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-cyan-500 text-navy-950 text-[10px] font-black uppercase tracking-[0.2em]">Ultra Secure Vault</span>
              <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>E2EE Active</span>
              </div>
            </div>
            <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">Advanced Security &amp; Functional Controls</h2>
            <p className="text-silver-400 max-w-2xl text-base leading-relaxed">
              Manage your passwords, credit cards, and secure notes with local-only encryption. Your master key never leaves your device.
            </p>
          </div>
          
          <div className="flex items-center gap-8 bg-navy-950/60 p-6 rounded-3xl border border-cyan-500/20 backdrop-blur-xl cyan-glow">
            <div className="flex flex-col items-center gap-2">
              <div className="size-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-navy-950 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                <span className="material-symbols-outlined text-[24px]">face</span>
              </div>
              <span className="text-[10px] font-black text-silver-400 uppercase tracking-widest">You</span>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-500 to-transparent opacity-30"></div>
              <span className="material-symbols-outlined text-cyan-400 text-[20px]">enhanced_encryption</span>
              <div className="h-0.5 w-16 bg-gradient-to-l from-cyan-500 to-transparent opacity-30"></div>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="size-12 rounded-2xl bg-navy-800 flex items-center justify-center text-silver-500 border border-white/10">
                <span className="material-symbols-outlined text-[24px]">cloud_off</span>
              </div>
              <span className="text-[10px] font-black text-silver-500 uppercase tracking-widest">Server</span>
            </div>
            
            <div className="h-12 w-px bg-white/10 mx-2"></div>
            
            <div>
              <p className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-1">Architecture</p>
              <p className="text-[11px] text-silver-400 font-medium">Zero-Knowledge<br/>Proof System</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
