import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useAnimate, stagger } from "motion/react";
import {
  ShieldCheck,
  Navigation2,
  Wifi,
  Maximize,
  Headphones,
  BarChart4,
  Plus,
  Minus
} from "lucide-react";
import { Page } from "../types";
import { Ticker } from "../components/Ticker";
import { accordionVariants, fadeInUp, staggerContainer, blurReveal } from "../lib/animations";
import corridorImg from "../../assets/ChatGPT Image May 29, 2026, 11_47_16 AM.png";
import nodesImg from "../../assets/ChatGPT Image May 29, 2026, 03_16_10 PM.png";
import adherenceImg from "../../assets/May 29, 2026, 12_35_11 PM - Copy.png";

const RevealText = ({ text, className }: { text: string, className?: string }) => {
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
          className="inline-block mr-[0.25em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};
const HeroAnimatedText = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const startAnimating = () => {
      animate(
        ".animate-word",
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
        },
        {
          duration: 1,
          ease: "easeInOut",
          delay: stagger(0.05),
        }
      );
    };

    startAnimating();
  }, [animate]);

  const lines = [
    [
      { type: 'text', content: "UNOTRUX" },
      { type: 'text', content: "PROVIDES" },
      { type: 'text', content: "THE" },
      { type: 'text', content: "ULTIMATE" }
    ],
    [
      { type: 'text', content: "PLATFORM" },
      { type: 'text', content: "TO" },
      { type: 'img', src: "https://i.pinimg.com/736x/73/62/17/736217b8fbc6442242373fc8214d0ec7.jpg", alt: "Logistics" },
      { type: 'text', content: "MOVE" },
      { type: 'text', content: "YOUR" }
    ],
    [
      { type: 'text', content: "CARGO," },
      { type: 'text', content: "ELEVATE", italic: true },
      { type: 'text', content: "YOUR", italic: true },
      { type: 'text', content: "LOGISTICS,", italic: true }
    ],
    [
      { type: 'img', src: "https://i.pinimg.com/1200x/be/fc/37/befc37e6f5465991b341b705c06f2371.jpg", alt: "Infrastructure" },
      { type: 'text', content: "AND" },
      { type: 'text', content: "CONNECT" },
      { type: 'text', content: "WITH" },
      { type: 'text', content: "MARKETS" }
    ],
    [
      { type: 'text', content: "IN" },
      { type: 'text', content: "A" },
      { type: 'text', content: "WAY" },
      { type: 'text', content: "THAT'S" },
      { type: 'text', content: "SIMPLE," },
      { type: 'text', content: "AND" }
    ],
    [
      { type: 'text', content: "HIGHLY" },
      { type: 'img', src: "https://i.pinimg.com/1200x/cd/49/9b/cd499b698da9cc592d6fa8dcc809122b.jpg", alt: "Connection" },
      { type: 'text', content: "EFFECTIVE." }
    ]
  ];

  return (
    <h1
      ref={scope}
      className="text-[10vw] md:text-[5.5vw] lg:text-[4.5vw] leading-[1.05] tracking-tight text-center max-w-[1200px]"
    >
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.map((item, itemIndex) => {
            if (item.type === 'text') {
              return (
                <motion.span
                  key={`${lineIndex}-${itemIndex}`}
                  className={`inline-block animate-word mr-[0.25em] last:mr-0 ${item.italic ? 'italic' : ''}`}
                  style={{
                    opacity: 0,
                    filter: "blur(10px)",
                    y: 10,
                  }}
                >
                  {item.content}
                </motion.span>
              );
            } else {
              return (
                <motion.span
                  key={`${lineIndex}-${itemIndex}`}
                  className="inline-block animate-word mr-[0.25em] last:mr-0"
                  style={{
                    opacity: 0,
                    filter: "blur(10px)",
                    y: 10,
                  }}
                >
                  <span className="inline-block w-[12vw] md:w-[7vw] aspect-[1.3/1] rounded-2xl md:rounded-3xl overflow-hidden align-middle relative -top-[0.5vw]">
                    <img
                      src={item.src!}
                      alt={item.alt}
                      className="w-full h-full object-cover brightness-110"
                      referrerPolicy="no-referrer"
                    />
                  </span>
                </motion.span>
              );
            }
          })}
        </span>
      ))}
    </h1>
  );
};

export const About = ({ setPage }: { setPage: (p: Page) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const faqCategories = [
    {
      name: "General",
      items: [
        { q: "What services does UNOTRUX provide?", a: "We offer Full Truck Load (FTL), Less Than Truck Load (LTL), route optimization, live cargo monitoring, and enterprise logistics coordination." },
        { q: "What regions do you operate in?", a: "We provide transportation services across major domestic corridors with strong terminal and route network coverage." },
        { q: "Can you handle large-volume cargo movement?", a: "Yes, we specialize in high-volume freight operations designed for enterprise-scale transportation requirements." },
        { q: "Do you offer customized logistics solutions?", a: "Yes, every cargo movement is planned based on shipment type, delivery priorities, route conditions, and operational needs." }
      ]
    },
    {
      name: "Tracking & Operations",
      items: [
        { q: "Do you provide real-time shipment tracking?", a: "Yes, our live monitoring system provides complete visibility and real-time status updates throughout the cargo lifecycle." },
        { q: "How do you ensure on-time delivery?", a: "Through predictive planning, route optimization, live tracking, and continuous operational monitoring across every shipment stage." },
        { q: "How is cargo safety maintained?", a: "Through secure loading protocols, specialized vehicle allocation, professional handling, and disciplined delivery systems." },
        { q: "Can I receive delivery confirmation?", a: "Yes, complete proof-of-delivery documentation and shipment confirmation are provided after successful delivery." }
      ]
    },
    {
      name: "Support",
      items: [
        { q: "How can I contact your support team?", a: "You can reach our logistics support team through phone, email, or direct operational assistance for shipment-related queries." },
        { q: "What if there is a delivery delay?", a: "Our intelligence system detects risks early, and our team immediately provides updated timelines and resolution support." },
        { q: "Do you provide emergency logistics support?", a: "Yes, depending on route availability and cargo requirements, urgent and priority shipment handling can be arranged." },
        { q: "Can I modify shipment details after booking?", a: "Yes, changes can be coordinated based on shipment stage, route planning, and operational feasibility." }
      ]
    }
  ];
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const stats = [
    { stat: "500+", desc: "Active route nodes synchronized", img: nodesImg },
    { stat: "48", desc: "Primary economic corridors covered", img: corridorImg },
    { stat: "100%", desc: "Safe movement protocol adherence", img: adherenceImg }
  ];

  // Image 2 rising up (starts halfway through first section, finishes at start of second)
  const y2 = useTransform(scrollYProgress, [0, 0.33, 0.66], ["100vh", "0vh", "0vh"]);

  // Image 3 rising up (starts halfway through second section, finishes at start of third)
  const y3 = useTransform(scrollYProgress, [0, 0.66, 1], ["100vh", "100vh", "0vh"]);



  return (
    <div className="relative min-h-screen text-white font-serif selection:bg-white/20">
      <div className="fixed inset-0 z-[-1]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-[0.25]"
        >
          <source src="/assets/feature-bg-video.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Intro Section */}
      <div className="pt-[160px] pb-20 md:pb-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <div className="mb-12">
            <span className="brand-chip-dark font-mono opacity-50 mb-6">
              ABOUT
            </span>
          </div>

          <HeroAnimatedText />
        </div>
      </div>

      {/* Cinematic Sticky Scroll Gallery */}
      <div ref={containerRef} className="h-[300vh] relative mt-20">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {stats.map((item, i) => {
            if (i === 1) return (
              <motion.div
                key={i}
                style={{ y: y2 }}
                className="absolute inset-0 z-20 h-screen w-full origin-bottom"
              >
                <div className="relative h-full w-full">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover"
                    alt="UNOTRUX Node"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-20 max-sm:left-4 left-12 md:bottom-32 md:left-24 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-8 rounded-[24px] font-sans max-sm:min-w-0 max-sm:w-[calc(100%-2rem)] min-w-[320px] shadow-2xl">
                    <div className="text-[64px] font-bold leading-none mb-2 text-white">{item.stat}</div>
                    <div className="text-[14px] font-bold tracking-[0.05em] uppercase opacity-80 leading-none text-white/80">{item.desc}</div>
                  </div>
                </div>
              </motion.div>
            );
            if (i === 2) return (
              <motion.div
                key={i}
                style={{ y: y3 }}
                className="absolute inset-0 z-30 h-screen w-full origin-bottom"
              >
                <div className="relative h-full w-full border-t border-white/10">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover"
                    alt="UNOTRUX Corridor"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-20 max-sm:left-4 left-12 md:bottom-32 md:left-24 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-8 rounded-[24px] font-sans max-sm:min-w-0 max-sm:w-[calc(100%-2rem)] min-w-[320px] shadow-2xl">
                    <div className="text-[64px] font-bold leading-none mb-2 text-white">{item.stat}</div>
                    <div className="text-[14px] font-bold tracking-[0.05em] uppercase opacity-80 leading-none text-white/80">{item.desc}</div>
                  </div>
                </div>
              </motion.div>
            );

            // First Slide (Static Base)
            return (
              <div key={i} className="absolute inset-0 z-10 h-screen w-full">
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                  alt="UNOTRUX Protocol"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-20 max-sm:left-4 left-12 md:bottom-32 md:left-24 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-8 rounded-[24px] font-sans max-sm:min-w-0 max-sm:w-[calc(100%-2rem)] min-w-[320px] shadow-2xl">
                  <div className="text-[64px] font-bold leading-none mb-2 text-white">{item.stat}</div>
                  <div className="text-[14px] font-bold tracking-[0.05em] uppercase opacity-80 leading-none text-white/80">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Continued Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-20 md:pb-24">
        <div className="w-full flex flex-col lg:flex-row gap-20 py-20 md:py-24 border-t border-white/10">
          <div className="lg:w-1/4">
            <span className="brand-chip-dark font-mono opacity-50 mb-6">WHY IT WORKS</span>
          </div>
          <div className="lg:w-3/4">
            <p className="text-[28px] md:text-[48px] leading-[1.05] tracking-tight font-serif text-white text-left">
              <RevealText text="Unlike standard logistics, UNOTRUX incorporates precision-driven principles, focusing on industrial-grade aesthetics, optimized fleet performance, and features that resonate with businesses dedicated to operational excellence. It's perfect for brands that want to make a positive impact and connect with global-scale markets." />
            </p>
          </div>
        </div>

      </div>

      {/* Why UNOTRUX Card Marquee Section */}
      <div className="w-full mt-12 border-t border-white/10 pt-20 md:pt-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="brand-chip-dark font-mono opacity-50 mb-6">
            <RevealText text="WHY UNOTRUX" />
          </span>
          <h2 className="text-[42px] md:text-[64px] leading-none mb-16">
            <RevealText text="WHY BUSINESSES CHOOSE US." />
          </h2>
        </div>

        <div className="relative py-12 w-full">
          <Ticker
            items={[
              { t: "Operational Reliability", icon: <ShieldCheck size={48} className="stroke-1" />, img: "https://i.pinimg.com/736x/38/1f/73/381f73e8f23470e5714b9736f9fbc724.jpg" },
              { t: "Route Optimization", icon: <Navigation2 size={48} className="stroke-1" />, img: "https://i.pinimg.com/1200x/6e/21/fe/6e21fe22d0cf08b1c55e9b86a378164a.jpg" },
              { t: "Real-Time Tracking", icon: <Wifi size={48} className="stroke-1" />, img: "https://i.pinimg.com/736x/be/16/e0/be16e0cf8034d42c7f28b7685db95131.jpg" },
              { t: "Scalable Solutions", icon: <Maximize size={48} className="stroke-1" />, img: "https://i.pinimg.com/1200x/fe/65/fb/fe65fbee7861e08f81826365e16cb1fe.jpg" },
              { t: "Execution Support", icon: <Headphones size={48} className="stroke-1" />, img: "https://i.pinimg.com/736x/a5/7f/91/a57f91405839a3ec62742731ed552bf0.jpg" },
              { t: "Logistics Strategy", icon: <BarChart4 size={48} className="stroke-1" />, img: "https://i.pinimg.com/736x/51/a8/b3/51a8b36b63d7dbf7bb69baf6111f5864.jpg" }
            ].map((item, idx) => (
              <div key={idx} className="relative w-[280px] md:w-[350px] aspect-[1.1] mx-4 rounded-3xl md:rounded-[24px] overflow-hidden p-8 md:p-12 flex flex-col justify-between shadow-2xl border border-white/10 bg-black text-left font-sans whitespace-normal">
                <img
                  src={item.img}
                  alt={item.t}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-0 pointer-events-none" />

                <div className="relative z-10 text-white/80">
                  {item.icon}
                </div>

                <div className="relative z-10">
                  <h3 className="text-[24px] font-medium text-white leading-tight">
                    {item.t}
                  </h3>
                </div>
              </div>
            ))}
            speed={40}
            direction="right"
          />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-20 md:pb-24">
        {/* Philosophy Section */}
        <div className="w-full mt-24 py-20 md:py-24 border-t border-white/10">
          <div className="flex flex-col lg:flex-row gap-20 mb-20">
            <div className="lg:w-2/3">
              <h2 className="text-[42px] md:text-[64px] leading-[0.95] tracking-tight">
                <RevealText text="Precise logistics ensures your supply chain is resilient" />
              </h2>
            </div>
            <div className="lg:w-1/3">
              <p className="text-[16px] md:text-[18px] text-white/60 font-sans leading-relaxed">
                <RevealText text="UNOTRUX is designed for enterprise partners committed to delivering excellence. With its seamless integration of high-capacity transport and real-time intelligence, UNOTRUX enables you to present your distribution authentically and engage with a network that values reliability and purpose." />
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[1.4/1] rounded-[40px] overflow-hidden">
              <img
                src="https://i.pinimg.com/1200x/5f/6d/0e/5f6d0ec9dd4b7a488ccf7df2376fe3e9.jpg"
                className="w-full h-full object-cover brightness-90 transition-all duration-1000"
                alt="Logistics Grid"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-[1.4/1] rounded-[40px] overflow-hidden">
              <img
                src="https://i.pinimg.com/1200x/f1/0e/45/f10e45bee161fb63c53b6509583219c8.jpg"
                className="w-full h-full object-cover brightness-90 transition-all duration-1000"
                alt="Terminal Operations"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="w-full mt-24 py-20 md:py-24 border-t border-white/10 flex flex-col lg:flex-row gap-20 relative">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <span className="brand-chip-dark font-mono opacity-50 mb-10">
                FAQ
              </span>
              <h2 className="text-[42px] md:text-[64px] leading-[0.95] tracking-tight">
                <RevealText text="Frequently Asked Questions" />
              </h2>
            </div>
          </div>

          <div className="lg:w-2/3">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-20 last:mb-0">
                <div className="mb-12">
                  <h3 className="text-2xl font-serif italic mb-4 opacity-40">{category.name}</h3>
                  <div className="h-px w-full bg-white/10" />
                </div>

                <div className="space-y-0">
                  {category.items.map((faq, index) => {
                    let globalIndex = 0;
                    for (let i = 0; i < catIndex; i++) {
                      globalIndex += faqCategories[i].items.length;
                    }
                    globalIndex += index + 1;
                    const displayIndex = globalIndex.toString().padStart(2, "0");
                    const faqId = `${catIndex}-${index}`;

                    return (
                      <div key={index} className="border-b border-white/10 last:border-0">
                        <button
                          onClick={() => setOpenFaq(openFaq === faqId ? null : faqId)}
                          className="w-full py-8 flex items-start text-left group"
                        >
                          <span className="text-[14px] font-sans font-bold opacity-20 mr-8 pt-2">
                            {displayIndex}
                          </span>
                          <span className="text-[20px] md:text-[28px] font-serif leading-tight group-hover:pl-4 transition-all duration-300 flex-grow">
                            {faq.q}
                          </span>
                          <div className="flex-shrink-0 ml-4 pt-1">
                            {openFaq === faqId ? <Minus size={24} /> : <Plus size={24} />}
                          </div>
                        </button>
                        <AnimatePresence>
                          {openFaq === faqId && (
                            <motion.div
                              variants={accordionVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              className="overflow-hidden"
                            >
                              <div className="pl-[54px]">
                                <p className="pb-8 text-white/60 font-sans leading-relaxed text-lg max-w-2xl">
                                  {faq.a}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" className="w-full mt-24 py-20 md:py-24 border-t border-white/10 flex flex-col lg:flex-row gap-20 relative">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <span className="brand-chip-dark font-mono opacity-50 mb-10">
                TESTIMONIALS
              </span>
              <h2 className="text-[42px] md:text-[64px] leading-[0.95] tracking-tight">
                <RevealText text="What our partners say." />
              </h2>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-32">
            {[
              {
                quote: "Strong network coverage, predictable delivery timelines, and complete transparency made scaling our cargo movement much easier.",
                author: "Vikram Singh",
                role: "Jaipur"
              },
              {
                quote: "Their ability to handle high-volume freight with consistency and transparency has made them a trusted long-term logistics partner.",
                author: "Amit Verma",
                role: "Hyderabad"
              },
              {
                quote: "Their live monitoring system and route planning gave us complete confidence in every movement. Reliable, fast, and highly professional.",
                author: "Rajiv Mehta",
                role: "Delhi"
              },
              {
                quote: "Working with UNOTRUX completely transformed our supply chain efficiency. Their precision, visibility, and disciplined execution made every shipment seamless.",
                author: "Madhav Sharma",
                role: "Mumbai"
              }
            ].map((item, index) => (
              <div key={index} className="max-w-2xl">
                <p className="text-[28px] md:text-[36px] font-serif italic leading-snug mb-10 text-white/90">"{item.quote}"</p>
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-sm tracking-widest uppercase mb-1">{item.author}</span>
                  <span className="font-sans text-xs text-white/30 uppercase tracking-widest">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
