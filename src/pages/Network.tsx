import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Page } from "../types";
import warehouseVideo from "../../assets/Warehouse, Indoor, Package, Crates _ Stock Video Footage _ Artgrid.io_.mp4";
import { RevealHeading } from "../components/RevealHeading";

// IndiaMap Component Constants
const CITIES = [
  { name: "Delhi", lat: 28.6139, lon: 77.2090 },
  { name: "Mumbai", lat: 19.0760, lon: 72.8777 },
  { name: "Chennai", lat: 13.0827, lon: 80.2707 },
  { name: "Bangalore", lat: 12.9716, lon: 77.5946 },
  { name: "Hyderabad", lat: 17.3850, lon: 78.4867 },
  { name: "Pune", lat: 18.5204, lon: 73.8567 },
  { name: "Kolkata", lat: 22.5726, lon: 88.3639 },
  { name: "Ahmedabad", lat: 23.0225, lon: 72.5714 },
  { name: "Jaipur", lat: 26.9124, lon: 75.7873 },
  { name: "Chandigarh", lat: 30.7333, lon: 76.7794 },
  { name: "Lucknow", lat: 26.8467, lon: 80.9462 },
  { name: "Kochi", lat: 9.9312, lon: 76.2673 },
];

const W = 480;
const H = 560;

function buildProjection() {
  return d3.geoMercator()
    .center([82.5, 23])
    .scale(900)
    .translate([W / 2, H / 2]);
}

// Subcomponent: IndiaMap
export function IndiaMap({ activeCity, onHoverCity }: { activeCity?: string | null, onHoverCity?: (city: string | null) => void }) {
  const [indiaPath, setIndiaPath] = useState("");
  const [projection] = useState(() => buildProjection());
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    async function loadMap() {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/covid19india/covid19india-react/master/public/maps/india.json"
        );

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const mapData = await res.json();

        const objKey = Object.keys(mapData.objects)[0];
        // @ts-ignore
        const indiaBoundary = topojson.merge(mapData, mapData.objects[objKey].geometries);

        const pathGen = d3.geoPath().projection(projection);
        setIndiaPath(pathGen(indiaBoundary) || "");
        setStatus("ready");
      } catch (err) {
        console.error("Map load failed:", err);
        setStatus("error");
      }
    }
    loadMap();
  }, [projection]);

  const cityPoints = CITIES.map((city) => {
    const pos = projection([city.lon, city.lat]);
    return pos ? { ...city, x: pos[0], y: pos[1] } : null;
  }).filter((c): c is (typeof CITIES[0] & { x: number, y: number }) => c !== null);

  const renderTooltip = () => {
    if (!activeCity) return null;
    const city = cityPoints.find(c => c.name === activeCity);
    if (!city) return null;

    const TW = 120, TH = 34, GAP = 18;
    const raw_ty = city.y - TH - GAP;
    const flipped = raw_ty < 8;
    const tx = Math.max(4, Math.min(W - TW - 4, city.x - TW / 2));
    const ty = flipped ? city.y + GAP : raw_ty;

    return (
      <g style={{ pointerEvents: "none", transition: "all 0.3s ease" }}>
        <rect
          x={tx} y={ty}
          width={TW} height={TH}
          rx="17"
          fill="#1a1c1a"
          filter="drop-shadow(0 10px 15px rgba(0,0,0,0.2))"
        />
        <text
          x={tx + TW / 2} y={ty + 22}
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fontFamily="poppins, sans-serif"
          fill="#ffffff"
          className="uppercase tracking-[0.1em]"
        >
          {city.name}
        </text>
      </g>
    );
  };

  return (
    <div
      onClick={() => onHoverCity?.(null)}
      className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-700 cursor-pointer select-none"
    >
      <div className="flex flex-col items-center justify-center w-full h-full" onClick={(e) => e.stopPropagation()}>
        {status === "loading" && (
          <div style={{ width: "100%", minHeight: "300px" }} className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-6 h-6 border-2 border-[#1a1c1a] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">Loading map data…</p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div style={{ width: "100%", minHeight: "300px" }} className="flex items-center justify-center">
            <p className="text-red-500 text-xs bg-red-50 px-4 py-2 rounded-lg font-mono">Could not load map. Check connection.</p>
          </div>
        )}

        {status === "ready" && (
          <svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${W} ${H}`}
            className="overflow-visible block w-full h-full max-h-full"
            role="img"
          >
            {/* Base Map */}
            <path
              d={indiaPath}
              fill="rgba(255,255,255,0.15)"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1.5"
              strokeLinejoin="round"
              className="transition-all duration-500 hover:fill-[rgba(255,255,255,0.3)] drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            />

            {/* City Markers */}
            {cityPoints.map((city) => {
              const isHovered = activeCity === city.name;
              return (
                <g
                  key={city.name}
                  transform={`translate(${city.x}, ${city.y})`}
                  onMouseEnter={() => onHoverCity?.(city.name)}
                  onMouseLeave={() => onHoverCity?.(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    onHoverCity?.(activeCity === city.name ? null : city.name);
                  }}
                  className="cursor-pointer"
                >
                  <circle
                    r={isHovered ? 18 : 12}
                    fill="#1a1c1a"
                    opacity={0.2}
                    style={{ transition: "all 0.4s ease-out" }}
                  />
                  <circle
                    r={isHovered ? 7 : 4.5}
                    fill="#1a1c1a"
                    stroke="white"
                    strokeWidth="2.5"
                    style={{ transition: "all 0.4s ease-out" }}
                  />
                </g>
              );
            })}

            {renderTooltip()}
          </svg>
        )}
      </div>
    </div>
  );
}

// Subcomponent: Network
export const Network = ({ setPage }: { setPage: (p: Page) => void }) => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const hubSectionRef = useRef<HTMLElement>(null);
  const visibilityRef = useRef<HTMLElement>(null);
  const opsNodesRef = useRef<HTMLElement>(null);

  const { scrollYProgress: hubScroll } = useScroll({
    target: hubSectionRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: visScroll } = useScroll({
    target: visibilityRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: opsScroll } = useScroll({
    target: opsNodesRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(hubScroll, [0, 1], [0, -100]);
  const y2 = useTransform(hubScroll, [0, 1], [0, -50]);
  const vy1 = useTransform(visScroll, [0, 1], [0, -80]);
  const oy1 = useTransform(opsScroll, [0, 1], [0, -60]);

  return (
    <div className="bg-neutral min-h-screen font-sans selection:bg-brand-dark selection:text-white text-primary">
      {/* Header Section */}
      <section className="pt-32 pb-24 px-6 md:px-12 bg-white relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[1000px] mb-12">
            <span className="brand-chip font-mono opacity-50 mb-8">DOMESTIC ECOSYSTEM</span>
            <RevealHeading as="h1" className="text-[clamp(44px,7vw,88px)] font-poppins font-normal leading-[0.9] tracking-tighter mb-6 uppercase text-primary">
              Connected Logistics<br />
              <span className="text-black/30">Network.</span>
            </RevealHeading>
            <p className="text-[18px] md:text-[22px] max-w-[900px] leading-tight opacity-70 mb-10">
              We are focused on building strong domestic cargo operations across major logistics <br className="hidden md:block" />corridors in India, supporting businesses with reliable and performance-driven systems.
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
                  <source src="/assets/top-shot-highway.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-1000" />
              </div>

              <div className="relative z-10 space-y-4 md:space-y-6 max-w-[800px]">
                <span className="brand-chip mb-2 md:mb-4 inline-block font-mono opacity-80 px-5 py-2 md:px-6 md:py-2.5 text-[10px] md:text-[11px] tracking-[0.25em] text-white border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
                  NATIONAL REACH
                </span>
                <RevealHeading className="max-sm:text-[42px] text-[32px] sm:text-[48px] md:text-[64px] font-poppins font-normal leading-[0.95] tracking-tighter text-white uppercase drop-shadow-xl">
                  Grid <span className="text-white/70">Synchronization</span>
                </RevealHeading>
                <p className="font-sans text-[14px] sm:text-[18px] md:text-[21px] text-white/80 leading-relaxed font-light drop-shadow-md">
                  Unifying local routes into a powerful, synchronized national framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Captain Section - Human Variable */}
      <section className="bg-white px-4 md:px-6 py-20 md:py-32 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-stretch relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-[24px] sm:rounded-[32px] overflow-hidden aspect-[4/5] mx-auto lg:mx-0 w-full bg-black shadow-2xl order-2 lg:order-1"
          >
            <img
              src="/assets/network-1-captain.png"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
              alt="Fleet Captain Rajesh Kumar"
              referrerPolicy="no-referrer"
            />
            {/* Cinematic Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
            
            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/10 text-white px-4 py-3 rounded-xl flex flex-col items-center">
              <span className="text-[20px] font-bold leading-none font-mono">12Y</span>
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-60 font-mono mt-1">FIELD_EXP</span>
            </div>
            <div className="absolute bottom-8 left-8 text-white right-8">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/50 block mb-2 font-mono">FLEET OPERATIONS</span>
              <h3 className="text-[28px] sm:text-[36px] font-normal leading-none mb-2 font-poppins uppercase tracking-tighter">Rajesh Kumar</h3>
              <p className="text-[11px] text-white/40 uppercase tracking-[0.15em] font-mono">Senior Corridor Captain</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-between order-1 lg:order-2 py-4 lg:py-8"
          >
            <div className="space-y-8 md:space-y-10">
              <span className="brand-chip font-mono opacity-50">THE HUMAN VARIABLE</span>
              <RevealHeading className="text-[40px] sm:text-[52px] md:text-[72px] font-poppins font-normal leading-[0.9] tracking-tighter text-[#1a1c1a] uppercase">
                Precision drives<br /><span className="text-black/30">every journey.</span>
              </RevealHeading>
              <p className="font-sans text-[16px] sm:text-[18px] md:text-[21px] text-black/60 leading-relaxed max-w-[650px] font-light">
                Rajesh Kumar brings over a decade of hands-on field experience navigating India’s most demanding logistics corridors. <br className="hidden lg:block" />His dedication to safety and precision sets the gold standard for our continuous movement operations.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="max-sm:p-6 p-8 md:p-10 bg-black/[0.02] backdrop-blur-xl rounded-[24px] sm:rounded-[32px] border border-black/[0.05] relative mt-12 lg:mt-0"
            >
              <p className="text-[18px] sm:text-[20px] md:text-[24px] font-sans italic text-black/80 leading-relaxed mb-8 relative z-10 font-light">
                "Unotrux gives me the technology to stay safe and the systems to ensure I deliver on time, every time. It's about accountability."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-[1px] bg-black/10" />
                <span className="brand-chip font-mono opacity-50">OFFICIAL FLEET CAPTAIN TESTIMONY</span>
              </div>
              <div className="absolute top-6 right-8 text-[100px] font-serif text-black/5 leading-none select-none">"</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Network Infrastructure Layers */}
      <section className="bg-transparent px-4 md:px-6 py-20 md:py-24 border-t border-black/5 min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Illuminate Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-100"
          >
            <source src="/assets/illuminate-bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-[1440px] mx-auto text-left w-full relative z-10">
          <span className="brand-chip-dark font-mono opacity-50 mb-6 md:mb-12">
            NETWORK INFRASTRUCTURE
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-4 md:mt-6">
            {[
              {
                tag: "LAYER_01",
                title: "THE DOMESTIC ARTERY",
                desc: "Connecting major industrial hubs and ports across the Indian subcontinent.",
                image: "https://i.pinimg.com/736x/68/e5/b0/68e5b01ef644a8f1a1ce3008faf6272b.jpg"
              },
              {
                tag: "LAYER_02",
                title: "REGIONAL HANDOFF",
                desc: "State-level hubs for fleet synchronization.",
                image: "https://i.pinimg.com/736x/0b/15/a5/0b15a51207e9c4636e7491c574db3b2f.jpg"
              },
              {
                tag: "LAYER_03",
                title: "LAST-MILE VISIBILITY",
                desc: "Hyper-local urban distribution nodes ensuring professional handling.",
                image: "https://i.pinimg.com/1200x/5a/1e/b6/5a1eb6ca9f13bf47065ecb2d6816b7ed.jpg"
              }
            ].map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.1,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                viewport={{ once: true }}
                className="bg-white/20 backdrop-blur-3xl p-6 sm:p-8 md:p-10 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] space-y-6 md:space-y-8 min-h-[360px] sm:min-h-[450px] flex flex-col justify-between hover:bg-white/40 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.15)] transition-all duration-[600ms] ease-out group cursor-default"
              >
                <div className="space-y-6 md:space-y-8">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-700">
                    <img
                      src={node.image}
                      className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1500ms] ease-out"
                      alt={node.title}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-widest text-white/50 mb-2 md:mb-4 block font-mono group-hover:text-white transition-colors">{node.tag}</span>
                    <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-normal leading-[1.0] tracking-tight max-w-[240px] uppercase font-poppins text-white">{node.title}</h3>
                  </div>
                </div>
                <p className="text-white/70 text-[14px] sm:text-[16px] leading-relaxed max-w-[300px] group-hover:text-white transition-colors font-sans">{node.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hub Infrastructure Sorting Section */}
      <section
        className="py-20 md:py-24 px-4 md:px-6 bg-white border-t border-black/5 min-h-screen flex flex-col justify-center"
        ref={hubSectionRef}
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24">
          <div className="lg:col-span-12 xl:col-span-5 lg:sticky lg:top-32 h-fit mb-4 lg:mb-0">
            <span className="brand-chip font-mono opacity-50 mb-6 md:mb-10">
              HUB INFRASTRUCTURE
            </span>
            <RevealHeading className="text-[32px] sm:text-[48px] md:text-[64px] font-poppins font-normal leading-[0.95] tracking-tighter text-[#1a1c1a] uppercase">
              Strategic Flow<br />Management
            </RevealHeading>
          </div>

          <div className="lg:col-span-12 xl:col-span-7 flex flex-col mt-8 lg:mt-0">
            {[
              { title: "Bangalore", code: "BLR_01", label: "PRIMARY TECH HUB" },
              { title: "Mumbai", code: "BOM_02", label: "PORT GATEWAY HUB" },
              { title: "Delhi", code: "DEL_03", label: "NORTH CORRIDOR NODE" },
              { title: "Chennai", code: "MAA_04", label: "INDUSTRIAL ARTERY HUB" }
            ].map((hub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="py-6 md:py-10 border-b border-black/5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start md:items-center"
              >
                <div className="md:col-span-3 xl:col-span-3">
                  <span className="text-[11px] sm:text-[12px] text-black/40 font-mono tracking-widest uppercase block mb-1 md:mb-0">{hub.code}</span>
                </div>
                <div className="md:col-span-5 xl:col-span-6">
                  <h3 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-light tracking-tighter text-[#1a1c1a] leading-[1.1] uppercase font-poppins">
                    {hub.title}
                  </h3>
                </div>
                <div className="md:col-span-4 xl:col-span-3 flex md:justify-end">
                  <span className="text-black/40 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase font-mono mt-2 md:mt-0">
                    {hub.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visibility Section */}
      <section ref={visibilityRef} className="py-20 md:py-24 px-4 md:px-6 bg-white border-t border-black/5 min-h-screen flex flex-col justify-center">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-12 xl:col-span-5 lg:sticky lg:top-32 h-fit mb-4 lg:mb-0">
            <span className="brand-chip font-mono opacity-50 mb-6 md:mb-10">
              CONTROL CENTER
            </span>
            <RevealHeading className="text-[32px] sm:text-[48px] md:text-[64px] font-poppins font-normal leading-[0.95] tracking-tighter text-[#1a1c1a] uppercase">Fleet Coordination<br />System</RevealHeading>
          </div>

          <div className="lg:col-span-12 xl:col-span-7 flex flex-col mt-8 lg:mt-0">
            {[
              { title: "Real-Time Shipment Tracking", code: "GPS_LIVE_01" },
              { title: "Proof of Delivery Verification", code: "POD_AUTH_02" },
              { title: "Delay Alerts & Exception Handling", code: "ERR_ALERT_03" },
              { title: "Driver Communication Systems", code: "COMMS_CMD_04" },
              { title: "Node Handoff Validation", code: "NODE_VAL_05" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="py-6 md:py-10 border-b border-black/5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start md:items-center"
              >
                <div className="md:col-span-3 xl:col-span-3">
                  <span className="text-[11px] sm:text-[12px] text-black/40 font-mono tracking-widest uppercase block mb-1 md:mb-0">{item.code}</span>
                </div>
                <div className="md:col-span-9 xl:col-span-9">
                  <h3 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-light tracking-tighter text-[#1a1c1a] leading-[1.1] uppercase font-poppins pr-4 lg:pr-0">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Nodes Section */}
      <section ref={opsNodesRef} className="h-screen min-h-[700px] py-8 md:py-12 px-4 md:px-6 relative overflow-hidden flex flex-col justify-center bg-[#f4f4f4]">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-75"
          >
            <source src="/assets/grass-semi.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-[1440px] w-full h-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10">
          {/* Left Side: Header Text */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full max-w-[600px] pt-12 lg:pt-0">
            <span className="brand-chip font-mono opacity-50 mb-6 md:mb-10 self-start">
              CORE SERVICE COVERAGE
            </span>
            <RevealHeading className="text-[38px] sm:text-[54px] md:text-[64px] xl:text-[80px] font-poppins font-normal leading-[0.95] tracking-tighter text-[#1a1c1a] uppercase mb-8">
              Operational<br /><span className="text-black/30">Nodes Mapped.</span>
            </RevealHeading>
            <p className="font-sans text-[16px] sm:text-[18px] md:text-[21px] text-black/60 leading-relaxed border-t border-black/10 pt-8">
              Our domestic operational presence spans major economic zones and industrial clusters across the subcontinent.
            </p>
          </div>

          {/* Right Side: Interactive Map */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative w-full h-full min-h-[400px]">
            <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full w-[80%] h-[80%] m-auto" />
            <div className="w-full h-full mx-auto relative z-10 drop-shadow-2xl flex items-center justify-center pb-4 lg:pb-0">
              <IndiaMap activeCity={hoveredCity} onHoverCity={setHoveredCity} />
            </div>
          </div>
        </div>
      </section>

      {/* Pan-India Execution Framework Section */}
      <section className="py-32 bg-white px-4 md:px-6 relative overflow-hidden min-h-screen flex flex-col justify-center border-t border-black/5">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col items-start text-left space-y-8 md:space-y-12 order-2 lg:order-1"
          >
            <span className="brand-chip font-mono opacity-50">BRAND PROMISE</span>
            <RevealHeading className="text-[44px] sm:text-[60px] md:text-[72px] xl:text-[88px] font-poppins font-normal leading-[0.9] tracking-tighter uppercase text-[#1a1c1a]">
              Trust<br /><span className="text-black/30">At Every Stage.</span>
            </RevealHeading>
            <p className="font-sans text-[18px] sm:text-[22px] md:text-[26px] text-black/70 leading-relaxed font-light italic max-w-[500px]">
              "Built on disciplined processes and dependable execution, we ensure cargo is handled efficiently from storage to final distribution."
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-7 aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-black/5 group relative shadow-2xl order-1 lg:order-2"
          >
            <video
              src={warehouseVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
            />
            {/* Cinematic Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white flex flex-col gap-2">
              <span className="brand-chip-dark font-mono opacity-50 mb-4">STORAGE INFRASTRUCTURE</span>
              <p className="text-[14px] sm:text-[16px] text-white/90 font-mono tracking-widest uppercase">SECURE WAREHOUSING FACILITIES</p>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
};
