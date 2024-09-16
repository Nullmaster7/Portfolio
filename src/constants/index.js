import {
    mobile,
    web,
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
    huawei,
    ronwell,
    tork,
    microsoft,
    carrent,
    jobit,
    tripguide,
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
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Front-End Developer",
        icon: web,
    },
    {
        title: "Developer In Test",
        icon: mobile,
    },
    // {
    //     title: "Test Automation Engineer",
    //     icon: backend,
    // },
    // {
    //     title: "Content Creator",
    //     icon: creator,
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
        title: "Test Automation Enginer",
        company_name: "Ronwell Digital",
        icon: ronwell,
        iconBg: "#FFFFFF",
        date: "April 2021 - Jan 2022",
        points: [
            "Performed UI functionality tests using Ranorex on IOS & Android.",
            "Gained proficiency in Jira for sprint planning, task management, and bug tracking.",
            "Collaborated with German and Spanish stakeholders and developers in cross-functional teams.",
            "Executed manual, integration, end-to-end, load testing and automated test solutions.",
        ],
    },
    {
        title: "Assistant Software Test Engineer",
        company_name: "Huawei",
        icon: huawei,
        iconBg: "#FFFFFF",
        date: "Jan 2022  - July 2022",
        points: [
            "Managed the CI/CD process, optimizing pipelines and reducing deployment time by 20%, ensuring continuous integration and delivery with fewer manual interventions.",
            "Executed backend API tests using JMeter and Postman, achieving a 90% API response validation accuracy, resulting in a 10% reduction on API-related defects.",
            "Performed functional and non-functional UI tests using Selenium, automating 65% of regression test cases, which reduced manual testing efforts and accelerated release cycles.",
            "Revamped test cases and designed a new structure, reducing test case redundancy by 40% and improving test execution efficiency by 70%.",
            "Worked extensively with databases (Hive, Kafka, MySQL, MSSQL), conducting database tests that ensured data accuracy and integrity, leading to an improvement in system performance.",
            "Acquired hands-on experience with Linux, streamlining server management tasks and reducing troubleshooting time."
        ],
    },
    {
        title: "Software Engineer (Vendor via Tork Software) ",
        company_name: "Microsoft",
        icon: microsoft,
        iconBg: "#FFFFFF",
        date: "July 2022 - Aug 2023",
        points: [
            "Performed bug fixes and implemented feature enhancements on MSN.com, with UI components live across 53 markets, reaching 1 billion unique monthly active users, contributing to improved user experience and site stability.",
            "Conducted Visual Parity tests to ensure consistent UI functionality on Microsoft Community UI  platform, enhancing browser and market compatibility.",
            "Gained hands-on experience with React and JavaScript.",
            "Collaborated with stakeholders to streamline and optimize Microsoft Dynamics 365 processes, improving workflow efficiency and communication.",
            "Leveraged Cosmos DB and Azure to automate CI/CD pipelines, reducing deployment times by 10% and improving system reliability."
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "TORK Software",
        icon: tork,
        iconBg: "#E6DEDD",
        date: " Aug 2023 - still",
        points: [
            "Contributed as a Vendor at a Web3 Tech Start-Up, providing expertise in automation and full-stack development.",
            "Developed and maintained full-stack web application, integrating blockchain network(Created a blockchain network on Ethereum) to ensure scalability and resilience, ensuring a 95% uptime for decentralized transactions.",
            "Implemented and executed automation tests using Playwright within CI/CD pipeline on Azure.",
            "Proficient in Azure tools for pipeline implementation and maintenance.",
            "Extensive experience with React, including state management and component architecture best practices.",
            "Demonstrated strong proficiency in Node.js, building scalable APIs, handling complex server-side logic, and integrating with databases to improve system performance.",
            "Organized Scrum meetings and led stakeholder communication, ensuring alignment across teams and improved sprint delivery."
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };