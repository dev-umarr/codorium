import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div className="grid min-h-screen place-items-center px-6 py-8">
      <div className="w-full max-w-md rounded-xl border border-brand-border bg-brand-surface p-6 shadow-sm">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
