import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Home from './Home'
import ProductDetail from '../components/ProductDetail'
import ProductModal from '../components/ProductModal'
import { findItem } from '../data/menu'
import { useIsDesktop } from '../hooks/useMediaQuery'

/** Desktop: home page with the product modal on top. Mobile: full product page. */
export default function ProductPage() {
  const { id = '' } = useParams()
  const item = findItem(id)
  const isDesktop = useIsDesktop()
  const navigate = useNavigate()

  if (!item || item.cat !== 'pizza') return <Navigate to="/" replace />

  if (isDesktop) {
    return (
      <>
        <Home />
        <ProductModal item={item} />
      </>
    )
  }

  return (
    <div className="product-page">
      <ProductDetail item={item} onAdded={() => navigate('/')} showBack />
    </div>
  )
}
