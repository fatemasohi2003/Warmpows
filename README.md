 WarmPaws - Pet Care in Winter

A cozy winter companion platform designed for pet owners to ensure their furry friends stay warm, safe, and healthy during the cold season.


WarmPaws is a comprehensive pet care service platform that helps pet owners find and book winter care services for their pets. The platform provides access to professional grooming, winter clothing, nutrition planning, wellness checkups, and more - all designed to keep pets comfortable during cold weather.


1. *Winter Care Services Catalog** - Browse through 6+ specialized pet care services tailored for winter season
2. *Service Booking System** - Easy-to-use booking form for scheduling pet care appointments
3. *User Authentication** - Secure login/signup with email/password and Google authentication
4. *Profile Management** - Users can view and update their profile information
5. *Protected Routes** - Service details and booking only accessible to logged-in users
6. *Responsive Design** - Fully responsive layout for mobile, tablet, and desktop devices
7. *Interactive UI** - Smooth animations using AOS, Animate.css, and Swiper.js
8. *Password Recovery** - Forgot password functionality with email reset
9. *Winter Care Tips** - Educational content to help pet owners during winter
10Expert Vet Profiles** - Meet the professional veterinarians on the platform



 react-router-dom** - For routing and navigation
 firebase** - Authentication and backend services
 aos** - Scroll animation library
 react-hot-toast** - Toast notifications
 swiper** - Modern slider component
 animate.css** - CSS animation library
 react-icons** - Icon library
 tailwindcss** - Utility-first CSS framework
 daisyui** - Tailwind CSS component library
react-hook-form** - Form validation



Prerequisites
- npm 

 Installation:

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```



firebase setup:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication > Sign-in methods > Email/Password and Google
4. Copy your configuration and add to `.env` file
5. Add authorized domains for deployment (Netlify/Vercel/Firebase Hosting)



Authentication:
- Email/Password registration with validation
- Google Sign-in integration
- Password reset via email
- Protected routes with redirect functionality
- Password visibility toggle

Services
- 6 unique winter pet care services
- Detailed service information pages
- Rating and pricing display
- Available slots tracking
- Category-based organization

User Profile
- View profile information
- Update name and photo
- Secure profile management

 Design Features

- Modern, minimalist design
- Winter-themed color scheme
- Smooth scroll animations (AOS)
- Interactive hover effects
- Responsive navigation
- Card-based layouts
- Beautiful hero slider

 License

This project is created for educational purposes.

