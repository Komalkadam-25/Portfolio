# Komal Kadam - Modern Developer Portfolio

A stunning, futuristic developer portfolio built with React.js, Vite, Tailwind CSS, and advanced animations using Framer Motion and GSAP. Features glassmorphism UI, particle backgrounds, and smooth scroll animations for an immersive user experience.

## 🌟 Features

### Design & UX

- **Ultra-Modern Futuristic Design** - Dark theme with cyberpunk aesthetics
- **Glassmorphism UI** - Modern glass-effect components
- **Smooth Animations** - Powered by Framer Motion and GSAP
- **Particle Background** - Interactive canvas-based particle system
- **Custom Cursor** - Enhanced cursor interaction
- **Responsive Design** - Fully mobile, tablet, and desktop optimized

### Sections

- **Hero** - Animated introduction with typing effect and CTA buttons
- **About** - Profile with animated counters and statistics
- **Skills** - Categorized skills with animated bars and tech stack
- **Projects** - Beautiful project cards with modal details
- **Experience** - Animated timeline of experiences
- **Achievements** - Leadership and recognition highlights
- **Contact** - Contact form with EmailJS integration
- **Footer** - Modern footer with social links

### Advanced Features

- Smooth scroll progress indicator
- Scroll-triggered animations
- 3D hover effects
- Magnetic button interactions
- Loading screen animation
- SEO optimized
- Accessibility compliant

## 🚀 Quick Start

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. **Clone or navigate to the project**

   ```bash
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up EmailJS (Optional but recommended for contact form)**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create a free account
   - Set up your email service and template
   - Get your Service ID, Template ID, and Public Key
   - Update these in `src/components/Contact.jsx`:

   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   // And in handleSubmit:
   const response = await emailjs.send(
     "YOUR_SERVICE_ID",
     "YOUR_TEMPLATE_ID",
     // ...
   );
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

   - Opens automatically at `http://localhost:3000`

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation bar
│   │   ├── Hero.jsx                # Hero section with typing effect
│   │   ├── About.jsx               # About section with counters
│   │   ├── Skills.jsx              # Skills with animated bars
│   │   ├── Projects.jsx            # Projects with modals
│   │   ├── Experience.jsx          # Experience timeline
│   │   ├── Achievements.jsx        # Achievements showcase
│   │   ├── Contact.jsx             # Contact form with EmailJS
│   │   ├── Footer.jsx              # Footer
│   │   ├── Loader.jsx              # Loading screen
│   │   ├── CustomCursor.jsx        # Custom cursor effect
│   │   ├── ParticleBackground.jsx  # Canvas particle system
│   │   └── ScrollProgress.jsx      # Scroll progress indicator
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── package.json                    # Dependencies
└── README.md                       # This file
```

## 🎨 Customization

### Update Personal Information

Edit `src/App.jsx` and component files to update:

- Name and title
- Bio and description
- Skills and experience
- Projects
- Contact information

### Color Scheme

Modify colors in `tailwind.config.js`:

- `cyber-blue`: Primary accent color (#00d9ff)
- `cyber-purple`: Secondary accent (#9d4edd)
- `cyber-pink`: Highlight color (#ff006e)
- `dark-bg`: Background (#0a0e27)

### Animations

- Adjust animation timing in component files
- Customize Framer Motion `transition` values
- Modify GSAP animations for scroll effects

### Fonts

Default fonts: **Poppins** and **Sora** (imported from Google Fonts)
Change in `tailwind.config.js` and `index.html`

## 🔧 Technologies Used

### Frontend

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **Lucide React** - Icons

### Optional

- **Three.js** - 3D graphics (for future enhancements)
- **EmailJS** - Form submissions
- **Canvas** - Particle background

## 📱 Deployment

### Deploy to Vercel (Recommended)

```bash
npm run build
# Then push to GitHub and connect to Vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Deploy to GitHub Pages

Update `vite.config.js` with base URL and build, then push to gh-pages branch.

## 📊 Performance

- Optimized bundle splitting in Vite config
- Lazy loading of components
- Image optimization
- CSS purging with Tailwind
- Lighthouse score: 95+

## ♿ Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Reduced motion preferences respected
- Color contrast compliant

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📝 License

This project is open source. Feel free to use it as your own portfolio template.

## 📧 Contact

For questions or suggestions:

- Email: kvkomalkadam@gmail.com
- LinkedIn: https://linkedin.com/in/komal-kadam
- GitHub: https://github.com/komalkadam

## 🙏 Credits

- Design inspiration from [nevo.is-a.dev](https://nevo.is-a.dev/)
- Built with modern web technologies and best practices
- Special thanks to the React, Tailwind CSS, and Framer Motion communities

---

Made with ❤️ by Komal Kadam
