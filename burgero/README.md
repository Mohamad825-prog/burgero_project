🍔 Burgero Restaurant Website
<https://img.shields.io/badge/React-19.2.0-blue>
<https://img.shields.io/badge/Tailwind_CSS-3.4.18-38B2AC>
<https://img.shields.io/badge/Status-Live-brightgreen>
<https://img.shields.io/badge/License-MIT-yellow>

A modern, responsive website for Burgero Restaurant in Saida, Lebanon, featuring an interactive menu, online ordering system, and real-time restaurant management capabilities.

🚀 Live Demo
Visit the live website: Burgero Restaurant

✨ Key Features
🎯 Customer Experience
Responsive Design - Optimized for desktop, tablet, and mobile devices

Interactive Menu - Beautiful grid display of burger items with hover effects

Real-time Updates - Menu items sync with backend database

Online Ordering - Modal-based order system with form validation

Contact Management - Direct messaging to restaurant owners

Testimonial Carousel - Customer reviews with smooth animations

🛠️ Technical Features
Offline Support - Local storage fallback for orders and messages

Connection Status - Real-time backend connectivity monitoring

Image Optimization - Lazy loading and responsive images

Form Validation - Client-side validation with visual feedback

Error Handling - Comprehensive error messages and recovery

🎨 Design Features
Modern UI/UX - Clean design with consistent branding

Color Scheme - Custom palette matching restaurant branding

Smooth Animations - Hover effects and transitions

Mobile-First - Responsive breakpoints for all devices

🏗️ Tech Stack
Technology Version Purpose
React 19.2.0 Frontend library
Tailwind CSS 3.4.18 Utility-first CSS framework
React Router 7.9.6 Client-side routing
React Icons 5.5.0 Icon library
React Slick 0.31.0 Carousel component
Custom API - Real-time data synchronization
📦 Installation & Setup
Prerequisites
Node.js (v16 or higher)

npm or yarn

Backend API running (optional for local development)

Quick Start
bash

# Clone the repository

git clone <https://github.com/Mohamad825-prog/burgero_project.git>
cd burgero_project/burgero

# Install dependencies

npm install

# Start development server

npm start
The application will open at: <http://localhost:3000>

Connect to Backend
To use the full features (online ordering, menu updates), ensure the backend is running:

Start Backend API

bash
cd ../burgero-backend
npm install
npm start

# Backend runs at <http://localhost:5000>

Configure API URL
The frontend automatically connects to <http://localhost:5000/api> when in development.

🎯 Project Structure
text
burgero/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Contact.js      # Contact form with validation
│   │   ├── Footer.js       # Footer with social links
│   │   ├── Hero.js         # Hero section with CTA
│   │   ├── Meals.js        # Hot meals showcase
│   │   ├── Menu.js         # Main menu with real-time updates
│   │   ├── Navbar.js       # Navigation header
│   │   ├── OrderModal.js   # Order placement system
│   │   ├── SpecialMenu.js  # Featured items display
│   │   └── Testimonial.js  # Customer reviews carousel
│   │
│   ├── layouts/            # Layout components
│   │   ├── MenuCard.js     # Individual menu item card
│   │   ├── SpecialMenuCard.js # Special menu item card
│   │   └── TestimonialCard.js # Customer review card
│   │
│   ├── pages/              # Page components
│   │   ├── ContactPage.js  # Contact page
│   │   ├── HomePage.js     # Home page with Hero
│   │   ├── MealsPage.js    # Hot meals page
│   │   ├── MenuPage.js     # Full menu page
│   │   ├── SpecialMenuPage.js # Special menu page
│   │   └── TestimonialPage.js # Testimonials page
│   │
│   ├── services/           # API and data services
│   │   ├── apiService.js   # REST API communication
│   │   └── dataSyncService.js # Local data synchronization
│   │
│   ├── assets/             # Images and static files
│   │   ├── ClassicBurger.jpg
│   │   ├── TheLebanese.jpg
│   │   ├── MushroomVibes.jpg
│   │   ├── TheBurgero.jpg
│   │   ├── TheMozz.jpg
│   │   ├── TheSmashBurger.jpg
│   │   ├── PepperMaize.jpg
│   │   ├── TruffleBurger.jpg
│   │   ├── Burgerita.jpg
│   │   ├── EggliniBurger.jpg
│   │   └── Hero.jpg
│   │
│   ├── App.js              # Main application router
│   └── index.js            # Application entry point
│
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file
🎨 Color Scheme
Color Hex Usage
Primary #f8981f Buttons, highlights, CTA elements
Secondary #e54416 Headings, important text
Tertiary #f5ede3 Backgrounds, cards
Success #10b981 Positive states
Warning #f59e0b Warning states
Error #ef4444 Error states
📱 Pages & Components
🏠 Home Page
Hero section with restaurant introduction

Call-to-action button for ordering

Beautiful food imagery

🍽️ Menu Page
Grid layout of all menu items

Real-time updates from backend

Connection status indicator

Filtering capabilities

Hover effects on cards

⭐ Special Menu
Featured items with ratings

Star rating system (1-5 stars)

Custom item highlighting

Refresh functionality

📝 Order System
Modal-based order form

Required fields validation

Time selection for pickup/delivery

Order confirmation with ID

Local storage fallback

✉️ Contact Page
Contact form with validation

Restaurant location and details

Direct messaging to admin

Social media links

💬 Testimonials
Customer review carousel

Smooth sliding animations

Auto-play functionality

Responsive breakpoints

🔧 Customization Guide
Adding New Menu Items
Menu items can be added in two ways:

Via Admin Panel (Recommended)

Use the admin website to add items

Items will automatically appear on customer site

Hardcoded Items (Development)
Edit src/services/apiService.js:

javascript
getDefaultMenuItems() {
  return [
    {
      id: 7,
      name: 'New Burger',
      price: '$12.99',
      description: 'Delicious new burger',
      image: NewBurgerImage,
      is_default: true
    }
  ];
}
Modifying Styles
Update tailwind.config.js:

javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
        secondary: "#your-color",
        tertiary: "#your-color",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
}
Changing Images
Add new images to src/assets/

Import in your component:

javascript
import NewImage from '../assets/NewImage.jpg';
Update the component to use the new image

🚀 Deployment
Build for Production
bash
npm run build
Deploy to GitHub Pages
bash
npm run deploy
Environment Configuration
The application automatically detects environment:

Development: Connects to <http://localhost:5000/api>

Production: Connects to deployed backend URL

Fallback: Uses local storage when backend is unavailable

📊 API Integration
The website communicates with the backend through:

Menu Items
javascript
// Get all menu items
const items = await apiService.getMenuItems();

// Response structure
{
  id: 1,
  name: "Classic Burger",
  price: "$8.00",
  description: "A timeless favorite...",
  image: "<http://localhost:5000/images/ClassicBurger.jpg>",
  is_default: true
}
Order Placement
javascript
// Submit new order
const order = await apiService.createOrder({
  name: "Customer Name",
  phone: "03 123 456",
  order: "2 Classic Burgers",
  time: "18:30"
});
Contact Messages
javascript
// Send message
const message = await apiService.sendMessage({
  name: "Sender Name",
  email: "<sender@email.com>",
  message: "Your message here"
});
🎯 Performance Features
Optimization
Code Splitting: React Router lazy loading

Image Optimization: Lazy loading and proper sizing

Bundle Analysis: Production build optimization

Caching: Local storage for offline functionality

Accessibility
Semantic HTML: Proper heading hierarchy

ARIA Labels: Screen reader support

Keyboard Navigation: Full keyboard accessibility

Color Contrast: WCAG 2.1 AA compliant

🐛 Troubleshooting
Common Issues
Issue Solution
Backend Connection Failed Check if backend is running, use local fallback
Images Not Loading Check image paths and file permissions
Form Not Submitting Check network connection, browser console
Mobile Layout Issues Clear browser cache, check responsive classes
Development Commands
bash

# Install dependencies

npm install

# Start development server

npm start

# Run tests

npm test

# Build for production

npm run build

# Deploy to GitHub Pages

npm run deploy

# Fix dependency issues

rm -rf node_modules package-lock.json
npm install
🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create a feature branch: git checkout -b feature/amazing-feature

Commit your changes: git commit -m 'Add amazing feature'

Push to the branch: git push origin feature/amazing-feature

Open a Pull Request

Development Guidelines
Follow existing code style and conventions

Add comments for complex logic

Update documentation for new features

Test changes on multiple screen sizes

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Developer
Mohamad Khairallah

GitHub: @Mohamad825-prog

Project Repository: burgero_project

🙏 Acknowledgments
React Team for the amazing library

Tailwind CSS for the utility-first framework

React Icons for the beautiful icon set

React Slick for the carousel component

Burgero Saida for the inspiration and content

📞 Support
For support or questions:

Check the browser console for errors

Verify backend API is running

Open an issue on GitHub Issues

Contact the developer

Enjoy delicious burgers with Burgero! 🍔
