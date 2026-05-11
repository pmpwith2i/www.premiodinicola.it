'use client'

import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import Logo from '@/components/shadcn-studio/logo'

type NavigationItem = {
  title: string
  href: string
}[]

const Navbar = ({ navigationData }: { navigationData: NavigationItem }) => {
  return (
    <header className='bg-background sticky top-0 z-50 border-b border-border'>
      <div className='mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-5'>
        <a href='/'>
          <Logo className='gap-3' />
        </a>

        <nav className='text-foreground/70 flex items-center gap-8 text-sm font-medium uppercase tracking-widest max-md:hidden'>
          {navigationData.map((item, index) => (
            <a key={index} href={item.href} className='transition-colors hover:text-foreground'>
              {item.title}
            </a>
          ))}
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger className='md:hidden' asChild>
            <Button variant='outline' size='icon'>
              <MenuIcon />
              <span className='sr-only'>Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuGroup>
              {navigationData.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <a href={item.href}>{item.title}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Navbar
