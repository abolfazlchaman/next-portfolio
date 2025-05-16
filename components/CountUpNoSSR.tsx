'use client';

import dynamic from 'next/dynamic';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

export default CountUp;
