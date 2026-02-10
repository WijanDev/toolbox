import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/percentage-calculator/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/percentage-calculator/"!</div>
}
