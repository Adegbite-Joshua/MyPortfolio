export interface ProjectProps {
    name: string;
    description: string;
    tags: {
        name: string;
        color: string;
    }[];
    source_code_link: string;
    web_url: string;
    imageUrl: string;
}



export const projects: ProjectProps[] = [
    {
        name: 'Hope Academy - School Management System',
        description: 'A comprehensive school management system that facilitates interactions between students, teachers, and administrators.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'nodejs',
                color: 'green-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'pink-text-gradient',
            },
        ],
        source_code_link: 'https://github.com/Adegbite-Joshua/HopeAcademy',
        web_url: 'https://hopeacademy.vercel.app/',
        imageUrl: '/hopeacademy.png',
    },
    {
        name: 'Swift Chat - A Chatting Application',
        description: 'A real-time chatting application that allows users to communicate seamlessly.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'firebase',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        source_code_link: 'https://github.com/Adegbite-Joshua/Swift-Chat',
        web_url: 'https://personal-chat-app-ac897.web.app/',
        imageUrl: '/swiftchat.png',
    },
    {
        name: 'Riddle - React Testing Application',
        description: 'An application built to test various features of React, including component rendering and state management.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'bootstrap',
                color: 'green-text-gradient',
            },
            {
                name: 'api',
                color: 'pink-text-gradient',
            },
        ],
        source_code_link: 'https://github.com/Adegbite-Joshua/REACT-TEST',
        web_url: 'https://react-test-virid.vercel.app/',
        imageUrl: '/riddle.jpeg',
    },
    {
        name: 'Finova Bank - A Fintech Web Application',
        description: 'A fintech web application that provides banking services with a focus on user experience and security.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'nodejs',
                color: 'green-text-gradient',
            },
            {
                name: 'mysql',
                color: 'pink-text-gradient',
            },
        ],
        source_code_link: 'https://github.com/Adegbite-Joshua/FinovaBank',
        web_url: 'https://finovabank.vercel.app/',
        imageUrl: '/finovabank.png',
    },
    {
        name: 'Task Vista - An Application for Keeping Task Records',
        description: 'An application designed for managing and tracking tasks effectively.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'nodejs',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient',
            },
        ],
        source_code_link: 'https://github.com/Adegbite-Joshua/TaskVista',
        web_url: 'https://taskvista.netlify.app',
        imageUrl: 'taskvista.png',
    },
    {
        name: 'Amazon - Amazon App Clone',
        description: 'A clone of the Amazon shopping platform that mimics its features and user interface.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'firebase',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        source_code_link: 'https://github.com/Adegbite-Joshua/AMAZON-CLONE',
        web_url: 'https://personal-chat-app-ac897.web.app/',
        imageUrl: '/amazon.png',
    },
    {
        name: 'Tesla - Tesla Web App Clone',
        description: 'A web application clone showcasing Tesla’s car lineup and features.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'nodejs',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        source_code_link: 'https://github.com/Adegbite-Joshua/Tesla---Level-One-Project',
        web_url: 'https://adegbite-joshua.github.io/Tesla---Level-One-Project/',
        imageUrl: '/tesla.png',
    },
    {
        name: 'Weather App - A Weather Application',
        description: 'An application that provides real-time weather updates and forecasts.',
        tags: [
            {
                name: 'javascript',
                color: 'blue-text-gradient',
            },
            {
                name: 'api',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        source_code_link: 'https://github.com/Adegbite-Joshua/WEATHER-APP',
        web_url: 'https://adegbite-joshua.github.io/WEATHER-APP/',
        imageUrl: '/weatherapp.png',
    },
    {
        name: 'Ludo Design - A Design for Ludo with Grid',
        description: 'A design project for the classic game Ludo featuring grid-based gameplay.',
        tags: [
            {
                name: 'html',
                color: 'blue-text-gradient',
            },
            {
                name: 'css',
                color: 'green-text-gradient',
            },
        ],
        source_code_link: 'https://github.com/Adegbite-Joshua/Ludo-Design',
        web_url: 'https://ludo-design.vercel.app/',
        imageUrl: '/ludogame.png',
    },
];







export interface ProjectPropss {
    title: string;
    imageUrl: string;
    githubUrl: string;
    webUrl: string;
}

export const projectsss: ProjectPropss[] = [
    {
        title: 'Hope Academy - School Management System',
        imageUrl: '/hopeacademy.png',
        githubUrl: 'https://github.com/Adegbite-Joshua/HopeAcademy',
        webUrl: 'https://hopeacademy.vercel.app/',
    },
    {
        title: 'Swift Chat - A Chatting Application',
        imageUrl: '/swiftchat.png',
        githubUrl: 'https://github.com/Adegbite-Joshua/Swift-Chat',
        webUrl: 'https://personal-chat-app-ac897.web.app/',
    },
    {
        title: 'Finova Bank - A Fintech Web Application',
        imageUrl: '/finovabank.png',
        githubUrl: 'https://github.com/Adegbite-Joshua/FinovaBank',
        webUrl: 'https://finovabank.vercel.app/',
    },
    {
        title: 'Task Vista - An application for keeping task records',
        imageUrl: 'taskvista.png',
        githubUrl: 'https://github.com/Adegbite-Joshua/TaskVista',
        webUrl: 'https://taskvista.netlify.app',
    },
    {
        title: 'Amazon - Amazon App Clone',
        imageUrl: '/amazon.png',
        githubUrl: 'https://github.com/Adegbite-Joshua/AMAZON-CLONE',
        webUrl: 'https://personal-chat-app-ac897.web.app/',
    },
    {
        title: 'Tesla - Tesla Web App Clone',
        imageUrl: '/tesla.png',
        githubUrl: 'https://github.com/Adegbite-Joshua/Tesla---Level-One-Project',
        webUrl: 'https://personal-chat-app-ac897.web.app/',
    },
    {
        title: 'Weather App - A Weather Application',
        imageUrl: '/weatherapp.png',
        githubUrl: 'https://github.com/Adegbite-Joshua/WEATHER-APP',
        webUrl: 'https://adegbite-joshua.github.io/WEATHER-APP/',
    },
    {
        title: 'Ludo Design - A Design for Ludo with Grid',
        imageUrl: '/ludogame.png',
        githubUrl: 'https://github.com/Adegbite-Joshua/Ludo-Design',
        webUrl: 'https://personal-chat-app-ac897.web.app/',
    },
];

const projectss = [
    {
        name: 'Car Rent',
        description:
            'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient',
            },
        ],
        //   image: carrent,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Job IT',
        description:
            'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        //   image: jobit,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Trip Guide',
        description:
            'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        //   image: tripguide,
        source_code_link: 'https://github.com/',
    },
];
