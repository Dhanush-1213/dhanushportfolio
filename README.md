
<div align="center">

# 🚀 Dhanush's Portfolio

**Personal developer portfolio built with React + Vite**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## ✨ Overview

A clean, responsive personal portfolio showcasing my projects, technical skills, and journey as a Full-Stack & AI/ML developer. Built with React 19, featuring smooth scroll animations, dark/light mode, an interactive particle background, and a working contact form.

---

## 🖼️ Sections

| Section | Description |
|---|---|
| **Hero** | Introduction, role, and quick-action buttons |
| **Projects** | Cards with GitHub links, tech tags, and live demos |
| **Technologies** | Icon grid of tools and frameworks |
| **Journey** | Education and experience timeline |
| **Contact** | EmailJS-powered contact form |

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite 8
- **Icons:** react-icons
- **Email:** @emailjs/browser
- **Animations:** CSS scroll-reveal with custom `useReveal` hook
- **Styling:** Pure CSS (no UI library)

---

## 📂 Projects Featured

| # | Project | Stack |
|---|---|---|
| 01 | **RiderFlow** — Real-time ride dispatch system with live geo-matching | Node.js · Kafka · Redis · Docker · Socket.io |
| 02 | **Supply Chain Management System** — Full-stack inventory & order platform | Node.js · Express · MySQL · React · JWT |
| 03 | **Fake News Detector** — ML classifier with real-time prediction UI | Flask · React · TF-IDF · Scikit-learn |
| 04 | **Tomato Leaf Disease Detection** — CNN-based crop disease diagnosis | Python · TensorFlow · CNN · Computer Vision |
| 05 | **CKD Clinical Support System** — Kidney disease risk prediction tool | Python · XGBoost · LightGBM · Scikit-learn |
| 06 | **Autonomous Sorting Simulation** — UR5e robotic arm with color detection | Webots · Kinematics · Object Recognition |

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or yarn

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/Dhanush-1213/dhanushportfolio.git
cd dhanushportfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 📧 EmailJS Setup

The contact form uses [EmailJS](https://www.emailjs.com/). To make it work locally:

1. Create a free account at emailjs.com
2. Set up a service, template, and get your public key
3. Update the credentials in `src/components/Contact.jsx`:

```js
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  formRef.current,
  "YOUR_PUBLIC_KEY"
);
```

---

## 📁 Project Structure

```
dhanushportfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── profile.png
│   │   └── projects/         # Project preview SVGs
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   └── useReveal.js      # Scroll-reveal custom hook
│   ├── pages/
│   │   └── Home.jsx          # All portfolio data lives here
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🎨 Customization

All portfolio content (name, bio, projects, links) is centralized in one place:

**`src/pages/Home.jsx`** — edit the `portfolioData` object to update your info without touching any other files.

---

## 📬 Contact

**Dhanush** · B.Tech CSE (AI & ML) @ PES University · Intern @ RAPID

[![GitHub](https://img.shields.io/badge/GitHub-Dhanush--1213-181717?style=flat&logo=github)](https://github.com/Dhanush-1213)

---

<div align="center">

Made with ❤️ by Dhanush

</div>
