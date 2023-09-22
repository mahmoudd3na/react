import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import { data } from './store';
import ProductItem from '../components/ProductItem';
import Error from './pages/Error';



const getProducts = () => {
  const productRouter = data.map(product => {
    return {
      path: `/Products/${product.id}`,
      element: <ProductItem
        title={product.title}
        price={product.price}
        size={product.size}
        imageUrl={product.imageUrl} />
    }
  })
  return productRouter;
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />, 
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/Products',
        element: <Products />,
        children: getProducts()
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
