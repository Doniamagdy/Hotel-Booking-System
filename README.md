🛎️ Hotel Booking System

Hotel Booking System is a modern web application built using React + Vite that allows users to browse hotel rooms, check availability, and complete booking reservations with a smooth and fast user experience.

The project focuses on clean UI, reusable components, and efficient state management for handling reservations and guest data.

---

⚙️ Tech Stack (Frontend)

- React 19
- Vite
- React Router DOM
- Supabase
- JavaScript (ES6+)
- CSS

---

📋 Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

---

📦 Installation & Setup

1. Clone the project

git clone <YOUR-GITHUB-REPO-LINK>
cd <YOUR-PROJECT-FOLDER-NAME>

2. Install dependencies

npm install

3. Start development server

npm run dev

---

✨ Features

🏨 Browse available hotel rooms  
📄 View detailed room information  
📅 Check room availability by date  
🛎️ Book rooms with guest information  
🧾 Store guest & booking data  
💰 Automatic total price calculation  
🧪 Form validation using Regex  
📱 Responsive design for all devices  

---

🧠 Project Structure

src
│
├── assets
│   └── (images & static files)
│
├── components
│   ├── Button
│   └── Input
│
├── features
│   ├── bookings
│   ├── guests
│   └── rooms
│
├── hooks
│   └── useReservation.jsx
│
├── layouts
│   ├── Navbar
│   ├── Header
│   ├── Footer
│   └── MainLayout
│
├── pages
│   ├── Home
│   └── BookingSuccess
│
├── services
│   ├── booking.service.js
│   ├── addGuest.service.js
│   ├── rooms.service.js
│   └── availability.service.js
│
├── utils
│   └── utils.js
│
├── App.jsx
└── main.jsx

---

🔐 Validation (Regex Used)

Full Name:
const nameRegex = /^[A-Za-z\u0600-\u06FF\s]{3,}$/;

Phone Number:
const phoneRegex = /^01[0125][0-9]{8}$/;

Email:
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

National ID:
const nationalIdRegex = /^[0-9]{14}$/;

---

🧩 Core Logic

- useReservation custom hook handles:
  - Guest state
  - Booking state
  - Price calculation
  - Form validation
  - API calls

---

🚀 Deployment

1. Push project to GitHub:
   <YOUR-GITHUB-REPO-LINK>

2. Deploy on Vercel:
   <YOUR-VERCEL-LINK>

Build command:
npm run build

Output folder:
dist

---

📸 Screenshots

Home Page:
<INSERT-HOME-PAGE-IMAGE-LINK>

Room Details:
<INSERT-ROOM-DETAILS-IMAGE-LINK>

Booking Page:
<INSERT-BOOKING-PAGE-IMAGE-LINK>

Booking Success:
<INSERT-SUCCESS-PAGE-IMAGE-LINK>

---

🌐 Live Demo & Links

Live Site:
<YOUR-LIVE-DEMO-LINK>

GitHub Repository:
<YOUR-GITHUB-REPO-LINK>

---

👩‍💻 Author

Built by <YOUR-NAME>