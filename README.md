# 🚀 Next.js Post Platform

A full-stack post platform built with **Next.js**, **ShadCN UI**, and **Axios**. This project includes authentication, post creation, liking/unliking posts, and a seamless user experience with reusable components.

## 📌 Features

- ✅ **User Authentication** (Login & Signup)
- ✅ **Protected Routes** (Middleware-based API and frontend protection)
- ✅ **Post Management** (Create, Read, Like/Unlike posts)
- ✅ **Like Button** (Heart-shaped like button for toggling likes)
- ✅ **Optimized API Calls** (Axios with structured API calls)

---

## 🛠️ Tech Stack

- **Next.js 15** – React framework for SSR & API routes
- **ShadCN UI** – Modern and accessible UI components
- **Axios** – Simplified API calls and error handling
- **MongoDB** – Database for storing posts & users
- **Tailwind CSS** – Styling framework for responsiveness

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the repository**
```sh
git clone https://github.com/mitesh-kumavat/learn-next.git
cd learn-next
```

### **2️⃣ Install dependencies**
```sh
npm install
# or
yarn install
```

### **3️⃣ Setup environment variables**
Create a `.env` file and add:
```env
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

### **4️⃣ Run the development server**
```sh
npm run dev
# or
yarn dev
```
Access the app at `http://localhost:3000`

---

## 🔑 Authentication & Middleware
- **Protected API Routes:** `/api/logout`, `/api/me`, `/api/posts/create`, etc.
- **Protected Frontend Routes:** `/dashboard`, `/dashboard/liked-posts`, etc.
- **Middleware:** Redirects unauthorized users to login and attaches user data to requests.

---

## 🏆 Future Improvements
- 🔹 **Comment System** (Users can comment on posts)
- 🔹 **Optimized Infinite Scrolling** (Load posts efficiently)
- 🔹 **User Profiles** (View user posts & stats)
- 🔹 **Notifications** (Real-time updates)

---

🚀 **Built with ❤️ using Next.js & ShadCN UI by Mitesh Kumavat**

