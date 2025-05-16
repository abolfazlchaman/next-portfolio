import { Dictionary } from '@/types/dictionary';
import { ReferenceCard } from './reference-card';

interface ReferenceSectionProps {
  dictionary: Dictionary;
}

export function ReferenceSection({ dictionary }: ReferenceSectionProps) {
  return (
    <section className='py-16 md:py-24'>
      <div className='container'>
        <h2 className='text-3xl font-bold text-center mb-12'>{dictionary.references.title}</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <ReferenceCard
            id='eslaminejad'
            dictionary={dictionary}
          />
          <ReferenceCard
            id='ali'
            dictionary={dictionary}
          />
          <ReferenceCard
            id='leila'
            dictionary={dictionary}
          />
        </div>
      </div>
    </section>
  );
}
