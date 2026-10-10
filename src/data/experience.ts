
export interface ExperienceItem {
  id: string
  period: string
  role: string
  company: string
  description: string
  achievements: string[]
  technologies: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: '01',
    period: '2022 — 2026',
    role: 'Software Engineer',
    company: 'Cody Web Development',
    description:
      'Developed and maintained web applications, APIs, ecommerce solutions, and business systems.',
    achievements: [
      'Built and maintained full-stack web applications.',
      'Developed backend services and REST APIs.',
      'Worked with relational databases and modern frontend frameworks.',
      'Collaborated on client projects and application improvements.',
      'Refactored existing codebase to improve performance, maintainability, and scalability',
      'Performed unit testing on each features and functionality to ensure quality and reliability.',
    ],
    technologies: [
      'PHP',
      'Laravel',
      'React',
      'TypeScript',
      'WordPress',
      'WooCommerce',
      'MySQL',
      'PostgreSQL',
    ],
  },
  {
    id: '02',
    period: '2021 — 2022',
    role: 'Frontend Developer',
    company: 'Techtronic Industries - TTI',
    description:
      'Developed and maintained frontend web applications.',
    achievements: [
      'Built website using react js, next js (UI)',
      'Perform maintenance tasks on hi-end web systems',
      'Collaborated on client projects and application improvements.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'WordPress',
    ],
  },
  {
    id: '03',
    period: '2019 — 2021',
    role: 'Web Programmer (Full Stack)',
    company: 'Proweaver',
    description:
      'Developed and maintained full-stack web applications (Web and Mobile).',
    achievements: [
      'Built and maintained full-stack web and mobile applications.',
      'Developed backend services and REST APIs.',
      'Built and maintained full-stack web applications.',
      'Collaborated on client projects and application improvements.',
      'Develop E-Commerce web applications using WordPress and WooCommerce.',
    ],
    technologies: [
      'PHP',
      'Laravel',
      'React',
      'React Native',
      'TypeScript',
      'WordPress',
      'WooCommerce',
      'MySQL',
      'Payment Integration (PayPal, Stripe, Dragonpay)',
    ],
  },
]
