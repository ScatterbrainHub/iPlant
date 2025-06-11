import WelcomeBoard from '@/components/dashboard/WelcomeBoard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/welcomeboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><WelcomeBoard /></div>
}
