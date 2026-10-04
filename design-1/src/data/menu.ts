import type { Lang } from './i18n'

export type Localized = Record<Lang, string>

export interface MenuItem {
  id: string
  cat: 'pizza' | 'drink'
  /** price in euro cents */
  price: number
  popular?: boolean
  name: Localized
  size?: string
  ingredients?: Record<Lang, string[]>
}

export const WOLT_URL = 'https://wolt.com/bg/bgr/blagoevgrad/brand/grab-go'
export const INSTAGRAM_URL = 'https://www.instagram.com/grabgopizza/'

export const MENU: MenuItem[] = [
  {
    id: 'chicken', cat: 'pizza', price: 288,
    name: { bg: 'Грамадан с пиле', en: 'Gramadan Chicken' },
    ingredients: {
      bg: ['доматен сос Mutti', 'пилешка шунка', 'чушка', 'царевица', 'моцарела', 'кашкавал'],
      en: ['Mutti tomato sauce', 'chicken ham', 'pepper', 'corn', 'mozzarella', 'kashkaval'],
    },
  },
  {
    id: 'ham', cat: 'pizza', price: 288, popular: true,
    name: { bg: 'Грамадан с шунка', en: 'Gramadan Ham' },
    ingredients: {
      bg: ['доматен сос Mutti', 'пражка шунка', 'гъби', 'моцарела', 'кашкавал'],
      en: ['Mutti tomato sauce', 'Prague ham', 'mushrooms', 'mozzarella', 'kashkaval'],
    },
  },
  {
    id: 'bacon', cat: 'pizza', price: 288, popular: true,
    name: { bg: 'Грамадан с бекон', en: 'Gramadan Bacon' },
    ingredients: {
      bg: ['доматен сос Mutti', 'пушен бекон', 'моцарела', 'кашкавал'],
      en: ['Mutti tomato sauce', 'smoked bacon', 'mozzarella', 'kashkaval'],
    },
  },
  { id: 'ayranL', cat: 'drink', price: 160, size: '500 ml', name: { bg: 'Айрян голям', en: 'Ayran, large' } },
  { id: 'ayranS', cat: 'drink', price: 135, size: '330 ml', name: { bg: 'Айрян малък', en: 'Ayran, small' } },
  { id: 'coke', cat: 'drink', price: 185, size: '500 ml', name: { bg: 'Coca-Cola', en: 'Coca-Cola' } },
  { id: 'cokeZ', cat: 'drink', price: 185, size: '500 ml', name: { bg: 'Coca-Cola Без Захар', en: 'Coca-Cola Zero Sugar' } },
  { id: 'sprite', cat: 'drink', price: 185, size: '500 ml', name: { bg: 'Sprite', en: 'Sprite' } },
  { id: 'fuzeL', cat: 'drink', price: 185, size: '500 ml', name: { bg: 'Fuzetea Лимон и лимонена трева', en: 'Fuzetea Lemon & Lemongrass' } },
  { id: 'fuzeP', cat: 'drink', price: 185, size: '500 ml', name: { bg: 'Fuzetea Праскова и хибискус', en: 'Fuzetea Peach & Hibiscus' } },
  { id: 'hell', cat: 'drink', price: 135, size: '250 ml', name: { bg: 'Енергийна напитка Hell', en: 'Hell Energy Drink' } },
]

export const PIZZAS = MENU.filter((i) => i.cat === 'pizza')
export const DRINKS = MENU.filter((i) => i.cat === 'drink')
export const UPSELL = DRINKS.slice(0, 3)

export const findItem = (id: string) => MENU.find((i) => i.id === id)

export const formatPrice = (cents: number, lang: Lang) =>
  lang === 'en' ? `€${(cents / 100).toFixed(2)}` : `${(cents / 100).toFixed(2).replace('.', ',')} €`
