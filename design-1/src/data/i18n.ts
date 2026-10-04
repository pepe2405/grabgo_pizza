export type Lang = 'bg' | 'en'

export interface Strings {
  nav_menu: string
  nav_about: string
  nav_loc: string
  cart: string
  wolt: string
  late: string
  h1a: string
  sub: string
  see_menu: string
  from: string
  menu_title: string
  menu_note: string
  drinks: string
  add: string
  popular: string
  add_cart: string
  or_wolt: string
  pair: string
  back: string
  about_title: string
  about_1: string
  about_2: string
  rev_title: string
  loc_title: string
  directions: string
  cart_empty: string
  total: string
  checkout: string
  view_cart: string
  not_found: string
}

export const STRINGS: Record<Lang, Strings> = {
  bg: {
    nav_menu: 'Меню', nav_about: 'За нас', nav_loc: 'Обекти',
    cart: 'Количка', wolt: 'Поръчай в Wolt', late: 'Витошка · до 05:30',
    h1a: 'Едно голямо парче,',
    sub: 'Любимата на всички италианска пица на парче!',
    see_menu: 'Виж менюто', from: 'парче от',
    menu_title: 'Пица Грамадан', menu_note: 'Всяко парче е 2,88 €. Избери любимото си.',
    drinks: 'Напитки', add: 'Добави', popular: 'Популярна',
    add_cart: 'Добави в количката', or_wolt: 'или поръчай с доставка през Wolt',
    pair: 'Върви добре с', back: 'Меню',
    about_title: 'За нас',
    about_1: 'Grab & Go Pizza Station е мястото за голямо парче италианска пица, когато си в движение: между лекции, след работа или късно вечер на Витошка.',
    about_2: 'Работим с доматен сос Mutti, моцарела и кашкавал, а всяко парче излиза топло от фурната. Влез, грабни и продължи деня си.',
    rev_title: 'Какво казват гостите',
    loc_title: 'Обекти', directions: 'Упътване',
    cart_empty: 'Количката е празна. Започни с едно парче.', total: 'Общо', checkout: 'Към поръчка',
    view_cart: 'Виж количката',
    not_found: 'Страницата не е намерена.',
  },
  en: {
    nav_menu: 'Menu', nav_about: 'About', nav_loc: 'Locations',
    cart: 'Cart', wolt: 'Order on Wolt', late: 'Vitosha · till 5:30 AM',
    h1a: 'One big slice,',
    sub: 'Everyone’s favourite Italian pizza by the slice!',
    see_menu: 'See the menu', from: 'slice from',
    menu_title: 'Gramadan pizza', menu_note: 'Every slice is €2.88. Pick your favourite.',
    drinks: 'Drinks', add: 'Add', popular: 'Popular',
    add_cart: 'Add to cart', or_wolt: 'or get it delivered via Wolt',
    pair: 'Goes well with', back: 'Menu',
    about_title: 'About us',
    about_1: 'Grab & Go Pizza Station is the place for a big slice of Italian pizza on the move: between lectures, after work or late at night on Vitosha.',
    about_2: 'We use Mutti tomato sauce, mozzarella and kashkaval, and every slice comes out of the oven warm. Walk in, grab one and carry on with your day.',
    rev_title: 'What guests say',
    loc_title: 'Locations', directions: 'Directions',
    cart_empty: 'Your cart is empty. Start with a slice.', total: 'Total', checkout: 'Checkout',
    view_cart: 'View cart',
    not_found: 'Page not found.',
  },
}
