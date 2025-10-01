import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export function HomePage() {
  return (
    <div className="container-px mx-auto">
      <section className="grid md:grid-cols-2 gap-8 items-center py-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-display text-coffee-900">Warm cups. Cozy vibes.</h1>
          <p className="text-coffee-700 max-w-prose">Welcome to Café Delight — your neighborhood spot for artisanal coffee, handcrafted teas, and freshly baked treats.</p>
          <NavLink to="/menu" className="btn-primary inline-block">View Menu</NavLink>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="aspect-video rounded-xl bg-gradient-to-br from-coffee-200 to-coffee-400 shadow-inner"
        />
      </section>
    </div>
  )
}


