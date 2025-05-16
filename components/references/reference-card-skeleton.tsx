'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function ReferenceCardSkeleton() {
  return (
    <Card className='min-h-full hover:shadow-lg transition-shadow'>
      <CardContent className='p-6'>
        <div className='flex items-start gap-4 min-h-full flex-col justify-between'>
          <div className='flex items-start gap-2'>
            <Skeleton className='h-6 w-6 rounded-full' />
            <Skeleton className='h-4 w-32' />
          </div>
          <hr />
          <div className='space-y-2 w-full'>
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-3/4' />
            <Skeleton className='h-4 w-5/6' />
          </div>
          <Skeleton className='h-4 w-40 self-end' />
        </div>
      </CardContent>
    </Card>
  );
}
