import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/credit-simulator/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/credit-simulator/"!</div>
}
