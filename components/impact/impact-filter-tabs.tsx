'use client';

import { motion } from 'framer-motion';
import { Dictionary } from '@/types/dictionary';
import { ImpactCategory } from './impact-section';

interface ImpactFilterTabsProps {
  activeCategory: ImpactCategory;
  onCategoryChange: (category: ImpactCategory) => void;
  dictionary: Dictionary;
}

const categories: ImpactCategory[] = ['all', 'opensource', 'corporate', 'crypto', 'startups'];

export function ImpactFilterTabs({
  activeCategory,
  onCategoryChange,
  dictionary,
}: ImpactFilterTabsProps) {
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-12'>
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-6 py-2 rounded-full text-sm font-medium transition-colors
            ${
              activeCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80 text-muted-foreground'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          {dictionary.impact.filter[category]}
        </motion.button>
      ))}
    </div>
  );
}
