'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function ImpactCardSkeleton() {
  return (
    <Card className='h-full flex flex-col'>
      <CardHeader>
        <div className='flex items-center gap-3'>
          <Skeleton className='h-10 w-10 rounded-full' />
          <Skeleton className='h-6 w-3/4' />
        </div>
      </CardHeader>
      <CardContent className='flex flex-col flex-1 justify-between'>
        <div>
          <Skeleton className='h-4 w-full mb-2' />
          <Skeleton className='h-4 w-full mb-2' />
          <Skeleton className='h-4 w-3/4 mb-6' />
        </div>

        <div className='space-y-4 mt-auto'>
          <div className='flex items-center gap-2'>
            <Skeleton className='h-8 w-32' />
          </div>
          <div className='flex items-center gap-2'>
            <Skeleton className='h-8 w-40' />
          </div>
        </div>

        <div className='mt-6 pt-4 border-t'>
          <Skeleton className='h-4 w-20 mb-2' />
          <div className='flex flex-wrap gap-2'>
            <Skeleton className='h-6 w-24' />
            <Skeleton className='h-6 w-28' />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
