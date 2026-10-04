import { Outlet, useMatch } from 'react-router-dom'
import { useIsDesktop } from '../hooks/useMediaQuery'
import CartDrawer from './CartDrawer'
import Footer from './Footer'
import Header from './Header'
import MobileCartBar from './MobileCartBar'
import PromoBar from './PromoBar'

export default function Layout() {
  const isDesktop = useIsDesktop()
  const onHome = useMatch('/') !== null
  const onProduct = useMatch('/pizza/:id') !== null
  // The mobile product page is a standalone screen: no site header/footer.
  const chrome = isDesktop || !onProduct
  // Home (and the desktop modal, which renders Home beneath it) has a full-bleed hero.
  const overlay = onHome || (onProduct && isDesktop)

  return (
    <div className={`app ${overlay ? 'app--hero' : ''}`}>
      {chrome && overlay && <PromoBar className="promo--top" />}
      {chrome && <Header overlay={overlay} />}
      <main>
        <Outlet />
      </main>
      {chrome && <Footer />}
      <CartDrawer />
      {!isDesktop && <MobileCartBar />}
    </div>
  )
}
