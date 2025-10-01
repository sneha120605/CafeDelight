export function CheckoutPage() {
  return (
    <div className="container-px mx-auto py-8">
      <h2 className="text-2xl font-display mb-4">Checkout</h2>
      <form className="grid gap-4 max-w-xl">
        <input placeholder="Customer Name" className="border border-coffee-200 rounded-md px-3 py-2 bg-white" />
        <input placeholder="Phone Number" className="border border-coffee-200 rounded-md px-3 py-2 bg-white" />
        <textarea placeholder="Delivery Address" rows={3} className="border border-coffee-200 rounded-md px-3 py-2 bg-white" />
        <select className="border border-coffee-200 rounded-md px-3 py-2 bg-white">
          <option>Cash on Delivery</option>
          <option>Google Pay / UPI</option>
          <option>Card</option>
        </select>
        <button type="button" className="btn-primary">Place Order</button>
      </form>
    </div>
  )
}


