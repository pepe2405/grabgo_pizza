import { useCart } from '../context/CartContext'
import { useLang } from '../context/LangContext'

export default function MobileCartBar() {
  const cart = useCart()
  const { t, price } = useLang()
  if (cart.count === 0 || cart.open) return null
  return (
    <button className="cart-bar" onClick={() => cart.setOpen(true)}>
      <span>{t.view_cart} · {cart.count}</span>
      <span>{price(cart.total)}</span>
    </button>
  )
}
