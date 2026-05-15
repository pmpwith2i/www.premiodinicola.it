import type { ReactNode } from 'react'

import { MotionPreset } from '@/components/ui/motion-preset'

type HeroSectionProps = {
  title: string
  editionLabel: string
  venue: { name: string; mapsUrl: string }
  remoteNote?: string
  children?: ReactNode
}

const HeroSection = ({ title, editionLabel, venue, remoteNote, children }: HeroSectionProps) => {
  return (
    <section className='flex flex-1 flex-col overflow-hidden py-20 sm:py-28 lg:py-36'>
      <div className='mx-auto flex max-w-6xl flex-1 flex-col items-center justify-center gap-8 px-6'>
        <div className='flex flex-col items-center gap-6 text-center'>
          <MotionPreset
            component='h1'
            fade
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='font-heading text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl'
          >
            {title}
          </MotionPreset>

          <MotionPreset
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='flex flex-col items-center gap-2'
          >
            <p className='text-foreground/70 text-lg sm:text-xl lg:text-2xl'>
              {editionLabel}
            </p>
            <p className='text-foreground/50 text-base'>
              presso{' '}
              <a
                href={venue.mapsUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='underline underline-offset-4 transition-colors hover:text-foreground'
              >
                {venue.name}
              </a>
            </p>
            {remoteNote && (
              <p className='text-foreground/50 text-sm'>
                {remoteNote}
              </p>
            )}
          </MotionPreset>

          {children && (
            <MotionPreset
              fade
              slide={{ direction: 'down', offset: 50 }}
              delay={0.6}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {children}
            </MotionPreset>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
