import { Category } from './../category';

export const CATEGORIES: Category[] = [
  {
    id: 0,
    name: `Environmental`,
    type: true,
    description: `e.g. Park clean-ups, etc.`
  },
  {
    id: 1,
    name: `Social`,
    type: true,
    description: `e.g. Meet-ups, block parties, etc.`
  },
  {
    id: 2,
    name: `Impact`,
    type: true,
    description: `e.g. Rallies, marches, etc. `
  },
  {
    id: 3,
    name: 'Donation',
    type: true,
    description: `e.g. Food drives, clothing drives, etc.`
  },
  {
    id: 4,
    name: 'Sales',
    type: true,
    description: `e.g. Yard sales, fundraising, etc.`
  },
  {
    id: 5,
    name: 'Educational',
    type: true,
    description: `e.g. Workshops, etc.`
  },
  {
    id: 6,
    name: 'Public Safety',
    type: true,
    description: `e.g. Teaching safety practices, awareness talks, etc.`
  },
  {
    id: 7,
    name: 'Park',
    type: false,
    description: `TAG EXAMPLE`
  }
];
