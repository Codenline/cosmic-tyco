import '.././Global.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div className='changing-text'>
        <p>Parcele em até 6x vezes sem juros</p>
      </div>
      <header>
        <nav className='product-nav'>
          <Link to={`/Collections`}>
            <h2>Coleções</h2>
          </Link>
          <Link to={`/Products`}>
            <h2>Produtos</h2>
          </Link>
        </nav>
        <Link to={`/`}>
          <img src="./public/cosmic_tyko.webp" className="cosmic_tyko_logo" />
        </Link>
        <nav className='icons-nav'>
          <img src='./public/cart.svg' id='cart-icon' />
          <img src='./public/search.svg' id='search-icon' />
          <Link to={`/Profile`}>
            <img src='./public/profile.svg' id='profile-icon' />
          </Link>
        </nav>
      </header>
    </>
  )
}