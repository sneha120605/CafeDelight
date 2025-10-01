import { NavLink, Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="min-h-full flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-coffee-100">
        <div className="container-px mx-auto flex items-center justify-between py-3">
          <NavLink to="/" className="text-2xl font-display text-coffee-800">
            Café Delight
          </NavLink>
          <nav className="flex items-center gap-4 text-coffee-700">
            <NavLink to="/" className={({isActive}) => isActive ? 'font-semibold' : ''}>Home</NavLink>
            <NavLink to="/menu" className={({isActive}) => isActive ? 'font-semibold' : ''}>Menu</NavLink>
            <NavLink to="/cart" className={({isActive}) => isActive ? 'font-semibold' : ''}>Cart</NavLink>
            <NavLink to="/checkout" className={({isActive}) => isActive ? 'font-semibold' : ''}>Checkout</NavLink>
            <NavLink to="/status" className={({isActive}) => isActive ? 'font-semibold' : ''}>Reviews</NavLink>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-coffee-100 bg-white">
        <div className="container-px mx-auto py-6 text-sm text-coffee-600">
          © {new Date().getFullYear()} Café Delight. All rights reserved.
        </div>
      </footer>
    </div>
  )
}


