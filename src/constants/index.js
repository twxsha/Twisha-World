import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  mercor,
  devx,
} from "../assets";

import { AppleCanvas, TeslaCanvas } from "../components/canvas";

export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/about",
    title: "About",
  },
  {
    id: "/work",
    title: "Work",
  },
  // {
  //   id: "learn",
  //   title: "Learn",
  // },
];

export const buttons = [
  {
    id: "/about",
    title: "About",
  },
  {
    id: "/work",
    title: "Work",
  },
  // {
  //   id: "learn",
  //   title: "Learn",
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Apple",
    date: "June 2023 - September 2023",
    points: [
      "Returned to Apple for my second internship on the Services Security Team.",
      "Developed an end-to-end application to prevent critical security vulnerabilities at Apple.",
      "Communicated with designers, managers, and developers to deliver a secure policy evaluator tool that is now open-sourced.",
    ],
    imageSrc: AppleCanvas,
  },
  {
    title: "President & Software Developer",
    company_name: "UCLA DevX",
    date: "Jan 2021 - June 2024",
    points: [
      "Leading the development of applications that serve the greater Los Angeles community." ,
      "Spearheading our consulting program, aimed supporting local businesses and assisting startups build MVPs." ,
      "Pioneered the intern program to mentor underclassmen in the fundamentals of website development and collaborative production.",
      "Contributed to several project teams as a full-stack developer."
    ],
    imageSrc: devx,
  },
  {
    title: "Software Engineer Intern",
    company_name: "Apple",
    date: "June 2022 - September 2022",
    points: [
      "First internship at Apple as a Software Engineering on the Services Security Team.",
      "Developed several server-side security features including a rate limiting algorithm in GoLang using a Redis Cache to protect against DDoS attacks.",
      "Wrote unit tests and continuously deployed applications to Kubernetes production clusters.",
    ],
    imageSrc: AppleCanvas,
  },
  {
    title: "Software Engineer Intern",
    company_name: "Tesla",
    date: "June 2021 - September 2021",
    points: [
      "Interned at Tesla as a Software Engineer in the Supercharging - Payments Team.",
      "Developed rolled capabilities to production and consumed by Electric Vehicle users worldwide.",
      "Improved a key Supercharging runtime functionality by 25%.",
    ],
    imageSrc: TeslaCanvas,
  },
  {
    title: "Software Engineer",
    company_name: "Mercor",
    date: "March 2024 - June 2024",
    points: [
      "Worked as a full stack Software Engineer, leading a team of engineers to build out an applicant user flow.",
      "Worked on FrontEnd development, managed several backend services, UI/UX, Figma design, and prompt engineering.",
      "Developed an AI resume builder that parses resumes, formats them into a professional, readable layout, and provides actionable improvement suggestions.",
    ],
    imageSrc: mercor,
  },
  {
    title: "Software Engineer",
    company_name: "Apple",
    date: "July 2024 - Apr 2026",
    points: [
      "Software Engineer at Apple building security systems for Authorization and Access Management.",
      "Developing and maintaining backend services with high loads of traffic (~2000 rps), and managing pedabytes of data.",
      "Handling On-Call responsibilities to ensure service reliability and rapid issue resolution.",
      "Optimizing service performance by leveraging advanced security architectures to enhance CPU efficiency, memory utilization, and latency."
    ],
    imageSrc: AppleCanvas,
  },
  // {
  //   title: "Software Engineer",
  //   company_name: "Sierra",
  //   date: "Apr 2026 - Present",
  //   points: [
  //     "Building secure agentic CRM at Sierra!",
  //   ],
  //   imageSrc: AppleCanvas,
  // },
];

export { technologies, experiences };
