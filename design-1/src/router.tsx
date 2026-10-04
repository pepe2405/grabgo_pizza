import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductPage from './pages/ProductPage'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/pizza/:id', element: <ProductPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
