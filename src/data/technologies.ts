
export type TechnologyCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'creative'
  | 'ecommerce'

export interface Technology {
  id: string
  name: string
  category: TechnologyCategory
  description: string
  experience: string
  position: [number, number, number]
}

export const technologies: Technology[] = [
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    description:
      'Building reusable components, interactive interfaces, and modern web applications.',
    experience: 'Advanced',
    position: [-2.8, 0.8, 0],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    description:
      'Type-safe application development across frontend and backend systems.',
    experience: 'Advanced',
    position: [-1.2, 2.3, 0],
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    description:
      'Building production-ready React applications with modern rendering patterns.',
    experience: 'Advanced',
    position: [0.8, 2.5, 0],
  },
  {
    id: 'gsap',
    name: 'GSAP',
    category: 'creative',
    description:
      'Creating motion design, transitions, and scroll-driven experiences.',
    experience: 'Intermediate',
    position: [2.8, 1.6, 0],
  },
  {
    id: 'threejs',
    name: 'Three.js',
    category: 'creative',
    description:
      'Building interactive 3D experiences for the web.',
    experience: 'Intermediate',
    position: [3.1, 0, 0],
  },
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'backend',
    description:
      'Building REST APIs, authentication, business logic, and backend systems.',
    experience: 'Advanced',
    position: [-2.8, -1.2, 0],
  },
  {
    id: 'node',
    name: 'Node.js',
    category: 'backend',
    description:
      'Developing APIs, backend services, and real-time applications.',
    experience: 'Advanced',
    position: [-1.1, -2.3, 0],
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    description:
      'Designing relational databases and reliable data systems.',
    experience: 'Advanced',
    position: [0.8, -2.6, 0],
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    description:
      'Containerizing applications and maintaining consistent environments.',
    experience: 'Intermediate',
    position: [2.5, -1.8, 0],
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'ecommerce',
    description:
      'Building and customizing WordPress websites, themes, and CMS experiences.',
    experience: 'Professional',
    position: [-3.1, -2.4, 0],
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    category: 'ecommerce',
    description:
      'Customizing ecommerce stores, product catalogs, and WooCommerce functionality.',
    experience: 'Professional',
    position: [3.1, -2.7, 0],
  },
]
