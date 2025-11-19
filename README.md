<img align="center" width="100%" src="https://i.ibb.co.com/0RFGWdXP/Screenshot-2025-11-19-153734.png" alt="home-page">

# Appolio – Modern App Discovery & Management

**Appolio** is a responsive Single Page Application (SPA) built with React. It allows users to discover, download, and manage apps efficiently with real-time statistics, interactive charts and persistent installations using localStorage.

---

# Overview

**Appolio** provides an intuitive and interactive platform for managing apps:

- Single layout with a persistent header and footer.
- Dynamic routing to Home, All Apps, App Details, and My Installation pages.
- Real-time search and sorting of apps.
- Install/uninstall apps with persistent storage using localStorage.
- Display app statistics using interactive charts (Recharts).
- Responsive design for all devices.
- Custom error page and loading animations for smooth UX.

---

# Key Features

### Layout & Navigation

- **Header:**  
  - Logo with home navigation  
  - Navbar links: Home, Apps, Installation  
  - Active route highlighting  
  - Contribution button linking to GitHub  

- **Footer:**  
  - Custom-designed footer for site consistency  

- **404 Page:**  
  - Custom "Not Found" page for undefined routes  

### Home Page

- **Banner:**  
  - Center-aligned heading, text, and buttons linking to App Store & Play Store  

- **States Section:**  
  - Three state cards summarizing app stats  

- **Top Apps Section:**  
  - Eight app cards with image, title, downloads, and rating  
  - Clicking a card navigates to the App Details page  

- **Show All Button:**  
  - Navigates to the All Apps page  

### All Apps Page

- **Search & Filter:**  
  - Live, case-insensitive search by app title  

- **App Cards:**  
  - Display all apps from JSON data with title, image, downloads, and rating  

- **No App Found Message:**  
  - Appears if search yields no results  

### App Details Page

- **App Info:**  
  - Image, title, rating, downloads, reviews, and an Install button  

- **Installation Feedback:**  
  - Button disables on install and shows success toast  

- **App Review Chart:**  
  - Visualizes rating distribution using Recharts  

- **App Description:**  
  - Detailed app info per design layout  

### My Installation Page

- **Installed Apps:**  
  - Lists all installed apps from localStorage  

- **Uninstall Button:**  
  - Removes apps from UI and localStorage, with toast notifications  

- **Sort by Downloads:**  
  - Dropdown to sort apps high-to-low or low-to-high  


---

## Data Structure

**Apps** are stored locally in JSON format:

```json
{
  "id": 1,
  "title": "App Title",
  "companyName": "Company Name",
  "image": "https://example.com/image.png",
  "description": "App description here...",
  "size": 45,
  "reviews": 120,
  "ratingAvg": 4.5,
  "downloads": 15000,
  "ratings": [
    { "name": "1 star", "count": 5 },
    { "name": "2 star", "count": 10 },
    { "name": "3 star", "count": 20 },
    { "name": "4 star", "count": 50 },
    { "name": "5 star", "count": 35 }
  ]
}

```
## Animations

- **Framer Motion:** Page progress bar and entrance animations.  
- **React Spring:** Popular games section slides in from left.

---

## Tech Stack

| Category       | Technology                   |
|----------------|-------------------------------|
| Frontend       | React.js                     |
| Routing        | React Router v6+             |
| Authentication | Firebase Authentication      |
| Styling        | Tailwind CSS / DaisyUI       |
| Animation      | Framer Motion / React Spring |
| Deployment     | Netlify                      |
| Data           | Local JSON                   |

---

## Dependencies
```json
"dependencies": {
    "@fortawesome/fontawesome-svg-core": "^7.1.0",
    "@fortawesome/free-brands-svg-icons": "^7.1.0",
    "@fortawesome/free-regular-svg-icons": "^7.1.0",
    "@fortawesome/free-solid-svg-icons": "^7.1.0",
    "@fortawesome/react-fontawesome": "^3.1.0",
    "@tailwindcss/vite": "^4.1.14",
    "lucide-react": "^0.546.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router": "^7.9.4",
    "react-spinners": "^0.17.0",
    "react-toastify": "^11.0.5",
    "recharts": "^3.2.1",
    "tailwindcss": "^4.1.14"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "daisyui": "^5.3.2",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }
```

---

## Installation & Local Setup

1. **Clone the repository:**
```bash
git clone https://github.com/alhasandhali/appolio.git
cd appolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env.local` with Firebase config**
4. **Build for production**
```bash
npm run build
```
---

**Firebase Environment Variables (`.env.local`)**
```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxxx
REACT_APP_FIREBASE_APP_ID=1:xxxx:web:yyyy
```
---

## Live Link & Repository

- **Live Website:** [Appolio Live Demo](https://appolio-ahd.netlify.app/)
  ```bash
  https://appolio-ahd.netlify.app/
  ```
- **GitHub Repository:**
  ```bash
  https://github.com/alhasandhali/appolio.git
  ```
