import { Mail, ExternalLink } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

type Sponsor = {
  name: string
  url: string
}

type FooterProps = {
  sponsors: Sponsor[]
  contactEmail: string
  copyrightYear: number
}

const Footer = ({ sponsors, contactEmail, copyrightYear }: FooterProps) => {
  return (
    <footer className='mt-auto border-t border-border'>
      <div className='mx-auto max-w-6xl px-6 py-12'>
        <div className='mb-8'>
          <p className='mb-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground/40'>
            Partner e sostenitori
          </p>
          <div className='flex flex-wrap gap-x-8 gap-y-3'>
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1.5 text-sm text-foreground/60 transition-colors hover:text-foreground'
              >
                {sponsor.name}
                <ExternalLink className='size-3' />
              </a>
            ))}
          </div>
        </div>

        <Separator />

        <div className='mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row'>
          <a
            href={`mailto:${contactEmail}?subject=Premio%20Di%20Nicola%20Contact`}
            className='flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-foreground'
          >
            <Mail className='size-4' />
            {contactEmail}
          </a>
          <p className='text-xs text-foreground/40'>
            &copy; {copyrightYear} Vincenzo Di Nicola
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
