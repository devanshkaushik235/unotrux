import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Page } from "./types";
import { Home } from "./pages/Home";
import { System } from "./pages/System";
import { Intelligence } from "./pages/Intelligence";
import { Services } from "./pages/Services";
import { GetAccess } from "./pages/GetAccess";
import { Network } from "./pages/Network";
import { About } from "./pages/About";
import { pageVariants } from "./lib/animations";
import { CTA } from "./components/CTA";

const Navbar = ({ currentPage, setPage }: { currentPage: Page; setPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "System", value: "System" },
    { label: "Network", value: "Network" },
    { label: "Services", value: "Services" },
    { label: "About", value: "About" },
    { label: "Operations", value: "Intelligence" }
  ];

  const isLightPage = currentPage !== "Home";
  const showScrolledNavbar = scrolled || isLightPage;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${showScrolledNavbar ? "bg-white border-black/10" : "bg-transparent border-white/10"}`}>
      <div className="flex items-stretch h-[60px] md:h-[70px]">
        {/* Brand */}
        <div 
          className={`flex items-center px-6 md:px-12 border-r cursor-pointer transition-all duration-300 ${showScrolledNavbar ? "border-black/10" : "border-white/10"}`}
          onClick={() => setPage("Home")}
        >
          <span className={`text-[18px] md:text-[20px] font-logo uppercase tracking-[-0.05em] ${showScrolledNavbar ? "text-black" : "text-white"}`}>
            UNOTRUX
          </span>
        </div>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex flex-grow items-center justify-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setPage(item.value as Page)}
              className={`text-[13px] font-medium transition-all hover:opacity-100 ${showScrolledNavbar ? "text-black/60 hover:text-black" : "text-white/60 hover:text-white"}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className={`hidden md:flex items-center px-6 md:px-12 border-l ${showScrolledNavbar ? "border-black/10" : "border-white/10"}`}>
          <button 
            onClick={() => setPage("GetAccess")}
            className={`px-6 py-2 rounded-full text-[13px] font-medium transition-all duration-300 border hover:-translate-y-0.5 ${showScrolledNavbar ? "border-transparent bg-black text-white hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:bg-black/90" : "border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:shadow-[0_4px_15px_rgba(255,255,255,0.15)]"}`}
          >
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden px-6 flex items-center ml-auto border-l ${showScrolledNavbar ? "text-black border-black/10" : "text-white border-white/10"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-black/10 p-8 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setPage(item.value as Page);
                  setIsOpen(false);
                }}
                className={`text-[24px] font-bold uppercase tracking-tight text-left ${currentPage === item.value ? "text-black" : "text-black/40"}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setPage("GetAccess");
                setIsOpen(false);
              }}
              className={`text-[24px] font-bold uppercase tracking-tight text-left ${currentPage === "GetAccess" ? "text-black" : "text-black/40"}`}
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ currentPage, setPage, setTargetHash }: { currentPage: Page, setPage: (p: Page) => void, setTargetHash: (h: string | null) => void }) => {
  return (
    <footer className="bg-black text-white pt-0 pb-12 overflow-hidden border-t border-white/5">
      <div className="px-0">
        <div className="flex flex-col lg:flex-row border-b border-white/10">
          <div className="lg:w-1/3 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="mb-12 flex flex-col w-fit select-none group">
              <div className="relative">
                <span className="text-[40px] md:text-[52px] font-logo uppercase leading-none tracking-tight text-white transition-transform duration-1000 group-hover:scale-[1.02]">
                  UNOTRUX
                </span>
              </div>
              <div className="flex justify-between w-full text-[9px] md:text-[11.5px] font-montserrat font-semibold uppercase text-white/70 mt-1 transition-transform duration-1000 group-hover:scale-[1.02]">
                {"CARGO PRIVATE LIMITED".split("").map((char, i) => (
                  <span key={i}>{char === " " ? "\u00A0" : char}</span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60 block">JOIN THE NETWORK</span>
              <div className="relative group max-w-[400px]">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-[#1e2a22] border-none rounded-[16px] px-6 py-4 text-[14px] focus:outline-none focus:ring-1 focus:ring-white/20 transition-all placeholder:text-white/20 text-white"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 group-hover:text-white transition-colors">
                  <ArrowUpRight size={20} />
                </button>
              </div>
              <p className="text-[12px] opacity-40 font-medium pt-2">
                Your information is never disclosed to third parties.
              </p>
            </div>
          </div>

          <div className="flex-grow p-6 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 uppercase">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] opacity-40 block mb-10">PLATFORM</span>
                <ul className="space-y-4">
                  {[
                    { label: "System", value: "System" },
                    { label: "Network", value: "Network" },
                    { label: "Operations", value: "Intelligence" },
                    { label: "Services", value: "Services" }
                  ].map((link) => (
                    <li key={link.label}>
                      <button 
                        onClick={() => setPage(link.value as Page)}
                        className="text-[16px] md:text-[18px] font-medium hover:opacity-60 transition-opacity"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] opacity-40 block mb-10">COMPANY</span>
                <ul className="space-y-4">
                  {[
                    { label: "About Us", value: "About" },
                    { label: "Testimonials", value: "About", hash: "testimonials" },
                    { label: "FAQ", value: "About", hash: "faq" }
                  ].map((link) => (
                    <li key={link.label}>
                      <button 
                        onClick={() => {
                          if (link.hash) {
                            if (currentPage === link.value) {
                              document.getElementById(link.hash)?.scrollIntoView({ behavior: "smooth" });
                            } else {
                              setTargetHash(link.hash);
                              setPage(link.value as Page);
                            }
                          } else {
                            setTargetHash(null);
                            setPage(link.value as Page);
                          }
                        }}
                        className="text-[16px] md:text-[18px] font-medium hover:opacity-60 transition-opacity whitespace-nowrap"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] opacity-40 block mb-10">CONNECT</span>
                <ul className="space-y-4">
                  {[
                    { label: "Get Access", value: "GetAccess" }
                  ].map((link) => (
                    <li key={link.label}>
                      <button 
                        onClick={() => setPage(link.value as Page)}
                        className="text-[16px] md:text-[18px] font-medium hover:opacity-60 transition-opacity"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-12">
                  <span className="text-[10px] font-bold tracking-[0.2em] opacity-40 block mb-6">INQUIRIES</span>
                  <a href="mailto:unotrux@gmail.com" className="text-[16px] md:text-[18px] font-medium hover:opacity-60 transition-opacity lowercase">
                    unotrux@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 overflow-hidden border-b border-white/10">
          <h1 
            className="font-audiowide text-secondary/90 leading-[0.8] tracking-normal text-center uppercase whitespace-nowrap block w-full"
            style={{ fontSize: '17.3vw' }}
          >
            UNOTRUX
          </h1>
        </div>

        <div className="pt-10 border-t border-white/10 px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <p className="text-[12px] font-bold tracking-tight opacity-80 uppercase">
              ©UNOTRUX CARGO PRIVATE LIMITED® 2026, All Rights Reserved
            </p>
            <p className="text-[12px] font-medium opacity-80">
              Designed & Developed by Charizard
            </p>
          </div>
          
          <p className="text-[12px] leading-relaxed opacity-30 font-medium w-full text-justify">
            UNOTRUX® operates as a professionally managed logistics and cargo solutions company in India, delivering structured transportation systems across national freight corridors. Built on principles of operational discipline, network reliability, and enterprise-grade execution, UNOTRUX adheres to industry standards for secure freight movement, transparent coordination, and responsible supply chain management ensuring every movement is backed by precision, accountability, and long-term business trust.
          </p>
        </div>
      </div>
    </footer>
  );
};

const PlaceholderPage = ({ title, setPage }: { title: string; setPage: (p: Page) => void }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 pt-[140px] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="brand-chip font-mono opacity-50 mb-8">UNDER CONSTRUCTION</span>
        <h1 className="text-[64px] md:text-[120px] font-bold leading-[0.85] text-black mb-12 uppercase tracking-tighter">
          {title}
        </h1>
        <button 
          onClick={() => setPage("Home")}
          className="button-pill bg-black text-white hover:scale-105"
        >
          Return Home
        </button>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("Home");
  const [targetHash, setTargetHash] = useState<string | null>(null);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home setPage={setCurrentPage} />;
      case "System":
        return <System setPage={setCurrentPage} />;
      case "Intelligence":
        return <Intelligence setPage={setCurrentPage} />;
      case "Services":
        return <Services setPage={setCurrentPage} />;
      case "About":
        return <About setPage={setCurrentPage} />;
      case "Network":
        return <Network setPage={setCurrentPage} />;
      case "GetAccess":
        return <GetAccess setPage={setCurrentPage} />;
      default:
        return <PlaceholderPage title={currentPage} setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="font-sans selection:bg-black selection:text-white">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main>
        <AnimatePresence 
          mode="wait"
          onExitComplete={() => {
            setTimeout(() => {
              if (targetHash) {
                document.getElementById(targetHash)?.scrollIntoView();
              } else {
                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              }
            }, 50);
          }}
        >
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      {currentPage !== "GetAccess" && <CTA setPage={setCurrentPage} />}
      <Footer currentPage={currentPage} setPage={setCurrentPage} setTargetHash={setTargetHash} />
    </div>
  );
}
