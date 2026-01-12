
import React, { useState } from 'react';
import { VaultTab, VaultItem } from '../types';

const MOCK_ITEMS: VaultItem[] = [
  { id: '1', title: 'Main Admin Email', subtitle: 'Last updated: 3 days ago', type: VaultTab.PASSWORDS, updatedAt: '3 days ago', icon: 'shield_moon' },
  { id: '2', title: 'Corporate Titanium Card', subtitle: 'Exp: 08/28 • **** 9421', type: VaultTab.CREDIT_CARDS, updatedAt: '1 week ago', icon: 'payments' },
  { id: '3', title: 'Project X Roadmap', subtitle: 'Encrypted document', type: VaultTab.SECURE_NOTES, updatedAt: '2 hours ago', icon: 'description' },
  { id: '4', title: 'Personal Gmail', subtitle: 'Last updated: 1 day ago', type: VaultTab.PASSWORDS, updatedAt: '1 day ago', icon: 'mail' },
];

const VaultList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<VaultTab>(VaultTab.PASSWORDS);

  const filteredItems = MOCK_ITEMS.filter(item => item.type === activeTab);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center border-b border-white/5 gap-8 overflow-x-auto no-scrollbar">
        <button 
          onClick={() => setActiveTab(VaultTab.PASSWORDS)}
          className={`pb-4 px-1 text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all border-b-2 ${
            activeTab === VaultTab.PASSWORDS ? 'text-cyan-400 border-cyan-500' : 'text-silver-500 hover:text-silver-300 border-transparent'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">vpn_key</span> Passwords
        </button>
        <button 
          onClick={() => setActiveTab(VaultTab.CREDIT_CARDS)}
          className={`pb-4 px-1 text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all border-b-2 ${
            activeTab === VaultTab.CREDIT_CARDS ? 'text-cyan-400 border-cyan-500' : 'text-silver-500 hover:text-silver-300 border-transparent'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">credit_card</span> Credit Cards
        </button>
        <button 
          onClick={() => setActiveTab(VaultTab.SECURE_NOTES)}
          className={`pb-4 px-1 text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all border-b-2 ${
            activeTab === VaultTab.SECURE_NOTES ? 'text-cyan-400 border-cyan-500' : 'text-silver-500 hover:text-silver-300 border-transparent'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">description</span> Secure Notes
        </button>
      </div>

      <div className="space-y-3">
        {filteredItems.map((item) => (
          <div key={item.id} className="vault-glass rounded-2xl p-4 flex items-center justify-between hover:bg-navy-800/50 transition-all group cursor-pointer border-transparent hover:border-cyan-500/20">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-xl bg-navy-900 border border-white/5 flex items-center justify-center text-silver-400 group-hover:text-cyan-400 transition-colors">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div>
                <p className="text-sm font-bold text-silver-200">{item.title}</p>
                <p className="text-xs text-silver-500">{item.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-silver-500 hover:text-cyan-400 transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  {item.type === VaultTab.CREDIT_CARDS ? 'visibility' : 'content_copy'}
                </span>
              </button>
              <button className="p-2 text-silver-500 hover:text-cyan-400 transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  {item.type === VaultTab.CREDIT_CARDS ? 'edit' : 'open_in_new'}
                </span>
              </button>
            </div>
          </div>
        ))}
        {filteredItems.length === 0 && (
          <div className="py-12 flex flex-col items-center justify-center text-silver-500/50 border-2 border-dashed border-white/5 rounded-2xl">
            <span className="material-symbols-outlined text-[48px] mb-2 opacity-20">folder_open</span>
            <p className="text-sm">No items found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VaultList;
