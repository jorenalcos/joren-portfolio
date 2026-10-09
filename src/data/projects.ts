
export interface PortfolioProject {
  id: string
  number: string
  category: string
  title: string
  description: string
  technologies: string[]
  year: string
  status: 'Featured' | 'In progress' | 'Client work'
  featured: boolean
}

export const projects: PortfolioProject[] = [
  {
    id: 'cj-restaurant',
    number: '01',
    category: 'FULL-STACK DEVELOPMENT',
    title: 'CJ Restaurant',
    description:
      'A restaurant platform focused on product browsing, ordering experiences, and a scalable API architecture.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Prisma',
      'PostgreSQL',
      'Docker',
    ],
    year: '2026',
    status: 'In progress',
    featured: true,
  },
  {
    id: 'job-management',
    number: '02',
    category: 'BUSINESS APPLICATION',
    title: 'Job Management System',
    description:
      'A full-stack application for managing records, authentication, CRUD workflows, and real-time updates.',
    technologies: [
      'React',
      'TypeScript',
      'Laravel',
      'REST API',
    ],
    year: '2026',
    status: 'Featured',
    featured: true,
  },
  {
    id: 'wordpress-commerce',
    number: '03',
    category: 'CMS & E-COMMERCE',
    title: 'WordPress & Commerce',
    description:
      'WordPress and WooCommerce development, including theme customization, store functionality, and ecommerce workflows.',
    technologies: [
      'WordPress',
      'WooCommerce',
      'PHP',
      'MySQL',
    ],
    year: '2026',
    status: 'Client work',
    featured: false,
  },
]
