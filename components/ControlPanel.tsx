
import React, { useState } from 'react';

const ControlPanel: React.FC = () => {
  const [offlineAccess, setOfflineAccess] = useState(true);
  const [lockTime, setLockTime] = useState('15M');

  return (
    <div className="lg:col-span-4 flex flex-col gap-8">
      {/* Auto-Lock System */}
      <section className="vault-glass rounded-3xl p-7 cyan-glow border-cyan-500/30">
        <div className="flex items-center gap-4 mb-8">
          <div className="size-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
            <span className="material-symbols-outlined text-[28px]">lock_clock</span>
          </div>
          <div>
            <h4 className="font-bold text-silver-100 text-lg">Auto-Lock System</h4>
            <p className="text-xs text-cyan-500/70 font-bold uppercase tracking-widest">Active Protection</p>
          </div>
        </div>
        
        <div className="space-y-5">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-silver-500 uppercase tracking-[0.1em]">Idle Inactivity Timer</label>
            <div className="grid grid-cols-4 gap-2">
              {['5M', '15M', '1H', 'OFF'].map((t) => (
                <button 
                  key={t}
                  onClick={() => setLockTime(t)}
                  className={`py-2 text-[10px] font-bold rounded-lg border transition-all ${
                    lockTime === t 
                      ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400' 
                      : 'border-white/5 bg-navy-900 text-silver-400 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between py-3 border-t border-white/5">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-silver-400 text-[20px]">cloud_off</span>
              <span className="text-sm font-medium text-silver-200">Offline Access</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={offlineAccess} 
                onChange={(e) => setOfflineAccess(e.target.checked)} 
              />
              <div className="w-10 h-5 bg-navy-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-white"></div>
            </label>
          </div>
          
          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-navy-800 to-navy-900 text-xs font-black text-white border border-white/10 hover:border-cyan-500/40 transition-all uppercase tracking-[0.2em] shadow-lg">
            Terminate All Sessions
          </button>
        </div>
      </section>

      {/* Emergency Access */}
      <section className="vault-glass rounded-3xl p-7 border-navy-800">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-sm font-black text-silver-400 uppercase tracking-widest flex items-center gap-2">
            <span className="material-symbols-outlined text-cyan-500 text-[18px]">emergency_share</span>
            Emergency Access
          </h4>
          <span className="size-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-navy-950/80 border border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <span className="material-symbols-outlined text-[18px]">person</span>
              </div>
              <span className="text-xs font-bold text-silver-200">m.ross@trusted.com</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-silver-500">Wait: 7 Days</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-navy-800 text-silver-400 font-bold">Primary Contact</span>
            </div>
          </div>
          
          <button className="w-full py-3 rounded-xl border-2 border-dashed border-white/5 text-[11px] font-black text-silver-500 hover:text-cyan-400 hover:border-cyan-500/20 transition-all uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Assign Contact
          </button>
        </div>
      </section>

      {/* Vault Activity */}
      <section className="vault-glass rounded-3xl p-7">
        <h4 className="text-sm font-black text-silver-400 uppercase tracking-widest mb-6">Vault Activity</h4>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="size-1.5 mt-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></div>
            <div className="flex-1">
              <p className="text-xs font-bold text-silver-100">Audit Scan Completed</p>
              <p className="text-[10px] text-silver-500 mt-1">10:24 AM • Desktop App</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="size-1.5 mt-2 rounded-full bg-silver-800"></div>
            <div className="flex-1">
              <p className="text-xs font-bold text-silver-300">Offline Sync Disabled</p>
              <p className="text-[10px] text-silver-500 mt-1">08:15 AM • Settings</p>
            </div>
          </div>
        </div>
        <button className="w-full mt-8 py-2 text-[10px] font-black text-cyan-500 uppercase tracking-[0.2em] hover:text-cyan-400 transition-colors">
          View Security Logs
        </button>
      </section>
    </div>
  );
};

export default ControlPanel;
