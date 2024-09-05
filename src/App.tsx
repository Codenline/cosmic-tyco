import { Route, Routes } from 'react-router-dom'
import './Global.css'

import Layout from './components/Layout'
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
