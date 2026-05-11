import type { ComponentType } from 'react'

import { ArrowRightIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

import { cn } from '@/lib/utils'

type FeatureItem = {
  icon: ComponentType
  title: string
  description: string
  cardBorderColor: string
  avatarTextColor: string
  avatarBgColor: string
  href?: string
}

type FeaturesProps = {
  featuresList: FeatureItem[]
}

const Features = ({ featuresList }: FeaturesProps) => {
  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {featuresList.map((features, index) => {
        const content = (
          <Card key={index} className={cn('group h-full shadow-none transition-colors duration-300', features.cardBorderColor)}>
            <CardContent>
              <Avatar className='mb-6 size-10 rounded-md'>
                <AvatarFallback
                  className={cn('rounded-md [&>svg]:size-6', features.avatarBgColor, features.avatarTextColor)}
                >
                  <features.icon />
                </AvatarFallback>
              </Avatar>
              <h6 className='mb-2 text-lg font-semibold'>{features.title}</h6>
              <p className='text-foreground/60'>{features.description}</p>
              {features.href && (
                <span className='mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground'>
                  Informazioni
                  <ArrowRightIcon className='size-3.5' />
                </span>
              )}
            </CardContent>
          </Card>
        )

        if (features.href) {
          return (
            <a key={index} href={features.href} className='block h-full'>
              {content}
            </a>
          )
        }

        return content
      })}
    </div>
  )
}

export default Features
