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
} from "../assets";


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
      "Communicated with designers, managers, and developers to deliver a quality product.",
      "Engaged with internal customers to understand requirements and build features catered to the end-user.",
    ],
  },
  {
    title: "President & Software Developer",
    company_name: "UCLA DevX",
    date: "Jan 2021 - Present",
    points: [
      "Leading the development of applications that serve the greater Los Angeles community." ,
      "Spearheading our consulting program, aimed supporting local businesses and assisting startups build MVPs." ,
      "Pioneered the intern program to mentor underclassmen in the fundamentals of website development and collaborative production.",
      "Contributed to several project teams as a full-stack developer."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Apple",
    date: "June 2022 - September 2022",
    points: [
      "First internship at Apple as a Software Engineering in the Apple Cloud Services Security Team.",
      "Developed several server-side security features including a rate limiting algorithm in GoLang using a Redis Cache to protect against DDoS attacks.",
      "Wrote unit tests and continuously deployed applications to Kubernetes production clusters using Spinnaker and Rio.",
      "Leveraged observability tools for monitoring health of service, including Splunk for logging and Prometheus and Grafana for metrics.",
    ],
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
  },
];

export { technologies, experiences };
