import SeedlingPage from '@/components/dashboard/SeedlingPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/SeedlingPage')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><SeedlingPage /></div>
}
