'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { Dictionary } from '@/types/dictionary';
import { ImpactGrid } from './impact-grid';
import { ImpactFilterTabs } from './impact-filter-tabs';

interface ImpactSectionProps {
  dictionary: Dictionary;
}

export type ImpactCategory = 'all' | 'opensource' | 'corporate' | 'crypto' | 'startups';

export function ImpactSection({ dictionary }: ImpactSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ImpactCategory>('all');

  return (
    <section className='w-full py-24'>
      <div className='container mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl font-bold text-center mb-12'>
          {dictionary.impact.title}
        </motion.h2>

        <ImpactFilterTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          dictionary={dictionary}
        />

        <ImpactGrid
          activeCategory={activeCategory}
          dictionary={dictionary}
        />
      </div>
    </section>
  );
}
