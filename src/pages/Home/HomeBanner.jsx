import './HomeBanner.css'

export default function HomeBanner() {
  return (
    <section className='banner-content'>
      <div className='text-banner-content'>
        <div className="banner-text-box">
          <p className="banner-collection-text">ARTE SUBLIME COLLECTION 2024</p>
          <p className="banner-main-text-1">Onde a expressão urbana encontra a</p>
          <p className="banner-main-text-2">elegância sublime</p>
        </div>
        <div className="buy-now-button">
          <p>Compre agora</p>
        </div>
      </div>
      <div className='img-banner-content'>
        <img src='./public/collections_banners/Arte Sublime.png'/>
      </div>
    </section>
  )
}