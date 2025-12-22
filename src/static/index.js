import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const PROJECTS = [
  {
    id: 1,
    title: "Yoshlar Ventures",
    image: project2,
    description:
      "A platform designed to review emerging startups and facilitate investment allocation by connecting investors with promising early-stage companies",
    technologies: ["Astro", "React", "Tailwind CSS", "Antd", "Strapi"],
    links: "https://yoshlarventures.uz/uz",
  },
  {
    id: 2,
    title: "Movie Website",
    image: project1,
    description:
      "A movie ticket booking platform with features like browsing, searching, and detailed movie information, utilizing a REST API for real-time data processing.",
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "REST API"],
    links: "https://bile-tick.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    links: "https://portfolio-lemon-chi-93.vercel.app/",
  },
  {
    id: 4,
    title: "Ecommerce",
    image: project4,
    description:
      "A product-based e-commerce platform with order management and CRUD operations for products.",
    technologies: ["React", "Typescript", "Tailwind CSS", "REST API"],
    links: "https://ecommerce-gamma-five-98.vercel.app",
  },
];

export const CONTACT = {
  address: "Chilonzor District, Tashkent, Uzbekistan",
  phoneNo: "+998 91 064 48 38",
  email: "mgulomjonov151@gmail.com",
};
