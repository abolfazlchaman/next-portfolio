'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from '@/components/CountUpNoSSR';
import { Dictionary, ImpactData } from '@/types/dictionary';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faUtensils,
  faUpRightAndDownLeftFromCenter,
  faRankingStar,
} from '@fortawesome/free-solid-svg-icons';
import { faAirbnb, faMeta } from '@fortawesome/free-brands-svg-icons';

type ImpactId = Exclude<keyof Dictionary['impact'], 'title' | 'filter' | 'subtitle' | 'sources'>;

interface ImpactCardProps {
  id: ImpactId;
  dictionary: Dictionary;
}

const sourceLinks: Record<ImpactId, { label: string; url: string }[]> = {
  'react-global': [
    { label: 'Meta', url: 'https://www.meta.com' },
    { label: 'React.dev', url: 'https://react.dev' },
    {
      label: 'State of JS 2024',
      url: 'https://2024.stateofjs.com/en-US/libraries/front-end-frameworks',
    },
    { label: 'BuiltWith Trends', url: 'https://trends.builtwith.com/websitelist/React' },
  ],
  'airbnb-standards': [
    { label: 'Airbnb', url: 'https://www.airbnb.com' },
    {
      label: 'Airbnb Market Cap',
      url: 'https://www.macrotrends.net/stocks/charts/ABNB/airbnb/net-worth',
    },
    { label: 'Airbnb JS Style Guide', url: 'https://github.com/airbnb/javascript/' },
    {
      label: 'Airbnb React Style Guide',
      url: 'https://github.com/airbnb/javascript/tree/master/react',
    },
  ],
  'coinlens': [
    { label: 'CoinLens', url: 'https://www.coinlens.info' },
    {
      label: 'coingecko',
      url: 'https://www.coingecko.com/en/global-charts#:~:text=The%20global%20cryptocurrency%20market%20cap,a%20Bitcoin%20dominance%20of%2059.85%25.',
    },
  ],
  'digimenu': [{ label: 'DigiMenu', url: 'https://www.mydigimenu.online' }],
  'teams-impact': [
    {
      label: 'Resume',
      url: 'https://www.canva.com/design/DAGlPNcrp6k/rngftrUqx0EOZ414RjdLPg/edit?utm_content=DAGlPNcrp6k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    },
  ],
  'user-impact': [
    {
      label: 'Resume',
      url: 'https://www.canva.com/design/DAGlPFpIzXE/YbsJ7SQxp1lziZM7JTuJ6A/edit?utm_content=DAGlPFpIzXE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    },
  ],
};

// Persian to English number mapping
const persianToEnglish: Record<string, string> = {
  '۰': '0',
  '۱': '1',
  '۲': '2',
  '۳': '3',
  '۴': '4',
  '۵': '5',
  '۶': '6',
  '۷': '7',
  '۸': '8',
  '۹': '9',
};

// English to Persian number mapping
const englishToPersian: Record<string, string> = {
  '0': '۰',
  '1': '۱',
  '2': '۲',
  '3': '۳',
  '4': '۴',
  '5': '۵',
  '6': '۶',
  '7': '۷',
  '8': '۸',
  '9': '۹',
};

const impactIcons: Record<ImpactId, any> = {
  'react-global': faMeta,
  'airbnb-standards': faAirbnb,
  'coinlens': faBrain,
  'digimenu': faUtensils,
  'teams-impact': faUpRightAndDownLeftFromCenter,
  'user-impact': faRankingStar,
};

export function ImpactCard({ id, dictionary }: ImpactCardProps) {
  const impact = dictionary.impact[id] as ImpactData;
  const stats = impact.stats;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  useEffect(() => {
    setKey((prev) => prev + 1);
    setHasAnimated(false);
  }, [id]);

  const parseValue = (value: string) => {
    // Convert Persian numbers to English for parsing
    let englishValue = value;
    Object.entries(persianToEnglish).forEach(([persian, english]) => {
      englishValue = englishValue.replace(new RegExp(persian, 'g'), english);
    });

    // Extract just the number part from the string
    const match = englishValue.match(/^[\d,]+/);
    if (!match) return 0;
    return parseInt(match[0].replace(/,/g, ''));
  };

  const getDisplayText = (value: string) => {
    // Convert Persian numbers to English for matching
    let englishValue = value;
    Object.entries(persianToEnglish).forEach(([persian, english]) => {
      englishValue = englishValue.replace(new RegExp(persian, 'g'), english);
    });

    // Extract everything after the number and any + or % symbol
    const match = englishValue.match(/^[\d,]+[+%]?\s*/);
    if (!match) return value;

    // Get the length of the matched part
    const matchLength = match[0].length;

    // Return the original text without the number part
    return value.slice(matchLength);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}>
      <Card className='h-full hover:shadow-lg transition-shadow flex flex-col'>
        <CardHeader>
          <div className='flex items-center gap-3'>
            {impactIcons[id] && (
              <FontAwesomeIcon
                icon={impactIcons[id]}
                className='text-primary text-4xl'
              />
            )}
            <CardTitle className='text-xl font-bold'>{impact.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className='flex flex-col flex-1 justify-between'>
          <div>
            <p className='text-muted-foreground mb-6 text-justify'>{impact.description}</p>
          </div>

          <div className='space-y-4 mt-auto'>
            {Object.entries(stats).map(([key, value]) => (
              <div
                key={key}
                className='flex items-center gap-2'>
                <div className='text-lg font-bold text-primary'>
                  {typeof value === 'string' && value.includes('+')
                    ? mounted && (
                        <CountUp
                          key={`${id}-${key}`}
                          end={parseValue(value)}
                          duration={2.5}
                          suffix={value.includes('%') ? '%' : ''}
                          separator=','
                          start={0}
                          enableScrollSpy
                          scrollSpyOnce
                          scrollSpyDelay={200}
                          redraw={false}
                          formattingFn={(value) => {
                            // Convert English digits to Persian if the language is Persian
                            if (dictionary.language === 'fa') {
                              return value.toString().replace(/\d/g, (d) => englishToPersian[d]);
                            }
                            return value.toString();
                          }}>
                          {({ countUpRef }) => (
                            <span>
                              {dictionary.language === 'fa' && value.includes('+') && '+'}
                              <span ref={countUpRef} />
                              {dictionary.language !== 'fa' && value.includes('+') && '+'}
                              <span
                                className={`text-base font-normal ${
                                  dictionary.language === 'fa' ? 'mr-1' : 'ml-1'
                                }`}>
                                {getDisplayText(value)}
                              </span>
                            </span>
                          )}
                        </CountUp>
                      )
                    : value}
                </div>
              </div>
            ))}
          </div>

          {sourceLinks[id]?.length > 0 && (
            <div className='mt-6 pt-4 border-t'>
              <p className='text-sm text-muted-foreground mb-2'>
                {dictionary.impact.sources || 'Sources:'}
              </p>
              <div className='flex flex-wrap gap-2'>
                {sourceLinks[id].map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1 text-sm text-primary hover:underline'>
                    {source.label}
                    <ExternalLink className='w-3 h-3' />
                  </a>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
