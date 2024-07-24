import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

function RootLayout() {
  return (
    <>
      <header className="flex gap-4 border-b border-slate-300 p-4">
        <Link to="/">index</Link>
        <Link to="/about">about</Link>
      </header>

      <div className="mt-4">
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout
