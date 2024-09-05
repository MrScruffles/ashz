import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [

  {
    slug: 'roblox-iphone',
    color: '#999999',
    description: 'A detailed project where an iPhone is fully scripted inside Roblox, showcasing my skills in game development, Lua scripting, and ui/uix creation.',
    shortDescription: 'iPhone project in Roblox with detailed scripting and modeling.',
    links: [{ to: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/iPhoneUIX.mp4', label: 'Video' }],
    logo: Assets.LuaU,
    name: 'Roblox iPhone Project',
    period: { from: new Date('2024-09-05') },
    skills: getSkills('luau', 'roblox', 'game-development'),
    type: 'Game Development',
    screenshots: [
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/iPhoneImage1.png', label: 'iPhone Home-Screen' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/iPhoneUIX.mp4', label: 'Wallet Preview', thumbnail: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/iPhoneImage1.png' }
    ]
  },

  {
    slug: 'scuffl-card-game',
    color: '#007acc',
    description:
      'A card game built using Unreal Engine 4, featuring gameplay mechanics implemented through blueprints. This project demonstrates your proficiency in game development and engine usage.',
    shortDescription:
      'Card game developed with Unreal Engine 4, focused on gameplay using blueprints.',
    links: [{ to: 'https://github.com/MrScruffles/ScufflCardGame', label: 'GitHub' }],
    logo: Assets.Cpp,
    name: 'Scuffl Card Game',
    period: {
      from: new Date('2021-11-13'),
    },
    skills: getSkills('unreal-engine', 'ue4', 'blueprints', 'cpp'),
    type: 'Game Development',
  },

  // Academic Projects
  {
    slug: 'itsc2214-data-structures',
    color: '#f0db4f',
    description:
      'A collection of labs and projects related to ITSC2214, focusing on data structures and algorithms in Java. This repository highlights your academic experience and understanding of foundational computer science concepts.',
    shortDescription:
      'Labs and projects on data structures and algorithms using Java.',
    links: [{ to: 'https://github.com/MrScruffles/ITSC2214_DataStructures_Algorithms', label: 'GitHub' }],
    logo: Assets.Java,
    name: 'ITSC2214 Data Structures & Algorithms',
    period: {
      from: new Date('2023-09-07'),
    },
    skills: getSkills('java', 'algorithms', 'data-structures'),
    type: 'Academic',
  },
  {
    slug: 'itsc-3112',
    color: '#00758f',
    description:
      'A Java-based repository for ITSC-3112, highlighting your understanding of object-oriented programming concepts and software design principles.',
    shortDescription:
      'Java projects related to ITSC-3112, focusing on OOP and design principles.',
    links: [{ to: '#', label: 'GitHub' }],
    logo: Assets.Java,
    name: 'ITSC-3112',
    period: {
      from: new Date(),
    },
    skills: getSkills('java', 'oop', 'software-design'),
    type: 'Academic',
  },
  {
    slug: 'itsc-3155',
    color: '#306998',
    description:
      'Projects related to ITSC-3155, showcasing your proficiency in Python for various programming challenges, including parts one and two.',
    shortDescription:
      'Python projects for ITSC-3155, demonstrating problem-solving skills in Python.',
    links: [{ to: '#', label: 'GitHub' }],
    logo: Assets.Python,
    name: 'ITSC-3155',
    period: {
      from: new Date(),
    },
    skills: getSkills('python', 'problem-solving', 'software-development'),
    type: 'Academic',
  },
  {
    slug: 'ecgr-2104',
    color: '#ffcc00',
    description:
      'Repository for ECGR-2104, focusing on topics related to electrical and computer engineering. This project showcases your technical skills in hardware and software integration.',
    shortDescription:
      'Engineering projects for ECGR-2104, covering hardware and software integration.',
    links: [{ to: '#', label: 'GitHub' }],
    logo: Assets.Cpp,
    name: 'ECGR-2104',
    period: {
      from: new Date(),
    },
    skills: getSkills('engineering', 'hardware', 'software', 'cpp'),
    type: 'Academic',
  },
  {
    slug: 'itsc-3146',
    color: '#cc0000',
    description:
      'C++ projects related to ITSC-3146, emphasizing your ability to work with systems programming and low-level operations.',
    shortDescription:
      'C++ projects for ITSC-3146, focusing on systems programming.',
    links: [{ to: '#', label: 'GitHub' }],
    logo: Assets.Cpp,
    name: 'ITSC-3146',
    period: {
      from: new Date(),
    },
    skills: getSkills('c++', 'systems-programming', 'low-level-operations', 'cpp'),
    type: 'Academic',
  },
  {
    slug: 'itsc-2181',
    color: '#00b0f0',
    description:
      'C programming projects for ITSC-2181, highlighting your skills in procedural programming and understanding of fundamental software concepts.',
    shortDescription:
      'C projects for ITSC-2181, covering procedural programming.',
    links: [{ to: '#', label: 'GitHub' }],
    logo: Assets.C,
    name: 'ITSC-2181',
    period: {
      from: new Date(),
    },
    skills: getSkills('c', 'procedural-programming', 'software-fundamentals'),
    type: 'Academic',
  },
  {
    slug: 'itsc1213-cs2',
    color: '#ff4500',
    description:
      'Java projects related to ITSC1213, showcasing your knowledge in computer science and software development practices.',
    shortDescription:
      'Java projects for ITSC1213, demonstrating your skills in computer science.',
    links: [{ to: '#', label: 'GitHub' }],
    logo: Assets.Java,
    name: 'ITSC1213 CS2',
    period: {
      from: new Date('2023-08-08'),
    },
    skills: getSkills('java', 'computer-science', 'software-development'),
    type: 'Academic',
  },

  // Full-Stack & Front-End Development Projects
  {
    slug: 'minimalcord',
    color: '#7289da',
    description:
      'Updating the MinimalCord theme for Discord, focused on front-end development with SCSS. This project demonstrates your expertise in theming and styling for web applications.',
    shortDescription: 'Discord theme update project using SCSS.',
    links: [{ to: 'https://github.com/MrScruffles/MinimalCord', label: 'GitHub' }],
    logo: Assets.CSS,
    name: 'MinimalCord',
    period: {
      from: new Date(),
    },
    skills: getSkills('scss', 'css', 'frontend'),
    type: 'Front-End Development',
  },
  {
    slug: 'simple-admin',
    color: '#00bfa5',
    description:
      'Part of the SimpleAdminTeam, this project includes a bot, dashboard client, server, and more. This work showcases your skills in full-stack development and team collaboration.',
    shortDescription: 'Bot, dashboard, and server development for SimpleAdmin.',
    links: [{ to: 'https://simpleadm.in', label: 'Website' }],
    logo: Assets.JavaScript,
    name: 'SimpleAdmin',
    period: {
      from: new Date('2022-04-14'),
    },
    skills: getSkills('js', 'lua', 'fullstack'),
    type: 'Full-Stack Development',
  },
  {
    slug: 'mountware',
    color: '#f7df1e',
    description:
      'A project under the MountWareTeam, focused on JavaScript development. This project is part of your contributions to Mountain Interactive LLC, showcasing your backend development skills.',
    shortDescription: 'JavaScript project for the MountWareTeam.',
    links: [{ to: 'https://mountaininteractive.com', label: 'Website' }],
    logo: Assets.JavaScript,
    name: 'MountWare',
    period: {
      from: new Date(),
    },
    skills: getSkills('js', 'backend'),
    type: 'Backend Development',
  },
  {
    slug: 'saultech',
    color: '#007acc',
    description:
      'C# projects related to SaulTech, focusing on your skills in .NET development and software engineering.',
    shortDescription:
      'C# projects for SaulTech, demonstrating expertise in .NET and software engineering.',
    links: [{ to: '#', label: 'GitHub' }],
    logo: Assets.Csharp,
    name: 'SaulTech',
    period: {
      from: new Date('2023-07-09'),
    },
    skills: getSkills('c#', '.net', 'software-engineering', 'csharp'),
    type: 'Full-Stack Development',
  },

  // Web Development Projects
  {
    slug: 'fltesting',
    color: '#f7df1e',
    description:
      'JavaScript testing project forked from ProxyService, highlighting your skills in testing frameworks and client-side development.',
    shortDescription: 'JavaScript testing project forked from ProxyService.',
    links: [{ to: '#', label: 'GitHub' }],
    logo: Assets.JavaScript,
    name: 'FLTesting',
    period: {
      from: new Date('2022-09-28'),
    },
    skills: getSkills('js', 'testing', 'client-side-development'),
    type: 'Web Development',
  },
];

export const title = 'Portfolio';
