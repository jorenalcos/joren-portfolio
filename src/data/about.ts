
import {
  Braces,
  CheckCircle2,
  Database,
  Layers3,
  MessageCircle,
  ShoppingBag,
  Target,
  Workflow,
} from 'lucide-react'

import type { LucideIcon } from 'lucide-react'

export interface AboutMetric {
  value: string
  label: string
  description: string
}

export interface Capability {
  number: string
  title: string
  description: string
  deliverable: string
  technologies: string[]
  icon: LucideIcon
}

export interface ProfessionalValue {
  number: string
  title: string
  description: string
  benefit: string
  icon: LucideIcon
}

export const aboutContent = {
  eyebrow: '01 — About / The Developer',

  headline: [
    'I turn ideas',
    'into digital products',
    'that deliver',
  ],

  headlineAccent: 'results.',

  introduction:
    'I help businesses build modern web applications, streamline operations, and create better digital experiences through thoughtful software engineering.',

  supportingText:
    'From frontend interfaces and backend APIs to e-commerce platforms and deployment, I help take projects from concept to production.',

  ctaLabel: 'Discuss your project',
  ctaHref: '#contact',
}

export const aboutMetrics: AboutMetric[] = [
  {
    value: '7+',
    label: 'Years of experience',
    description:
      'Building and maintaining web applications and business systems.',
  },
  {
    value: 'Full-stack',
    label: 'Frontend to backend',
    description:
      'Interfaces, APIs, databases, and third-party integrations.',
  },
  {
    value: 'Database to cloud',
    label: 'Build. Improve. Deploy.',
    description:
      'Practical solutions focused on usability and business outcomes.',
  },
]

export const capabilities: Capability[] = [
  {
    number: '01',
    title: 'Full-stack engineering',
    description:
      'Modern web applications that connect polished interfaces with reliable business logic and scalable architecture.',
    deliverable:
      'Dashboards, customer portals, internal tools, and business applications.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Laravel',
      'Node.js',
    ],
    icon: Braces,
  },
  {
    number: '02',
    title: 'APIs & backend systems',
    description:
      'Structured backend services that manage data, authentication, integrations, and application workflows.',
    deliverable:
      'REST APIs, database architecture, authentication, and third-party integrations.',
    technologies: [
      'PHP',
      'Laravel',
      'Node.js',
      'PostgreSQL',
      'MySQL',
    ],
    icon: Database,
  },
  {
    number: '03',
    title: 'E-commerce solutions',
    description:
      'Shopping experiences that help customers discover products and complete purchases with less friction.',
    deliverable:
      'Online stores, product catalogs, WooCommerce customization, and store workflows.',
    technologies: [
      'WordPress',
      'WooCommerce',
      'PHP',
      'MySQL',
    ],
    icon: ShoppingBag,
  },
  {
    number: '04',
    title: 'Interactive web experiences',
    description:
      'Distinctive websites combining motion, interaction, and thoughtful visual storytelling.',
    deliverable:
      'Marketing websites, animated landing pages, and interactive 3D experiences.',
    technologies: [
      'GSAP',
      'Three.js',
      'React Three Fiber',
      'Tailwind CSS',
    ],
    icon: Workflow,
  },
]

export const valuesHeading = {
  eyebrow: '03 — Professional Values',
  title: 'Good software',
  accent: 'starts with good decisions.',
  description:
    "The goal isn't simply to write code. It's to solve the right problem, make thoughtful engineering decisions, and build something people can rely on.",
}

export const professionalValues: ProfessionalValue[] = [
  {
    number: '01',
    title: 'Business-first thinking',
    description:
      'I start by understanding the business problem, your users, and the result you want to achieve before choosing a technical solution.',
    benefit: 'Solutions aligned with your objectives.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Maintainable engineering',
    description:
      'I value readable code, reusable components, clear architecture, and sensible technical decisions that make future improvements easier.',
    benefit: 'Software that can evolve with your business.',
    icon: Layers3,
  },
  {
    number: '03',
    title: 'Quality and reliability',
    description:
      'I consider usability, responsive layouts, performance, and testing throughout development rather than treating them as an afterthought.',
    benefit: 'A more dependable product experience.',
    icon: CheckCircle2,
  },
  {
    number: '04',
    title: 'Clear communication',
    description:
      'I value agreed priorities, transparent progress updates, and explaining technical trade-offs in language clients can understand.',
    benefit: 'Better collaboration and fewer surprises.',
    icon: MessageCircle,
  },
]

export const aboutCta = {
  eyebrow: 'Have a project in mind?',
  title: "Let's build",
  accent: 'something valuable.',
  description:
    "Tell me about your goals, challenges, and ideas. Let's explore how I can help turn them into a working digital product.",
  buttonLabel: 'Start a conversation',
  buttonHref: '#contact',
}
