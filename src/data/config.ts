// Portfolio configuration and static data
import { TimelineItem, SkillCategory, ProficiencyLevel } from '@/types';

export const siteConfig = {
  name: 'Manusha',
  title: 'Software Engineer',
  description:
    'A passionate software engineer building modern web & mobile applications. Explore my projects, articles, and professional journey.',
  url: 'https://manusha17.github.io',
  ogImage: '/og-image.png',
  profileImage: '/profile-image.webp',
  keywords: [
    'Manusha',
    'Chethiyawardhana',
    'software engineer',
    'web developer',
    'full stack developer',
    'react developer',
    'next.js developer',
    'typescript developer',
    'frontend developer',
    'backend developer',
    'javascript',
    'portfolio',
  ],
  author: {
    name: 'Manusha Chethiyawardhana',
    email: 'manushacheti@gmail.com',
    url: `https:/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}.github.io`,
  },
  links: {
    github: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    linkedin: 'https://www.linkedin.com/in/manusha-chethiyawardhana/',
    twitter: 'https://x.com/manushacheti',
    email: 'manushacheti@gmail.com',
  },
  // GitHub integration settings
  github: {
    username: process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'yourusername',
    showForks: false,
    maxRepos: 6,
    featuredRepos: ['world_time_app'], // Add repository names you want to feature
    excludeRepos: ['manusha17', 'Origin', 'manusha17.github.io'], // Repos to exclude from display
    showPrivateRepos: false, // Only works with GitHub token
  },
  // Medium integration settings
  medium: {
    username: process.env.NEXT_PUBLIC_MEDIUM_USERNAME || 'yourusername',
    maxArticles: 6,
    featuredArticles: [], // Add article titles or URLs you want to feature
  },
  // SEO settings
  seo: {
    defaultTitle: 'Manusha - Software Engineer',
    titleTemplate: '%s | Manusha Chethiyawardhana',
    defaultDescription:
      'A passionate software engineer building modern web applications. Explore my projects, articles, and professional journey.',
    siteUrl: `https://${process.env.NEXT_PUBLIC_GITHUB_USERNAME}.github.io`,
    defaultImage: '/og-image.png',
    twitterUsername: '@manushacheti',
    facebookAppId: '', // Add if you have one
    googleSiteVerification: 'UicU8tk8DoNJrczic9fOuocduEBDGBSoEC3vcN0_TGU',
    bingSiteVerification: '', // Add your Bing verification code
  },
};

export const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Articles', href: '#articles' },
  { name: 'Contact', href: '#contact' },
];

export const personalInfo = {
  bio: "Hi, I'm Manusha Chethiyawardhana!",
  location: 'Sri Lanka',
  availability: 'working as a senior software engineer at Rootcode',
};

export const timelineData: TimelineItem[] = [
  {
    id: '1',
    type: 'education',
    title: 'Bachelor of Science Honours - Information Technology',
    subtitle: 'University of Moratuwa',
    date: new Date('2017-01-01'),
    endDate: new Date('2022-02-01'),
    description: 'Graduated with honors, focusing on software engineering and web development.',
    details: [
      'Relevant coursework: Data Structures, Algorithms, Web Development, Software Architecture, AI, Big Data',
      'Projects: Built a full-stack web and mobile shopping application, AI-Based Movie Content Rating System, Real-Time Taekwondo scoring system',
      'GPA: 3.59/4.0 - Second Upper Class',
    ],
    achievements: [
      'University colors awards and six national level medals in Taekwondo',
      'RealHack 2.0 Finalists - an inter university hackathon',
    ],
    technologies: ['Java', 'C', 'JavaScript', 'SQL', 'AWS', 'AI'],
    location: 'Moratuwa, Sri Lanka',
    color: '#3B82F6',
  },
  {
    id: '2',
    type: 'work',
    title: 'Intern Software Engineer',
    subtitle: 'Omobio (Pvt) Ltd',
    date: new Date('2020-07-01'),
    endDate: new Date('2020-12-30'),
    description: 'Started career, building web applications and learning industry best practices.',
    details: [
      'Developed responsive web application components',
      'Collaborated and worked in an agile development environment',
      'Demoed project work to key stakeholders',
    ],
    technologies: ['JavaScript', 'Drupal', 'Bootstrap'],
    achievements: ['Developed production ready web application components used in the industry'],
    location: 'Colombo, Sri Lanka',
    color: '#10B981',
  },
  {
    id: '3',
    type: 'work',
    title: 'Software Engineer',
    subtitle: 'Rootcode',
    date: new Date('2022-03-01'),
    endDate: new Date('2024-01-01'),
    description:
      'Worked as a full-stack web and mobile application developer for multiple client projects.',
    details: [
      'Development of customer-facing applications',
      'Worked on 3 different projects across diffrent tech stacks',
      'Collaborated closely with clients',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Nest.js', 'React Native', 'AWS', 'SQL'],
    achievements: [
      'Became an AWS Community Builder',
      'Conducted technical sessions for university students',
    ],
    location: 'Colombo, Sri Lanka',
    color: '#8B5CF6',
  },
  {
    id: '4',
    type: 'work',
    title: 'Senior Software Engineer',
    subtitle: 'Rootcode',
    date: new Date('2024-01-01'),
    description: 'Currently working on complex web applications and leading technical initiatives.',
    details: [
      'Architect and develop scalable solutions for high-traffic applications',
      'Mentor junior developers and conduct code reviews',
      'Lead cloud community of the company',
      'Interview and evaluate candidates in technical perspects',
    ],
    technologies: ['Express.js', 'Expo', 'Jenkins', 'GCP', 'PostgreSQL', 'Firebase'],
    achievements: [
      'Became an AWS Certified Solutions Architect - Associate',
      'Implemented CI/CD pipelines in multiple projects',
    ],
    location: 'Colombo, Sri Lanka',
    color: '#F0B100',
  },
  // Add more timeline items as needed
];

export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    skills: [
      {
        id: 'react',
        name: 'React',
        proficiency: ProficiencyLevel.EXPERT,
        yearsOfExperience: 5,
      },
      {
        id: 'nextjs',
        name: 'Next.js',
        proficiency: ProficiencyLevel.ADVANCED,
        yearsOfExperience: 4,
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        proficiency: ProficiencyLevel.ADVANCED,
        yearsOfExperience: 4,
      },
      {
        id: 'rn/expo',
        name: 'React Native / Expo',
        proficiency: ProficiencyLevel.ADVANCED,
        yearsOfExperience: 3,
      },
      {
        id: 'javascript/css',
        name: 'JavaScript / CSS',
        proficiency: ProficiencyLevel.EXPERT,
        yearsOfExperience: 6,
      },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Development',
    skills: [
      {
        id: 'nodejs',
        name: 'Node.js',
        proficiency: ProficiencyLevel.ADVANCED,
        yearsOfExperience: 3,
      },
      {
        id: 'nest',
        name: 'Nest.js',
        proficiency: ProficiencyLevel.INTERMEDIATE,
        yearsOfExperience: 2,
      },
      {
        id: 'sql',
        name: 'SQL',
        proficiency: ProficiencyLevel.ADVANCED,
        yearsOfExperience: 5,
      },
      {
        id: 'firebase',
        name: 'Firebase',
        proficiency: ProficiencyLevel.INTERMEDIATE,
        yearsOfExperience: 2,
      },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Technologies',
    skills: [
      {
        id: 'git',
        name: 'Git',
        proficiency: ProficiencyLevel.ADVANCED,
        yearsOfExperience: 7,
      },
      {
        id: 'docker',
        name: 'Docker',
        proficiency: ProficiencyLevel.INTERMEDIATE,
        yearsOfExperience: 2,
      },
      {
        id: 'aws',
        name: 'AWS',
        proficiency: ProficiencyLevel.ADVANCED,
        yearsOfExperience: 5,
      },
      {
        id: 'gcp',
        name: 'GCP',
        proficiency: ProficiencyLevel.BEGINNER,
        yearsOfExperience: 1,
      },
      {
        id: 'jenkins',
        name: 'Jenkins',
        proficiency: ProficiencyLevel.BEGINNER,
        yearsOfExperience: 1,
      },
    ],
  },
];
