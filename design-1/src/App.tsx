import { RouterProvider } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { LangProvider } from './context/LangContext'
import { router } from './router'

export default function App() {
  return (
    <LangProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </LangProvider>
  )
}
