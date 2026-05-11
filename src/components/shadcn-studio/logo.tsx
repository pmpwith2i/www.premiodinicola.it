import { Award } from 'lucide-react'

import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <Award className='size-6' />
      <span className='font-heading text-xl font-bold tracking-tight'>Premio Di Nicola</span>
    </div>
  )
}

export default Logo
