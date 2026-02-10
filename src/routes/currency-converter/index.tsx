import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/currency-converter/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/currency-converter/"!</div>
}
