import { useLang } from '../context/LangContext'
import { LOCATIONS, mapEmbedSrc, mapLink } from '../data/locations'

export default function Locations() {
  const { lang, t } = useLang()
  return (
    <section id="loc" className="locations">
      <h2>{t.loc_title}</h2>
      <div className="locations__grid">
        {LOCATIONS.map((l) => (
          <article key={l.id} className="location">
            <div className="location__head">
              <span className="location__city">{l.city[lang]}</span>
              <span className="location__name">{l.name[lang]}</span>
            </div>
            <iframe className="location__map" src={mapEmbedSrc(l, lang)} loading="lazy" title={l.name[lang]} />
            <div className="location__body">
              <span className="location__address">{l.address[lang]}</span>
              {l.hours.map((h) => (
                <div key={h.time} className="location__hours">
                  <span>{h.days[lang]}</span>
                  <b>{h.time}</b>
                </div>
              ))}
              <div className="location__actions">
                <a className="btn btn--dark btn--sm" href={mapLink(l)} target="_blank" rel="noreferrer">{t.directions}</a>
                {l.phone && <a className="btn btn--outline btn--sm" href={`tel:${l.phone}`}>{l.phoneLabel}</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
