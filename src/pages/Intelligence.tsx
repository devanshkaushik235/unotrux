import React from "react";
import { motion } from "motion/react";
import {
  Maximize,
  Gauge,
  ShieldCheck,
  History,
  CloudLightning,
  Zap,
  BatteryCharging,
  Wind
} from "lucide-react";
import { Page } from "../types";
import lightLeaksVideo from "../../assets/Effect, Shine, Lens, Light Leaks _ Stock Video Footage _ Artgrid.io_.mp4";
import highwayVideo from "../../assets/Highway, Road Surface, Route, Driving _ Stock Video Footage _ Artgrid.io_ (1).mp4";
import fleetOpsImg from "../../assets/ChatGPT Image May 27, 2026, 07_38_54 PM.png";
import { RevealHeading } from "../components/RevealHeading";

export const Intelligence = ({ setPage }: { setPage: (p: Page) => void }) => {


  return (
    <div className="bg-white min-h-screen pt-32 pb-20 md:pb-24 px-6 md:px-12 selection:bg-primary/10">
      <div className="max-w-[1440px] mx-auto">
        {/* Hero: Logistics Intelligence */}
        <div className="max-w-[1000px] mb-12">
          <span className="brand-chip font-mono opacity-50 mb-8">LOGISTICS INTELLIGENCE</span>
          <RevealHeading as="h1" className="text-[clamp(44px,7vw,88px)] font-poppins font-normal leading-[0.9] tracking-tighter mb-6 uppercase text-primary">
            Advanced Fleet.<br />
            <span className="text-black/30">Intelligent Control.</span>
          </RevealHeading>
          <div className="space-y-4 max-w-[800px]">
            <p className="text-[16px] md:text-[18px] opacity-50 leading-relaxed">
              Our long-term vision includes <span className="text-[#00FF66] font-medium">electric</span> freight vehicles, smarter route planning, and high-efficiency logistics designed for future-ready enterprise movement.
            </p>
          </div>
        </div>

        {/* Visual Section - Integrated Tech Hub */}
        <div className="mb-24">
          <div className="w-full max-sm:aspect-[4/3] aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-[24px] lg:rounded-[32px] overflow-hidden border border-black/5 bg-[#e5e7eb] group relative flex items-center justify-center text-center px-4 md:px-12 py-12 md:py-0">
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
              >
                <source src={highwayVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-1000" />
            </div>

            <div className="relative z-10 space-y-4 md:space-y-6 max-w-[800px] mx-auto flex flex-col items-center justify-center text-center">
              <span className="brand-chip-dark font-mono opacity-50">
                ADVANCED FLEET SYSTEMS
              </span>
              <RevealHeading className="max-sm:text-[42px] text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-poppins font-normal leading-[0.95] tracking-tighter text-white uppercase drop-shadow-xl md:whitespace-nowrap">
                TRANSPORT <span className="text-white/50">OPERATIONS CENTER</span>
              </RevealHeading>
              <p className="font-sans text-[14px] sm:text-[18px] md:text-[21px] text-white/80 leading-relaxed font-light drop-shadow-md md:whitespace-nowrap">
                Providing continuous oversight across every stage of movement.
              </p>
            </div>
          </div>
        </div>


        {/* Fleet System: BharatBenz Section */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 mb-24 border-t border-black/10 pt-20 items-center">
          <div className="lg:w-1/2">
            <span className="brand-chip font-mono opacity-50 mb-6">Fleet System</span>
            <RevealHeading className="text-[clamp(32px,4vw,48px)] font-poppins font-normal text-primary leading-[0.9] mb-6 uppercase tracking-tighter">
              BHARATBENZ <br /><span className="text-black/30 font-normal">FLEET</span>
            </RevealHeading>
            <p className="font-sans text-[16px] text-primary/60 leading-relaxed mb-10 max-w-[500px] font-normal">
              Our current fleet is powered by high-performance engineering, ensuring reliability across major freight corridors. Built for long-haul consistency and maximum safety.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pr-0 lg:pr-8">
              {[
                { title: "Heavy-Duty Capacity", desc: "Built for high-volume cargo movement.", icon: <Maximize size={24} /> },
                { title: "Fuel Efficiency", desc: "Optimized operational running costs.", icon: <Gauge size={24} /> },
                { title: "Safety Infrastructure", desc: "Advanced secure transit engineering.", icon: <ShieldCheck size={24} /> },
                { title: "National Reliability", desc: "Strong service support and uptime.", icon: <History size={24} /> }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-black/[0.02] border border-black/[0.03] p-6 rounded-[24px] group hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col gap-4"
                >
                  <div className="text-black/40 group-hover:text-black transition-colors duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-wide text-[15px] font-bold text-primary uppercase tracking-tight mb-2">{item.title}</h3>
                    <p className="text-primary/50 text-[13px] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-end mt-12 lg:mt-0">
            <div className="w-full rounded-[32px] overflow-hidden aspect-[4/5] md:aspect-square shadow-2xl border border-black/5 relative group">
              <img
                src={fleetOpsImg}
                alt="Fleet Operations"
                className="w-full h-full object-cover scale-[1.03] group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* EV Infrastructure Section */}
        <div className="flex flex-col gap-12 mb-16 bg-primary/5 rounded-[48px] max-sm:p-6 p-8 md:p-12 overflow-hidden relative border border-primary/10">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={lightLeaksVideo}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          />

          <div className="relative z-10 max-w-3xl">
            <span className="brand-chip-dark font-mono opacity-50 mb-6">Sustainability</span>
            <RevealHeading className="max-sm:text-[46px] max-sm:leading-[1.0] text-[clamp(32px,4vw,48px)] font-poppins font-normal text-white leading-[0.9] mb-6 uppercase tracking-tighter"><span className="text-[#00FF66]">Electric</span> Freight <br /><span className="text-white/50 font-normal">Corridors.</span></RevealHeading>
            <p className="font-sans text-white/80 max-sm:text-[18px] text-[16px] leading-relaxed font-normal">
              Planned deployment of <span className="text-[#00FF66] font-bold">EV</span> trucks across high-frequency domestic routes to reduce fuel dependency and improve urban transport performance.
            </p>
          </div>

          <div className="relative z-10 w-full rounded-[32px] overflow-hidden max-sm:aspect-[4/5] aspect-[21/9] md:aspect-[16/7] border border-primary/10 shadow-xl group">
            <video
              src="/assets/intelligence-1-etrucks.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Carbon Reduction", d: "Cleaner transport systems for growth.", icon: <CloudLightning size={24} /> },
              { t: "Operating Costs", d: "Fuel optimization via fleet adoption.", icon: <Zap size={24} /> },
              { t: "Smart Charging", d: "Hubs planned across key corridors.", icon: <BatteryCharging size={24} /> },
              { t: "Silent Movement", d: "Improved urban transport efficiency.", icon: <Wind size={24} /> }
            ].map((item, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-xl max-sm:p-4 max-sm:min-h-[160px] p-8 min-h-[240px] flex flex-col justify-center rounded-[32px] max-sm:rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:bg-white/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 group">
                <div className="text-white max-sm:mb-3 mb-6 opacity-60 group-hover:opacity-100 transition-opacity max-sm:scale-75 origin-left">{item.icon}</div>
                <h4 className="font-wide max-sm:text-[14px] text-[16px] font-bold max-sm:mb-1 mb-2 uppercase tracking-tight text-white">{item.t}</h4>
                <p className="max-sm:text-[12px] text-[14px] text-white/80 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Engine Section */}
        <div className="flex flex-col lg:flex-row gap-16 md:gap-20 mb-16 border-t border-black/10 pt-16">
          <div className="lg:w-[40%]">
            <span className="brand-chip font-mono opacity-50 mb-6 md:mb-12">Operational Intelligence</span>
            <RevealHeading className="text-[38px] md:text-[54px] lg:text-[64px] leading-[0.95] font-normal tracking-tighter text-primary font-poppins uppercase">
              Optimized <br /><span className="text-black/30 font-normal">Movement.</span>
            </RevealHeading>
            <p className="mt-8 font-sans text-[16px] text-primary/60 leading-relaxed max-w-[400px] font-normal">
              A next-generation logistics framework powered by route orchestration and predictive coordination.
            </p>
          </div>
          <div className="lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { num: "01", title: "AI Route Optimization", desc: "Smarter path selection based on traffic, fuel, and delivery urgency.", status: "OPTIMIZED", color: "text-black/40 border-black/10" },
              { num: "02", title: "Predictive Maintenance", desc: "Vehicle health monitoring through real-time sensors before failures happen.", status: "MONITORING", color: "text-black/40 border-black/10" },
              { num: "03", title: "Load Efficiency Planning", desc: "Maximum cargo utilization with reduced empty movement across the grid.", status: "SCALED", color: "text-black/40 border-black/10" },
              { num: "04", title: "Delay Prevention Systems", desc: "Early identification of bottlenecks and disruptions in the transport flow.", status: "ACTIVE", color: "text-black/40 border-black/10" }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black/[0.02] backdrop-blur-sm max-sm:p-6 p-8 md:p-10 rounded-3xl flex flex-col gap-6 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-black/[0.03] group"
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[28px] font-extralight text-black/20 leading-none group-hover:text-black transition-colors duration-500">{step.num}</span>
                  <span className={`font-mono text-[10px] font-bold px-3 py-1 rounded-full border ${step.color} tracking-[0.2em] uppercase`}>{step.status}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-[18px] md:text-[20px] font-normal mb-3 tracking-tight font-poppins uppercase leading-tight">{step.title}</h3>
                  <p className="text-black/50 text-[14px] leading-relaxed font-normal font-sans">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Section with Overlays */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="group relative bg-primary/5 rounded-[32px] overflow-hidden min-h-[300px] flex flex-col justify-between max-sm:p-6 p-8 md:p-10 border border-primary/10">
            <img
              src="https://i.pinimg.com/originals/16/51/a4/1651a4e6639d1926afd2604881df8741.gif"
              alt="Sustainability"
              className="absolute inset-0 w-full h-full object-cover scale-[1.03] group-hover:scale-110 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:bg-black/50 transition-all duration-700" />
            <div className="relative z-10">
              <span className="brand-chip-dark font-mono opacity-50 mb-6">Future Scale</span>
              <h3 className="text-[clamp(24px,4vw,36px)] font-poppins font-normal text-white leading-[0.9] mb-4 uppercase tracking-tighter">Built for<br />Long-term Scale.</h3>
            </div>
            <p className="relative z-10 text-white/60 text-[15px] max-w-[500px] leading-relaxed">
              Sustainable logistics is not optional — it is the future of enterprise movement. UNOTRUX is designing systems that combine environmental responsibility with scalable infrastructure.
            </p>
          </div>
          <div className="group relative bg-primary rounded-[32px] overflow-hidden min-h-[300px] flex flex-col justify-between max-sm:p-6 p-8 md:p-10">
            <img
              src="https://i.pinimg.com/originals/ef/64/c3/ef64c36c9ad314e2540e4ee421331ba4.gif"
              alt="Future Vision"
              className="absolute inset-0 w-full h-full object-cover scale-[1.03] group-hover:scale-110 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:bg-black/50 transition-all duration-700" />
            <div className="relative z-10">
              <span className="brand-chip-dark font-mono opacity-50 mb-6">Projected</span>
              <h3 className="text-[clamp(24px,4vw,36px)] font-poppins font-normal text-white leading-[0.9] mb-4 uppercase tracking-tighter">The Future Moves<br /><span className="text-[#00FF66]">Electric.</span></h3>
            </div>
            <p className="relative z-10 text-white/60 text-[15px] max-w-[500px] leading-relaxed">
              Building India’s next-generation logistics backbone with future-ready fleet systems, <span className="text-[#00FF66] font-bold">EV</span> adoption, and infrastructure designed for long-term domestic and international expansion.
            </p>
          </div>
        </div>

        {/* Brand Statement Section */}
        <div className="text-center py-16 px-6 border-t border-black/10">
          <span className="brand-chip font-mono opacity-50 mb-8">Conclusion</span>
          <RevealHeading className="text-[clamp(36px,5vw,64px)] font-poppins font-normal tracking-tighter uppercase leading-[0.9] text-primary mb-8">
            The Future Moves <span className="text-[#00FF66]">Electric.</span>
          </RevealHeading>
          <div className="font-label flex flex-wrap justify-center gap-x-8 gap-y-4 text-[11px] font-bold uppercase tracking-widest text-primary/40">
            <span>Precision today</span>
            <span className="hidden md:inline">•</span>
            <span>Sustainability tomorrow</span>
            <span className="hidden md:inline">•</span>
            <span>Infrastructure for both</span>
          </div>
        </div>
      </div>

    </div>
  );
};
