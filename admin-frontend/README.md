⚙️ Burgero Admin Panel
<https://img.shields.io/badge/React-19.2.0-blue>
<https://img.shields.io/badge/Tailwind_CSS-3.4.18-38B2AC>
<https://img.shields.io/badge/JWT-Auth-orange>
<https://img.shields.io/badge/Status-Live-brightgreen>
<https://img.shields.io/badge/License-MIT-yellow>

A comprehensive restaurant management dashboard for Burgero Restaurant administrators. Manage orders, menu items, customer messages, and restaurant operations in real-time.

🚀 Live Demo
Access the admin panel: Burgero Admin Dashboard

Default Login Credentials:

Username: admin

Password: admin123

✨ Features
🔐 Authentication & Security
JWT Token Authentication - Secure login with token-based sessions

Protected Routes - Role-based access control

Token Validation - Automatic session management

Secure Logout - Complete session termination

📊 Dashboard & Analytics
Real-time Statistics - Live counts of orders, messages, menu items

Activity Overview - Quick glance at restaurant operations

Performance Metrics - Monitor restaurant performance

Auto-refresh - Real-time data updates every 10 seconds

📦 Order Management
View All Orders - Complete order history with filtering

Order Status Tracking - Update status (pending → preparing → ready → cancelled)

Order Details - View customer information and order specifics

Bulk Operations - Mark all as read, delete multiple orders

Customer Communication - Direct call functionality

🍽️ Menu Management
Full CRUD Operations - Create, Read, Update, Delete menu items

Image Upload - Upload burger images with preview

Default Items Protection - Prevent deletion of core menu items

Real-time Updates - Changes reflect immediately on customer website

Item Filtering - Separate default and custom items

⭐ Special Menu Management
Special Items Control - Manage featured menu items

Rating System - Set star ratings (0-5)

Image Management - Upload and update special item images

Custom Items - Add unlimited special items

✉️ Contact Management
Message Inbox - View all customer messages

Read/Unread Tracking - Mark messages as read

Email Integration - Quick reply via email

Message Filtering - Filter by read status

Bulk Actions - Delete multiple messages

🎨 Admin Interface
Responsive Design - Mobile-friendly admin panel

Intuitive Navigation - Easy access to all features

Real-time Notifications - Visual alerts for new data

Form Validation - Comprehensive form error handling

Image Previews - Visual confirmation of uploads

🏗️ Tech Stack
Technology Version Purpose
React 19.2.0 Frontend library
React Router 7.9.6 Protected routing
Tailwind CSS 3.4.18 Styling framework
JWT 9.0.0 Authentication
React Icons 5.5.0 Icon library
Fetch API Native HTTP requests
Local Storage Native Token persistence
📦 Installation & Setup
Prerequisites
Node.js (v16 or higher)

Backend API running (required for full functionality)

MySQL database (for backend)

Quick Start
bash

# Clone the repository

git clone <https://github.com/Mohamad825-prog/burgero_project.git>
cd burgero_project/admin-frontend

# Install dependencies

npm install

# Start development server

npm start
The admin panel will open at: <http://localhost:3001>

Connect to Backend
Ensure the backend API is running:

Start Backend Server

bash
cd ../burgero-backend
npm install
npm start

# Backend runs at <http://localhost:5000>

Seed Admin User (First time only)

bash
node seed-admin.js

# Creates admin user with credentials: admin/admin123

Login to Admin Panel

Navigate to <http://localhost:3001/login>

Use credentials: admin / admin123

🎯 Project Structure
text
admin-frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Login.js        # Secure login form with validation
│   │   ├── Navbar.js       # Admin navigation with logout
│   │   ├── Footer.js       # Admin-specific footer
│   │   ├── Hero.js         # Admin dashboard overview
│   │   ├── ProtectedRoute.js # Route protection middleware
│   │   ├── OrderModal.js   # Order viewing modal
│   │   ├── Menu.js         # Menu management interface
│   │   ├── SpecialMenu.js  # Special items management
│   │   └── Testimonial.js  # Testimonials (if applicable)
│   │
│   ├── pages/              # Admin pages
│   │   ├── HomePage.js     # Dashboard overview
│   │   ├── MenuPage.js     # Menu management page
│   │   ├── SpecialMenuPage.js # Special items page
│   │   ├── OrderManagementPage.js # Orders management
│   │   ├── ContactMessagesPage.js # Messages inbox
│   │   ├── AddItemPage.js  # Add new items form
│   │   └── EditMenuItemPage.js # Edit existing items
│   │
│   ├── layouts/            # Layout components
│   │   ├── MenuCard.js     # Menu item card with actions
│   │   ├── SpecialMenuCard.js # Special item card
│   │   └── TestimonialCard.js # Testimonial card
│   │
│   ├── services/           # API and data services
│   │   ├── adminApiService.js # Admin-specific API calls
│   │   └── dataSyncService.js # Data synchronization
│   │
│   ├── assets/             # Images and static files
│   │   ├── Hero.jpg        # Admin dashboard hero image
│   │   └── various burger images
│   │
│   ├── App.js              # Main application with auth routing
│   └── index.js            # Application entry point
│
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file
🛠️ API Integration
Authentication Endpoints
javascript
// Login
POST /api/auth/login
// Logout
POST /api/auth/logout
// Validate Token
GET /api/auth/check
Order Management
javascript
// Get all orders
GET /api/orders
// Update order status
PUT /api/orders/:id/status
// Delete order
DELETE /api/orders/:id
Menu Management
javascript
// Get all menu items
GET /api/menu/items
// Add new menu item
POST /api/menu/items
// Update menu item
PUT /api/menu/items/:id
// Delete menu item
DELETE /api/menu/items/:id
Contact Messages
javascript
// Get all messages
GET /api/messages
// Mark as read
PUT /api/messages/:id/read
// Delete message
DELETE /api/messages/:id
🎨 Admin Interface Components
🔐 Login Component
Form validation with helpful error messages

Backend status checking

Debug mode for troubleshooting

Remember me functionality

📊 Dashboard (HomePage)
Quick stats overview

Navigation shortcuts

System status indicators

Auto-refresh every 10 seconds

📦 Order Management Page
Filter orders by status

Real-time status updates

Customer contact integration

Bulk operations

🍽️ Menu Management Page
Grid view of all menu items

Edit/Delete buttons on hover

Default vs custom item indicators

Add new item button

✉️ Contact Messages Page
Read/Unread message filtering

Message details view

Quick reply via email

Bulk delete functionality

➕ Add/Edit Item Pages
Image upload with preview

Form validation

Price and rating input

Success/error notifications

🔧 Customization Guide
Adding New Admin Features
Create New Page Component

javascript
// src/pages/NewFeaturePage.js
import React from 'react';

const NewFeaturePage = () => {
  return (
    <div className="min-h-screen bg-tertiary px-6 md:px-32 pt-24 pb-10">
      <h1 className="text-5xl font-extrabold text-primary mb-10">
        New Feature
      </h1>
      {/*Your content here*/}
    </div>
  );
};

export default NewFeaturePage;
Add Route in App.js

javascript
<Route path="/new-feature" element={
  <ProtectedRoute>
    <NewFeaturePage />
  </ProtectedRoute>
} />
Add Navigation Link in Navbar.js

javascript
<Link to="/new-feature" className="hover:text-primary transition">
  New Feature
</Link>
Modifying API Endpoints
Update src/services/adminApiService.js:

javascript
// Add new API method
async newFeatureMethod(data) {
  try {
    const response = await fetch(`${API_BASE_URL}/new-feature`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data)
    });

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
Customizing Styles
Update tailwind.config.js:

javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#f8981f",
        secondary: "#e54416",
        tertiary: "#f5ede3",
        // Add admin-specific colors
        adminPrimary: "#2d3748",
        adminSecondary: "#4a5568",
      },
    },
  },
}
🚀 Deployment
Build for Production
bash
npm run build
Deploy to GitHub Pages
bash
npm run deploy
Environment Configuration
The admin panel automatically detects:

Development: Connects to <http://localhost:5000/api>

Production: Uses relative API paths

Authentication: JWT tokens stored in localStorage

🔒 Security Features
Authentication Flow
User enters credentials in login form

Backend validates and returns JWT token

Token stored in localStorage

All subsequent requests include token in Authorization header

Token automatically validated on page refresh

Logout clears token and redirects to login

Protected Routes
All admin routes require valid JWT token

Unauthorized access redirects to login

Token expiration handled gracefully

Session timeout detection

Data Protection
Sensitive operations require authentication

Input validation on all forms

File upload restrictions (size, type)

Secure HTTP headers

📊 Database Operations
Menu Items Management
sql
-- Default items (IDs 1-6) cannot be deleted
-- Custom items (IDs 7+) can be edited/deleted

-- Example: Add new menu item
INSERT INTO menu_items (name, price, description, image_url, is_default)
VALUES ('New Burger', 12.99, 'Delicious description', '/uploads/image.jpg', FALSE);
Order Status Updates
sql
-- Valid status values: pending, preparing, ready, cancelled
UPDATE orders SET status = 'ready' WHERE id = 1;
Message Management
sql
-- Mark message as read
UPDATE contact_messages SET is_read = TRUE WHERE id = 1;

-- Get unread messages count
SELECT COUNT(*) FROM contact_messages WHERE is_read = FALSE;
🐛 Troubleshooting
Common Issues
Issue Solution
Login Fails Run node seed-admin.js in backend, check console
Token Expired Logout and login again, clear localStorage
API Connection Failed Ensure backend is running on port 5000
Image Upload Fails Check file size (<5MB) and type (jpg, png, gif, webp)
CORS Errors Verify backend CORS configuration
Debug Commands
bash

# Check backend health

curl <http://localhost:5000/api/health>

# Clear admin token

localStorage.removeItem('auth_token')

# Reset admin user

cd ../burgero-backend
node seed-admin.js

# Check network requests

# Open browser DevTools → Network tab

Development Tools
React DevTools: Component inspection

Redux DevTools: State management (if using Redux)

Browser Console: Error logging

Network Inspector: API call monitoring

📝 Usage Guidelines
Daily Operations
Morning Check: Review overnight orders and messages

Order Processing: Update order status as they progress

Menu Updates: Add/remove items based on inventory

Customer Service: Respond to messages and inquiries

End of Day: Review daily statistics and prepare for next day

Best Practices
Regular Backups: Export important data regularly

User Management: Use strong, unique passwords

Data Validation: Verify all input before saving

Testing: Test changes in development before production

Monitoring: Regularly check system logs and error reports

🔄 Integration with Customer Website
Real-time Updates
Menu changes reflect immediately on customer site

Order status updates visible to customers

Contact messages sync between systems

Image uploads available on both platforms

Data Flow
Admin adds new menu item

Backend saves to database

Customer website fetches updated menu

Customer places order

Admin sees order in real-time

Admin updates order status

(Optional) Customer notified of status change

📱 Mobile Responsiveness
Breakpoints
Desktop: Full feature access

Tablet: Condensed navigation, responsive grids

Mobile: Simplified views, touch-friendly buttons

Mobile Features
Touch Targets: Appropriately sized buttons

Swipe Actions: Potential for swipe-to-delete

Offline Mode: Limited functionality when offline

Push Notifications: (Future) Order alerts

🔄 Updates & Maintenance
Regular Updates
Dependencies: Keep npm packages updated

Security: Regular security patches

Features: Add new features based on restaurant needs

Bug Fixes: Address reported issues promptly

Backup Procedures
Database Backup: Regular MySQL dumps

Image Backup: Uploaded images storage

Configuration Backup: Environment variables

Code Backup: Version control with Git

🤝 Contributing
Development Workflow
Fork the repository

Create Feature Branch: git checkout -b feature/improvement

Commit Changes: Follow conventional commits

Push to Branch: git push origin feature/improvement

Open Pull Request: Provide detailed description

Code Standards
Use functional components with hooks

Follow existing naming conventions

Add comments for complex logic

Include error handling

Write responsive CSS with Tailwind

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Developer
Mohamad Khairallah

GitHub: @Mohamad825-prog

Admin Panel: admin-frontend

🙏 Acknowledgments
Burgero Restaurant for the opportunity and requirements

React Community for excellent documentation and tools

JWT.io for authentication standards

Tailwind CSS for the utility-first framework

All Contributors who have helped improve the system

📞 Support & Contact
For technical support or feature requests:

Check the GitHub Issues

Email: [mhd.kh1272005@gmail.com]

Include detailed steps to reproduce issues
