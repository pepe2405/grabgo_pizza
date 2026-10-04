import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { findItem } from '../data/menu'

type Counts = Record<string, number>

interface CartValue {
  counts: Counts
  count: number
  total: number
  open: boolean
  qty: (id: string) => number
  add: (id: string, by?: number) => void
  remove: (id: string) => void
  setOpen: (open: boolean) => void
}

const CartContext = createContext<CartValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [counts, setCounts] = useState<Counts>({})
  const [open, setOpen] = useState(false)

  const value = useMemo<CartValue>(() => {
    const ids = Object.keys(counts)
    return {
      counts,
      count: ids.reduce((a, id) => a + counts[id], 0),
      total: ids.reduce((a, id) => a + (findItem(id)?.price ?? 0) * counts[id], 0),
      open,
      qty: (id) => counts[id] ?? 0,
      add: (id, by = 1) =>
        setCounts((c) => ({ ...c, [id]: (c[id] ?? 0) + by })),
      remove: (id) =>
        setCounts((c) => {
          const next = { ...c, [id]: Math.max(0, (c[id] ?? 0) - 1) }
          if (next[id] === 0) delete next[id]
          return next
        }),
      setOpen,
    }
  }, [counts, open])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
