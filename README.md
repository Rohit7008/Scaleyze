# Agency AI - Growth & Automation Systems

A premium, high-performance website built for an automation and AI agency. Designed to convert traffic into revenue with a modern "Dark SaaS" aesthetic.

## 🚀 Tech Stack
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Motion**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter)

## 🎨 Design System
The project uses a custom "Dark Luxury" theme defined in `tailwind.config.ts`.
- **Background**: `bg-background` (Zinc 950)
- **Cards**: `bg-surface` (Zinc 900) with glassmorphism effects.
- **Accents**: Subtle white glows and borders.

## 📂 Project Structure
```
src/
├── app/
│   ├── layout.tsx       # Root layout with font setup
│   ├── page.tsx         # Home page (Hero, Process, Services, CTA)
│   ├── services/        # Detailed Services page
│   └── contact/         # Contact page with form
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Homepage sections (Hero, Trust, etc.)
│   └── ui/              # Reusable atoms (Button, Card, Section)
└── lib/
    └── utils.ts         # Tailwind class merger
```

## 🛠 Customization
1. **Content**: Edit the arrays (e.g., `services`, `steps`) directly in the section components.
2. **Colors**: Modify the `colors` object in `tailwind.config.ts`.
3. **Animations**: Tweak `framer-motion` variants in `src/components/ui`.

## ⚡️ Getting Started
```bash
npm run dev
# Open http://localhost:3000
```
