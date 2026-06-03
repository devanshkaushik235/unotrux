import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Maximize2,
  Sliders,
  Gauge,
  Globe,
  Activity,
  Settings,
  ShieldCheck,
  Leaf,
  Cpu
} from "lucide-react";
import { Page } from "../types";
import { Ticker } from "../components/Ticker";
import { RevealHeading } from "../components/RevealHeading";
import { scaleIn, staggerContainer, fadeInUp } from "../lib/animations";

export const Home = ({ setPage }: { setPage: (p: Page) => void }) => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const bgVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (bgVideoRef.current) {
      bgVideoRef.current.playbackRate = 3;
      bgVideoRef.current.loop = true;
      const handleEnded = () => bgVideoRef.current?.play();
      bgVideoRef.current.addEventListener('ended', handleEnded);
      return () => bgVideoRef.current?.removeEventListener('ended', handleEnded);
    }
  }, []);

  const brandItems = [
    <div key="dp-world" className="flex items-center gap-3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2d/DP_World_2021_logo.svg"
        alt="DP World"
        className="h-8 md:h-10 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
      <span className="font-bold tracking-tight text-[24px] text-black">DP WORLD</span>
    </div>,
    <div key="reliance" className="flex items-center gap-3">
      <img
        src="https://companieslogo.com/img/orig/RELIANCE.NS_BIG-1aae764d.svg"
        alt="Reliance Industries"
        className="h-8 md:h-12 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
      <span className="font-bold tracking-tighter text-[28px] text-black">Reliance</span>
    </div>,
    <div key="tata-steel" className="flex items-center gap-3">
      <img
        src="https://iconape.com/wp-content/png_logo_vector/tata-steel-logo.png"
        alt="Tata Steel"
        className="h-10 md:h-14 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
      <span className="font-black tracking-tight text-[24px] text-black uppercase">TATA STEEL</span>
    </div>,
    <div key="okinawa" className="flex items-center gap-3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c9/OkinawaLogo.png"
        alt="Okinawa Autotech"
        className="h-8 md:h-10 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
      <span className="font-mono font-bold tracking-widest text-[20px] text-black uppercase">OKINAWA</span>
    </div>,
    <div key="bharat-benz" className="flex items-center gap-3">
      <img
        src="https://www.carlogos.org/logo/BharatBenz-logo.png"
        alt="Bharat Benz"
        className="h-8 md:h-12 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
      <span className="font-bold tracking-tighter text-[24px] text-black uppercase">BHARAT BENZ</span>
    </div>
  ];

  const featureTickerItems = [
    {
      title: "Eco development",
      icon: <Globe size={48} className="stroke-1" />,
      image: "https://i.pinimg.com/1200x/b3/21/45/b321454014adcaad5b85d5010ece7df2.jpg"
    },
    {
      title: "Optimized Performance",
      icon: <Activity size={48} className="stroke-1" />,
      image: "https://i1-c.pinimg.com/736x/32/2e/6d/322e6d523bb7673f88ea56e405c4e348.jpg"
    },
    {
      title: "Effortless Customization",
      icon: <Settings size={48} className="stroke-1" />,
      image: "https://i1-c.pinimg.com/736x/8b/52/14/8b52145dae620aed629502b715c31b1c.jpg"
    },
    {
      title: "Secure Pipeline",
      icon: <ShieldCheck size={48} className="stroke-1" />,
      image: "https://i1-c.pinimg.com/1200x/57/29/31/5729314741f76d0ed9feedfca10fb8d7.jpg"
    }
  ].map((card, i) => (
    <div key={i} className="relative max-sm:w-[280px] w-[350px] shrink-0 aspect-[1.1] bg-black/5 border border-black/[0.03] shadow-sm max-sm:p-8 p-12 text-left flex flex-col justify-between mx-4 rounded-[24px] overflow-hidden">
      {card.image && (
        <>
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-0" />
        </>
      )}
      <div className={`relative z-10 opacity-80 ${card.image ? "text-white" : "text-black"}`}>{card.icon}</div>
      <h3 className={`relative z-10 text-[24px] font-medium ${card.image ? "text-white" : "text-black/80"}`}>{card.title}</h3>
    </div>
  ));

  return (
    <div className="bg-white">
      {/* Visual Clone Hero Section - Sticky Bottom Layer */}
      <section className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-[#141414] z-0 select-none">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            src="/assets/home-1-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 w-full h-full object-cover opacity-90" />

        </div>

        <div
          className="absolute flex flex-col items-center justify-center z-5"
          style={{
            top: "12vh",
            left: "1px",
            right: "6px"
          }}
        >
          {/* Main Title - Edge to Edge */}
          <h1
            className="font-audiowide text-[#FFFFFF] leading-[0.8] tracking-normal text-center uppercase whitespace-nowrap block w-full"
            style={{ fontSize: '17.3vw' }}
          >
            UNOTRUX
          </h1>

          {/* Micro Labels Below Title */}
          <div className="flex justify-between w-full mt-[16px] md:mt-[32px] px-[2vw]">
            <span className="font-montserrat font-bold text-[9px] md:text-[13px] tracking-[0.01em] uppercase text-[rgba(255,255,255,0.92)]">
              INDIA'S NEXT-GENERATION CARGO NETWORK
            </span>
            <span className="font-montserrat font-bold text-[9px] md:text-[13px] tracking-[0.01em] uppercase text-[rgba(255,255,255,0.92)] text-right">
              PRECISION IN EVERY MILE
            </span>
          </div>
        </div>

        <div
          className="absolute z-20"
          style={{
            top: "auto",
            bottom: "12px",
            left: "16px",
            right: "auto"
          }}
        >
          <RevealHeading
            className="font-normal leading-[0.92] tracking-[-0.03em] text-[rgba(245,241,232,0.96)] uppercase"
            style={{ fontSize: 'clamp(32px, 5vw, 50px)' }}
          >
            CONSIDER IT<br />
            DELIVERED
          </RevealHeading>
        </div>
      </section>

      {/* Wrapper for content that scrolls OVER the sticky hero */}
      <div className="relative z-10 bg-white">
        <section className="bg-white px-4 md:px-6 border-b border-black/10 overflow-hidden relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-stretch">
            <div className="py-20 md:py-24 space-y-8">
              <span className="brand-chip font-mono opacity-50">BRANDS WE WORKED WITH</span>
              <div className="pt-6 overflow-hidden">
                <Ticker items={brandItems} speed={30} direction="right" showMask={true} />
              </div>
            </div>

            <div className="md:border-l md:border-black/10 md:pl-16 lg:pl-24 py-20 md:py-24 flex flex-col justify-center">
              <p className="text-large text-[#141414]/80 font-normal text-justify">
                Delivering precision-engineered logistics, terminal operations, and intelligent transport systems with uncompromising speed, operational discipline, and end-to-end visibility built for seamless movement, reduced downtime, maximum efficiency, and industrial grade reliability at scale.
              </p>
            </div>
          </div>
        </section>

        {/* Clone: "Designed for Those Who Lead" Section (Ticker) */}
        <section className="bg-white py-20 md:py-28 text-center overflow-hidden border-b border-black/10">
          <div className="px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center">
              <span className="brand-chip font-mono opacity-50 mb-6">TRUSTED BY INDUSTRY LEADERS</span>
              <RevealHeading className="mb-4">Designed for<br />Those Who Lead</RevealHeading>
              <p className="text-[#141414]/60 text-large max-w-[600px] mx-auto">
                Built for agencies, consultants, and creatives who demand excellence.
              </p>
            </div>
          </div>

          <Ticker items={featureTickerItems} speed={40} direction="right" />
        </section>

        {/* Smart features that work for you section */}
        <section className="bg-[#0e1410] py-24 px-6 md:px-12 relative overflow-hidden border-b border-white/[0.03] min-h-screen md:h-screen md:min-h-[650px] flex items-center justify-center">
          {/* Video Background */}
          <video
            ref={bgVideoRef}
            src="/assets/home-2-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-45 contrast-150 pointer-events-none z-0"
          />


          <div className="max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-center relative z-10">
            {/* Left Column: List details */}
            <div className="w-full lg:w-[35%] text-left">
              <div className="brand-chip-dark font-mono opacity-50 mb-6">
                ACTIVE DISPATCH
              </div>

              <RevealHeading className="text-[32px] sm:text-[38px] md:text-[44px] leading-[1.1] font-poppins font-normal text-white tracking-tight mb-4 max-w-[450px]">
                High-Velocity Transit Network
              </RevealHeading>

              <p className="text-white/60 text-[14px] md:text-[16px] leading-relaxed font-wide mb-8 max-w-[450px]">
                Moving thousands of tons of cargo requires exact physical coordination. Our dynamic transit network keeps lane occupancy balanced, minimizing staging times.
              </p>

              <div className="flex flex-col gap-3 w-full">
                {[
                  {
                    title: "Operational Continuity",
                    icon: <Sliders size={20} />
                  },
                  {
                    title: "Load Intelligence",
                    icon: <Activity size={20} />
                  },
                  {
                    title: "Route Orchestration",
                    icon: <Maximize2 size={20} />
                  },
                  {
                    title: "Network Coordination",
                    icon: <Globe size={20} />
                  }
                ].map((item, idx) => {
                  const isActive = activeFeatureIndex === idx;
                  return (
                    <motion.div
                      key={idx}
                      onClick={() => setActiveFeatureIndex(idx)}
                      onMouseEnter={() => setActiveFeatureIndex(idx)}
                      className={`w-full max-w-[320px] p-2.5 rounded-2xl flex items-center gap-4 cursor-pointer select-none transition-all duration-300 ${isActive
                        ? "bg-[#212923] text-white shadow-xl scale-[1.02]"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      whileHover={{ x: isActive ? 0 : 5 }}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isActive
                        ? "bg-[#161d18] border border-white/10 text-white"
                        : "bg-white/5 border border-white/5 text-white/50"
                        }`}>
                        {item.icon}
                      </div>
                      <span className="text-[14px] font-sans font-medium tracking-tight">
                        {item.title}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Dynamic Showcase Frame */}
            <div className="w-full lg:w-[50%] flex items-center justify-end">
              <div className="relative w-full aspect-square sm:aspect-[1.1] lg:aspect-[4/3] max-w-[800px] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.7)] border border-white/10 bg-black/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeatureIndex}
                    variants={scaleIn(0.5, 0, 1.05)}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                  >
                    <video
                      src={[
                        "/assets/home-5-rescued.mp4",
                        "/assets/home-4-rescued.mp4",
                        "/assets/driving-pov.mp4",
                        "/assets/home-6-rescued.mp4"
                      ][activeFeatureIndex]}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Visual shadow gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                {/* Commitment badge overlay */}
                <div className="absolute top-6 right-6 z-10 max-w-[260px] text-right">
                  <div className="bg-black/30 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15 text-white/90 font-mono text-[9px] uppercase tracking-wider leading-normal shadow-xl">
                    UNOTRUX: REDEFINING SPEED AND<br />PRECISION IN CARGO MOVEMENT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-20 md:py-28 px-4 md:px-6 border-b border-black/10 overflow-hidden">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="brand-chip font-mono opacity-50 mb-6">SUCCESS STORIES</span>
              <RevealHeading className="mb-12 max-w-[1200px] mx-auto">
                The impact of<br />operational excellence.
              </RevealHeading>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
            >
              {/* Card 1: Image Overlay */}
              <motion.div
                variants={fadeInUp(0.8, 0, 30)}
                whileHover={{ y: -10 }}
                className="aspect-[4/5] rounded-[32px] overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-500"
              >
                <img
                  src="/assets/home-7-testimonial.png"
                  alt="Operations Partner"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent max-sm:p-6 p-10 flex flex-col justify-end">
                  <p className="text-white text-[20px] font-medium leading-tight mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">"Logistics redefined through absolute precision."</p>
                  <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase">Harpreet Singh — Senior Fleet Driver</span>
                </div>
              </motion.div>

              {/* Card 2: Testimonial Dark (formerly Beige) */}
              <motion.div
                variants={fadeInUp(0.8, 0, 30)}
                whileHover={{ y: -10 }}
                className="aspect-[4/5] relative overflow-hidden bg-[#141414] p-6 md:p-12 rounded-3xl md:rounded-[32px] text-white flex flex-col justify-between transition-all duration-500 shadow-xl group"
              >
                <img
                  src="https://i.pinimg.com/736x/0c/44/40/0c4440fa986860e0f444bb087df244a5.jpg"
                  alt="Logistics"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none z-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0 pointer-events-none" />
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <p className="text-[20px] md:text-[24px] text-white/90 leading-[1.3] font-medium italic">
                    "Driving with UNOTRUX has made every delivery smoother and more reliable. The system keeps routes efficient, schedules clear, and every shipment stays on track with complete confidence."
                  </p>
                  <div className="flex justify-between items-end border-t border-white/20 pt-8 mt-auto">
                    <div>
                      <h4 className="text-[22px] font-serif italic tracking-tight">Viraansh Bhanushali</h4>
                      <p className="text-[10px] font-bold text-white/60 tracking-[0.2em] uppercase mt-2">Speedway Enterprises</p>
                    </div>
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shadow-sm group-hover:shadow-lg transition-all relative z-10">
                      <img
                        src="/assets/avatar-viraansh.png"
                        className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                        alt="Avatar"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Testimonial Dark */}
              <motion.div
                variants={fadeInUp(0.8, 0, 30)}
                whileHover={{ y: -10 }}
                className="aspect-[4/5] relative overflow-hidden bg-[#141414] p-6 md:p-12 rounded-3xl md:rounded-[32px] text-white flex flex-col justify-between transition-all duration-500 shadow-xl group"
              >
                <img
                  src="https://i.pinimg.com/1200x/97/cd/57/97cd5702749178f1cc9d4c484e5315c7.jpg"
                  alt="Warehouse"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none z-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0 pointer-events-none" />
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <p className="text-[20px] md:text-[24px] text-white/90 leading-[1.3] font-medium italic">
                    "Switching to UNOTRUX completely changed how we handle our logistics. The system is intelligent, adaptable, and built for speed, precision, and seamless execution."
                  </p>
                  <div className="flex justify-between items-end border-t border-white/20 pt-8 mt-auto">
                    <div>
                      <h4 className="text-[22px] font-serif italic tracking-tight">Muhammed Ashraf</h4>
                      <p className="text-[10px] font-bold text-white/60 tracking-[0.2em] uppercase mt-2">Deccan Express</p>
                    </div>
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shadow-sm group-hover:shadow-lg transition-all relative z-10">
                      <img
                        src="/assets/avatar-muhammed.png"
                        className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                        alt="Mark Taylor"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Clone: "We Move Trust" Section */}
        <section className="bg-white py-24 md:py-32 px-4 md:px-6 overflow-hidden border-b border-black/10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16 items-start">
              <RevealHeading className="lg:col-span-7">
                <span className="block lg:whitespace-nowrap">We move trust.</span>
                <span className="block lg:whitespace-nowrap">We move business.</span>
              </RevealHeading>
              <div className="lg:col-span-5 lg:col-start-8 border-l border-black/10 pl-8 lg:pl-12">
                <p className="text-large text-[#141414]/70 leading-relaxed italic mb-8 font-serif">
                  "We believe transportation should operate with clarity, reliability, and control. Every delivery is a commitment to performance."
                </p>
                <button onClick={() => setPage("About")} className="label border-b border-black pb-1 hover:text-black hover:border-black transition-all">Who we are</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
              {/* Main Video Card */}
              <div className="md:col-span-7 rounded-[32px] overflow-hidden shadow-2xl relative group min-h-[450px] md:min-h-[600px] flex flex-col justify-end max-sm:p-6 p-8 md:p-12">
                <video
                  src="/assets/home-9-forklift.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-0" />

                <div className="relative z-10 max-w-[500px]">
                  <h3 className="text-white max-sm:text-[32px] text-[40px] md:text-[56px] font-poppins font-normal leading-[1.1] tracking-tight">
                    Velocity & Scale.
                  </h3>
                  <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed mt-6 max-w-[400px]">
                    High-capacity transit networks engineered for absolute control and zero-friction movement across the national grid.
                  </p>
                </div>
              </div>

              {/* Right Column Stack */}
              <div className="md:col-span-5 flex flex-col gap-6">
                {/* Global Vision Card */}
                <div className="flex-[1.2] min-h-[300px] rounded-[32px] max-sm:p-6 p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden group shadow-xl">
                  <img
                    src="https://i.pinimg.com/736x/2d/40/ce/2d40ceb5b51665c6073b5634d2f64393.jpg"
                    alt="Global Vision"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] z-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#0e1410]/60 z-0 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-0" />

                  <div className="relative z-10 flex justify-end">
                    <Globe className="text-white/30" size={24} />
                  </div>

                  <div className="relative z-10 mt-auto">
                    <h3 className="text-[32px] font-poppins font-normal tracking-tight text-white mb-1">Terminal Operations</h3>
                    <p className="text-white/50 font-mono text-[10px] uppercase tracking-[0.2em]">
                      Domestic Freight
                    </p>
                  </div>
                </div>

                {/* Stats / Strategy Card */}
                <div className="flex-1 min-h-[250px] rounded-[32px] overflow-hidden relative group max-sm:p-6 p-8 md:p-10 flex flex-col justify-between shadow-xl">
                  <img
                    src="https://i.pinimg.com/1200x/a5/cd/55/a5cd55b0035314c848ee978bb96563ef.jpg"
                    alt="Strategy Center"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 z-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent z-0" />

                  <div className="relative z-10 flex justify-end items-start">
                    <Activity className="text-white/40" size={24} />
                  </div>

                  <div className="relative z-10 mt-auto">
                    <div className="flex items-baseline gap-1 font-poppins">
                      <span className="text-white text-[64px] font-light tracking-tighter leading-none">99.9</span>
                      <span className="text-white/50 text-[24px] font-light">%</span>
                    </div>
                    <p className="text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase mt-2">
                      Network Reliability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journal Section */}
        <section className="bg-white py-24 md:py-32 px-4 md:px-6 overflow-hidden">
          <div className="text-center">
            <span className="brand-chip mb-8">INSIGHTS</span>
            <RevealHeading className="mb-6 max-w-[1200px] mx-auto">SUPPORTING THE RETAIL & INDUSTRIAL GRID.</RevealHeading>
            <p className="text-[#141414]/60 text-large mb-16 max-w-[600px] mx-auto">Built for enterprises that demand logistics excellence, operational efficiency, and long-term strategic growth.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              {[
                {
                  img: "/assets/home-8-insight.png",
                  date: "AUG 3, 2026",
                  title: "Strengthening Business Foundations for Sustainable Growth",
                  desc: "Creating reliable systems, smarter planning, and stronger operations that support long-term business success."
                },
                {
                  img: "https://i.pinimg.com/1200x/79/ae/fd/79aefd101825add4ea9e975d74062af7.jpg",
                  date: "JUL 28, 2026",
                  title: "Improving Operational Efficiency Across Every Level",
                  desc: "Enhancing workflows, reducing delays, and building processes that improve overall business performance."
                },
                {
                  img: "https://i.pinimg.com/1200x/f1/0e/45/f10e45bee161fb63c53b6509583219c8.jpg",
                  date: "JUN 24, 2026",
                  title: "Building Resilient Systems for Long-Term Growth",
                  desc: "A strategic framework for entering new markets with confidence, control, and operational readiness.",
                  imgClass: "object-[center_70%]"
                }
              ].map((post, i) => (
                <div key={i} className="group">
                  <div className="aspect-[16/9] relative rounded-2xl overflow-hidden mb-8 shadow-xl border border-black/5 bg-[#fafafa]">
                    <img
                      src={post.img}
                      alt={post.title}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ${post.imgClass || "object-center"}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-bold text-[#141414]/40 tracking-widest">{post.date}</span>
                    <div className="w-1 h-1 bg-black/10 rounded-full" />
                    <span className="text-[10px] font-bold text-black tracking-widest">v4_PROTO</span>
                  </div>
                  <h3 className="text-[24px] font-bold mt-2 leading-tight transition-all">{post.title}</h3>
                  <p className="mt-4 text-[16px] text-black/60 leading-relaxed font-normal">
                    {post.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
