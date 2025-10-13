import { motion } from 'framer-motion'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useUser } from '../stores/user'

export function WelcomePage() {
  const [input, setInput] = useState('')
  const setName = useUser(s => s.setName)
  const navigate = useNavigate()
  const enter = () => {
    setName(input.trim())
    navigate('/home')
  }
  return (
    <div className="relative min-h-[calc(100vh-64px)] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-coffee-100 via-white to-coffee-200" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-coffee-300/30 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-coffee-400/20 blur-3xl" />
      <div className="container-px mx-auto py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-5xl font-display text-coffee-900">
            Welcome to Café Delight
          </motion.h1>
          <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.6}} className="text-lg text-coffee-700 max-w-prose">
            Step into a cozy world of specialty coffee, fragrant teas, and oven-fresh desserts. Settle in, relax, and let us brew your perfect moment.
          </motion.p>
          <div className="flex gap-3 items-center">
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Your name" className="border border-coffee-300 rounded-md px-3 py-2 bg-white" />
            <button onClick={enter} className="btn-primary">Enter Café</button>
          </div>
        </div>
        <motion.div initial={{scale:0.95,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.8}} className="relative">
          <img
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop"
            alt="Café ambiance"
            className="rounded-2xl shadow-2xl w-full object-cover max-h-[28rem]"
          />
          <motion.div
            className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur rounded-xl px-4 py-3 shadow"
            initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.4}}
          >
            <div className="text-sm text-coffee-700">Open today</div>
            <div className="font-semibold text-coffee-900">7:00 AM – 10:00 PM</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}


