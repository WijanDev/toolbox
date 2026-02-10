import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sql-converter/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sql-converter/"!</div>
}
