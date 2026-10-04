export type Lang = 'bg' | 'en'

export interface Strings {
  nav_menu: string
  nav_about: string
  nav_loc: string
  cart: string
  wolt: string
  badge: string
  promo: string
  big: string
  big_sub: string
  see_menu: string
  from: string
  menu_title: string
  drinks: string
  add: string
  popular: string
  ingredients: string
  add_cart: string
  or_wolt: string
  pair: string
  back: string
  do_t: string
  dont_t: string
  do_l: string[]
  dont_l: string[]
  rev_title: string
  rev_src: string
  story: string
  about_title: string
  about_1: string
  about_2: string
  loc_title: string
  outro_a: string
  outro_b: string
  outro_btn: string
  cart_empty: string
  total: string
  checkout: string
  view_cart: string
  not_found: string
}

export const STRINGS: Record<Lang, Strings> = {
  bg: {
    nav_menu: 'Меню', nav_about: 'За нас', nav_loc: 'Обекти',
    cart: 'Количка', wolt: 'Поръчай в Wolt', badge: 'Пица на парче',
    promo: 'Витошка работи до 05:30 всяка нощ · Доставка през Wolt',
    big: 'По-голямо парче.', big_sub: 'Италианска пица на парче в София и Благоевград.',
    see_menu: 'Виж менюто', from: 'парче от',
    menu_title: 'Пица Грамадан', drinks: 'Напитки', add: 'Добави', popular: 'Популярна',
    ingredients: 'Съставки', add_cart: 'Добави в количката', or_wolt: 'или поръчай с доставка през Wolt',
    pair: 'Върви добре с', back: 'Меню',
    do_t: 'Какво правим', dont_t: 'Какво не правим',
    do_l: [
      'Пица на парче, топла през целия ден',
      'Доматен сос Mutti, моцарела и кашкавал',
      'На Витошка до 05:30 – и в делник, и в събота',
      'Доставка до вкъщи през Wolt',
    ],
    dont_l: ['Не пестим от плънката', 'Не те караме да чакаш дълго'],
    rev_title: 'Какво казват гостите', rev_src: 'Tripadvisor · Витошка',
    story: 'Нашата история', about_title: 'За нас',
    about_1: 'Grab & Go Pizza Station е мястото за голямо парче италианска пица, когато си в движение: между лекции, след работа или късно вечер на Витошка.',
    about_2: 'Работим с доматен сос Mutti, моцарела и кашкавал, а всяко парче излиза топло от фурната. Влез, грабни и продължи деня си.',
    loc_title: 'Обекти',
    outro_a: 'Парче в едната ръка,', outro_b: 'айрян в другата.', outro_btn: 'Намери обект',
    cart_empty: 'Количката е празна. Започни с едно парче.', total: 'Общо', checkout: 'Към поръчка',
    view_cart: 'Виж количката', not_found: 'Страницата не е намерена.',
  },
  en: {
    nav_menu: 'Menu', nav_about: 'About', nav_loc: 'Locations',
    cart: 'Cart', wolt: 'Order on Wolt', badge: 'Pizza by the slice',
    promo: 'Vitosha is open till 5:30 AM every night · Delivery via Wolt',
    big: 'A bigger slice.', big_sub: 'Italian pizza by the slice in Sofia and Blagoevgrad.',
    see_menu: 'See the menu', from: 'slice from',
    menu_title: 'Gramadan pizza', drinks: 'Drinks', add: 'Add', popular: 'Popular',
    ingredients: 'Ingredients', add_cart: 'Add to cart', or_wolt: 'or get it delivered via Wolt',
    pair: 'Goes well with', back: 'Menu',
    do_t: 'What we do', dont_t: 'What we don’t do',
    do_l: [
      'Pizza by the slice, warm all day',
      'Mutti tomato sauce, mozzarella and kashkaval',
      'Vitosha till 5:30 AM – weekdays and weekends',
      'Home delivery via Wolt',
    ],
    dont_l: ['We don’t skimp on toppings', 'We don’t make you wait long'],
    rev_title: 'What guests say', rev_src: 'Tripadvisor · Vitosha',
    story: 'Our story', about_title: 'About us',
    about_1: 'Grab & Go Pizza Station is the place for a big slice of Italian pizza on the move: between lectures, after work or late at night on Vitosha.',
    about_2: 'We use Mutti tomato sauce, mozzarella and kashkaval, and every slice comes out of the oven warm. Walk in, grab one and carry on with your day.',
    loc_title: 'Locations',
    outro_a: 'A slice in one hand,', outro_b: 'ayran in the other.', outro_btn: 'Find a location',
    cart_empty: 'Your cart is empty. Start with a slice.', total: 'Total', checkout: 'Checkout',
    view_cart: 'View cart', not_found: 'Page not found.',
  },
}
