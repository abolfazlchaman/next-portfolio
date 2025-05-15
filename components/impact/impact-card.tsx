'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Dictionary, ImpactData } from '@/types/dictionary';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ImpactCardProps {
  id: string;
  dictionary: Dictionary;
}

export function ImpactCard({ id, dictionary }: ImpactCardProps) {
  const impact = dictionary.impact[id] as ImpactData;
  const stats = impact.stats;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <Card className='h-full hover:shadow-lg transition-shadow flex flex-col'>
        <CardHeader>
          <CardTitle className='text-xl font-bold'>{impact.title}</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col flex-1 justify-between'>
          <div>
            <p className='text-muted-foreground mb-6'>{impact.description}</p>
          </div>

          <div className='space-y-4 mt-auto'>
            {Object.entries(stats).map(([key, value]) => (
              <div
                key={key}
                className='flex items-center gap-2'>
                <div className='text-2xl font-bold text-primary'>
                  {value.includes('+') ? (
                    <CountUp
                      end={parseInt(value.replace(/[^0-9]/g, ''))}
                      duration={2.5}
                      suffix={value.includes('%') ? '%' : '+'}
                      separator=','
                    />
                  ) : (
                    value
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
