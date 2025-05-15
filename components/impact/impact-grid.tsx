'use client';

import { motion } from 'framer-motion';
import { Dictionary } from '@/types/dictionary';
import { ImpactCategory } from './impact-section';
import { ImpactCard } from './impact-card';

interface ImpactGridProps {
  activeCategory: ImpactCategory;
  dictionary: Dictionary;
}

type ImpactId = Exclude<keyof Dictionary['impact'], 'title' | 'filter'>;

type ImpactItem = {
  id: ImpactId;
  categories: ImpactCategory[];
};

const impactItems: ImpactItem[] = [
  { id: 'react-global', categories: ['corporate', 'opensource'] },
  { id: 'airbnb-standards', categories: ['corporate', 'opensource'] },
  { id: 'coinlens', categories: ['crypto'] },
  { id: 'digimenu', categories: ['startups'] },
  { id: 'teams-impact', categories: ['corporate'] },
  { id: 'user-impact', categories: ['all'] },
];

export function ImpactGrid({ activeCategory, dictionary }: ImpactGridProps) {
  const filteredItems = impactItems.filter(
    (item) =>
      activeCategory === 'all' ||
      item.categories.includes(activeCategory) ||
      item.categories.includes('all'),
  );

  return (
    <motion.div
      layout
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {filteredItems.map((item) => (
        <ImpactCard
          key={item.id}
          id={item.id}
          dictionary={dictionary}
        />
      ))}
    </motion.div>
  );
}
