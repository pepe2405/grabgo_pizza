import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useLang } from '../context/LangContext'
import { UPSELL, WOLT_URL, type MenuItem } from '../data/menu'
import ImageSlot from './ImageSlot'

interface Props {
  item: MenuItem
  onAdded: () => void
}

/** Body shared by the desktop modal and the mobile product page. */
export default function ProductDetail({ item, onAdded }: Props) {
  const { lang, t, price } = useLang()
  const cart = useCart()
  const [qty, setQty] = useState(1)

  return (
    <div className="detail">
      <div className="detail__photo">
        <ImageSlot label={item.name[lang]} />
        <span className="detail__price detail__price--mobile">{price(item.price)}</span>
      </div>
      <div className="detail__info">
        <h2 className="detail__name">{item.name[lang]}</h2>
        <span className="detail__price detail__price--desktop">{price(item.price)}</span>
        <div className="chips">
          {item.ingredients?.[lang].map((x) => <span key={x} className="chip">{x}</span>)}
        </div>
        <span className="detail__pair">{t.pair}</span>
        <div className="chips">
          {UPSELL.map((u) => (
            <button key={u.id} className="chip chip--btn" onClick={() => cart.add(u.id)}>
              + {u.name[lang]} <span className="chip__price">{price(u.price)}</span>
            </button>
          ))}
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
