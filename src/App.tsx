import { Route, Routes } from 'react-router-dom'
import './Global.css'

import Layout from './components/Layout'
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound'
import Collection from './pages/Collection/Collection'
import Product from './pages/Product/Product'
import Products from './pages/Products/Products'
import Collections from './pages/Collections/Collections'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="Collection/:collectionId" element={<Collection/>} />
        <Route path="Product/:productId" element={<Product/>} />
        <Route path="Products" element={<Products/>} />
        <Route path="Collections" element={<Collections />} />
      </Route>
      <Route path="Register" element={<RegisterPage />} />
      <Route path="Login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
