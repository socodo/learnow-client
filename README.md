# 🎓 Learnow – Frontend (Next.js Migration)

> 🚀 **Migration Status:** This repository contains the Frontend application for the Learnow EdTech platform. We are currently migrating from a React SPA (Vite) to **Next.js (App Router)** to achieve Server-Side Rendering (SSR), improve SEO for course discoverability, and optimize initial page load performance.

Learnow is a modern online learning platform designed to connect students with free educational content and empower instructors to share their knowledge seamlessly.

## 🎯 Why Next.js?

For an EdTech platform, content visibility is crucial. By transitioning to Next.js, this frontend application benefits from:

- **SEO Optimization:** Course catalog and detail pages are server-rendered, ensuring search engines can effectively index educational content.
- **Performance Boost:** Utilizing SSR and Next.js built-in optimizations (like `next/image` and `next/font`) for a faster First Contentful Paint (FCP).
- **Enhanced Routing:** Leveraging the Next.js App Router for intuitive, nested layouts and seamless page transitions.

## 🛠️ Tech Stack

- ⚛️ **Framework:** [Next.js](https://nextjs.org/) (React)
- 🏗️ **Architecture:** App Router
- 🎨 **Styling:** Tailwind CSS (Utility-first responsive design)
- 📦 **State Management:** Redux Toolkit (For complex global state like video player progress and user sessions)
- 🔗 **API Communication:** Axios / Native Fetch (Integrated with Next.js caching)
- 🛡️ **Authentication:** JWT handling (via HTTP-only cookies / local storage strategies)

## 🗺️ Frontend Migration Roadmap

- [x] Initialize Next.js environment and configure Tailwind CSS.
- [x] Migrate global UI components (Navbar, Footer, Modals) and Layouts.
- [ ] Implement SSR for public routes: **Home**, **Course Catalog**, and **Course Details**.
- [ ] Refactor client-side state (Redux) to sync with Next.js server components.
- [ ] Migrate the Authentication Flow (Login/Register/Role redirection).
- [ ] Rebuild the **Student Dashboard** and Video Player UI.
- [ ] Rebuild the **Instructor Dashboard** (Course creation, Cloudinary upload integration).

## ✨ UI/UX Features

**👤 Student Experience**

- Responsive course catalog with advanced filtering and search.
- Interactive video player with progress tracking.
- Personalized learning dashboard.

**👨‍🏫 Instructor Interface**

- Intuitive forms for course creation and curriculum structuring.
- Drag-and-drop media uploads (integrated with Cloudinary via Backend).
- Real-time enrollment statistics view.

## 🚀 Getting Started (Local Development)

### 1. Prerequisites

Ensure you have **Node.js** (v18.17 or later) installed on your machine.
_Note: This frontend requires the Learnow Backend API to be running locally or deployed._

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone [https://github.com/socodo/learnow-client-nextjs.git](https://github.com/socodo/learnow-client-nextjs.git)
cd learnow-client-nextjs
npm install
```
