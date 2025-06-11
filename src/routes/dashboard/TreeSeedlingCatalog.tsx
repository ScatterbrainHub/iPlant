import TreeSeedlingCatalog from '@/components/dashboard/TreeSeedlingCatalog'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/TreeSeedlingCatalog')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><TreeSeedlingCatalog /></div>
}
