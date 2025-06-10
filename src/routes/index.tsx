import { createFileRoute } from '@tanstack/react-router'
import DigitalAgronomist from '@/components/pages/LandingPage'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      < DigitalAgronomist />
    </div>
  )
}
