const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const resume = {
  imgPath: "/images/Rahul.pdf"
}
const myImage = {
  imgPath: "/images/myimage.jpeg"
}

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

// const techStackIcons = [
//   {
//     name: "React Developer",
//     modelPath: "/models/react_logo-transformed.glb",
//     scale: 1,
//     rotation: [0, 0, 0],
//   },
//   {
//     name: "Python DSA",
//     modelPath: "/models/python-transformed.glb",
//     scale: 0.8,
//     rotation: [0, 0, 0],
//   },
//   {
//     name: "Backend Developer",
//     modelPath: "/models/node-transformed.glb",
//     scale: 5,
//     rotation: [0, -Math.PI / 2, 0],
//   },
//   {
//     name: "Interactive Developer",
//     modelPath: "/models/three.js-transformed.glb",
//     scale: 0.05,
//     rotation: [0, 0, 0],
//   },
//   {
//     name: "Git and Github",
//     modelPath: "/models/git-svg-transformed.glb",
//     scale: 0.05,
//     rotation: [0, -Math.PI / 4, 0],
//   },
// ];

const techStack = [
  { name: "HTML", title: "HTML is the foundation of web pages", imgPath: "images/html-icon.svg" },
  { name: "CSS", title: "CSS is used for styling web pages", imgPath: "images/css-icon.svg" },
  { name: "JavaScript", title: "JavaScript makes websites interactive and dynamic", imgPath: "images/jsicon.svg" },
  { name: "React", title: "React is a popular frontend library", imgPath: "images/react-js-icon.svg" },
  { name: "Node.js", title: "Node.js allows building scalable backend applications", imgPath: "images/node-js-icon.svg" },
  { name: "Python", title: "Python is powerful for algorithms and DSA", imgPath: "images/python-icon.svg" },
  { name: "Git & GitHub", title: "Git and GitHub help version control efficiently", imgPath: "images/git-icon.svg" },
  { name: "Next Js", title: "Next.js provides server side rendering for React", imgPath: "images/nextjs-icon.svg" },
  { name: "MySQL", title: "MySQL is relational database for storing data", imgPath: "images/mysql-icon.svg" },
  { name: "MongoDB", title: "MongoDB is NoSQL database for flexible storage", imgPath: "images/mongodb-icon.svg" },
  { name: "Postgres", title: "PostgreSQL is advanced open source relational database", imgPath: "images/postgresql-icon.svg" },
  { name: "Tailwind CSS", title: "Tailwind CSS is utility-first styling framework", imgPath: "images/tailwind-css-icon.svg" },
  { name: "Zod", title: "Zod validates data schemas efficiently in projects", imgPath: "images/zod.svg" },
  { name: "Redux Toolkit", title: "Redux Toolkit simplifies global state management in React", imgPath: "images/redux-icon.svg" },
  { name: "Docker", title: "Docker containerizes applications for easier deployment", imgPath: "images/docker-icon.svg" },
  { name: "Express", title: "Express framework is lightweight backend for Node.js", imgPath: "images/express-js-icon.svg" },
  { name: "Koa", title: "Koa is modern Node.js backend framework alternative", imgPath: "images/koa.svg" },
  { name: "Hono", title: "Hono is fast backend framework for developers", imgPath: "images/hono.svg" },
  { name: "Bun", title: "Bun is a fast runtime like Node.js", imgPath: "images/Bun.svg" },
  { name: "RabbitMQ", title: "RabbitMQ is a message broker for apps", imgPath: "images/rabbit.svg" }, // new added
];


const expCards = [
  {
    review: "Rahul Shakya delivered high-quality, scalable web applications using the MERN stack. He consistently improved frontend performance and implemented robust backend solutions for real-world projects.",
    imgPath: "/images/mern.png", // Replace with relevant logo/image
    logoPath: "/images/jsicon.svg",
    title: "Full Stack Developer (MERN)",
    date: "January 2023 - Present",
    responsibilities: [
      "Built full-stack applications with MongoDB, Express, React, and Node.js.",
      "Implemented RESTful APIs and integrated third-party services efficiently.",
      "Optimized frontend and backend performance for faster load times and scalability.",
    ],
  },
  {
    review: "Rahul Shakya applied backend technologies and database management to create secure, reliable, and performant applications. His expertise in PHP, MySQL, and Node.js ensures robust server-side solutions.",
    imgPath: "/images/backend.png", // Replace with backend logo/image
    logoPath: "/images/node-js-icon.svg",
    title: "Backend Developer (Node.js & PHP)",
    date: "June 2021 - December 2022",
    responsibilities: [
      "Developed APIs and backend services using Node.js, Express, and PHP.",
      "Managed relational databases with MySQL and optimized queries.",
      "Ensured security, error handling, and maintainability in all backend systems.",
    ],
  },
  {
    review: "Rahul Shakya implemented modern DevOps practices, including CI/CD pipelines, deployment automation, and cloud hosting strategies, ensuring seamless project delivery and high availability.",
    imgPath: "/images/devops.png", // Replace with DevOps logo/image
    logoPath: "/images/logo3.png",
    title: "DevOps & Deployment",
    date: "March 2020 - May 2021",
    responsibilities: [
      "Configured CI/CD pipelines for automated testing and deployment.",
      "Deployed web applications on cloud platforms and optimized performance.",
      "Monitored and maintained server environments for uptime and reliability.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Rahul Shakya. He transformed our complex SaaS requirements into a seamless, scalable solution. His problem-solving skills and ability to integrate MERN and LAMP stacks are truly impressive.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Rahul Shakya was a fantastic experience. He modernized our platform with React and Next.js, making it user-friendly and lightning-fast. His attention to detail and focus on real-world product scalability are unmatched.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Rahul Shakya was an absolute pleasure. His professionalism, clear communication, and deep knowledge of GenAI and web development stood out from start to finish. If you want to elevate your product and brand, Rahul is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Rahul Shakya completely revamped our outdated system into a fresh, intuitive web application. He combined backend efficiency with a sleek frontend design, making it both modern and easy to navigate. Outstanding work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Rahul Shakya’s expertise in full-stack development is truly impressive. He built a robust and scalable e-commerce platform for us, and our online sales have grown significantly since the launch. A true professional and problem-solver!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Rahul Shakya exceeded our expectations. He understood our requirements perfectly and delivered a feature-rich application with seamless API integrations. His skills in both frontend and backend development are top-notch.",
    imgPath: "/images/client6.png",
  },
];
const eccomerce = {
  name: "E-Commerce Platform",
  description:
    "A full-featured e-commerce platform built with the MERN stack, featuring user authentication, shopping cart.",
  imgPath: "/images/sss.png",
  techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
}

const socialImgs = [
  {
    id: 1,
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/nextgenrahul/"
  },
  {
    id: 2,
    name: "fb",
    imgPath: "/images/fb.png",
    link: "https://www.facebook.com/nextgenrahulshakya/about/"
  },
  {
    id: 3,
    name: "x",
    imgPath: "/images/x.png",
    link: "https://x.com/nextgenrahul"
  },
  {
    id: 4,
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/nextgenrahul/"
  },
];
const me = {
  imgPath: "/images/me.png"
}
const lms = {
  imgPath: "/images/lms.jpeg"
}
export {
  lms,
  me,
  myImage,
  eccomerce,
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  techStack,
  techStackImgs,
  navLinks,
  socialImgs,
  resume
};
