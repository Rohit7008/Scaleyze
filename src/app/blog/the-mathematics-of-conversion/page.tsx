import { Metadata } from "next";
import DeepResearchArticle from "./ClientPage";

export const metadata: Metadata = {
    title: "100ms Latency Costs 7% Sales: The Math of Conversion | Scaleyze Insights",
    description: "Deep research into the correlation between website performance, latency, and revenue. Learn how a 100ms delay can reduce conversion rates by 7%.",
    keywords: [
        "website latency revenue impact",
        "conversion rate optimization study",
        "load time and sales",
        "cognitive load user interface design",
        "Amazon 100ms latency rule",
        "Google search generation time impact",
        "technical SEO conversion optimization"
    ],
    openGraph: {
        title: "The Mathematics of Conversion: How 100ms Latency Costs You 7% Sales",
        description: "In the high-stakes world of digital commerce, 'good design' is a quantifiable metric. We analyze the direct correlation between technical performance and revenue.",
        type: "article",
        url: "https://scaleyze.com/blog/the-mathematics-of-conversion",
        authors: ["Scaleyze Engineering Team"],
        publishedTime: "2023-10-27T12:00:00.000Z", // You might want to update this dynamically or periodically
    }
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "The Mathematics of Conversion: How 100ms Latency Costs You 7% Sales",
        "image": "https://scaleyze.com/images/blog/latency-chart.png", // Add a real image if possible
        "author": {
            "@type": "Organization",
            "name": "Scaleyze Engineering Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Scaleyze",
            "logo": {
                "@type": "ImageObject",
                "url": "https://scaleyze.com/logo/Nametag/Scaleyze Logo White.png"
            }
        },
        "datePublished": "2023-10-27",
        "description": "Deep research into the correlation between website performance, latency, and revenue."
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <DeepResearchArticle />
        </>
    );
}
