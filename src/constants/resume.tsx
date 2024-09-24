import { Airplay, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const resumeDetails = {
  info: {
    name: "John Doe",
    jobRole: "Software Engineer",
  },
  contactDetails: {
    portfolio: {
      label: "Portfolio",
      link: "https://johndoe.vercel.app/",
      icon: <Airplay size={15} />,
    },
    mobile: {
      label: `+1 1234567890`,
      link: "tel:1234567890",
      icon: <Phone size={15} />,
    },
    email: {
      label: "johndoe@gmail.com",
      link: "mailto:johndoe@gmail.com",
      icon: <Mail size={15} />,
    },
    address: {
      label: "New York, NY, 10001",
      link: "#",
      icon: <MapPin size={15} />,
    },
    linkedin: {
      label: "linkedin/johndoe",
      link: "https://www.linkedin.com/in/johndoe/",
      icon: <Linkedin size={15} />,
    },
  },
  summary:
    "Experienced software engineer with a strong background in developing scalable web applications. Proficient in a range of modern technologies including React, Node.js, and MongoDB. Adept at problem-solving and collaborating with cross-functional teams to deliver high-quality software solutions.",
  experiences: [
    {
      company: "Tech Solutions Inc.",
      jobRole: "Software Engineer",
      location: "San Francisco, CA",
      startDate: "June 2020",
      endDate: "Present",
      description: [
        "Developed and maintained web applications using modern JavaScript frameworks and libraries.",
        "Collaborated with cross-functional teams to define, design, and ship new features.",
        "Optimized applications for maximum speed and scalability.",
        "Implemented automated testing and CI/CD pipelines to enhance development workflow.",
      ],
    },
  ],
  projects: [
    {
      title: "E-commerce Platform",
      link: "https://ecommerce.example.com/",
      startDate: "01/2021",
      endDate: "03/2021",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      description: [
        "Designed and developed a fully responsive e-commerce platform with user authentication, product management, and payment processing.",
        "Implemented a dynamic search and filtering system for an enhanced user experience.",
        "Integrated third-party APIs to support real-time data fetching and updates.",
      ],
    },
    {
      title: "Portfolio Website",
      link: "https://johndoeportfolio.com/",
      startDate: "04/2021",
      endDate: "05/2021",
      techStack: ["Next.js", "Tailwind CSS", "Vercel"],
      description: [
        "Built a personal portfolio website to showcase projects and skills using Next.js and Tailwind CSS.",
        "Deployed the website using Vercel for serverless hosting and seamless updates.",
        "Integrated a blog section with Markdown support for easy content management.",
      ],
    },
  ],
  skills: [
    { name: "React.js", level: "Advanced", type: "Frontend" },
    { name: "Node.js", level: "Advanced", type: "Backend" },
    { name: "Express.js", level: "Intermediate", type: "Backend" },
    { name: "MongoDB", level: "Intermediate", type: "Database" },
    { name: "JavaScript", level: "Advanced", type: "General" },
    { name: "TypeScript", level: "Intermediate", type: "General" },
    { name: "Next.js", level: "Intermediate", type: "Frontend" },
    { name: "Tailwind CSS", level: "Intermediate", type: "Frontend" },
    { name: "HTML", level: "Advanced", type: "Frontend" },
    { name: "CSS", level: "Intermediate", type: "Frontend" },
    { name: "REST API", level: "Intermediate", type: "Backend" },
  ],
  educations: [
    {
      degree: "Bachelor's in Computer Science",
      college: "University of California, Berkeley",
      location: "Berkeley, CA",
      startDate: "2016",
      endDate: "2020",
    },
    {
      degree: "High School Diploma",
      college: "Springfield High School",
      location: "Springfield, IL",
      startDate: "2012",
      endDate: "2016",
    },
  ],
  strengths: [
    {
      title: "Full Stack Development",
      content:
        "Proficient in developing both client-side and server-side applications with a focus on performance and scalability.",
    },
    {
      title: "Responsive Design",
      content:
        "Skilled in creating responsive designs that provide a seamless experience across various devices and screen sizes.",
    },
    {
      title: "Team Collaboration",
      content:
        "Experienced in working closely with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      title: "Problem Solving",
      content:
        "Strong analytical skills with the ability to identify, troubleshoot, and resolve complex issues efficiently.",
    },
  ],
};

export default resumeDetails;
