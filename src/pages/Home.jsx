import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

import profileImage from "../assets/profile.png";

// ✅ Correct SVG imports (match exact file names)
import riderFlowImg from "../assets/projects/riderflow.svg";
import supplyChainImg from "../assets/projects/supply-chain.svg";
import fakeNewsImg from "../assets/projects/fake-news-detector.svg";
import tomatoDiseaseImg from "../assets/projects/tomato-disease.svg";
import ckdImg from "../assets/projects/ckd-clinical.svg";
import roboticsImg from "../assets/projects/autonomous-sorting.svg";

export default function Home({ darkMode, setDarkMode }) {
  const portfolioData = {
    hero: {
      brand: "D!Code",
      name: "Dhanush",
      greeting: "Hi, I'm",
      headline: "Building scalable, real-world applications.",
      role: "Full-Stack • AI/ML • Systems",
      description:
        "I build clean, efficient solutions with a focus on performance and practical impact.",
      primaryButtonText: "View My Work",
      primaryButtonLink: "#projects",
      secondaryButtonText: "Reach Out",
      secondaryButtonLink: "#contact",
      navLinks: [
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" },
      ],
      profileImage,
      imageAlt: "Dhanush profile photo",
      imageSize: "250px",
    },

    projects: [
      {
        title: "RiderFlow",
        description:
          "Built a real-time ride dispatch system using Kafka, Redis, and Socket.io with live tracking and geo-based matching.",
        image: riderFlowImg,
        github: "https://github.com/Dhanush-1213/riderflow-distributed-system",
        live: "#",
        tags: ["Node.js", "Kafka", "Redis", "Docker", "Socket.io"],
      },
      {
        title: "Supply Chain Management System",
        description:
          "Built a full-stack supply chain platform using Node.js, Express, MySQL, and React with inventory tracking and order management.",
        image: supplyChainImg,
        github:
          "https://github.com/Dhanush-1213/supply-chain-management-system",
        live: "#",
        tags: ["Node.js", "Express", "MySQL", "React", "JWT"],
      },
      {
        title: "Fake News Detector",
        description:
          "Built a fake news classifier using TF-IDF and Logistic Regression with React and Flask, enabling real-time prediction.",
        image: fakeNewsImg,
        github:
          "https://github.com/Dhanush-1213/fake-news-detector-react-flask",
        live: "#",
        tags: ["Flask", "React", "TF-IDF", "Scikit-learn"],
      },
      {
        title: "Tomato Leaf Disease Detection",
        description:
          "Built a tomato leaf disease detection system using deep learning (CNN) and image classification for accurate crop diagnosis.",
        image: tomatoDiseaseImg,
        github: "https://github.com/Dhanush-1213/Tomato-Leaf-Disease-Detection",
        live: "#",
        tags: ["Python", "TensorFlow", "CNN", "Computer Vision"],
      },
      {
        title: "CKD Clinical Support System",
        description:
          "Built a CKD risk prediction tool using XGBoost and LightGBM with interpretable predictions and confidence scoring.",
        image: ckdImg,
        github:
          "https://github.com/Dhanush-1213/CKD-Clinical-Support-System",
        live: "#",
        tags: ["Python", "XGBoost", "LightGBM", "Scikit-learn"],
      },
      {
        title: "Autonomous Sorting Simulation",
        description:
          "Built a Webots simulation of a UR5e robotic arm with color-based object detection and autonomous box sorting.",
        image: roboticsImg,
        github: "https://github.com/Dhanush-1213/Robotics",
        live: "#",
        tags: ["Webots", "Kinematics", "Object Recognition"],
      },
    ],
  };

  return (
    <>
      <Navbar
        data={portfolioData.hero}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main>
        <Hero data={portfolioData.hero} />
        <Projects projects={portfolioData.projects} />
        <Skills />
        <Contact />
      </main>
    </>
  );
}