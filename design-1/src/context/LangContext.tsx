import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { STRINGS, type Lang, type Strings } from '../data/i18n'
import { formatPrice } from '../data/menu'

interface LangValue {
  lang: Lang
  t: Strings
  setLang: (l: Lang) => void
  price: (cents: number) => string
}

const LangContext = createContext<LangValue | null>(null)

const readInitial = (): Lang => {
  try {
    const saved = localStorage.getItem('gg-lang')
    if (saved === 'bg' || saved === 'en') return saved
  } catch {
    /* storage unavailable */
  }
  return 'bg'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitial)

  const value = useMemo<LangValue>(
    () => ({
      lang,
      t: STRINGS[lang],
      setLang: (l) => {
        setLangState(l)
        try {
          localStorage.setItem('gg-lang', l)
        } catch {
          /* ignore */
        }
      },
      price: (cents) => formatPrice(cents, lang),
    }),
    [lang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
