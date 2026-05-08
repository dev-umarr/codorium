import { useSelector } from 'react-redux'
import Loader from '../components/Loader'

function Dashboard() {
  const user = useSelector((state) => state.auth.user)

  if (!user) {
    return <Loader text="No user in session. Go to Login page." />
  }

  return (
    <section className="space-y-4">
      <h1 className="text-5xl">Dashboard</h1>
      <p className="text-lg text-brand-primary">Welcome back, {user.name}.</p>
    </section>
  )
}

export default Dashboard
