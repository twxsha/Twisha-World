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

import { AppleCanvas, AppleCanvas2, TeslaCanvas } from "../components/canvas";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
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
      "Returned to Apple for my second internship in the Apple Cloud Services Security Team.",
      "Developed an end-to-end application to prevent critical security vulnerabilities at Apple.",
      "Communicated with designers, managers, and developers to deliver a solution that is used by 100s of Apple Engineers.",
      "Engaged with internal customers to understand requirements and build features catered to the needs of end-users.",
    ],
    imageSrc: AppleCanvas,
  },
  {
    title: "President",
    company_name: "UCLA DevX",
    date: "Jan 2021 - Present",
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
      "First internship at Apple as a Software Engineering in the Apple Cloud Services Security Team.",
      "Developed several server-side security features including a rate limiting algorithm in GoLang using a Redis Cache to protect against DDoS attacks.",
      "Wrote unit tests and continuously deployed applications to Kubernetes production clusters using Spinnaker and Rio.",
      "Leveraged observability tools for monitoring service health, including Splunk, Prometheus, Pprof and Grafana.",
    ],
    imageSrc: AppleCanvas,
  },
  {
    title: "Software Engineer Intern",
    company_name: "Tesla",
    date: "June 2021 - September 2021",
    points: [
      "Interned at Tesla as a Software Engineering in the Supercharging Digital Experience Payments Team.",
      "Developed features and bug ﬁxes rolled to production and consumed by Electric Vehicle users worldwide.",
      "Worked on backend integration with SQL Databases, business logic in Spark with GoLang, Splunk Logging, and Test Automation Suite in Python.",
      "Improved a key Supercharging runtime functionality by 25% by implementing an in-memory cache.",
    ],
    imageSrc: TeslaCanvas,
  },
  {
    title: "Software Engineer Manager",
    company_name: "Mercor",
    date: "March 2024 - June 2024",
    points: [
      "Mercor is an SF based start up revolutionizing the recruitment industry with its AI-based platform.",
      "Worked as a full stack Software Engineer and managed a team of engineers to build out the applicant user flow.",
      "Worked on FrontEnd development, managed several backend services, UI/UX, Figma design, prompt engineering and data management.",
      "Developed an AI-powered resume builder feature that parses resumes, formats them into a professional, readable layout, and provides actionable improvement suggestions.",
    ],
    imageSrc: mercor,
  },
  {
    title: "Software Engineer",
    company_name: "Apple",
    date: "July 2024 - Present",
    points: [
      "Returned to Apple full-time as a Security Software Engineer on the Apple Services - Identity & Access Management team.",
      "Developing and maintaining backend services with a focus on scalability and best authorization practices.",
      "Handling On-Call responsibilities to ensure service reliability and rapid issue resolution.",
      "Optimizing service performance by leveraging advanced security architectures to enhance CPU efficiency, memory utilization, and latency."
    ],
    imageSrc: AppleCanvas,
  },
];

export { technologies, experiences };
