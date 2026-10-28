# Bhushan Gavhane — Developer Portfolio

A production-quality personal portfolio website engineered for **Bhushan Gavhane**, Computer Engineering graduate (Sinhgad Institute of Technology, Pune • **8.56 CGPA**) and Full-Stack MERN Web Developer.

Designed with modern dark aesthetics inspired by top-tier developer platforms (Linear, Vercel, Supabase), featuring interactive product mockups, smooth motion animations, and verified academic & project details.

---

## 🚀 Live Demo & Contact
- **Live Portfolio**: [bhushangavhane.netlify.app](https://bhushangavhane.netlify.app)
- **Email**: [bhushangavhane06@gmail.com](mailto:bhushangavhane06@gmail.com)
- **Phone**: [+91 9373120370](tel:+919373120370)
- **LinkedIn**: [linkedin.com/in/bhushan-gavhane](https://linkedin.com/in/bhushan-gavhane)
- **GitHub**: [github.com/bhushan0919](https://github.com/bhushan0919)

---

## 🛠️ Technology Stack

- **Core**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 8
- **Styling**: Tailwind CSS v4 with custom dark design tokens
- **Motion & Animations**: Motion (`motion/react`)
- **Iconography**: Lucide React + custom SVGs
- **Typography**: Inter & JetBrains Mono (via Google Fonts)

---

## 📂 Project Structure

```
c:\Users\vyank\OneDrive\Desktop\BG_portfolio\
├── index.html                   # HTML template, SEO tags, Open Graph, Favicon monogram
├── package.json                 # Dependency configuration & scripts
├── vite.config.ts               # Vite configuration with Tailwind CSS v4 plugin
├── src/
│   ├── main.tsx                 # React entry point
│   ├── App.tsx                  # Root component, scroll progress, section layout
│   ├── index.css                # Tailwind base styles, dark theme, and grid utilities
│   ├── components/
│   │   ├── Icons.tsx            # Custom SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx           # Sticky navigation with active spy & mobile drawer
│   │   ├── SectionHeading.tsx   # Reusable section heading with entrance motion
│   │   ├── SocialLinks.tsx      # Social buttons with quick-copy email feedback
│   │   ├── ProjectMockups.tsx   # Custom high-fidelity mockups (Pujanam, Agri, Estimator)
│   │   ├── ProjectCard.tsx      # Two-column case study showcase cards
│   │   ├── ProjectModal.tsx     # Deep-dive architecture inspection modal
│   │   ├── SkillCategory.tsx    # Factual categorized skills grid (no fake percentages)
│   │   ├── ExperienceTimeline.tsx # Vertical timeline for verified internships
│   │   ├── EducationCard.tsx    # Academic credentials cards (B.E. 8.56 CGPA, Diploma, SSC)
│   │   ├── ResumeModal.tsx      # In-browser formatted resume viewer & print/PDF handler
│   │   └── Footer.tsx           # Monogram brand, links, and back-to-top button
│   ├── sections/
│   │   ├── Hero.tsx             # Two-column hero with developer workstation & tech strip
│   │   ├── About.tsx            # Resume-grounded profile narrative & factual highlights
│   │   ├── Skills.tsx           # 6 categorized skill categories
│   │   ├── Projects.tsx         # 3 verified full-stack case studies
│   │   ├── Experience.tsx       # Data Science & Django web dev internships
│   │   ├── Education.tsx        # B.E. Computer Engineering, Diploma & SSC
│   │   ├── Certifications.tsx   # Azure AZ-900 & Godrej Data Analytics certifications
│   │   └── Contact.tsx          # Direct communication hub & email composer with validation
│   └── data/
│       └── portfolio.ts         # Single source of truth for resume details & links
```

---

## 🌟 Key Features

1. **Two-Column Hero & Interactive Workstation**:
   - Status badge: `COMPUTER ENGINEERING GRADUATE • CGPA 8.56`
   - Interactive IDE window toggling between `developer.ts` and `api-auth.json` (JWT response preview).
   - Floating technology badges with subtle glow indicators.
   - Slim technology competency strip.

2. **Flagship Case Study Gallery**:
   - **Pujanam (Flagship)**: Pandit Booking & Puja Services Platform (MERN, Cloudinary, JWT RBAC). Features multi-tab interactive mockup: *Services Catalog*, *Booking Flow*, and *Pandit Portal*.
   - **Agriculture Platform**: Direct farm-to-consumer & restaurant marketplace (MERN, MongoDB). Features *Direct Market*, *Farmer Inventory*, and *Live Orders* tabs.
   - **Building Construction Estimator**: Responsive construction cost & material estimation calculator (PHP, JS, MySQL, Bootstrap). Features interactive Built-Up Area, Floors, and Quality controls with real-time recalculation.
   - **Inspect Case Study Modal**: Deep dive into architecture, problem statement, solution, and verified technical implementations.

3. **In-Browser Resume Viewer**:
   - Integrated formatted resume modal matching Bhushan's exact verified credentials.
   - One-click **Print / Save PDF** support with print-optimized CSS layout.

4. **100% Verified Details**:
   - Strictly factual: No fabricated client counts, no fake years of commercial experience, and no subjective progress percentage bars.

5. **Direct & Accessible Contact Hub**:
   - Direct `mailto:` composer with client-side field validation and native mail client invocation.
   - Instant copy-to-clipboard for email (`bhushangavhane06@gmail.com`) and phone (`+91 9373120370`).
   - Click-to-call mobile integration.

6. **Full Responsiveness & Accessibility**:
   - Mobile drawer with backdrop blur.
   - Reduced-motion accessibility checks (`prefers-reduced-motion`).
   - Visible keyboard focus indicators and semantic HTML5 landmark tags.

---

## ⚡ Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended, tested on Node v22)
- npm (v9 or higher)

### Installation
```bash
# Clone the repository or navigate to project directory
cd BG_portfolio

# Install dependencies
npm install

# Start local development server with Hot Module Replacement (HMR)
npm run dev
```

Visit `http://localhost:5173/` in your browser.

---

## 📦 Production Build & Deployment

To generate an optimized production bundle:
```bash
npm run build
```

This compiles optimized HTML, CSS, and JS assets into the `dist/` directory.

### Deploy to Netlify
1. Connect your repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploy to Vercel
```bash
npx vercel
```
