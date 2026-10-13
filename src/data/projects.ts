
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
  image?: string
  liveUrl?: string
}

export const projects: PortfolioProject[] = [
  {
    id: 'cj-restaurant',
    number: '01',
    category: 'FULL-STACK DEVELOPMENT',
    title: 'CJ Restaurant',
    description:
      'A restaurant ordering platform featuring product browsing, category filtering, cart management, and a scalable API architecture.',
    image: '/images/projects/cj-restaurant.png',
    liveUrl: 'https://cj-restaurant-29.vercel.app/',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Prisma',
      'PostgreSQL',
      'Vercel',
    ],
    year: '2026',
    status: 'Featured',
    featured: true,
  },
  {
    id: 'job-management',
    number: '02',
    category: 'BUSINESS APPLICATION',
    title: 'Job Management System',
    description:
      'A recruitment and job management platform for tracking job posts, applicants, hiring workflows, and interview schedules. Currently being rebuilt.',
    image: '/images/projects/job-management-ui-showcase.png',
    technologies: [
      'React',
      'TypeScript',
      'Laravel',
      'REST API',
    ],
    year: '2026',
    status: 'In progress',
    featured: true,
  },
  {
    id: 'lv-realty',
    number: '03',
    category: 'REAL ESTATE LANDING PAGE',
    title: 'LV Realty',
    description:
      'A modern real estate landing page showcasing properties with a premium visual design, responsive layouts, and inquiry-focused calls to action.',
    image: '/images/projects/luxury-lv-realty-website-showcase.png',
    liveUrl: 'https://lv-realty-eight.vercel.app/',
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
  {
    id: 'rental-tour-operations',
    number: '04',
    category: 'SAAS & BUSINESS AUTOMATION',
    title: 'Fleet & Tour Operations',
    description:
      'A fleet and tour management platform concept for rental operators, private drivers, and travel businesses. Bringing vehicle availability, booking schedules, customer management, trip planning, driver assignments, and revenue reporting into one dashboard.',
    image: '/images/projects/routewise-fleet-operations-dashboard.png',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Laravel',
      'REST API',
      'PostgreSQL',
    ],
    year: '2026',
    status: 'In progress',
    featured: true,
  },
]
