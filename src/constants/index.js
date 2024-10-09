import { mastercard, shopify, freelancer } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  summiz,
  tailwindcss,
  threads,
  typescript,
  snapgram,
  logo,
  healthcare,
  banking,
  wildoasis,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

// export const experiences = [
//     {
//         title: "React.js Developer",
//         company_name: "Starbucks",
//         icon: starbucks,
//         iconBg: "#accbe1",
//         date: "March 2020 - April 2021",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "React Native Developer",
//         company_name: "Tesla",
//         icon: tesla,
//         iconBg: "#fbc3bc",
//         date: "Jan 2021 - Feb 2022",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Web Developer",
//         company_name: "Shopify",
//         icon: shopify,
//         iconBg: "#b7e4c7",
//         date: "Jan 2022 - Jan 2023",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Full stack Developer",
//         company_name: "Meta",
//         icon: meta,
//         iconBg: "#a2d2ff",
//         date: "Jan 2023 - Present",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
// ];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "mastercard",
    icon: mastercard,
    iconBg: "#fbc3bc",
    date: "March 2017 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "square space",
  //   icon: pngwing,
  //   iconBg: "#fbc3bc",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developed and maintained websites and web applications using HTML, CSS, JavaScript, and various frameworks (e.g., React)",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to deliver high-quality projects on time",
      "Implemented responsive design techniques to ensure websites are mobile-friendly and accessible across different devices and browsers",
      "Optimized website performance by improving load times, reducing server response times, and implementing caching strategies",
      "Conducted code reviews and provided constructive feedback to peers to maintain code quality and best practices",
      "Integrated third-party APIs and services to enhance website functionality and user experience",
      "Utilized version control systems like Git for efficient project management and collaboration",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "freelancer",
    icon: freelancer,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      " Proficiency in Multiple Technologies: Advanced skills in front-end (HTML, CSS, JavaScript, React) & back-end (Node.js,MongoDB,Appwrite,Supabase development).",
      "Project Management: Experience leading projects from start to finish using Agile methodologies.",
      "DevOps Expertise: Proficient with Docker, Kubernetes.",
      "API Development: Skilled in designing and integrating RESTful and GraphQL APIs.",
      "Testing and Debugging: Strong abilities in writing tests and debugging efficiently.",
    ],
  },
];
export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/abhicody",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/abhisekh-singh-b808b35a/",
  },
];

// export const projects = [
//   {
//     iconUrl: pricewise,
//     theme: "btn-back-red",
//     name: "Amazon Price Tracker",
//     description:
//       "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
//     link: "https://github.com/adrianhajdin/pricewise",
//   },
//   {
//     iconUrl: threads,
//     theme: "btn-back-green",
//     name: "Full Stack Threads Clone",
//     description:
//       'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
//     link: "https://github.com/adrianhajdin/threads",
//   },
//   {
//     iconUrl: car,
//     theme: "btn-back-blue",
//     name: "Car Finding App",
//     description:
//       "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
//     link: "https://github.com/adrianhajdin/project_next13_car_showcase",
//   },
//   {
//     iconUrl: snapgram,
//     theme: "btn-back-pink",
//     name: "Full Stack Instagram Clone",
//     description:
//       "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
//     link: "https://github.com/adrianhajdin/social_media_app",
//   },
//   {
//     iconUrl: estate,
//     theme: "btn-back-black",
//     name: "Real-Estate Application",
//     description:
//       "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
//     link: "https://github.com/adrianhajdin/projects_realestate",
//   },
//   {
//     iconUrl: summiz,
//     theme: "btn-back-yellow",
//     name: "AI Summarizer Application",
//     description:
//       "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
//     link: "https://github.com/adrianhajdin/project_ai_summarizer",
//   },
// ];

export const projects = [
  {
    iconUrl: logo,
    theme: "btn-back-red",
    name: "Imaginify AI",
    description:
      "Build an AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal. ",
    link: "https://imaginiy-ai.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://threads-working.vercel.app/sign-in",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://car-showcase-xi-teal.vercel.app/",
  },
  {
    iconUrl: healthcare,
    theme: "btn-back-pink",
    name: "Healthcare",
    description:
      "A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js.",
    link: "https://healthcare-chi-vert.vercel.app/",
  },
  {
    iconUrl: banking,
    theme: "btn-back-black",
    name: "Banking",
    description:
      "Built with Next.js, Horizon is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    link: "https://banking-ten-orcin.vercel.app/sign-in",
  },
  {
    iconUrl: wildoasis,
    theme: "btn-back-yellow",
    name: "Wild Oasis-HotelBooking Application",
    description:
      "Wild Oasis-A Hotel Booking Application, Algarve is a serene retreat nestled in the mountains of Monchique, Portugal. This eco-friendly haven offers stunning mountain views, cozy accommodations, and a tranquil atmosphere perfect for relaxation. Guests can enjoy amenities such as free WiFi, private parking, and a sauna",
    link: "https://the-wild-oasis-kohl-xi.vercel.app/",
  },
];
