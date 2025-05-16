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
      <Card className='min-h-full justify-between flex hover:shadow-lg transition-shadow'>
        <CardContent className='p-6'>
          <div className='flex items-start gap-4 min-h-full flex-col justify-between'>
            <div className='flex items-start gap-2'>
              <ScrollText className='h-6 w-6 text-primary' />
              <p className='text-sm font-medium text-foreground/80'>{reference.by_name}</p>
            </div>
            <hr />
            <p
              className='text-muted-foreground italic text-justify'
              dangerouslySetInnerHTML={{ __html: reference.text }}
            />
            <p className='text-sm font-medium text-foreground/80 text-right'>
              - {reference.by_title}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
