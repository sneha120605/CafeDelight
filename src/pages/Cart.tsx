import { useCart, selectCartArray, selectTotal } from '../stores/cart'

export function CartPage() {
  const itemsMap = useCart(s => s.items)
  const inc = useCart(s => s.increment)
  const dec = useCart(s => s.decrement)
  const remove = useCart(s => s.remove)
  const clear = useCart(s => s.clear)
  const items = selectCartArray(itemsMap)
  const total = selectTotal(itemsMap)

  return (
    <div className="container-px mx-auto py-8">
      <h2 className="text-2xl font-display mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <div className="text-coffee-700">Your cart is empty.</div>
      ) : (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-coffee-100 rounded-xl overflow-hidden">
              <thead className="bg-coffee-100/60">
                <tr>
                  <th className="px-4 py-3 text-left">Item</th>
                  <th className="px-4 py-3">Qty</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Subtotal</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {items.map(i => (
                  <tr key={i.id} className="border-t border-coffee-100">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img src={i.image} alt={i.name} className="w-12 h-12 rounded object-cover" />
                        <div>
                          <div className="font-medium">{i.name}</div>
                          <div className="text-sm text-coffee-600">{i.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="inline-flex items-center gap-2">
                        <button onClick={()=>dec(i.id)} className="px-2 py-1 rounded border">-</button>
                        <span>{i.quantity}</span>
                        <button onClick={()=>inc(i.id)} className="px-2 py-1 rounded border">+</button>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">₹{i.price}</td>
                    <td className="px-4 py-3 text-center">₹{i.price * i.quantity}</td>
                    <td className="px-4 py-3 text-right">
                      <button onClick={()=>remove(i.id)} className="text-coffee-700 underline">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between">
            <button onClick={clear} className="px-3 py-2 rounded border">Clear Cart</button>
            <div className="text-xl font-semibold">Total: ₹{total}</div>
          </div>
        </div>
      )}
    </div>
  )
}


