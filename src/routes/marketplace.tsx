import MarketPlace from '@/components/pages/MarketPlace'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/marketplace')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><MarketPlace /></div>
}
