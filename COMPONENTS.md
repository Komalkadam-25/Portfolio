# 📚 Component Documentation

## Overview

This document describes each component in the portfolio and how to customize them.

---

## Core Components

### 🏠 [App.jsx](src/App.jsx)

**Purpose**: Main application component that orchestrates all sections

**Key Features**:

- Loading state management
- Scroll progress tracking
- Component composition
- Layout structure

**Customization**:

- Add/remove sections by importing/removing components
- Adjust loading duration (line 24)

---

### 🔝 [Navbar.jsx](src/components/Navbar.jsx)

**Purpose**: Navigation bar with responsive mobile menu

**Features**:

- Fixed position with blur effect on scroll
- Mobile hamburger menu
- Smooth link animations
- Logo with gradient

**Customize**:

- Update nav items array (lines 10-15)
- Change logo text (line 47)
- Adjust colors (classNames)

---

## Section Components

### 🎯 [Hero.jsx](src/components/Hero.jsx)

**Purpose**: Eye-catching landing section

**Features**:

- Animated typing effect for heading
- Role cycling animation
- Gradient text effects
- CTA buttons
- Social media links
- Scroll indicator animation

**Customize**:

- Update hero text (line 52)
- Change roles array (line 54)
- Update social links (line 87-99)
- Adjust animation speeds

---

### ℹ️ [About.jsx](src/components/About.jsx)

**Purpose**: Profile and introduction section

**Features**:

- Animated counter statistics
- Profile image placeholder
- Floating decoration elements
- Skill badges
- Glassmorphism cards

**Customize**:

- Update bio text (lines 97-110)
- Modify statistics (lines 78-82)
- Change profile image (line 72)
- Update skill badges (lines 112-123)

---

### 🛠️ [Skills.jsx](src/components/Skills.jsx)

**Purpose**: Display technical skills and proficiencies

**Features**:

- Animated skill bars with percentages
- Categorized skill cards
- Tech stack visualization
- Hover effects and glow

**Customize**:

- Update skillsData object (lines 108-114)
- Modify proficiencies array (lines 116-122)
- Add/remove tech stack items (lines 159-175)
- Change bar animation duration

---

### 💼 [Projects.jsx](src/components/Projects.jsx)

**Purpose**: Showcase completed projects

**Features**:

- Project cards with hover effects
- Modal popup for project details
- GitHub and demo links
- Tech stack badges
- Smooth animations

**Customize**:

- Update projects array (lines 154-195)
- Change project icons (emoji)
- Add your GitHub/demo links
- Modify project descriptions

---

### 📅 [Experience.jsx](src/components/Experience.jsx)

**Purpose**: Timeline of work experience

**Features**:

- Animated timeline layout
- Alternating card positions
- Experience cards with details
- Skill badges
- Staggered animations

**Customize**:

- Update experiences array (lines 93-133)
- Modify company names and roles
- Update dates and durations
- Add/remove experience entries

---

### 🏆 [Achievements.jsx](src/components/Achievements.jsx)

**Purpose**: Highlight achievements and leadership

**Features**:

- Achievement cards with icons
- Animated icon rotation
- Why choose me section
- Hover effects

**Customize**:

- Update achievements array (lines 73-94)
- Change icons (lucide-react)
- Modify descriptions
- Update why-choose-me items (lines 121-133)

---

### 📬 [Contact.jsx](src/components/Contact.jsx)

**Purpose**: Contact form and contact information

**Features**:

- Contact form with validation
- EmailJS integration
- Contact information cards
- Social media links
- Success/error messages

**Customize**:

- Update contact info (lines 18-32)
- Set up EmailJS credentials (lines 43)
- Modify form fields if needed
- Update social links (lines 80-96)

---

### 🔗 [Footer.jsx](src/components/Footer.jsx)

**Purpose**: Footer section with links and credits

**Features**:

- Quick navigation links
- Social media links
- Back to top button
- Copyright information
- Brand section

**Customize**:

- Update footer links (lines 26-30)
- Modify quick links
- Change social links
- Update copyright year (auto-calculated)

---

## Utility Components

### 🎬 [Loader.jsx](src/components/Loader.jsx)

**Purpose**: Loading screen animation on page load

**Features**:

- Animated gradient background
- Rotating logo
- Loading dots animation
- Smooth fade-out on load complete

**Customize**:

- Change animation timing
- Modify colors
- Update loading text
- Adjust dot count

---

### 🖱️ [CustomCursor.jsx](src/components/CustomCursor.jsx)

**Purpose**: Interactive custom cursor effect

**Features**:

- Follows mouse movement
- Glow effect on click
- Smooth tracking
- Scale animation on interaction

**Customize**:

- Change cursor size (line 30)
- Modify glow color
- Adjust animation speed

---

### ✨ [ParticleBackground.jsx](src/components/ParticleBackground.jsx)

**Purpose**: Animated particle system background

**Features**:

- Canvas-based particles
- Particle connections
- Physics-based movement
- Responsive to screen size

**Customize**:

- Adjust particle count (line 52)
- Change particle color (line 48)
- Modify connection distance (line 65)
- Adjust particle speed (line 34-35)

---

### 📊 [ScrollProgress.jsx](src/components/ScrollProgress.jsx)

**Purpose**: Display scroll progress indicator

**Features**:

- Top progress bar
- Percentage display in corner
- Smooth animation
- Gradient colors

**Customize**:

- Change colors
- Adjust opacity
- Modify position
- Update percentage format

---

## Global Styles

### 📄 [index.css](src/index.css)

**Contains**:

- Global CSS variables
- Custom animations
- Glassmorphism effects
- Utility classes
- Scrollbar styling
- Accessibility preferences

**Key Classes**:

- `.glass` - Glassmorphism effect
- `.glow-effect` - Glow animation
- `.magnetic-btn` - Magnetic button
- `.text-glow` - Glowing text
- `.float-animation` - Float effect

---

## Configuration Files

### 📦 [tailwind.config.js](tailwind.config.js)

**Contains**:

- Custom color palette
- Animation definitions
- Font families
- Box shadows
- Gradients

**Key Customizations**:

- Colors (dark-bg, cyber-blue, etc.)
- Animations (float, pulse-glow, etc.)
- Extend theme

---

### ⚙️ [vite.config.js](vite.config.js)

**Contains**:

- React plugin configuration
- Build optimization
- Dev server settings
- Code splitting rules

---

## Tips for Customization

1. **Animations**: Modify `transition` and `animate` props in Framer Motion
2. **Colors**: Use tailwind color utilities or update config
3. **Text**: Search for hardcoded strings and replace
4. **Images**: Use image URLs or local image imports
5. **Links**: Update href attributes and social URLs
6. **Timing**: Adjust `delay` and `duration` values

---

## Common Patterns Used

### Framer Motion Variants

```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};
```

### Tailwind Classes

```javascript
className = "p-6 rounded-xl glass border border-cyber-blue/20";
```

### Animation Triggers

```javascript
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-100px' }}
```

---

**Need more help? Check SETUP_GUIDE.md for detailed instructions!**
