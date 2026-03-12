# Burgero Project

Full-stack burger restaurant web app with:
- **User website** (customers browse menu, place orders, send contact messages)
- **Admin panel** (manage orders, messages, and menu items)
- **Backend API + Database** (single source of truth for both frontends)

## Key Features

### User Website
- Browse menu items and special items
- Submit orders (stored in DB via API)
- Send contact messages (stored in DB via API)

### Admin Panel
- View live orders from the database
- Update order statuses (via API)
- Delete orders (via API)
- View and manage contact messages (mark as read, delete, delete all)
- Add menu items and special items (saved to DB and immediately visible on user website)

### Backend
- REST API used by both the user site and admin panel
- Persists data in MySQL database tables:
  - `orders`
  - `contact_messages`
  - `menu_items`
  - `special_items`

---

## Important Note: Backend API Integration (Remediation Summary)

Previously, the system was not synchronized:
- User orders/messages were saved to the database ✅
- Admin panel was reading/writing from **localStorage only** ❌
- Admin-added menu items didn’t appear on the user website ❌
- User orders/messages didn’t appear in the admin panel ❌

### Fix Implemented
The admin panel was updated to use the backend API (`adminApiService`) for CRUD operations instead of localStorage.

#### Updated Admin Pages
- `admin-frontend/src/pages/OrderManagementPage.js`
  - Loads orders via API
  - Updates status via API
  - Deletes orders via API
  - Added error handling + UI error display
  - Auto-refresh now reflects DB state

- `admin-frontend/src/pages/ContactMessagesPage.js`
  - Loads messages via API
  - Marks as read via API
  - Deletes single / deletes all via API
  - Fixed schema field: `read` → `is_read`
  - Added error handling + UI error display

- `admin-frontend/src/pages/AddItemPage.js`
  - Adds menu/special items via API (not localStorage)
  - Fixed schema field: `image` → `image_url`
  - Added validation, loading state, success/error messages
  - Redirects after successful submit

- `admin-frontend/src/services/adminApiService.js`
  - Added `deleteAllMessages()` method (calls backend `DELETE /api/messages`)

✅ Result: **Real-time sync across user website + admin panel through the database**

---

## Architecture / Data Flow

### Orders & Messages
User Website → Backend API → MySQL DB ← Backend API ← Admin Panel

### Menu Items
Admin Panel → Backend API → MySQL DB ← Backend API ← User Website

---

## Tech Stack (fill in if needed)
- Frontend (User): React (?)
- Admin Frontend: React (?)
- Backend: Node.js/Express (?)
- Database: MySQL

> If you tell me the exact stack, I’ll update this section precisely.

---

## Configuration

### API Base URL
Both admin and user apps should point to:

```js
const API_BASE_URL = 'http://localhost:5000/api';
Ensure your backend server is running at http://localhost:5000.

Run Locally (template)
1) Backend
bash
cd backend
npm install
npm run dev
# or: npm start
2) Admin Frontend
bash
cd admin-frontend
npm install
npm start
3) User Frontend
bash
cd user-frontend
npm install
npm start
Replace folder names/commands based on your actual repo structure.

Testing Checklist
User submits order → Admin Order Management shows it
User sends message → Admin Contact Messages shows it
Admin updates order status → DB updates and UI reflects it
Admin deletes order → removed from DB + list
Admin adds menu item → appears on user menu page immediately
Admin adds special item → appears on user special menu page immediately
Troubleshooting
Admin shows “Failed to load orders/messages”
Confirm backend is running on http://localhost:5000
Check browser console for CORS errors
Verify admin auth token exists in localStorage (if your app uses JWT)
Items added by admin don’t appear on the user website
Hard refresh the user site (Ctrl+Shift+R)
Check backend logs for DB insert errors
Validation errors
Make sure required fields are provided:

Menu items: name, price
Special items: title, price
Messages: name, email, message
