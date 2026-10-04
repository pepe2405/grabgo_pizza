import { useLang } from '../context/LangContext'
import { REVIEWS } from '../data/locations'
import { INSTAGRAM_URL } from '../data/menu'
import ImageSlot from './ImageSlot'

export default function Reviews() {
  const { t } = useLang()
  return (
    <section className="reviews">
      <h2>{t.rev_title}</h2>
      <div className="reviews__grid">
        {REVIEWS.map((r) => (
          <figure key={r.who} className="review">
            <span className="review__stars">★★★★★</span>
            <blockquote>{r.q}</blockquote>
            <figcaption>{r.who}</figcaption>
          </figure>
        ))}
        <a href={INSTAGRAM_URL} className="reviews__ig" target="_blank" rel="noreferrer">
          <ImageSlot label="Reel @grabgopizza" />
        </a>
      </div>
    </section>
  )
}
