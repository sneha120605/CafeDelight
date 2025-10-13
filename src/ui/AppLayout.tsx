import { NavLink, Outlet } from 'react-router-dom'
import { useUser } from '../stores/user'

export function AppLayout() {
  const name = useUser(s => s.name)
  return (
    <div className="min-h-full flex flex-col">
      <header className="sticky top-0 z-50 bg-rosevale/90 backdrop-blur border-b border-mango">
        <div className="container-px mx-auto flex items-center justify-between py-3">
          <NavLink to="/home" className="text-2xl font-display text-white">
            Café Delight
          </NavLink>
          <nav className="flex items-center gap-4 text-white">
            <NavLink to="/home" className={({isActive}) => isActive ? 'font-semibold underline' : ''}>Home</NavLink>
            <NavLink to="/menu" className={({isActive}) => isActive ? 'font-semibold underline' : ''}>Menu</NavLink>
            <NavLink to="/cart" className={({isActive}) => isActive ? 'font-semibold underline' : ''}>Cart</NavLink>
            <NavLink to="/checkout" className={({isActive}) => isActive ? 'font-semibold underline' : ''}>Checkout</NavLink>
            <NavLink to="/status" className={({isActive}) => isActive ? 'font-semibold underline' : ''}>Reviews</NavLink>
            {name && <span className="ml-2 text-sm opacity-90">Hi, {name}!</span>}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="mt-8 bg-cornsilk text-charcoal">
        <div className="container-px mx-auto py-8 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-semibold mb-2">Café Delight</div>
            <div>We bring warmth in every sip and bite.</div>
          </div>
          <div>
            <div className="font-semibold mb-2">Contact</div>
            <div>+91 98765 43210</div>
            <div>hello@cafedelight.com</div>
            <div>123 Brew Street, Mumbai</div>
          </div>
          <div>
            <div className="font-semibold mb-2">Quick Links</div>
            <div className="space-y-1">
              <NavLink to="/menu" className="underline">Menu</NavLink>
              <div><a className="underline" href="#">About</a></div>
              <div><a className="underline" href="#">Contact</a></div>
              <div><a className="underline" href="#">Admin Login</a></div>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Follow</div>
            <div className="flex gap-3 text-rosevale">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-rosevale/20">
          <div className="container-px mx-auto py-4 text-xs text-warmbrown">© {new Date().getFullYear()} Café Delight</div>
        </div>
      </footer>
    </div>
  )
}


