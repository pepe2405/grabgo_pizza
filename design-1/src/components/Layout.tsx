import { Outlet, useMatch } from 'react-router-dom'
import { useIsDesktop } from '../hooks/useMediaQuery'
import CartDrawer from './CartDrawer'
import Footer from './Footer'
import Header from './Header'
import MobileCartBar from './MobileCartBar'

export default function Layout() {
  const isDesktop = useIsDesktop()
  const onProduct = useMatch('/pizza/:id') !== null
  // The mobile product page is a standalone screen: no site header/footer.
  const chrome = isDesktop || !onProduct

  return (
    <div className={`app ${onProduct && !isDesktop ? 'app--product' : ''}`}>
      {chrome && <Header />}
      <main>
        <Outlet />
      </main>
      {chrome && <Footer />}
      <CartDrawer />
      {!isDesktop && <MobileCartBar />}
    </div>
  )
}
