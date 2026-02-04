 Project StoryThe Journey: From Lilac Template to Dr. Maya ReynoldsPhase 1: Understanding the Foundation (Lilac Template)

Started by analyzing the Lilac Template homepage
Studied its clean, minimal aesthetic and layout structure
Identified key design patterns: image masks, section spacing, typography hierarchy
Understood the component-based architecture
Phase 2: Perfect Clone

Replicated the exact layout structure
Matched fonts: Playfair Display (headings) + Karla (body)
Reproduced the lilac color palette (#9b8ba6, cream, soft pink)
Cloned all 9 homepage sections with pixel-perfect accuracy
Implemented fully responsive design matching the original
Phase 3: Complete Redesign (Dr. Maya Reynolds)

Maintained: Clean layout structure, section spacing, professional hierarchy
Redesigned: Colors, fonts, content, images, branding
Added: New custom features and pages
🎨 Design EvolutionLilac Template → Dr. Maya ReynoldsElementLilac TemplateDr. Maya ReynoldsColorsLilac purple, cream, soft pinkSage green, soft aqua, warm goldFontsPlayfair Display + KarlaLora + InterThemeGeneral lifestyle/beautyTherapy/mental healthContentGeneric placeholderReal therapist profileImagesLifestyle photosTherapy-focused imagerySEOBasicOptimized (location + specialty)Color Psychology

Sage Green (#6B9080): Calming, reduces anxiety - perfect for therapy
Soft Aqua (#EAF4F4): Peace and tranquility
Warm Gold (#F6BD60): Optimism and warmth
Charcoal (#2C3531): Professional and grounded
Typography Choice

Lora: Elegant serif for headings - professional yet approachable
Inter: Modern sans-serif for body - excellent readability
🏗️ Project StructureCore Architecture
Next.js 14 (App Router) + TypeScript + Tailwind CSSDirectory Structure
maya-reynolds-therapy-site/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Homepage (9 sections)
│   │   ├── layout.tsx         # Root layout + fonts
│   │   ├── globals.css        # Global styles
│   │   ├── blog/              # Blog page + posts
│   │   └── contact/           # Contact page with map
│   ├── components/
│   │   ├── sections/          # Homepage sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SpecialtiesSection.tsx
│   │   │   ├── SupportSection.tsx
│   │   │   ├── TherapistSection.tsx
│   │   │   ├── OfficeSection.tsx    # ⭐ Custom (Part 3)
│   │   │   ├── FAQSection.tsx
│   │   │   ├── CredentialsSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── Header.tsx         # Navigation
│   │   ├── Footer.tsx         # Footer
│   │   └── ui/                # Reusable components
│   │       ├── Button.tsx
│   │       ├── ImageMask.tsx
│   │       └── Accordion.tsx
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/
│   └── images/                # Static images
├── tailwind.config.ts         # Custom color palette
├── next.config.js             # Image domains config
└── package.json               # Dependencies💻 Technologies & ToolsCore Stack

Next.js 14 - React framework with App Router
React 18 - UI library
TypeScript - Type safety
Tailwind CSS - Utility-first styling
Animation & UI

Framer Motion - Professional scroll animations
Lucide React - Icon library
Image Handling

Next.js Image Component - Automatic optimization
Unsplash CDN - High-quality stock images
Development Tools

ESLint - Code linting
PostCSS - CSS processing
Autoprefixer - CSS compatibility

Responsive Design
typescript// Tailwind responsive classes
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

Mobile-first approach
Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
Flexible layouts that adapt to all screens

-by Pratichi Ghosh