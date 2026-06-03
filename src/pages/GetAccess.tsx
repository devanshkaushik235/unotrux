import React from "react";
import { motion } from "motion/react";
import {
  MessageCircle,
  FileText,
  Mail,
  Download,
  Send,
  PhoneCall,
  ChevronDown,
  MapPin,
  User,
  Building2,
  Phone,
  Shield,
  MessageSquare
} from "lucide-react";
import { Page } from "../types";
import fireVideo from "../../assets/Fire, Lines, Flow, Background _ Stock Video Footage _ Artgrid.io_.mp4";
import logisticsImage from "../../assets/UNOTRUX BLACK.png";
import { RevealHeading } from "../components/RevealHeading";

const channels = [
  {
    icon: MessageCircle,
    label: "WHATSAPP / REAL-TIME 💬",
    title: "Direct Business Inquiry",
    desc: "Fast communication for active shipments, dispatch coordination, and urgent operational support.",
    action: "CONNECT NOW",
    link: "#",
    color: "",
    bgImage: "https://i.pinimg.com/1200x/a3/b2/10/a3b21066af0cbf88bf17873d8b53b731.jpg"
  },
  {
    icon: FileText,
    label: "BRANCH NETWORK / PDF 📄",
    title: "Download Branch List",
    desc: "Access the complete UNOTRUX branch network, operational hubs, and regional service locations across India.",
    action: "DOWNLOAD PDF",
    link: "#",
    color: "bg-blue-500/10 text-blue-700",
    bgImage: "https://i.pinimg.com/1200x/ea/1a/bc/ea1abc170a07aa38177b053da42b09f1.jpg"
  },
  {
    icon: Mail,
    label: "EMAIL / OFFICIAL ✉️",
    title: "unotrux@gmail.com",
    desc: "Official channel for business requirements, fleet partnerships, enterprise onboarding, and organizational inquiries.",
    action: "SEND EMAIL",
    link: "mailto:unotrux@gmail.com",
    color: "bg-orange-500/10 text-orange-700",
    bgImage: "https://i.pinimg.com/736x/7a/d3/1c/7ad31c9b5b409b5ed1f1dec150a5e503.jpg"
  }
];

const requirements = [
  "Full Truck Load (FTL)",
  "Less Than Truck Load (LTL)",
  "Express Delivery",
  "Fleet Partnership"
];

function BusinessSupport() {
  return (
    <section id="support" className="max-w-7xl mx-auto px-6 py-24 border-t border-black/10 bg-white">
      <div className="mb-16 flex flex-col items-center text-center max-w-4xl mx-auto">
        <span className="brand-chip font-mono opacity-50 mb-6">
          Initialize Business Support
        </span>
        <RevealHeading className="text-[3.5rem] md:text-[4.5rem] leading-[1] tracking-tighter mb-8">
          Start your logistics journey with us
        </RevealHeading>
        <p className="text-lg text-franco-text/60 leading-relaxed font-light max-w-2xl">
          We provide direct communication channels for faster response, structured coordination, and enterprise-level logistics assistance.
        </p>
      </div>

      <div className="mb-16">
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-franco-text/40">Access Channels</h3>
          <div className="h-[1px] flex-grow bg-franco-text/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((channel, i) => (
            <motion.div
              key={i}
              className="max-sm:p-6 p-10 rounded-[40px] bg-franco-card/40 border border-franco-text/5 flex flex-col h-full relative overflow-hidden group"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <img
                  src={channel.bgImage}
                  alt=""
                  className="w-full h-full object-cover opacity-100 select-none"
                />
              </div>

              {/* Direct relative children hierarchy for layout stacking */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-6">
                  <channel.icon className="w-4 h-4 text-white/60" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">{channel.label}</span>
                </div>

                <h4 className="text-2xl font-poppins font-semibold text-white mb-4">{channel.title}</h4>
                <p className="text-sm text-white/80 leading-relaxed mb-10 flex-grow">
                  {channel.desc}
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-white text-black hover:bg-neutral-100 transition-colors rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 mt-auto"
                >
                  {channel.action}
                  {channel.action.includes("PDF") ? <Download className="w-4 h-4" /> : (channel.action.includes("EMAIL") ? <Send className="w-4 h-4" /> : <PhoneCall className="w-4 h-4" />)}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 p-8 sm:p-12 lg:p-16 bg-black rounded-[40px] sm:rounded-[60px] md:rounded-[80px] border border-white/5 relative overflow-hidden group/card">
        {/* Background loopable video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-100 transition-all duration-1000 ease-out select-none"
          >
            <source src={fireVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-tr from-black/95 via-black/60 to-black/95"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="brand-chip-dark font-mono opacity-50 mb-8">
                SYSTEM READY / INQUIRY
              </div>
              <h3 className="text-4xl lg:text-5xl font-poppins font-normal mb-6 leading-[1.15] tracking-tight uppercase text-white">
                Technical <br /> Coordination.
              </h3>
              <p className="text-sm text-white/60 mb-10 leading-relaxed font-light max-w-sm">
                Submit your business profile to begin the service activation and technical coordination process across our network.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Registration Details</h3>
              <div className="h-[1px] flex-grow bg-white/5"></div>
            </div>

            <form action="mailto:unotrux@gmail.com" method="post" encType="text/plain" className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              <div className="space-y-2 group/field">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 group-focus-within/field:text-white transition-colors">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/field:text-white transition-colors">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your name"
                    className="w-full pl-12 pr-6 py-4 bg-black/50 hover:bg-black/70 focus:bg-black/80 rounded-xl border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/30 text-sm focus:outline-none transition-all placeholder:text-white/20 font-medium text-white"
                  />
                </div>
              </div>

              <div className="space-y-2 group/field">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 group-focus-within/field:text-white transition-colors">
                  Company Name
                </label>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/field:text-white transition-colors">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="Company"
                    placeholder="Enterprise / Organization"
                    className="w-full pl-12 pr-6 py-4 bg-black/50 hover:bg-black/70 focus:bg-black/80 rounded-xl border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/30 text-sm focus:outline-none transition-all placeholder:text-white/20 font-bold text-white"
                  />
                </div>
              </div>

              <div className="space-y-2 group/field">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 group-focus-within/field:text-white transition-colors">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/field:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    name="Phone"
                    placeholder="+91 00000 00000"
                    className="w-full pl-12 pr-6 py-4 bg-black/50 hover:bg-black/70 focus:bg-black/80 rounded-xl border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/30 text-sm focus:outline-none transition-all placeholder:text-white/20 font-medium text-white"
                  />
                </div>
              </div>

              <div className="space-y-2 group/field">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 group-focus-within/field:text-white transition-colors">
                  Work Email
                </label>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/field:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    name="Email"
                    placeholder="name@company.com"
                    className="w-full pl-12 pr-6 py-4 bg-black/50 hover:bg-black/70 focus:bg-black/80 rounded-xl border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/30 text-sm focus:outline-none transition-all placeholder:text-white/20 font-medium text-white"
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-2 group/field">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 group-focus-within/field:text-white transition-colors">
                  Business Requirement
                </label>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/field:text-white transition-colors">
                    <Shield className="w-4 h-4" />
                  </div>
                  <select
                    name="Requirement"
                    defaultValue=""
                    className="w-full pl-12 pr-12 py-4 bg-black/50 hover:bg-black/70 focus:bg-black/80 rounded-xl border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/30 text-sm focus:outline-none transition-all appearance-none cursor-pointer text-white/60 focus:text-white font-medium"
                  >
                    <option value="" disabled className="bg-neutral-900 text-white">Select your requirement...</option>
                    {requirements.map(req => (
                      <option key={req} value={req} className="bg-neutral-900 text-white">{req}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/30 group-focus-within/field:text-white">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-2 group/field">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 group-focus-within/field:text-white transition-colors">
                  Message / Additional Details
                </label>
                <div className="relative">
                  <div className="absolute left-5 top-6 text-white/30 group-focus-within/field:text-white transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    name="Message"
                    placeholder="Tell us more about your logistics needs..."
                    rows={4}
                    className="w-full pl-12 pr-6 py-5 bg-black/50 hover:bg-black/70 focus:bg-black/80 rounded-xl border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/30 text-sm focus:outline-none transition-all placeholder:text-white/20 font-medium text-white resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="md:col-span-2 pt-4">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full py-4.5 bg-white text-black hover:bg-neutral-200 rounded-xl text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-3 transition-colors duration-300 h-14"
                >
                  Transmit Inquiry
                  <Send className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-1 duration-300 transition-transform" />
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeadquartersSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-black/10">
      
      {/* Top Text */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <span className="brand-chip font-mono opacity-50 mb-6">
          Headquarters
        </span>
        <RevealHeading className="text-4xl md:text-5xl leading-[1.1] tracking-tight uppercase font-poppins text-primary">
          Business Logistics Hub
        </RevealHeading>
      </div>

      {/* Massive Typographic Logo Lockup HTML */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-center mb-24"
      >
        <div className="flex flex-col w-fit select-none pointer-events-none group px-4">
          <div className="relative">
            <span className="max-sm:text-[42px] text-[56px] sm:text-[80px] md:text-[110px] lg:text-[130px] font-logo uppercase leading-none tracking-tight text-primary transition-transform duration-1000 group-hover:scale-[1.02]">
              UNOTRUX
            </span>
          </div>
          <div className="flex justify-between w-full max-sm:text-[9.5px] text-[12px] sm:text-[17px] md:text-[23px] lg:text-[28px] font-montserrat font-semibold uppercase text-primary mt-1 md:mt-2 transition-transform duration-1000 group-hover:scale-[1.02]">
            {"CARGO PRIVATE LIMITED".split("").map((char, i) => (
              <span key={i}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Text */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-franco-text/40 mb-4 flex items-center gap-2">
            <MapPin className="w-3 h-3" /> Location
          </p>
          <p className="text-lg text-franco-text/70 leading-relaxed font-light max-w-md">
            India — Registered logistics operations center for national cargo movement and enterprise freight coordination.
          </p>
        </div>
      </div>
    </section>
  );
}

export const GetAccess = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <div className="min-h-screen">
      <main>
        <BusinessSupport />
        <HeadquartersSection />
      </main>
    </div>
  );
};
