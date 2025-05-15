'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Dictionary, ImpactData } from '@/types/dictionary';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ImpactCardProps {
  id: string;
  dictionary: Dictionary;
}

const companyLogos = [
  '/images/meta-logo.svg',
  '/images/airbnb-logo.svg',
  '/images/coinlens-logo.svg',
  '/images/digimenu-logo.svg',
];

export function ImpactCard({ id, dictionary }: ImpactCardProps) {
  const impact = dictionary.impact[id] as ImpactData;
  const stats = impact.stats;

  const isTeamsImpact = id === 'teams-impact';
  const isUserImpact = id === 'user-impact';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <Card className='h-full hover:shadow-lg transition-shadow'>
        <CardHeader>
          <CardTitle className='text-xl font-bold'>{impact.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground mb-6'>{impact.description}</p>

          {isTeamsImpact && (
            <div className='mb-6'>
              <motion.div
                className='flex flex-wrap gap-4 justify-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}>
                {companyLogos.map((logo, index) => (
                  <motion.img
                    key={logo}
                    src={logo}
                    alt='Company logo'
                    className='h-8 w-auto opacity-80 hover:opacity-100 transition-opacity'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                  />
                ))}
              </motion.div>
            </div>
          )}

          {isUserImpact && (
            <div className='mb-6'>
              <motion.div
                className='relative w-24 h-24 mx-auto'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}>
                <div className='absolute inset-0 rounded-full border-4 border-primary/20' />
                <div className='absolute inset-0 rounded-full border-4 border-primary/40 animate-spin-slow' />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <span className='text-2xl font-bold text-primary'>
                    <CountUp
                      end={140000}
                      duration={2.5}
                      separator=','
                      suffix='+'
                    />
                  </span>
                </div>
              </motion.div>
            </div>
          )}

          <div className='space-y-4'>
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
