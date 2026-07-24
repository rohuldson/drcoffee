import React from 'react';
import { STATS } from '../data/coffeeData';

export const StatsBar: React.FC = () => {
  return (
    <section className="relative z-10 bg-[#f4efe6] border-y border-[#e2d5c3] py-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#e2d5c3]">
          {STATS.map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center ${idx !== 0 ? 'pt-6 md:pt-0' : ''}`}>
              <span className="font-serif-display text-4xl sm:text-5xl font-semibold text-[#3d2716] tracking-tight mb-1">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#8c5a2b] font-bold mb-1">
                {stat.label}
              </span>
              <p className="text-xs text-[#6b5847] font-medium max-w-[180px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
