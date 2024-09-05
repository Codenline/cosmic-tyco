import '.././Global.css'

export default function Header() {
  return (
    <>
      <div className='changing-text'>
        <p>Parcele em até 6x vezes sem juros</p>
      </div>
      <header>
        <nav className='product-nav'>
          <h2>Collections</h2>
          <h2>Products</h2>
        </nav>
        <img src="./public/cosmic_tyko.webp" className="cosmic_tyko_logo" />
        <nav className='icons-nav'>
          <img src='./public/cart.svg' id='cart-icon' />
          <img src='./public/search.svg' id='search-icon' />
          <img src='./public/profile.svg' id='profile-icon' />
        </nav>
      </header>
    </>
  )
}