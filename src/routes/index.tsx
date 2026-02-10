import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FaGithub, FaRocket } from 'react-icons/fa'
import {
  Calculator,
  CreditCard,
  Database,
  DollarSign,
  Percent
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: LandingPage })

const tools = [
  {
    title: 'Meeting Cost',
    description: 'Calculate how much that meeting is actually costing your company.',
    icon: <Calculator className="h-8 w-8 text-blue-500" />,
    href: '/meeting-cost-calculator',
  },
  {
    title: 'Currency Converter',
    description: 'Real-time currency conversion rates for effective financial planning.',
    icon: <DollarSign className="h-8 w-8 text-green-500" />,
    href: '/currency-converter',
  },
  {
    title: 'SQL Converter',
    description: 'Convert natural language to SQL queries instantly with AI.',
    icon: <Database className="h-8 w-8 text-orange-500" />,
    href: '/sql-converter',
  },
  {
    title: 'Credit Simulator',
    description: 'Simulate credit scenarios and understand your repayment options.',
    icon: <CreditCard className="h-8 w-8 text-purple-500" />,
    href: '/credit-simulator',
  },
  {
    title: 'Percentage Calc',
    description: 'Quickly calculate percentages, increases, and decreases.',
    icon: <Percent className="h-8 w-8 text-red-500" />,
    href: '/percentage-calculator',
  },
]

function LandingPage() {
  return (
    <div className="flex justify-center flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center space-y-10 py-24 text-center md:py-32 lg:py-40 w-full">
        <div className="container flex flex-col items-center space-y-6 w-max">
          <div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
            Project Toolbox is now available
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            The Ultimate <span className="text-primary">Toolbox</span> for your daily tasks
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            A modern, performant, and accessible collection of tools built with
            latest technologies. Get things done faster.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link to={"/demo/start/server-funcs" as any}>Get Started <FaRocket className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/WijanDev/toolbox" target="_blank" rel="noopener noreferrer"><FaGithub className="h-4 w-4 mr-2" />GitHub</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Available Tools</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </section>
    </div>
  )
}

function ToolCard({
  icon,
  title,
  description,
  href,
}: Readonly<{
  icon: React.ReactNode
  title: string
  description: string
  href: string
}>) {
  return (
    <Link to={href as any} className="block group">
      <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
        <CardHeader>
          <div className="mb-4 p-3 rounded-full bg-slate-100 dark:bg-slate-800 w-fit group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
