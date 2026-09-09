# Assignment 0 Writeup: Personal Portfolio Website

## Background

I set out to build a personal portfolio website to showcase my background, experience, and interests to potential employers, collaborators, and anyone interested in learning about my work. The website is primarily for professional networking and personal branding as a senior computer science student.

**Tech Stack:**
- **Language**: TypeScript (frontend)
- **Frontend Framework**: React
- **Styling**: Sass (SCSS) with CSS Grid and Flexbox for layout
- **Routing**: React Router (HashRouter)
- **Deployment**: GitHub Pages with GitHub Actions

**Why This Stack:**

For the frontend, I chose **React with TypeScript** because:
- **Type safety**: TypeScript catches errors at compile time, which is important for maintaining code quality
- **Component-based architecture**: I could create reusable components (Header, ProjectList, InterestCardFlip) to keep the code organized and DRY
- **Ecosystem and tooling**: React's tooling (Create React App, react-scripts) made it easy to build and deploy
- **Modern development**: React is industry-standard and good practice for a CS student to master

For styling, I chose **Sass (SCSS)** because:
- **Variables and mixins**: Made it easy to maintain consistent colors, spacing, and animations across the site
- **Nesting**: Kept related styles organized and reduced repetition
- **Animations**: Sass made it straightforward to define smooth transitions and keyframe animations

For layout, I used **CSS (Grid and Flexbox)** because they provided flexible, responsive design without needing a CSS framework, and gave me fine-grained control over the visual hierarchy.

Since this is a frontend-only portfolio (no backend required), I focused entirely on creating a rich, interactive client-side experience.

For routing, I chose **React Router with HashRouter** specifically because GitHub Pages is a static host. HashRouter uses URL fragments (`/#/about`, `/#/experience`) instead of standard routes, which works without server-side routing configuration.

## Main Steps

### 1. Environment Setup
First, I ensured I had Node.js and npm installed on my system. I verified this by running:
```bash
node --version  # v20.x or newer
npm --version
```

I created the project using Create React App with TypeScript template:
```bash
npx create-react-app homepage --template typescript
cd homepage
```

Then installed additional dependencies:
```bash
npm install react-router-dom sass d3 @types/d3
```

### 2. Running the Site Locally
To verify the development environment worked, I started the development server:
```bash
npm start
```

This opened the site at `http://localhost:3000` with hot-reload enabled. I could see changes instantly as I edited files, which was crucial for iterative development.

### 3. Creating Content

**Structure & Components:**
- Created a reusable `Header` component for navigation
- Built a `ProjectList` component to map over experience data
- Organized sections: hero, about, experience, interests, and contact
- Separated styling into `App.scss` for consistency

**Content Development:**
- Wrote personal narrative sections (about me, interests)
- Compiled experience data from internships and research work
- Added profile photo, resume PDF, and social links
- Used semantic HTML and accessibility features (aria-labels, roles)

**Interactive Features:**
- **Scroll Reveal Animations**: Created a `ScrollReveal.tsx` component using the native Intersection Observer API. When elements enter the viewport, they fade in and slide up smoothly with staggered timing for experience cards. This creates visual interest without being distracting.
- **Flip Card Animations**: Built `InterestCardFlip.tsx` to add a 3D flip effect on the interest cards. Front side shows icon, title, and description; clicking flips to the back to reveal a relevant photo. Uses CSS `perspective` and `transform: rotateY(180deg)` for smooth 3D animation.

### 4. Deployment to GitHub Pages

**GitHub Setup:**
1. Created a public repository: `github.com/LinhNguyen2901/homepage`
2. Added `"homepage": "https://LinhNguyen2901.github.io/homepage"` to `package.json` (crucial for correct asset paths)

**Automated Deployment with GitHub Actions:**
1. Created `.github/workflows/deploy.yml` with a workflow that:
   - Installs dependencies: `npm install`
   - Builds the project: `npm run build`
   - Deploys the `build` folder to GitHub Pages
2. Set repository Pages settings to deploy from "GitHub Actions"
3. Pushed to `main` branch to trigger the workflow

**Publishing:**
The site is now live at: `https://LinhNguyen2901.github.io/homepage/`

### 5. Challenges & Solutions

**Challenge 1: GitHub Pages Deployment**
- *Problem*: Initial GitHub Actions workflow failed during dependency installation
- *Solution*: Debugged by reading the Actions logs, found that I needed to specify the correct Node version and ensure all dependencies were properly listed in package.json

**Challenge 2: Routing with HashRouter**
- *Problem*: Standard React Router doesn't work with GitHub Pages (a static host)
- *Solution*: Researched and switched to HashRouter, which uses URL fragments. This required no server configuration and routes like `/#/experience` work seamlessly

**Challenge 3: D3 TypeScript Compatibility**
- *Problem*: D3 type definitions had version conflicts with the TypeScript setup
- *Solution*: Installed `@types/d3` explicitly and ensured version compatibility in package.json

**Challenge 4: Responsive Design**
- *Problem*: Layout looked good on desktop but broke on mobile
- *Solution*: Added media queries and tested at multiple breakpoints, adjusted padding and font sizes for smaller screens

## Main Results

### Live Website
- **URL**: https://LinhNguyen2901.github.io/homepage/
- **Repository**: https://github.com/LinhNguyen2901/homepage

### Local Development
The site runs successfully on localhost with full functionality, hot-reload, and no build errors.

### Published on GitHub Pages
The site is live and fully functional, with all routes working (`/#/about`, `/#/experience`, `/#/interests`, `/#/connect`) and all assets loading correctly.

## Bonus: Interactive & Playful Elements (2 points)

I added two interactive features that enhance the browsing experience:

### 1. Scroll Reveal Animations

**Design Idea:**
As users scroll down the page, content elements fade in and smoothly slide up. Experience cards are staggered with slight delays, creating a cascading reveal effect.

**Technical Implementation:**
- Built a `ScrollReveal.tsx` component using the native Intersection Observer API
- No external dependencies needed
- When an element enters the viewport (at 10% visibility threshold), it triggers a 0.7s animation
- Staggered delays (100ms increments) for experience cards create visual rhythm

**UX Benefits:**
- **Visual guidance**: Directs attention to new content as users scroll
- **Progressive disclosure**: Reveals information gradually instead of all at once, reducing cognitive load
- **Engagement**: Makes scrolling feel active and responsive rather than static
- **Professionalism**: Subtle animations add polish without being distracting

### 2. Interactive Flip Cards (Interests Section)

**Design Idea:**
Each interest card has a 3D flip animation. Front shows an icon, title, and personal description. Clicking the card flips it to reveal a beautiful photo related to that interest.

**Technical Implementation:**
- Built `InterestCardFlip.tsx` component with state management for flip status
- Uses CSS 3D transforms: `perspective: 1000px`, `transform-style: preserve-3d`, and `rotateY(180deg)`
- Smooth 0.6s cubic-bezier animation for natural-feeling motion
- `backface-visibility: hidden` ensures only one side is visible during rotation

**UX Benefits:**
- **Playful interaction**: Clicking cards feels satisfying and reveals personality
- **Visual storytelling**: Photos complement descriptions better than text alone
- **Encourages exploration**: Subtle hint that cards are interactive (cursor pointer)
- **Balanced design**: Equal spacing on both sides of cards, photos match card dimensions perfectly
- **Keyboard accessible**: Can flip cards with Enter/Space keys

**Visual Polish:**
- Hover effects on the front subtly lift the card
- Animations use smooth easing for natural motion
- Color palette and gradients create cohesive visual experience
- Responsive design ensures animations work smoothly on all device sizes

These interactive elements transform the portfolio from a static page into an engaging experience that reflects my personality and attention to detail.
