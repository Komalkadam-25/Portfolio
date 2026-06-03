#!/bin/bash
# Quick Start Script for Komal Kadam Portfolio

echo "🚀 Komal Kadam Portfolio - Quick Start"
echo "========================================="
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

echo "✅ npm found"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
echo "   This may take a few minutes..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo ""

# Display next steps
echo "🎉 Setup complete! Next steps:"
echo ""
echo "1. Update your portfolio content:"
echo "   - Edit src/components/Hero.jsx for introduction"
echo "   - Edit src/components/About.jsx for bio"
echo "   - Edit src/components/Skills.jsx for skills"
echo "   - Edit src/components/Projects.jsx for projects"
echo "   - Edit src/components/Contact.jsx for contact info"
echo ""
echo "2. Set up EmailJS for contact form:"
echo "   - Visit https://www.emailjs.com/"
echo "   - Get your credentials (Public Key, Service ID, Template ID)"
echo "   - Update Contact.jsx with your credentials"
echo ""
echo "3. Start development server:"
echo "   npm run dev"
echo ""
echo "4. Build for production:"
echo "   npm run build"
echo ""
echo "5. Deploy to Vercel/Netlify/Your server"
echo ""
echo "📚 Documentation:"
echo "   - README.md - Project overview"
echo "   - SETUP_GUIDE.md - Complete setup guide"
echo "   - COMPONENTS.md - Component documentation"
echo ""
echo "Happy coding! 🎨✨"
