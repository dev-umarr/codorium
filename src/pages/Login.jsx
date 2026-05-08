import { useState } from 'react'
import Button from '../components/Button'
import { useAuth } from '../hooks/useAuth'

function Login() {
  const [username, setUsername] = useState('')
  const { login } = useAuth()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!username.trim()) return
    login({ name: username.trim() })
  }

  return (
    <section className="space-y-4">
      <h1 className="m-0 text-5xl">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="mb-3 w-full rounded-lg border border-brand-border bg-white px-3 py-2.5 text-brand-primary outline-none ring-brand-secondary placeholder:text-slate-400 focus:ring-2"
        />
        <Button type="submit" label="Sign In" />
      </form>
    </section>
  )
}

export default Login
