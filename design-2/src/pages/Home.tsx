import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About from '../components/About'
import DoDont from '../components/DoDont'
import Hero from '../components/Hero'
import Locations from '../components/Locations'
import Menu from '../components/Menu'
import Outro from '../components/Outro'
import PromoBar from '../components/PromoBar'
import Reviews from '../components/Reviews'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return (
    <>
      <Hero />
      <PromoBar className="promo--after" />
      <Menu />
      <DoDont />
      <Reviews />
      <About />
      <Locations />
      <Outro />
    </>
  )
}
