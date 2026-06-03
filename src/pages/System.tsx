/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  useInView
} from "motion/react";
import {
  Workflow,
  Settings,
  Globe,
  ArrowUpRight
} from "lucide-react";
import { Page } from "../types";
import { Network } from "./Network";
import steelFrameVideo from "../../assets/Steel Frame, Pipes, Drone, Storage Unit _ Stock Video Footage _ Artgrid.io_.mp4";
import trackingVideo from "../../assets/Tracking, Stock, Investment, Monitoring _ Stock Video Footage _ Artgrid.io_.mp4";
import neonLightsVideo from "../../assets/Lights, Glow, Neon, Animated _ Stock Video Footage _ Artgrid.io_ (1).mp4";
import { RevealHeading } from "../components/RevealHeading";
import neonLightsVideo2 from "../../assets/Lights, Glow, Neon, Animated _ Stock Video Footage _ Artgrid.io_.mp4";

// --- Components ---

const CountUp = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value % 1 === 0) return Math.round(latest);
    return latest.toFixed(1);
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, { duration, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest.toString());
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, duration, count, rounded, isInView]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

export const System = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-brand-dark selection:text-white">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-white relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[1000px] mb-12">
            <span className="brand-chip font-mono opacity-50 mb-8">SYSTEM CORE</span>
            <RevealHeading as="h1" className="text-[clamp(44px,7vw,88px)] font-poppins font-normal leading-[0.9] tracking-tighter mb-6 uppercase text-primary">
              Decision <br />
              <span className="text-black/30">Intelligence Layer.</span>
            </RevealHeading>
            <p className="text-[18px] md:text-[22px] max-w-[900px] leading-tight opacity-70 mb-10">
              Modern logistics demands more than movement it demands prediction. <br className="hidden md:block" />Our engine anticipates disruptions before they happen with surgical precision.
            </p>
          </div>

          <div className="mt-16">
            <div className="w-full max-sm:aspect-[4/3] aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-[24px] lg:rounded-[32px] overflow-hidden border border-black/5 bg-[#e5e7eb] group relative flex items-center justify-center text-center px-4 md:px-12 py-12 md:py-0">
              <div className="absolute inset-0 z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                >
                  <source src={steelFrameVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-1000" />
              </div>

              <div className="relative z-10 space-y-4 md:space-y-6 max-w-[800px]">
                <span className="brand-chip mb-2 md:mb-4 inline-block font-mono opacity-80 px-5 py-2 md:px-6 md:py-2.5 text-[10px] md:text-[11px] tracking-[0.25em] text-white border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
                  TRANSPORT MANAGEMENT
                </span>
                <RevealHeading className="max-sm:text-[42px] text-[32px] sm:text-[48px] md:text-[64px] font-poppins font-normal leading-[0.95] tracking-tighter text-white uppercase drop-shadow-xl">
                  Optimize <span className="text-white/70">Every Journey</span>
                </RevealHeading>
                <p className="font-sans text-[14px] sm:text-[18px] md:text-[21px] text-white/80 leading-relaxed font-light drop-shadow-md">
                  Advanced route planning and fleet coordination designed to improve delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Infrastructure Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 text-primary bg-white border-t border-black/5">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col">
          {/* Section heading for images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 text-left w-full uppercase"
          >
            <RevealHeading className="max-sm:text-[28px] text-[40px] md:text-[50px] font-normal leading-[1.0] tracking-tight mb-4 font-albert">Technical Infrastructure</RevealHeading>
            <p className="max-sm:text-[14px] text-[16px] md:text-[18px] opacity-50 max-w-[600px] normal-case font-sans">Hardware and software integrated to provide total visibility over global asset movement.</p>
          </motion.div>

          {/* 4-Image Grid Row - Tech/Systems */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 w-full">
            {[
              { url: "/assets/system-1-hyperlapse.mp4", label: "Infrastructure & Systems", symbol: <Workflow size={28} strokeWidth={1} /> },
              { url: trackingVideo, label: "Data & Insights", symbol: <Globe size={28} strokeWidth={1} /> },
              { url: "/assets/system-3-car.mp4", label: "Digital Integration", symbol: <Workflow size={28} strokeWidth={1} /> },
              { url: "/assets/system-4-drone.mp4", label: "Fleet Systems", symbol: <Settings size={28} strokeWidth={1} /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                className="max-sm:aspect-[4/3] aspect-[4/5] rounded-[32px] overflow-hidden relative group cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_24px_48px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-3 border border-black/5 bg-black"
              >
                <video
                  src={item.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-[1500ms] group-hover:scale-110"
                />
                {/* Cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5 opacity-80 group-hover:opacity-90 transition-opacity duration-700" />

                {/* Top left symbol */}
                <div className="absolute max-sm:top-4 max-sm:left-4 top-8 left-8 text-white/50 group-hover:text-white transition-colors duration-500 max-sm:scale-75 origin-top-left">
                  {item.symbol}
                </div>

                {/* Bottom content */}
                <div className="absolute inset-0 max-sm:p-4 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-75">
                    <span className="text-white max-sm:text-[16px] text-[20px] font-normal tracking-tight font-poppins uppercase leading-none drop-shadow-md">
                      {item.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-16 border-t border-black/10 pt-28 pb-16 text-left w-full">
            <div className="md:w-1/4">
              <span className="brand-chip font-mono opacity-50">INTELLIGENCE ENGINE</span>
            </div>
            <div className="md:w-3/4">
              <p className="text-[24px] md:text-[38px] leading-[1.1] font-medium tracking-tight text-[#1a1c1a] font-albert">
                Our intelligence engine continuously analyzes operational flow, route conditions, fleet performance, and <span className="text-black/30">cargo priorities to identify risks before they become disruptions.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Features section */}
      <section className="pt-16 pb-20 md:pb-24 px-4 md:px-6 border-t border-black/5 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 md:gap-20">
          <div className="lg:w-[40%]">
            <span className="brand-chip mb-16 inline-block font-mono opacity-50">DECISION INTELLIGENCE</span>
            <RevealHeading className="text-[38px] md:text-[54px] lg:text-[64px] leading-[0.95] font-normal tracking-tighter text-primary font-poppins uppercase">
              Reliable<br />Movement<br />Systems
            </RevealHeading>
          </div>
          <div className="lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Delay Risk Detection", desc: "Automated identification of potential delays using real-time node synchronization protocols.", icon: <Workflow size={28} /> },
              { title: "Route Congestion", desc: "Advanced analysis of traffic patterns and bottleneck nodes to optimize transit time.", icon: <Settings size={28} /> },
              { title: "Fuel Optimization", desc: "Intelligent mapping that balances speed and fuel efficiency across every active vehicle.", icon: <Globe size={28} /> },
              { title: "Demand Forecasting", desc: "Predictive modeling that anticipates volume spikes and optimizes node capacity.", icon: <ArrowUpRight size={28} /> }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/50 backdrop-blur-sm max-sm:p-6 p-8 md:p-10 rounded-3xl flex flex-col gap-6 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-black/[0.03]"
              >
                <div className="text-black/30 group-hover:text-black transition-colors">{benefit.icon}</div>
                <div>
                  <h3 className="text-[22px] font-bold mb-4 tracking-tight font-albert uppercase">{benefit.title}</h3>
                  <p className="text-black/50 text-[15px] leading-relaxed font-normal font-sans">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Operational Performance stat Section */}
      <section className="py-20 md:py-24 bg-[#151715] text-white px-4 md:px-6 overflow-hidden relative">
        {/* Video Placeholder Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            <source src="/assets/system-6-filmburn.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#151715] via-transparent to-[#151715] opacity-80"></div>
        </div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="brand-chip !border-white/20 !text-white/40 mb-16 inline-block font-mono">LIVE PERFORMANCE</span>
          <RevealHeading className="max-sm:text-[40px] text-[55px] md:text-[90px] leading-[0.85] font-normal tracking-tighter mb-24 font-poppins uppercase">
            Enterprise trust is built<br />through measurable execution.
          </RevealHeading>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-8"
          >
            {[
              { label: "Dispatch Accuracy", value: 99.2, suffix: "%" },
              { label: "Fleet Visibility", value: 24, suffix: "/7" },
              { label: "Active Route Nodes", value: 500, suffix: "+" },
              { label: "Delivery Confirmation", value: 98, suffix: "%" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-end h-full"
              >
                <div className="flex-grow flex items-end mb-4 md:mb-5">
                  <span className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase text-white/50 font-mono leading-snug">{stat.label}</span>
                </div>
                <p className="text-[44px] md:text-[68px] font-normal leading-none font-mono tracking-tighter text-white drop-shadow-md">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Applications - List Section */}
      <section className="py-20 md:py-24 px-4 md:px-6 bg-white border-t border-black/5">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit uppercase">
            <span className="brand-chip mb-16 inline-block font-mono opacity-50">INDUSTRY APPLICATIONS</span>
            <RevealHeading className="text-[40px] md:text-[65px] font-normal leading-[0.9] tracking-tighter text-[#1a1c1a] font-poppins mb-8">
              Built to serve<br /><span className="text-black/30">multi-sector<br />operations</span>
            </RevealHeading>
            <p className="text-[16px] md:text-[18px] opacity-60 normal-case font-sans font-light leading-relaxed max-w-[400px]">
              Delivering synchronized logistics solutions for diverse industries and operational environments.
            </p>
          </div>
          <div className="lg:col-span-7 divide-y divide-black/10">
            {[
              { title: "Manufacturing Supply Chains", desc: "Just-in-time logistics flow mapping for high-precision industrial production lines." },
              { title: "Retail Distribution Networks", desc: "Inventory-aware movement from primary hubs to localized secondary retail clusters." },
              { title: "Construction Material Transport", desc: "Specialized heavy-load tracking for large-scale infrastructure and residential projects." },
              { title: "Cold Chain Operations", desc: "Continuous environmental monitoring and time-sensitive routing for perishable cargo." },
              { title: "E-Commerce Fulfillment", desc: "High-velocity node synchronization designed for the speed of modern online trade." },
              { title: "Industrial Freight Management", desc: "Large-scale movement coordination for raw materials and finished heavy industrial units." }
            ].map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 group cursor-pointer"
              >
                <div className="max-w-[550px] uppercase group-hover:translate-x-4 transition-transform duration-500">
                  <h3 className="text-[28px] md:text-[38px] font-normal mb-4 tracking-tight font-albert">{app.title}</h3>
                  <p className="text-black/60 text-[15px] leading-relaxed font-normal normal-case font-sans">{app.desc}</p>
                </div>
                <div className="flex items-center text-black/10 group-hover:text-black transition-all duration-500">
                  <div className="p-4 rounded-full border border-black/5 group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Command Center & Resilience Architecture - Two Column */}
      <section className="py-20 md:py-24 px-4 md:px-6 bg-white border-t border-black/5">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Card 1: Command Center */}
          <div className="bg-black max-sm:p-6 p-12 md:p-20 max-sm:rounded-[40px] rounded-[60px] shadow-inner border border-black/[0.02] flex flex-col justify-between h-full space-y-16 relative overflow-hidden group">
            {/* Background Image */}
            <video
              src={neonLightsVideo}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none group-hover:scale-105 transition-transform duration-[1000ms] ease-out"
            />
            <div className="absolute top-0 left-0 w-full h-[100%] min-h-full bg-gradient-to-b from-black/60 via-black/20 to-black/80 pointer-events-none z-0"></div>

            <div className="uppercase flex flex-col items-start font-albert relative z-10 text-white">
              <span className="brand-chip !border-white/20 !text-white/60 inline-block mb-16 font-mono opacity-100">COMMAND CENTER</span>
              <h3 className="text-[32px] md:text-[45px] font-normal leading-[1.0] tracking-tight text-white uppercase mb-6 font-poppins">Full visibility for decision-makers.</h3>
              <p className="text-[15px] md:text-[17px] text-white/70 max-w-[480px] normal-case leading-relaxed font-sans tracking-tight">A centralized control interface built for decision-makers to gain operational visibility across every shipment.</p>
            </div>
            <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-x-12 gap-y-8 relative z-10">
              {[
                "Shipment Visibility", "Invoice Tracking", "POD Verification", "Driver Coordination", "Approval Workflows", "Exception Resolution"
              ].map(item => (
                <div key={item} className="flex items-center gap-4 border-b border-white/10 pb-6 group/item cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-white transition-colors" />
                  <span className="text-[13px] font-bold uppercase tracking-widest font-mono text-white/50 group-hover/item:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Resilience Architecture */}
          <div className="bg-black max-sm:p-6 p-12 md:p-20 max-sm:rounded-[40px] rounded-[60px] shadow-inner border border-black/[0.02] flex flex-col justify-between h-full space-y-16 relative overflow-hidden group">
            {/* Background Image */}
            <video
              src={neonLightsVideo2}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none group-hover:scale-105 transition-transform duration-[1000ms] ease-out"
            />
            <div className="absolute top-0 left-0 w-full h-[100%] min-h-full bg-gradient-to-b from-black/60 via-black/20 to-black/80 pointer-events-none z-0"></div>

            <div className="space-y-6 relative z-10 text-white">
              <span className="brand-chip !border-white/20 !text-white/60 inline-block mb-16 font-mono opacity-100">RESILIENCE ARCHITECTURE</span>
              <h3 className="text-[32px] md:text-[45px] font-normal leading-[1.0] tracking-tight text-white font-albert uppercase font-poppins">Reliability engineered into every layer.</h3>
            </div>
            <div className="space-y-10 normal-case relative z-10 text-white">
              {[
                { t: "Distributed Server Nodes", d: "High-availability cluster architecture for uninterrupted dispatch flow." },
                { t: "Auto-Failover Systems", d: "Intelligent recovery protocols that activate during regional node disruptions." },
                { t: "Secure Backup Layers", d: "Encrypted data redundancy across geographically separated server environments." }
              ].map((item, i) => (
                <div key={i} className="space-y-3 group/item">
                  <h4 className="text-[14px] font-bold uppercase font-mono tracking-widest text-white/50 group-hover/item:text-white transition-colors">{item.t}</h4>
                  <p className="text-[15px] md:text-[16px] text-white/70 font-light leading-snug font-albert">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
