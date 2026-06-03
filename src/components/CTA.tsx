import React from 'react';
import { Page } from '../types';

export const CTA = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <section className="relative h-screen min-h-[500px] bg-black flex flex-col items-center justify-center text-center px-4 md:px-6 overflow-hidden">
      {/* Mountain Video BG */}
      <div className="absolute inset-0 z-0">
        <video
          src="/assets/mountain-cta.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        {/* General overlay for text legibility */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        
        {/* Smooth seamless fade specifically at the bottom to blend with the footer */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10">
        <span className="text-white/60 mb-6 block label tracking-[0.5em] opacity-100">GET STARTED TODAY</span>
        <h2 className="text-white mb-8">CONSIDER IT<br />DELIVERED.</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button
            onClick={() => setPage("GetAccess")}
            className="px-12 py-5 border border-white/20 bg-transparent text-white font-bold uppercase tracking-widest rounded-full text-[16px] transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_4px_25px_rgba(255,255,255,0.15)]"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};
