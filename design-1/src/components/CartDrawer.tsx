import { useCart } from '../context/CartContext'
import { useLang } from '../context/LangContext'
import { findItem } from '../data/menu'

export default function CartDrawer() {
  const cart = useCart()
  const { lang, t, price } = useLang()
  if (!cart.open) return null
  const lines = Object.entries(cart.counts).flatMap(([id, qty]) => {
    const item = findItem(id)
    return item ? [{ item, qty }] : []
  })

  return (
    <>
      <div className="overlay" onClick={() => cart.setOpen(false)} />
      <aside className="cart" role="dialog" aria-label={t.cart}>
        <div className="cart__head">
          <span>{t.cart}</span>
          <button className="btn-circle btn-circle--light" onClick={() => cart.setOpen(false)} aria-label="Close">✕</button>
        </div>
        <div className="cart__items">
          {lines.length === 0 && <p className="cart__empty">{t.cart_empty}</p>}
          {lines.map(({ item, qty }) => (
            <div key={item.id} className="cart__line">
              <span>{qty} × {item.name[lang]}</span>
              <span>{price(item.price * qty)}</span>
            </div>
          ))}
        </div>
        <div className="cart__foot">
          <div className="cart__total"><span>{t.total}</span><span>{price(cart.total)}</span></div>
          <button className="btn btn--dark" disabled={lines.length === 0}>{t.checkout}</button>
        </div>
      </aside>
    </>
  )
}
