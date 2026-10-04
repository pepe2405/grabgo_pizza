import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useLang } from '../context/LangContext'
import type { MenuItem } from '../data/menu'
import ImageSlot from './ImageSlot'
import Stepper from './Stepper'

export default function PizzaCard({ item }: { item: MenuItem }) {
  const { lang, t, price } = useLang()
  const cart = useCart()
  const navigate = useNavigate()
  const q = cart.qty(item.id)
  const ing = item.ingredients?.[lang].join(', ') ?? ''

  return (
    <article className="pizza-card" onClick={() => navigate(`/pizza/${item.id}`)}>
      <div className="pizza-card__photo">
        <ImageSlot label={item.name[lang]} />
        {item.popular && <span className="pizza-card__badge">{t.popular}!</span>}
      </div>
      <div className="pizza-card__body">
        <h3 className="pizza-card__name">{item.name[lang]}</h3>
        <p className="pizza-card__desc">{ing}</p>
        <div className="pizza-card__row" onClick={(e) => e.stopPropagation()}>
          <span className="pizza-card__price">{price(item.price)}</span>
          {q === 0 ? (
            <button className="btn btn--dark btn--sm" onClick={() => cart.add(item.id)}>
              {t.add} +
            </button>
          ) : (
            <Stepper value={q} onDec={() => cart.remove(item.id)} onInc={() => cart.add(item.id)} />
          )}
        </div>
      </div>
    </article>
  )
}
