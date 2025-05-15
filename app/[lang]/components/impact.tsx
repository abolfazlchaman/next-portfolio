'use client';

import { ImpactSection } from '@/components/impact/impact-section';
import { Dictionary } from '@/types/dictionary';

interface ImpactProps {
  dictionary: Dictionary;
}

export function Impact({ dictionary }: ImpactProps) {
  return (
    <section
      id='impact'
      className='scroll-mt-20'>
      <ImpactSection dictionary={dictionary} />
    </section>
  );
}
