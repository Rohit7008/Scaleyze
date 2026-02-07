import { Metadata } from "next";
import CustomerFacingSystemsClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "High-Conversion Customer Facing Systems | Scaleyze",
    description: "Transform your website into a 24/7 sales machine. We design high-performance, conversion-focused customer facing systems using behavioral psychology and data-driven UX.",
    keywords: [
        "customer facing systems",
        "high conversion website design",
        "conversion rate optimization services",
        "user centric web design",
        "business automation",
        "lead generation website",
        "interactive web experiences"
    ],
    openGraph: {
        title: "High-Conversion Customer Facing Systems | Scaleyze",
        description: "Transform your website into a 24/7 sales machine. Engineered for performance and conversion.",
        url: "https://scaleyze.com/services/customer-facing-systems",
        type: "website",
    }
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Customer Facing Systems Design",
        "provider": {
            "@type": "Organization",
            "name": "Scaleyze",
            "url": "https://scaleyze.com"
        },
        "description": "High-performance websites and interfaces engineered to support visitor-to-lead conversion and user experience.",
        "areaServed": "Global",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Design Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Strategic UI/UX Design"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Conversion Rate Optimization"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Performance Optimization"
                    }
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CustomerFacingSystemsClientPage />
        </>
    );
}
