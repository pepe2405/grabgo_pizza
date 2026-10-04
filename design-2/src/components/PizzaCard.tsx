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
    <article className="pizza" onClick={() => navigate(`/pizza/${item.id}`)}>
      <div className="pizza__photo">
        <ImageSlot label={item.name[lang]} />
        {item.popular && <span className="pizza__badge">★ {t.popular}</span>}
      </div>
      <div className="pizza__title">
        <h3>{item.name[lang]}</h3>
        <span className="pizza__price">{price(item.price)}</span>
      </div>
      <p className="pizza__desc">{ing}</p>
      {/* mobile layout: price lives inside the add button */}
      <div className="pizza__actions" onClick={(e) => e.stopPropagation()}>
        {q === 0 ? (
          <button className="btn btn--dark pizza__add" onClick={() => cart.add(item.id)}>
            <span className="pizza__btn-add">{t.add}</span>
            <span className="pizza__btn-price">{price(item.price)}</span> +
          </button>
        ) : (
          <Stepper value={q} onDec={() => cart.remove(item.id)} onInc={() => cart.add(item.id)} />
        )}
      </div>
    </article>
  )
}
