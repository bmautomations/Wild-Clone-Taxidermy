import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Mounting",
    desc: "Our core service — from shoulder mounts to full custom builds, preserving every detail for a lifetime.",
    href: "/mounts",
    external: false,
    image: "/images/mount_shoulder.png",
    imageBg: "#0a0a0a",
  },
  {
    title: "Tanning",
    desc: "Professional skin preparation and tanning using industry-leading techniques for durability and a natural finish.",
    href: "/services/tanning",
    external: false,
    image: "/images/tanning_service.jpg",
  },
  {
    title: "Dip & Pack",
    desc: "Chemical treatment and professional packing services for safe export of your trophies across international borders.",
    href: "/services/dip-pack",
    external: false,
    image: "/images/029577_b33402f874b4491bb8d0373ee046a314mv2.jpg",
  },
  {
    title: "Leather Worx",
    desc: "Premium bespoke leather goods handcrafted to complement your trophies and lifestyle.",
    href: "/services/leatherworks",
    external: false,
    image: "/Leatherworx images/leatherworks_1.jpg",
  },
  {
    title: "Wylde Craft",
    desc: "Handcrafted woodwork and bespoke furniture to mount, frame, and showcase your trophies.",
    href: "/services/wyldecraft",
    external: false,
    image: "/images/wyldecraft/giraffe_table.png",
    imageBg: "#0a0a0a",
  },
];

const Services = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-16 bg-background overflow-hidden">
        <motion.div style={{ y: heroY }} className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="/Modernised Logo.png" alt="Wild Clone Taxidermy Logo" className="h-24 w-auto md:h-32 object-contain" />
            </div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight mb-2">
              Wild Clone
            </h1>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-gray-light tracking-tight mb-8">
              Services
            </h2>
            <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto">
              Comprehensive taxidermy and export services, from mounting to global shipping — all handled with precision and care.
            </p>
          </AnimatedSection>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.08} scale>
                {svc.external ? (
                  <a href={svc.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <ServiceCard svc={svc} />
                  </a>
                ) : (
                  <Link to={svc.href} className="block h-full">
                    <ServiceCard svc={svc} />
                  </Link>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

// Extracted card component to keep JSX clean
interface ServiceCardProps {
  svc: {
    title: string;
    desc: string;
    image: string;
    imageBg?: string;
  };
}

const ServiceCard = ({ svc }: ServiceCardProps) => (
  <div
    className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer border border-border"
    style={{ background: svc.imageBg || "#111" }}
  >
    {/* Background image */}
    <img
      src={svc.image}
      alt={svc.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    />

    {/* Base gradient — always visible at bottom */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

    {/* Hover overlay — subtly darkens the card */}
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />

    {/* Content pinned to bottom */}
    <div className="absolute inset-0 flex flex-col justify-end p-6">
      {/* Description — slides up and fades in on hover */}
      <p className="font-body text-xs text-white/80 leading-relaxed mb-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out line-clamp-3">
        {svc.desc}
      </p>

      <div className="flex items-center justify-between">
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-white leading-tight">
          {svc.title}
        </h3>
        {/* Arrow CTA */}
        <span className="flex items-center gap-1 font-body text-xs text-white/60 group-hover:text-white transition-colors duration-300 shrink-0 ml-3">
          View
          <svg
            className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  </div>
);

export default Services;
