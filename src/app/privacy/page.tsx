"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <Section className="pt-32 pb-16">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                        <p className="text-muted-foreground mb-8">Last Updated: November 24, 2026</p>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Scaleyze ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our business automation and web development services.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>

                                <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Information You Provide</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    We collect information that you voluntarily provide when you:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Fill out contact forms or request consultations</li>
                                    <li>Subscribe to our newsletter or communications</li>
                                    <li>Engage our services and enter into agreements</li>
                                    <li>Communicate with us via email, phone, or messaging platforms</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    This may include: name, email address, phone number, company name, job title, business requirements, and any other information you choose to provide.
                                </p>

                                <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Automatically Collected Information</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    When you visit our website, we automatically collect certain technical information:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>IP address and device identifiers</li>
                                    <li>Browser type and version</li>
                                    <li>Operating system</li>
                                    <li>Pages visited, time spent, and navigation patterns</li>
                                    <li>Referring website addresses</li>
                                    <li>Date and time of access</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Cookies and Tracking Technologies</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We use cookies and similar tracking technologies to enhance your experience, analyze website traffic, and understand user behavior. You can control cookie preferences through your browser settings.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    We use collected information for the following purposes:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                    <li><strong>Service Delivery:</strong> To provide, maintain, and improve our business automation and web development services</li>
                                    <li><strong>Communication:</strong> To respond to inquiries, send project updates, and provide customer support</li>
                                    <li><strong>Business Operations:</strong> To process payments, manage contracts, and fulfill our obligations</li>
                                    <li><strong>Marketing:</strong> To send newsletters, promotional materials, and relevant business information (with your consent)</li>
                                    <li><strong>Analytics:</strong> To understand how our website is used and improve user experience</li>
                                    <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                                    <li><strong>Security:</strong> To detect, prevent, and address technical issues, fraud, and security threats</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    We do not sell, rent, or trade your personal information. We may share your information with:
                                </p>

                                <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Service Providers</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Third-party vendors who assist us in operating our business, including:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Web hosting and cloud infrastructure providers</li>
                                    <li>Payment processors</li>
                                    <li>Email and communication platforms</li>
                                    <li>Analytics and tracking services</li>
                                    <li>CRM and project management tools</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Legal Requirements</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    We may disclose your information when required by law, court order, or government regulation, or when necessary to:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Comply with legal obligations</li>
                                    <li>Protect our rights, property, or safety</li>
                                    <li>Prevent fraud or security threats</li>
                                    <li>Respond to lawful requests from public authorities</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Business Transfers</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Encryption of data in transit and at rest</li>
                                    <li>Secure server infrastructure and access controls</li>
                                    <li>Regular security audits and vulnerability assessments</li>
                                    <li>Employee training on data protection practices</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed">
                                    However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we securely delete or anonymize it.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">7. Your Rights and Choices</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Depending on your location, you may have the following rights regarding your personal information:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                    <li><strong>Objection:</strong> Object to processing of your personal information</li>
                                    <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                                    <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
                                    <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed">
                                    To exercise these rights, please contact us at <a href="mailto:privacy@scaleyze.com" className="text-primary hover:underline">privacy@scaleyze.com</a>
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">10. Third-Party Links</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any information.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of significant changes by posting the updated policy on our website with a new "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                                </p>
                                <div className="bg-surface/50 border border-border rounded-lg p-6">
                                    <p className="font-semibold mb-2">Scaleyze</p>
                                    <p className="text-muted-foreground">Email: <a href="mailto:privacy@scaleyze.com" className="text-primary hover:underline">privacy@scaleyze.com</a></p>
                                    <p className="text-muted-foreground">Website: <a href="https://scaleyze.com" className="text-primary hover:underline">www.scaleyze.com</a></p>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">13. Compliance with Regulations</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    We are committed to compliance with applicable data protection regulations, including:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                    <li>General Data Protection Regulation (GDPR) for EU residents</li>
                                    <li>California Consumer Privacy Act (CCPA) for California residents</li>
                                    <li>Other applicable state and international privacy laws</li>
                                </ul>
                            </section>

                            <section id="instagram-facebook" className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">14. Instagram and Facebook Messages</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    When you comment on our Instagram or Facebook posts or send us a direct message, we receive your public username, the content of your comment or message, and the time it was sent, through Meta&apos;s official APIs. We use this only to reply to you, answer your questions and arrange a consultation if you ask for one.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Some replies are drafted or sent by our automated assistant, with a person reviewing the conversation. Message text may be processed by AI service providers (such as Google Gemini or Cloudflare Workers AI) solely to write a reply. We do not sell this data, use it for advertising, or share it with anyone else.
                                </p>
                            </section>

                            <section id="data-deletion" className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">15. Data Deletion</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    You can ask us to delete the data we hold about you at any time, including your Instagram or Facebook comments and messages stored by us:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                    <li>Send the word <strong>DELETE</strong> in a direct message to <a href="https://www.instagram.com/scaleyze/" className="text-primary hover:underline">@scaleyze on Instagram</a> or to our Facebook Page, or</li>
                                    <li>Email <a href="mailto:privacy@scaleyze.com" className="text-primary hover:underline">privacy@scaleyze.com</a> with your username.</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    We delete your data within 30 days and confirm when it is done. Messages that remain inside Instagram or Facebook are controlled by Meta and can be removed from your own account.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
