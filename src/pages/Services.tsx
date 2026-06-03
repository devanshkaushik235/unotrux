import React, { useEffect, useRef } from "react";
import {
  Truck,
  Maximize,
  Zap,
  Workflow,
  Layout,
  Globe,
  ArrowUpRight,
  Factory,
  Store,
  FlaskConical,
  Box,
  Smartphone,
  Settings
} from "lucide-react";
import { motion, animate, useInView } from "motion/react";
import { Page } from "../types";
import { RevealHeading } from "../components/RevealHeading";

// Sub-components
const Counter = ({ value, duration = 3 }: { value: string, duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  const hasNumbers = /\d/.test(value);
  const match = value.match(/(\d+\.?\d*)(.*)/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : (hasNumbers ? "" : value);

  useEffect(() => {
    if (isInView && nodeRef.current) {
      if (target > 0) {
        const controls = animate(0, target, {
          duration,
          ease: "easeOut",
          onUpdate: (latest) => {
            if (nodeRef.current) {
              const isInteger = target % 1 === 0;
              nodeRef.current.textContent = isInteger ? Math.round(latest).toString() : latest.toFixed(1);
            }
          },
        });
        return () => controls.stop();
      } else if (!hasNumbers) {
        nodeRef.current.textContent = value;
      }
    }
  }, [isInView, target, duration, hasNumbers, value]);

  if (!hasNumbers) {
    return <span>{value}</span>;
  }

  return (
    <span>
      <span ref={nodeRef}>0</span>
      {suffix}
    </span>
  );
};

export const Services = ({ setPage }: { setPage: (p: Page) => void }) => {
  const industries = [
    {
      title: "Manufacturing",
      desc: "Precision-timed raw material and component delivery for high-volume production lines.",
      icon: Factory,
      tags: ["Line Feed", "JIT", "Bulk Execution"],
      image: "https://i.pinimg.com/736x/3e/87/2f/3e872f37e1ab0429ec45c0bf34dc4e9a.jpg"
    },
    {
      title: "Retail Chains",
      desc: "Scalable distribution models connecting regional hubs to local retail storefronts.",
      icon: Store,
      tags: ["Store Door", "DC-to-Store", "Returns"],
      image: "https://i.pinimg.com/736x/2f/ee/68/2fee684dbd8f2d867260b7e8000a4d69.jpg"
    },
    {
      title: "Pharmaceuticals",
      desc: "Temperature-controlled and security-hardened transit for high-value medical cargo.",
      icon: FlaskConical,
      tags: ["Cold Chain", "Compliance", "Secure Grid"],
      image: "https://i.pinimg.com/736x/f5/14/7d/f5147d7d929524fad141def4618d5d3e.jpg"
    },
    {
      title: "FMCG",
      desc: "High-velocity movement cycles optimized for rapid consumption and shelf-life variables.",
      icon: Box,
      tags: ["High Turn", "Primary", "Secondary"],
      image: "https://i.pinimg.com/736x/38/1f/73/381f73e8f23470e5714b9736f9fbc724.jpg"
    },
    {
      title: "E-Commerce",
      desc: "Dynamic node-to-node synchronization designed for peak volume and rapid fulfillment.",
      icon: Smartphone,
      tags: ["First Mile", "Mid Mile", "Last Mile"],
      image: "https://i.pinimg.com/736x/02/36/57/023657363f5077b069198a37297d9401.jpg"
    },
    {
      title: "Industrial",
      desc: "Heavy-load coordination for machinery, tools, and industrial-grade equipment.",
      icon: Settings,
      tags: ["Oversized", "Flatbed", "Complex Flow"],
      image: "https://i.pinimg.com/736x/a5/0e/6b/a50e6bcdf9a684e2b6659321e6cb6337.jpg"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[1000px] mb-12">
            <span className="brand-chip font-mono opacity-50 mb-8">OUR OFFERING</span>
            <RevealHeading as="h1" className="text-[clamp(44px,7vw,88px)] font-poppins font-normal leading-[0.9] tracking-tighter mb-6 uppercase text-primary">
              Professional Cargo<br />
              <span className="text-black/30">Systems</span>
            </RevealHeading>
            <p className="text-[18px] md:text-[22px] max-w-[700px] leading-tight opacity-70">
              UNOTRUX Cargo Private Limited delivers reliable transport solutions built for speed, visibility, and operational control across India.
            </p>
          </div>

          <div className="mb-24">
            <div className="w-full max-sm:aspect-[4/3] aspect-[16/9] lg:aspect-[21/9] rounded-[24px] lg:rounded-[32px] overflow-hidden border border-black/5 bg-[#e5e7eb] group relative flex items-center justify-center text-center px-4 md:px-12 py-12 md:py-0">
              <div className="absolute inset-0 z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                >
                  <source src="/assets/industrial-cargo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-1000" />
              </div>

              <div className="relative z-10 space-y-4 md:space-y-6 max-w-[800px] mx-auto flex flex-col items-center justify-center text-center">
                <span className="brand-chip-dark font-mono opacity-50">
                  HEAVY LOAD COORDINATION
                </span>
                <RevealHeading className="max-sm:text-[42px] text-[28px] sm:text-[48px] md:text-[64px] font-poppins font-normal leading-[0.95] tracking-tighter text-white uppercase drop-shadow-xl whitespace-nowrap">
                  BUILT FOR THE <span className="text-white/50">INDUSTRIAL SCALE</span>
                </RevealHeading>
                <p className="font-sans text-[14px] sm:text-[18px] md:text-[21px] text-white/80 leading-relaxed font-light drop-shadow-md whitespace-nowrap">
                  Seamlessly bridging the gap between heavy production and continuous movement.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 py-20 border-t border-black/10">
            <div className="lg:w-1/4">
              <span className="brand-chip font-mono opacity-50 mb-4">TRANSPORT SOLUTIONS</span>
            </div>
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Full Truck Load (FTL)", desc: "Dedicated high-volume freight movement with guaranteed capacity and direct execution.", icon: <Truck size={24} /> },
                  { title: "Less Than Truck Load (LTL)", desc: "Cost-efficient shared transport solutions for smaller shipments with reliable delivery speed.", icon: <Maximize size={24} /> },
                  { title: "Express Delivery", desc: "Priority dispatch for time-sensitive cargo requiring immediate movement.", icon: <Zap size={24} /> },
                  { title: "Dedicated Fleet", desc: "Custom fleet allocation for enterprise clients requiring full-time availability.", icon: <Workflow size={24} /> },
                  { title: "Warehousing", desc: "Strategic storage and sorting integrated with our transport system.", icon: <Layout size={24} /> },
                  { title: "Distribution", desc: "Urban and regional delivery networks for seamless cargo movement.", icon: <Globe size={24} /> }
                ].map((service, i) => (
                  <div key={i} className="bg-white/50 max-sm:p-6 p-8 rounded-[24px] border border-black/5 flex flex-col gap-6 hover:bg-white transition-all group">
                    <div className="text-black/40 group-hover:text-black transition-colors">{service.icon}</div>
                    <div>
                      <h3 className="font-wide text-[18px] md:text-[20px] font-bold mb-2 tracking-tight uppercase text-primary">{service.title}</h3>
                      <p className="text-black/50 text-[14px] leading-tight font-normal">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 py-20 border-t border-black/10">
            <div className="lg:w-1/4">
              <span className="brand-chip font-mono opacity-50 mb-6">CORE PHILOSOPHY</span>
            </div>
            <div className="lg:w-3/4 space-y-10">
              <p className="font-wide text-[24px] md:text-[32px] leading-[1.1] font-normal tracking-tight text-[#1a1c1a] max-w-[900px]">
                We believe in the power of precision logistics to inspire and make a meaningful impact. We aim to transform fragmented movement into synchronized execution.
              </p>
              <div className="font-wide text-[24px] md:text-[32px] leading-[1.1] font-normal tracking-tight max-w-[900px]">
                We strive to bring efficiency and reliability together, <span className="text-black/30">providing the infrastructure for multi-sector operational excellence.</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 py-20 border-t border-black/10">
            <div className="lg:w-1/4">
              <span className="brand-chip font-mono opacity-50 mb-6">OPERATIONAL CERTAINTY</span>
            </div>
            <div className="lg:w-3/4">
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
                {[
                  { label: "FASTER DISPATCH", value: "99%" },
                  { label: "REAL-TIME TRACKING", value: "24/7" },
                  { label: "HIGHER ACCURACY", value: "99.2%" },
                  { label: "SECURE DOCUMENTATION", value: "100%" },
                  { label: "RELIABLE COMPLIANCE", value: "ISO" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-3">
                    <span className="font-label text-[10px] font-bold tracking-widest uppercase opacity-40">{stat.label}</span>
                    <p className="font-label text-[28px] md:text-[36px] font-normal leading-none tracking-tighter">
                      <Counter value={stat.value} />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 py-20 border-t border-black/10">
            <div className="lg:w-1/4">
              <span className="brand-chip font-mono opacity-50 mb-6">How We Work</span>
            </div>
            <div className="lg:w-3/4">
              <p className="font-wide text-[24px] md:text-[32px] leading-[1.1] font-normal tracking-tight text-black mb-16 max-w-[900px]">
                Join us in exploring a professional logistics process where <span className="text-black/30">efficiency enhances the speed and reliability</span> of every delivery endeavor.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {[
                  { id: "01", t: "Requirement", d: "We analyze cargo needs, shipment volume, timelines, and delivery priorities to define the right transport strategy." },
                  { id: "02", t: "Planning", d: "Our logistics team designs optimized routes, transit schedules, and terminal coordination for smooth operations." },
                  { id: "03", t: "Vehicle Assignment", d: "Specialized transport units are assigned precisely for safety, compliance, and maximum load efficiency." },
                  { id: "04", t: "Pickup", d: "Professional on-site handling and secure loading protocols are executed at every origin point." },
                  { id: "05", t: "Live Monitoring", d: "Real-time tracking and status synchronization ensure complete visibility across the cargo lifecycle." },
                  { id: "06", t: "Risk Control", d: "Continuous monitoring helps identify delays, route risks, and operational disruptions before they impact delivery." },
                  { id: "07", t: "Delivery", d: "Predictive arrival management and disciplined offloading ensure cargo reaches its destination safely." },
                  { id: "08", t: "Confirmation", d: "Complete documentation and proof-of-delivery verification provide enterprise-level accountability and closure." }
                ].map((step, i) => (
                  <div key={i} className="space-y-3 max-w-[400px]">
                    <div className="flex items-center gap-3">
                      <span className="font-label text-[13px] font-bold text-black/40">{step.id}</span>
                      <h3 className="font-wide text-[16px] md:text-[18px] font-bold uppercase tracking-tight text-black">{step.t}</h3>
                    </div>
                    <p className="text-black/50 text-[14px] leading-relaxed font-normal">
                      {step.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries section integrated into Success layout */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            <div className="lg:w-1/4">
              <span className="brand-chip font-mono opacity-50 mb-6">Designing Success</span>
            </div>
            <div className="lg:w-3/4 space-y-10">
              <RevealHeading className="font-wide text-[28px] md:text-[42px] leading-[1.1] font-normal tracking-tight text-black max-w-[900px] normal-case">
                see how we've turned movement into stability. dive into the stories of <span className="text-black/30">successful cargo systems that make a difference.</span>
              </RevealHeading>
              <div>
                <button
                  onClick={() => setPage("Contact" as Page)}
                  className="px-6 py-3 bg-[#f0f0f0] text-black rounded-full text-[13px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all flex items-center gap-2 cursor-pointer"
                >
                  Initialize Connection <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-24 -mx-6 md:-mx-12 overflow-hidden flex">
            <motion.div
              className="flex gap-8 px-6 md:px-12 w-max"
              animate={{
                x: ["-50%", 0],
              }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...industries, ...industries].map((ind, i) => (
                <div
                  key={i}
                  className="relative max-sm:w-[280px] w-[300px] md:w-[350px] shrink-0 aspect-[1.1] bg-black/5 border border-black/[0.03] shadow-sm max-sm:p-8 p-10 md:p-12 text-left flex flex-col justify-between rounded-[24px] overflow-hidden group cursor-pointer"
                >
                  {ind.image && (
                    <>
                      <img
                        src={ind.image}
                        alt={ind.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-0" />
                    </>
                  )}

                  <div className="relative z-10 opacity-90 text-white">
                    <ind.icon size={48} className="stroke-1" />
                  </div>

                  <div className="relative z-10 space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-[24px] font-medium text-white tracking-tight">{ind.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};
