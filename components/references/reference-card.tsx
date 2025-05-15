'use client';

import { motion } from 'framer-motion';
import { Dictionary } from '@/types/dictionary';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollText } from 'lucide-react';

interface ReferenceCardProps {
  id: 'leila' | 'ali' | 'eslaminejad';
  dictionary: Dictionary;
}

export function ReferenceCard({ id, dictionary }: ReferenceCardProps) {
  const reference = dictionary.references[id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <Card className='h-full hover:shadow-lg transition-shadow'>
        <CardContent className='p-6'>
          <div className='flex items-start gap-4'>
            <div className='mt-1'>
              <ScrollText className='h-6 w-6 text-primary' />
            </div>
            <div className='space-y-4'>
              <p
                className='text-muted-foreground italic'
                dangerouslySetInnerHTML={{ __html: reference.text }}
              />
              <p className='text-sm font-medium text-foreground/80'>— {reference.by}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
