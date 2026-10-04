import type { Lang } from './i18n'
import type { Localized } from './menu'

export interface Location {
  id: string
  city: Localized
  name: Localized
  address: Localized
  hours: { days: Localized; time: string }[]
  latLng: string
  phone?: string
  phoneLabel?: string
}

export const LOCATIONS: Location[] = [
  {
    id: 'sofia',
    city: { bg: 'София', en: 'Sofia' },
    name: { bg: 'Station Витошка', en: 'Station Vitosha' },
    address: { bg: 'ул. Иван Вл. Алабин 46, 1000 София', en: '46 Ivan Vl. Alabin St, 1000 Sofia' },
    hours: [
      { days: { bg: 'Пон – Пет', en: 'Mon – Fri' }, time: '10:30 – 05:30' },
      { days: { bg: 'Съб – Нед', en: 'Sat – Sun' }, time: '11:30 – 05:30' },
    ],
    latLng: '42.694885,23.320272',
  },
  {
    id: 'blg',
    city: { bg: 'Благоевград', en: 'Blagoevgrad' },
    name: { bg: 'Тодор Александров', en: 'Todor Aleksandrov' },
    address: { bg: 'ул. Тодор Александров 41, 2700 Благоевград', en: '41 Todor Aleksandrov St, 2700 Blagoevgrad' },
    hours: [{ days: { bg: 'Всеки ден', en: 'Every day' }, time: '10:30 – 21:30' }],
    latLng: '42.0183072,23.0977724',
    phone: '+359882880905',
    phoneLabel: '+359 882 880 905',
  },
]

export const mapEmbedSrc = (l: Location, lang: Lang) =>
  `https://maps.google.com/maps?q=${l.latLng}&z=16&output=embed&hl=${lang}`
export const mapLink = (l: Location) => `https://maps.google.com/?q=${l.latLng}`

export const REVIEWS = [
  { q: '“The dough is well leavened and good ingredients. Reasonable prices.”', who: 'Francesco · Italia' },
  { q: '“Nice portions.” A huge slice, and quite delicious.', who: 'tarimeando · España' },
]
