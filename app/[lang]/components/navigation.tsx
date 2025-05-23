'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
// import { SiBloglovin } from "react-icons/si";
import { Menu, X } from 'lucide-react';
import { FaInfo, FaLightbulb, FaTools } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { ThemeToggler } from './theme-toggler';
import { LanguageSelector } from './language-selector';
import { getDictionary } from '@/get-dictionary';
import { NavLinksType } from '@/types/types';
import { Button } from '@/components/ui/button';
import { SiMainwp } from 'react-icons/si';

const getNavigationItems = (dict: NavLinksType) => [
  { label: dict.home, icon: SiMainwp, id: 'hero' },
  { label: dict.impact, icon: SiMainwp, id: 'impact' },
  { label: dict.about, icon: FaInfo, id: 'about' },
  { label: dict.skills, icon: FaGear, id: 'skills' },
  { label: dict.projects, icon: FaTools, id: 'projects' },
  { label: dict.endorsements, icon: SiMainwp, id: 'endorsements' },
  { label: dict.inspirations, icon: FaLightbulb, id: 'inspiration' },
  // { TODO label: dict.navigation.blog, icon: SiBloglovin, id: "blog" },
];

function ScrollLink({
  id,
  children,
  onClick,
}: {
  id: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href='#'
      onClick={handleClick}>
      {children}
    </Link>
  );
}

export function Navigation({
  dictionary,
  fullName,
  theme,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['navigation'];
  fullName: Awaited<ReturnType<typeof getDictionary>>['developerInfo']['fullName'];
  theme: Awaited<ReturnType<typeof getDictionary>>['theme'];
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigationItems = getNavigationItems(dictionary);

  return (
    <nav className='fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur'>
      <div className='container min-w-full flex h-16 items-center justify-between px-4 md:px-6'>
        <div className='relative z-50'>
          <h1 className={cn('font-semibold', isOpen && 'text-foreground')}>
            <ScrollLink
              id='hero'
              onClick={() => setIsOpen(false)}>
              <span className='font-light text-md md:font-bold md:text-lg tracking-tight text-shadow-accent text-foreground hover:text-muted-foreground transition-colors rounded-md'>
                {fullName}
              </span>
            </ScrollLink>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex lg:items-start justify-start lg:flex-1'>
          <div className='flex items-center space-x-6 px-6 rtl:border-r-2 rtl:mr-6 border-muted ltr:border-l-2 ltr:ml-6'>
            {navigationItems.map((item) => (
              <ScrollLink
                key={item.id}
                id={item.id}>
                <div className='flex items-center text-md font-light transition-colors text-foreground cursor-pointer hover:text-muted-foreground'>
                  {/* <item.icon className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" /> */}
                  {item.label}
                </div>
              </ScrollLink>
            ))}
          </div>
        </div>

        {/* Theme and Language Controls */}
        <div className='hidden lg:flex lg:items-center justify-center'>
          <div className='flex items-center gap-4 pl-6 rtl:pr-6 rtl:pl-0'>
            <ThemeToggler dictionary={theme} />
            <LanguageSelector />
          </div>
        </div>

        {/* Mobile Navigation Button */}
        <Button
          aria-label='Navigation Hamburger Menu'
          variant='ghost'
          className='relative z-50 block lg:hidden'
          onClick={() => setIsOpen(!isOpen)}>
          <Menu
            className={cn(
              'h-6 w-6 transition-all duration-200',
              isOpen ? 'opacity-0' : 'text-foreground opacity-100',
            )}
          />
          <X
            className={cn(
              'absolute right-[12px] top-[11px] h-6 w-6 transition-all duration-200',
              !isOpen ? 'opacity-0' : 'text-foreground opacity-100',
            )}
          />
        </Button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 h-screen w-full bg-background',
          isOpen ? 'block' : 'hidden',
        )}>
        <div className='container h-full px-4 pt-10'>
          <hr className='my-4' />
          <nav className='flex flex-col space-y-6'>
            {navigationItems.map((item) => (
              <ScrollLink
                key={item.id}
                id={item.id}
                onClick={() => setIsOpen(false)}>
                <div className='flex items-center text-lg font-medium text-foreground transition-colors hover:text-primary cursor-pointer'>
                  <item.icon className='mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0' />
                  {item.label}
                </div>
              </ScrollLink>
            ))}
            <div className='flex items-center gap-4 border-t pt-6'>
              <ThemeToggler dictionary={theme} />
              <LanguageSelector />
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}
