'use client';

import { motion } from 'framer-motion';
import { Dictionary } from '@/types/dictionary';
import { ImpactCategory } from './impact-section';
import { ImpactCard } from './impact-card';

interface ImpactGridProps {
  activeCategory: ImpactCategory;
  dictionary: Dictionary;
}

const impactItems = [
  { id: 'react-global', category: 'corporate' },
  { id: 'airbnb-standards', category: 'corporate' },
  { id: 'coinlens', category: 'crypto' },
  { id: 'digimenu', category: 'startups' },
  { id: 'teams-impact', category: 'corporate' },
  { id: 'user-impact', category: 'all' },
] as const;

export function ImpactGrid({ activeCategory, dictionary }: ImpactGridProps) {
  const filteredItems = impactItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory,
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
