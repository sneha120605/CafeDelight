import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

type MenuItem = {
  id: string
  name: string
  category: 'Coffee' | 'Tea' | 'Snacks' | 'Desserts'
  price: number
  image: string
  rating: number
}

const MENU: MenuItem[] = [
  { id: 'c1', name: 'Espresso', category: 'Coffee', price: 120, image: 'https://picsum.photos/seed/espresso/400/300', rating: 4.5 },
  { id: 'c2', name: 'Cappuccino', category: 'Coffee', price: 180, image: 'https://picsum.photos/seed/cappuccino/400/300', rating: 4.7 },
  { id: 't1', name: 'Masala Chai', category: 'Tea', price: 100, image: 'https://picsum.photos/seed/chai/400/300', rating: 4.6 },
  { id: 's1', name: 'Veg Sandwich', category: 'Snacks', price: 150, image: 'https://picsum.photos/seed/sandwich/400/300', rating: 4.3 },
  { id: 'd1', name: 'Chocolate Brownie', category: 'Desserts', price: 130, image: 'https://picsum.photos/seed/brownie/400/300', rating: 4.8 },
]

const categories = ['All', 'Coffee', 'Tea', 'Snacks', 'Desserts'] as const

export function MenuPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<(typeof categories)[number]>('All')
  const [price, setPrice] = useState(300)

  const results = useMemo(() => {
    return MENU.filter(item =>
      (category === 'All' || item.category === category) &&
      item.price <= price &&
      item.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [query, category, price])

  return (
    <div className="container-px mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-4 md:items-end md:justify-between">
        <h2 className="text-2xl font-display">Our Menu</h2>
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search" className="w-full md:w-64 border border-coffee-200 rounded-md px-3 py-2 bg-white" />
          <select value={category} onChange={e=>setCategory(e.target.value as any)} className="border border-coffee-200 rounded-md px-3 py-2 bg-white">
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <div className="flex items-center gap-2">
            <span className="text-sm text-coffee-700">Up to ₹{price}</span>
            <input type="range" min={50} max={400} value={price} onChange={e=>setPrice(parseInt(e.target.value))} />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {results.map(item => (
          <motion.div key={item.id} whileHover={{ y: -4 }} className="bg-white rounded-xl overflow-hidden shadow border border-coffee-100">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{item.name}</h3>
                <span className="text-coffee-700">₹{item.price}</span>
              </div>
              <div className="text-sm text-yellow-600">{'★'.repeat(Math.round(item.rating))} <span className="text-coffee-600">({item.rating.toFixed(1)})</span></div>
              <button className="btn-primary w-full">Add to Cart</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


