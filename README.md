# Vedhika Family Restaurant — Official Website

> **"Good Food. Great Moments. Together."**  
> A complete, production-ready, responsive website for **Vedhika Family Restaurant**, located on Shankarpally–Sangareddy Road, Opposite HP Petrol Bunk, Isnapur, Hyderabad.

---

## 🏛️ Brand & Design Philosophy
- **Aesthetic**: Warm ivory/cream background (`#FAF7F2`), deep forest green (`#10271D`), dark charcoal typography, and refined subtle gold accents (`#C59B37`).
- **Typography**: Editorial serif headings (`Playfair Display`) paired with clean modern sans-serif body typography (`Plus Jakarta Sans`).
- **Authenticity**: Integrated authentic restaurant photographs showcasing the two-level building facade, lush garden lawn with palm trees, and the upper-level open-air screening dining area.
- **Responsiveness**: Fully responsive desktop, tablet, and mobile layouts with touch-friendly navigation, sticky header, and dedicated mobile bottom action bar (Call, Directions, Order).

---

## 📍 Restaurant Information & Metadata
- **Restaurant Name**: Vedhika Family Restaurant
- **Address**: House 6-181/1/A, Singapur, Shankarpally–Sangareddy Road, Opposite HP Petrol Bunk, Isnapur, Hyderabad, Telangana 502307
- **Phone**: [+91 76720 03800](tel:+917672003800)
- **Opening Hours**: 12:00 PM – 11:30 PM (Daily; includes live open/closed status indicator)
- **Cuisine**: Biryani, Indian, Chinese & Tandoori
- **Listed Average Cost**: ₹800 for two
- **Dining Rating**: 4.1 (214 ratings, labeled as sourced listing information)
- **FSSAI License Number**: `13625010001057`
- **GPS Coordinates**: `17.4684058399, 78.1336476110` ([Google Maps Directions](https://www.google.com/maps/dir/?api=1&destination=17.4684058399,78.1336476110))
- **Order Online**: Verified partner link to [Zomato Ordering Page](https://www.zomato.com/hyderabad/vedhika-family-restaurant-isnapur/order)

---

## 🚀 Features & Architecture

### 1. Navigation & Header
- Sticky header with backdrop blur and responsive mobile hamburger drawer.
- Real-time "Open Now" / "Closed" indicator calculated dynamically for Indian Standard Time (`Asia/Kolkata`).
- Direct action triggers: **Call Us** and **Order Online**.

### 2. Hero Section
- Warm, inviting headline *"Good Food. Great Moments. Together."*
- Key listing metrics (4.1 Rating, ₹800 for two, 12 PM – 11:30 PM, FSSAI certified).
- Action buttons: **Explore Menu**, **Get Directions**, and **Order on Zomato**.

### 3. Signature Dishes
- Cards featuring guest favorites with exact listing prices:
  - Chicken Dum Biryani: ₹239
  - Chicken 65: ₹325
  - Butter Chicken: ₹363
  - Paneer Butter Masala: ₹337
  - Chicken Fried Rice: ₹199
  - Veg Biryani: ₹188
- Dietary tags: Authentic Green Veg dot badge / Red Non-Veg triangle badge.

### 4. Searchable & Filterable Restaurant Menu
- **Instant Search**: Search through all 100+ menu items by name or category.
- **Dietary Filter**: Filter by *All Dishes*, *Veg*, *Non-Veg*, or *Egg*.
- **Category Tabs**: Filter by *Chicken Biryani*, *Non-Veg Biryani*, *Veg Biryani*, *Non-Veg Starters*, *Veg Starters*, *South Indian Starter*, *Tandoori*, *Curries*, *Fried Rice*, *Healthy Rice*, *Noodles*, *Roti*, and *Soups*.
- Clear disclaimer notice for customers to verify current price & daily availability with the restaurant.

### 5. Genuine Ambience & Photo Gallery
- Genuine premises photographs:
  - Open-Air Rooftop Big-Screen Dining Area
  - Two-level Building Exterior & Entrance
  - Lush Green Garden Lawn with Stone Walkway
- Interactive Lightbox modal to view full-resolution photographs.

### 6. Location, Interactive Map & WhatsApp Table Inquiry
- Interactive Google Maps embed with GPS coordinates marker.
- One-click "Copy Address" button.
- Instant Table Reservation inquiry form formatted directly for WhatsApp or phone.

### 7. Transparent Owner Information Guide
- A centralized data architecture in [`src/data/restaurantData.ts`](./src/data/restaurantData.ts) allows the restaurant owner to update prices, phone numbers, or opening hours with zero coding hassle.

---

## 🛠️ Technology Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Design Tokens
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **SEO & Schema**: Schema.org `Restaurant` JSON-LD, OpenGraph, and Twitter card tags

---

## 💻 Local Development & Deployment

### Run Locally:
```bash
npm install
npm run dev
```

### Production Build:
```bash
npm run build
npm run preview
```

### Deploy to Vercel / Netlify / GitHub Pages:
The project is zero-configuration ready for deployment. Simply push this repository to GitHub and connect it to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). Build command: `npm run build`, Output directory: `dist`.
