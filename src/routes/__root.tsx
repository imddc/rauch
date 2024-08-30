import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  return (
    <>
      <div className="p-2 flex gap-2 border-b border-gray-200 border-box">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>

      <div className="p-2">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  )
}
