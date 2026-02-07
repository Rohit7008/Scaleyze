import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-6 md:py-8 text-muted-foreground">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-4 md:mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link
                            href="/"
                            className="flex items-center gap-2"
                        >
                            {/* Light mode logo */}
                            <Image
                                src="/logo/ScaleyzeLogo.png"
                                alt="Scaleyze Logo"
                                width={112}
                                height={112}
                                className="w-20 h-20 md:w-32 md:h-32 object-contain dark:hidden"
                            />
                            {/* Dark mode logo */}
                            <Image
                                src="/logo/Scaleyze Logo.png"
                                alt="Scaleyze Logo"
                                width={112}
                                height={112}
                                className="w-20 h-20 md:w-32 md:h-32 object-contain hidden dark:block"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs -mt-4 relative z-10 font-medium">
                            We design business systems that connect websites, automation, and operations into one structured workflow.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-3">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/services/customer-facing-systems" className="hover:text-foreground transition-colors">Conversion Websites</Link></li>
                            <li><Link href="/services/lead-intake-systems" className="hover:text-foreground transition-colors">Lead Gen Systems</Link></li>
                            <li><Link href="/services/revenue-operations-automation" className="hover:text-foreground transition-colors">Sales Automation</Link></li>
                            <li><Link href="/services/ai-assisted-business-systems" className="hover:text-foreground transition-colors">AI Workflows</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-3">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/#why-us" className="hover:text-foreground transition-colors">About</Link></li>
                            <li><Link href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link></li>
                            <li><Link href="/#process" className="hover:text-foreground transition-colors">Process</Link></li>
                            <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-foreground transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-3">Connect</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="https://linkedin.com/company/scaleyze" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</Link></li>
                            <li><Link href="https://twitter.com/scaleyze" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Twitter</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Instagram</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-4 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
                    <p>© {new Date().getFullYear()} Scaleyze. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
