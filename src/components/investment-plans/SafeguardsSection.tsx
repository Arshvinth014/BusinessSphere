import React from 'react';
import { Shield, Lock, Building, Percent } from 'lucide-react';
import { SAFEGUARDS_DATA } from '../../mock/investmentPlansData';

export const SafeguardsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Shield': return <Shield className="w-5 h-5 text-slate-700" />;
      case 'Lock': return <Lock className="w-5 h-5 text-slate-700" />;
      case 'Building': return <Building className="w-5 h-5 text-slate-700" />;
      case 'Percent': return <Percent className="w-5 h-5 text-slate-700" />;
      default: return <Shield className="w-5 h-5 text-slate-700" />;
    }
  };

  return (
    <section className="w-full py-16 bg-white text-slate-900">
      <div className="w-full max-w-[1700px] 2xl:max-w-[2200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 text-center space-y-10">
        
        <div className="space-y-2 max-w-2xl mx-auto">
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
            INSTITUTIONAL CUSTODY & OVERSIGHT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Bank-Grade Safeguards on Every Account
          </h2>
        </div>

        {/* 4 Feature Items Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SAFEGUARDS_DATA.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-200/70 flex items-center justify-center">
                {getIcon(item.iconName)}
              </div>
              <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.subtitle}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
