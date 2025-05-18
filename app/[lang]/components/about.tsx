import { FaExternalLinkAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { getDictionary } from '@/get-dictionary';
import { AboutImage } from './about-skeleton';
import Link from 'next/link';

export function About({
  dictionary,
  language,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['about'];
  language: Awaited<ReturnType<typeof getDictionary>>['language'];
}) {
  const { title, description, buttonTextEn, buttonTextFa, buttonTextDe } = dictionary;
  return (
    <section className='container min-h-[calc(80vh-64px)] w-full flex lg:flex-row flex-col-reverse items-stretch justify-between mt-24 gap-12'>
      {/* TEXT BLOCK */}
      <div className='flex flex-col justify-between min-h-full flex-1 text-justify mt-6 md:mx-10 md:mb-0 md:mt-0'>
        <div>
          <h2 className='text-3xl font-bold text-center'>{title}</h2>
          <hr className='my-4' />
        </div>
        <p
          className='text-lg mb-4 text-justify'
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className='flex flex-row justify-center gap-4 mt-5 w-full flex-wrap'>
          <Button
            size='lg'
            className='w-full'
            asChild>
            <Link
              href='https://www.canva.com/design/DAGlPFpIzXE/YbsJ7SQxp1lziZM7JTuJ6A/edit?utm_content=DAGlPFpIzXE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
              target='_blank'
              rel='noopener noreferrer'>
              {buttonTextEn}
              <FaExternalLinkAlt className='mr-2 h-4 w-4' />
            </Link>
          </Button>

          {language === 'fa' && (
            <Button
              size='lg'
              className='w-full'
              asChild>
              <Link
                href='https://www.canva.com/design/DAGlPNcrp6k/rngftrUqx0EOZ414RjdLPg/edit?utm_content=DAGlPNcrp6k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
                target='_blank'
                rel='noopener noreferrer'>
                {buttonTextFa}
                <FaExternalLinkAlt className='mr-2 h-4 w-4' />
              </Link>
            </Button>
          )}

          {language === 'en' && (
            <Button
              size='lg'
              className='w-full'
              asChild>
              <Link
                href='https://www.canva.com/design/DAGnznLgugU/n9pUYeL_JCUP5V7asx4itg/edit?utm_content=DAGnznLgugU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
                target='_blank'
                rel='noopener noreferrer'>
                {buttonTextDe}
                <FaExternalLinkAlt className='mr-2 h-4 w-4' />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* IMAGE BLOCK */}
      <div className='flex-1 flex items-center justify-center overflow-hidden'>
        <AboutImage />
      </div>
    </section>
  );
}
