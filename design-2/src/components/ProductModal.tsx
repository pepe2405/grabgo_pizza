import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { MenuItem } from '../data/menu'
import ProductDetail from './ProductDetail'

export default function ProductModal({ item }: { item: MenuItem }) {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && navigate('/')
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  const close = () => navigate('/')

  return (
    <>
      <div className="overlay" onClick={close} />
      <div className="modal" role="dialog">
        <button className="round-btn modal__close" onClick={close} aria-label="Close">✕</button>
        <ProductDetail item={item} onAdded={close} />
      </div>
    </>
  )
}
