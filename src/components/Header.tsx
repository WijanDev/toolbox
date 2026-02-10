import { Link } from '@tanstack/react-router'
import { FaTools } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="px-4 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <FaTools className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">Toolbox</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              to="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Docs
            </Link>
            <Link
              to="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Components
            </Link>
            <Link
              to="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Themes
            </Link>
            <Link
              to="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Examples
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search component placeholder */}
          </div>
          <nav className="flex items-center">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/WijanDev" target="_blank" rel="noreferrer">
                <span className="sr-only">GitHub</span>
                {/* Icon can go here if we import it, or just use text for now */}
                Github
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

