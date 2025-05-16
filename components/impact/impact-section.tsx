'use client';

import { useState, useEffect } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='w-full py-24'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'>
          <h2 className='text-4xl font-bold mb-4'>{dictionary.impact.title}</h2>
          <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
            {dictionary.impact.subtitle}
          </p>
        </motion.div>

        <ImpactFilterTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          dictionary={dictionary}
        />

        <ImpactGrid
          activeCategory={activeCategory}
          dictionary={dictionary}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
}
