import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About from '../components/About'
import Hero from '../components/Hero'
import Locations from '../components/Locations'
import Menu from '../components/Menu'
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
      <Menu />
      <About />
      <Reviews />
      <Locations />
    </>
  )
}
