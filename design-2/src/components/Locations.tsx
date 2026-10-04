import { useLang } from '../context/LangContext'
import { LOCATIONS, mapEmbedSrc, mapLink } from '../data/locations'

export default function Locations() {
  const { lang, t } = useLang()
  return (
    <section id="loc" className="locations">
      <div className="locations__list">
        <h2>{t.loc_title}</h2>
        {LOCATIONS.map((l) => (
          <a key={l.id} href={mapLink(l)} className="loc" target="_blank" rel="noreferrer">
            <div className="loc__info">
              <span className="loc__title">
                {l.city[lang]}<span className="loc__name"> · {l.name[lang]}</span>
              </span>
              <span className="loc__address">{l.address[lang]}</span>
              <div className="loc__hours">
                {l.hours.map((h) => <span key={h.time}>{h.days[lang]} {h.time}</span>)}
              </div>
            </div>
            <span className="loc__arrow">→</span>
          </a>
        ))}
      </div>
      <iframe
        className="locations__map"
        src={mapEmbedSrc(LOCATIONS[0], lang)}
        loading="lazy"
        title={LOCATIONS[0].name[lang]}
      />
    </section>
  )
}
