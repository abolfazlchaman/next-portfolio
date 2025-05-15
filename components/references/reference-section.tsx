'use client';

import { motion } from 'framer-motion';
import { Dictionary } from '@/types/dictionary';
import { ReferenceCard } from './reference-card';

interface ReferenceSectionProps {
  dictionary: Dictionary;
}

export function ReferenceSection({ dictionary }: ReferenceSectionProps) {
  return (
    <section className='py-16 md:py-24'>
      <div className='container'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl font-bold text-center mb-12'>
          {dictionary.references.title}
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <ReferenceCard
            id='leila'
            dictionary={dictionary}
          />
          <ReferenceCard
            id='ali'
            dictionary={dictionary}
          />
          <ReferenceCard
            id='eslaminejad'
            dictionary={dictionary}
          />
        </div>
      </div>
    </section>
  );
}
