import { useCart } from '../context/CartContext'
import { useLang } from '../context/LangContext'
import { DRINKS, PIZZAS, WOLT_URL } from '../data/menu'
import PizzaCard from './PizzaCard'

export default function Menu() {
  const { lang, t, price } = useLang()
  const cart = useCart()

  return (
    <section id="menu" className="menu">
      <div className="menu__head">
        <h2>{t.menu_title}</h2>
        <a href={WOLT_URL} className="menu__wolt" target="_blank" rel="noreferrer">{t.wolt} →</a>
      </div>
      <div className="menu__grid">
        {PIZZAS.map((p) => <PizzaCard key={p.id} item={p} />)}
      </div>
      <div className="drinks">
        <h3>{t.drinks}</h3>
        <div className="drinks__list">
          {DRINKS.map((d) => (
            <div key={d.id} className="drink">
              <span className="drink__name">
                {d.name[lang]} <span className="drink__size">{d.size}</span>
              </span>
              <span className="drink__price">{price(d.price)}</span>
              <button className="drink__add" onClick={() => cart.add(d.id)} aria-label={`${t.add} ${d.name[lang]}`}>+</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
