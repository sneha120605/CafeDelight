const steps = ['Pending', 'Preparing', 'Ready', 'Served']

export function OrderStatusPage() {
  const current = 1
  return (
    <div className="container-px mx-auto py-8">
      <h2 className="text-2xl font-display mb-6">Order Status</h2>
      <ol className="flex items-center justify-between gap-4">
        {steps.map((label, idx) => (
          <li key={label} className="flex-1">
            <div className={`flex items-center ${idx < steps.length - 1 ? 'after:content-[\'\'] after:flex-1 after:h-0.5 after:bg-coffee-200 after:ml-4' : ''}`}>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${idx <= current ? 'bg-coffee-600 text-white' : 'bg-coffee-100 text-coffee-600'}`}>{idx+1}</span>
              <span className="ml-2 text-sm text-coffee-700">{label}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}




