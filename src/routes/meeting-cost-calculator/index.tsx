import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/meeting-cost-calculator/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/meeting-cost-calculator/"!</div>
}
