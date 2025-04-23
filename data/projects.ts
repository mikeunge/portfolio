import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Shareify",
    shortDescription:
      "Export your (private) liked songs into a public playlist in spotify.",
    description:
      "Shareify transforms your private Spotify “Liked Songs” into a shareable public playlist. Whether you're looking to show off your music taste or simply make sharing easier, this tool provides a smooth and intuitive way to curate and export your favorites. Built with Next.js and React, the app integrates directly with the Spotify API and features a clean, responsive UI using Tailwind CSS and Shadcn.",
    image: "/shareify.webp",
    tags: [
      "Next.js",
      "React",
      "Typescript",
      "Shadcn",
      "Tailwind CSS",
      "Spotify API",
    ],
    features: [
      "Secure login with Spotify OAuth",
      "Set a custom name for your playlist",
      "Upload your own playlist cover image",
      "Toggle between public and private playlist",
    ],
    websiteLink: "https://shareify-three.vercel.app/",
    githubLink: "https://github.com/mikeunge/shareify",
  },
  {
    id: 2,
    title: "Rette dein Geld",
    shortDescription:
      "Modern Landing Page for Customer Engagement & Data Collection",
    description:
      "Rette dein Geld is a sleek and responsive landing page built to inform customers and streamline data collection. Designed with user experience and engagement in mind, this project features a fully animated interface, a custom-built questionnaire, and seamless backend integration for real-time data handling. Developed using Nuxt.js, Vue 3, and TypeScript, the site leverages Tailwind CSS with DaisyUI for rapid UI development, supported by a PHP & MySQL backend.",
    image: "/rette-dein-geld.at.webp",
    tags: [
      "Nuxt.js",
      "Vue3",
      "Typescript",
      "Tailwind CSS",
      "DaisyUI",
      "PHP",
      "MySQL",
    ],
    features: [
      "Google ReCAPTCHA for spam protection",
      "Custom-built questionnaire for user input",
      "Fully animated UI to enhance engagement",
      "Backend integration with automated email workflows",
      "Zapier connection for extended automation and workflow control",
    ],
    websiteLink: "https://rette-dein-geld.at/",
    githubLink: undefined,
  },
  {
    id: 3,
    title: "KISS Photography",
    shortDescription:
      "Elegant Portfolio Website for a Professional Photography Brand",
    description:
      "KISS Photography is a bespoke portfolio website designed to showcase a professional photographer's best work. Built using Squarespace with custom design elements from Canva, the site balances visual appeal with functional simplicity. It's crafted to highlight imagery while offering smooth navigation, SEO-friendly structure, and easy client contact through a built-in form.",
    image: "/placeholder.svg",
    tags: ["Canva", "Squarespace"],
    features: [
      "Curated photo gallery to highlight work",
      "Integrated contact form for client inquiries",
      "SEO optimization for better search visibility",
    ],
    websiteLink: "https://kiss-photography.com",
    githubLink: undefined,
  },
  {
    id: 4,
    title: "SSHMan",
    shortDescription:
      "Effortless SSH Profile Management for Sysadmins & DevOps",
    description:
      "SSHMan is a lightweight, terminal-based tool designed to streamline SSH session management for system administrators and developers. Built with Go, it offers a secure and efficient way to organize SSH profiles, manage keys, and connect to servers quickly—without the clutter. Profiles are stored with strong encryption, ensuring sensitive data stays protected, and the app supports multiple platforms for maximum flexibility.",
    image: "/sshman.webp",
    tags: ["Go", "SSH", "Encryption", "SQLite"],
    features: [
      "Terminal User Interface (TUI)",
      "Keyboard driven workflow",
      "Built-in SSH key management",
      "Encrypted storage for SSH profiles",
      "Cross-platform compatibility",
    ],
    websiteLink: undefined,
    githubLink: "https://github.com/mikeunge/sshman",
  },
];
