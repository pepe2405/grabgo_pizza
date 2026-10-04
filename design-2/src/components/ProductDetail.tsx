import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useLang } from '../context/LangContext'
import { UPSELL, WOLT_URL, type MenuItem } from '../data/menu'
import ImageSlot from './ImageSlot'

interface Props {
  item: MenuItem
  onAdded: () => void
  /** mobile page shows a back chip over the photo */
  showBack?: boolean
}

/** Body shared by the desktop modal and the mobile product page. */
export default function ProductDetail({ item, onAdded, showBack }: Props) {
  const { lang, t, price } = useLang()
  const cart = useCart()
  const [qty, setQty] = useState(1)

  return (
    <div className="detail">
      <div className="detail__photo">
        <ImageSlot label={item.name[lang]} />
        {showBack && <Link to="/" className="detail__back">‹ {t.back}</Link>}
      </div>
      <div className="detail__info">
        <div className="detail__top">
          <h2>{item.name[lang]}</h2>
          <span className="detail__price">{price(item.price)}</span>
        </div>
        <div className="detail__block">
          <span className="detail__label">{t.ingredients}</span>
          <div className="chips">
            {item.ingredients?.[lang].map((x) => <span key={x} className="chip">{x}</span>)}
          </div>
        </div>
        <div className="detail__block">
          <span className="detail__label">{t.pair}</span>
          <div className="upsell">
            {UPSELL.map((u) => (
              <button key={u.id} className="upsell__row" onClick={() => cart.add(u.id)}>
                <span>+ {u.name[lang]}</span>
                <span>{price(u.price)}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="detail__buy">
          <div className="qty">
            <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="−">−</button>
            <span>{qty}</span>
            <button onClick={() => setQty((q) => q + 1)} aria-label="+">+</button>
          </div>
          <button
            className="btn btn--dark detail__add"
            onClick={() => {
              cart.add(item.id, qty)
              onAdded()
            }}
          >
            {t.add_cart} · {price(item.price * qty)}
          </button>
        </div>
        <a className="detail__wolt" href={WOLT_URL} target="_blank" rel="noreferrer">{t.or_wolt}</a>
      </div>
    </div>
  )
}
