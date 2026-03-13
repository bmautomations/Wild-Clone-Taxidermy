import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";

const galleryImages = [
    { src: "/images/New Gallery Watermark Images/Untitled design (1).png", alt: "Gallery Mount 1" },
    { src: "/images/New Gallery Watermark Images/Untitled design (2).png", alt: "Gallery Mount 2" },
    { src: "/images/New Gallery Watermark Images/Untitled design (3).png", alt: "Gallery Mount 3" },
    { src: "/images/New Gallery Watermark Images/Untitled design (4).png", alt: "Gallery Mount 4" },
    { src: "/images/New Gallery Watermark Images/Untitled design (6).png", alt: "Gallery Mount 6" },
    { src: "/images/New Gallery Watermark Images/Untitled design (7).png", alt: "Gallery Mount 7" },
    { src: "/images/New Gallery Watermark Images/Untitled design (8).png", alt: "Gallery Mount 8" },
    { src: "/images/New Gallery Watermark Images/Untitled design (9).png", alt: "Gallery Mount 9" },
    { src: "/images/New Gallery Watermark Images/Untitled design (12).png", alt: "Gallery Mount 12" },
    { src: "/images/New Gallery Watermark Images/Untitled design (13).png", alt: "Gallery Mount 13" },
    { src: "/images/New Gallery Watermark Images/Untitled design (14).png", alt: "Gallery Mount 14" },
    { src: "/images/New Gallery Watermark Images/Untitled design (15).png", alt: "Gallery Mount 15" },
    { src: "/images/New Gallery Watermark Images/Untitled design (16).png", alt: "Gallery Mount 16" },
    { src: "/images/New Gallery Watermark Images/Untitled design (17).png", alt: "Gallery Mount 17" },
    { src: "/images/New Gallery Watermark Images/Untitled design (18).png", alt: "Gallery Mount 18" },
    { src: "/images/New Gallery Watermark Images/Untitled design (19).png", alt: "Gallery Mount 19" },
    { src: "/images/New Gallery Watermark Images/Wild Clone Brochure July 2025_Compressed(9).pdf (1).png", alt: "Gallery Feature 1" },
    { src: "/images/New Gallery Watermark Images/Wild Clone Brochure July 2025_Compressed(9).pdf (2).png", alt: "Gallery Feature 2" },
];

const Gallery = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
    const closeLightbox = useCallback(() => setLightboxIndex(null), []);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <section ref={heroRef} className="pt-40 pb-16 bg-background overflow-hidden">
                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 lg:px-12 text-center">
                    <AnimatedSection>
                        <div className="flex justify-center mb-8">
                          <img src="/Modernised Logo.png" alt="Wild Clone Taxidermy Logo" className="h-24 w-auto md:h-32 object-contain" />
                        </div>
                        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight mb-2">
                            Gallery
                        </h1>
                        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-gray-light tracking-tight mb-8">
                            Our Work
                        </h2>
                        <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto">
                            A showcase of some of the finest mounts and trophies produced by the Wild Clone Taxidermy team.
                        </p>
                    </AnimatedSection>
                </motion.div>
            </section>

            <section className="pb-32 bg-background">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {galleryImages.map((img, i) => (
                            <AnimatedSection key={i} delay={i * 0.05} scale>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.4 }}
                                    onClick={() => openLightbox(i)}
                                    className="aspect-square bg-black border border-border rounded-xl flex items-center justify-center overflow-hidden cursor-zoom-in"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                                    />
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Videos Section */}
            <section className="pb-32 bg-background">
                <div className="container mx-auto px-6 lg:px-12">
                    <AnimatedSection>
                        <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                            Videos
                        </h3>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[1, 2, 3].map((i) => (
                            <AnimatedSection key={`video-${i}`} delay={i * 0.1} scale>
                                <div className="aspect-[2/3] bg-card border border-border rounded-2xl flex flex-col items-center justify-center overflow-hidden group hover:border-gray-medium transition-colors duration-500">
                                    <div className="text-center p-8 text-balance">
                                        <div className="w-16 h-16 bg-foreground/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-foreground/20 transition-colors duration-500">
                                            <svg className="w-8 h-8 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                                            </svg>
                                        </div>
                                        <p className="font-heading text-lg font-semibold text-foreground mb-2">Featured Video {i}</p>
                                        <p className="font-body text-xs text-muted-foreground">Facebook Content Piece</p>
                                    </div>
                                    {/* Placeholder for the actual embed */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                        <span className="text-white text-xs font-body tracking-wider uppercase">Watch on Facebook</span>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <Lightbox
                images={galleryImages}
                currentIndex={lightboxIndex}
                onClose={closeLightbox}
                onNavigate={setLightboxIndex}
            />

            <CTABanner />
            <Footer />
        </div>
    );
};

export default Gallery;
