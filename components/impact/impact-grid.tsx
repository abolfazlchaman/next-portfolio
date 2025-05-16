'use client';

import { motion } from 'framer-motion';
import { Dictionary } from '@/types/dictionary';
import { ImpactCategory } from './impact-section';
import { ImpactCard } from './impact-card';
import { ImpactCardSkeleton } from './impact-card-skeleton';

interface ImpactGridProps {
  activeCategory: ImpactCategory;
  dictionary: Dictionary;
  isLoading: boolean;
}

type ImpactId = Exclude<keyof Dictionary['impact'], 'title' | 'filter' | 'subtitle' | 'sources'>;

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

export function ImpactGrid({ activeCategory, dictionary, isLoading }: ImpactGridProps) {
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
      {isLoading
        ? Array.from({ length: 6 }).map((_, index) => <ImpactCardSkeleton key={index} />)
        : filteredItems.map((item) => (
            <ImpactCard
              key={item.id}
              id={item.id}
              dictionary={dictionary}
            />
          ))}
    </motion.div>
  );
}
