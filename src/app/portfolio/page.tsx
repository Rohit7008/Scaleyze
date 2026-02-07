import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, BarChart3, Bot, Car, Hammer, Home, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
    title: 'Client Success Stories | Scaleyze Portfolio',
    description: 'See how Scaleyze helps businesses grow through custom automation, web development, and revenue operations. View our case studies in manufacturing, finance, SaaS, and e-commerce.',
    keywords: ['business automation portfolio', 'web development case studies', 'revenue operations success stories', 'custom CRM development', 'lead generation systems', 'Scaleyze work'],
    openGraph: {
        title: 'Client Success Stories | Scaleyze Portfolio',
        description: 'Real results: 3x lead volume, automated workflows, and custom platforms. See how we help businesses scale.',
        type: 'website',
    }
};

const projects = [
    {
        title: "Hari Om Stainless Steel",
        url: "https://www.hariomstainlesssteel.com/",
        description: "Transforming a traditional manufacturing business with a digital-first approach. We built a high-conversion funnel and redirecting ad campaigns that now generate a consistent stream of qualified leads, effectively modernizing their client acquisition pipeline.",
        result: "Established a predictable digital pipeline for high-ticket manufacturing orders.",
        icon: <Hammer className="w-8 h-8 md:w-10 md:h-10 text-red-500" />,
        tags: ["Manufacturing Lead Gen", "Funnel Optimization", "Conversion Design"],
        color: "from-red-500/10 to-orange-500/10",
        borderColor: "group-hover:border-red-500/50",
        image: "/portfolio/hariom.png"
    },
    {
        title: "Sai Ram Decorators",
        url: "https://www.sairamdecorators.com/",
        description: "Dominated the local interior design market through SEO excellence and automated lead capture. We engineered a system that not only increased online visibility but also automated the initial lead qualification process, saving the sales team dozens of hours weekly.",
        result: "Achieved top local search rankings and fully automated lead intake.",
        icon: <Home className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />,
        tags: ["SEO Dominance", "Automated CRM", "Interior Design"],
        color: "from-blue-500/10 to-cyan-500/10",
        borderColor: "group-hover:border-blue-500/50",
        image: "/portfolio/sairam.png"
    },
    {
        title: "The Nural",
        url: "https://www.thenural.com/",
        description: "Elevated a financial consultancy's brand authority with a premium, trust-building digital presence. We implemented an elaborate showcase system that builds credibility and seamlessly converts high-net-worth visitors into booked consultations.",
        result: "Increased visitor-to-consultation booking rate for high-value clients.",
        icon: <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />,
        tags: ["FinTech Design", "Trust Architecture", "Conversion Systems"],
        color: "from-orange-500/10 to-yellow-500/10",
        borderColor: "group-hover:border-orange-500/50",
        image: "/portfolio/thenural.png"
    },
    {
        title: "Super Leads Platform",
        url: "https://super-leads-sand.vercel.app/dashboard",
        description: "Architected a custom, white-labeled SaaS platform for financial portfolio management. This dashboard enables real-time tracking of leads, pipeline stages, and analytics, giving agents a unified command center for client management.",
        result: "Deployed a fully custom CRM solution replacing scattered spreadsheets.",
        icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-indigo-500" />,
        tags: ["Custom SaaS Dev", "Pipeline Analytics", "Financial Ops"],
        color: "from-indigo-500/10 to-purple-500/10",
        borderColor: "group-hover:border-indigo-500/50",
        image: "/portfolio/superleads.png"
    },
    {
        title: "The Auto Market",
        url: "https://theautomarket.com/",
        description: "Developed a scalable multi-vendor marketplace connecting auto parts dealers directly with customers. The platform handles complex inventory management, vendor registration, and real-time order tracking in a unified ecosystem.",
        result: "Launched a scalable multi-vendor infrastructure for niche e-commerce.",
        icon: <Car className="w-8 h-8 md:w-10 md:h-10 text-green-500" />,
        tags: ["Multi-Vendor Marketplace", "E-commerce Infrastructure", "Automotive"],
        color: "from-green-500/10 to-emerald-500/10",
        borderColor: "group-hover:border-green-500/50",
        image: "/portfolio/automarket.png"
    },
    {
        title: "AI Content Engine",
        url: "https://github.com/Rohit7008/Ai-cheatsheet-generator",
        description: "Built a production-ready n8n workflow that autonomously effects content creation. The system takes raw ideas and transcripts to generate high-performing LinkedIn posts and visual cheat-sheets using Claude AI, reducing content production time by 90%.",
        result: "Automated end-to-end content production from idea to visual asset.",
        icon: <Bot className="w-8 h-8 md:w-10 md:h-10 text-pink-500" />,
        tags: ["n8n Automation", "Generative AI", "Content Ops"],
        color: "from-pink-500/10 to-rose-500/10",
        borderColor: "group-hover:border-pink-500/50",
        image: "/portfolio/aicheatsheet.png"
    }
];

export default function PortfolioPage() {
    // Schema Markup for SEO
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Scaleyze Portfolio - Business Automation & Web Development Case Studies",
        "description": "A collection of successful projects where Scaleyze helped businesses scale through automation, custom software, and revenue operations systems.",
        "url": "https://scaleyze.com/portfolio",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": projects.map((project, index) => ({
                "@type": "CreativeWork",
                "position": index + 1,
                "name": project.title,
                "description": project.description,
                "url": project.url,
                "creator": {
                    "@type": "Organization",
                    "name": "Scaleyze"
                }
            }))
        }
    };

    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-20 pb-8 md:pt-32 md:pb-12 overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

                <Container className="relative z-10 text-center">
                    <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        Case Studies
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                        Results That <span className="text-primary block md:inline">Speak Volume</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
                        From custom CRM platforms to automated content engines, explore how we utilize technology to solve complex business problems and drive measurable growth.
                    </p>
                </Container>
            </section>

            {/* Projects Grid */}
            <section className="pb-24 pt-0">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {projects.map((project, index) => (
                            <Link
                                href={project.url}
                                key={index}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative flex flex-col h-full ml-0 overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${project.color} p-8 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm hover:-translate-y-1`}
                            >
                                {/* Background Image or Border */}
                                {project.image && (
                                    <>
                                        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40" />
                                        <div className={`absolute inset-0 border-2 border-transparent ${project.borderColor} rounded-2xl transition-colors duration-300 z-20`} />
                                    </>
                                )}
                                {!project.image && (
                                    <div className={`absolute inset-0 border-2 border-transparent ${project.borderColor} rounded-2xl transition-colors duration-300`} />
                                )}

                                <div className="relative z-10 flex flex-col h-full flex-grow">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-3 bg-background/50 backdrop-blur-md rounded-xl border border-border/50 shadow-sm group-hover:scale-110 transition-transform duration-300 ${project.image ? 'text-primary' : ''}`}>
                                            {project.icon}
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="mb-6 pl-3 border-l-2 border-primary/30">
                                        <p className="text-xs font-semibold text-foreground/80 italic">
                                            "{project.result}"
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md bg-background/60 border border-border/50 text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-muted-foreground mb-6">Ready to build your success story?</p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                        >
                            Start Your Transformation
                        </Link>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
