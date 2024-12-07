import { Link } from 'react-router-dom'
import './ProductBox.css'

export default function ProductBox(params) {

  const imagePath = `/camisas_fotos/${params.product_id}.png`

  return (
    <Link to={`/Product/${params.product_id}`}>
      <div className="product-box">
        <div className='product-content'>
          <img src={params.url} />
        </div>
        <div className='product-text-box'>
          <h2>{params.product_name}</h2>
          <p>{params.product_description}</p>
          <h2 className='product-price'>R$: {params.product_price}</h2>
        </div>
      </div>
    </Link>
  )
}