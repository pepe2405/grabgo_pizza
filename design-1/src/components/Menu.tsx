import { useCart } from '../context/CartContext'
import { useLang } from '../context/LangContext'
import { DRINKS, PIZZAS } from '../data/menu'
import PizzaCard from './PizzaCard'

export default function Menu() {
  const { lang, t, price } = useLang()
  const cart = useCart()

  return (
    <section id="menu" className="menu">
      <div className="menu__head">
        <h2>{t.menu_title}</h2>
        <span className="menu__note">{t.menu_note}</span>
      </div>
      <div className="menu__grid">
        {PIZZAS.map((p) => <PizzaCard key={p.id} item={p} />)}
      </div>
      <h3 className="menu__drinks-title">{t.drinks}</h3>
      <div className="menu__drinks">
        {DRINKS.map((d) => (
          <button key={d.id} className="drink" onClick={() => cart.add(d.id)}>
            {d.name[lang]}
            <span className="drink__price">{price(d.price)}</span>
            <span className="drink__plus">+</span>
          </button>
        ))}
      </div>
    </section>
  )
}
