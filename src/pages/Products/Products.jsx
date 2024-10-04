import { useParams } from 'react-router-dom'
import './Products.css'
import ProductBox from '../../components/ProductBox/ProductBox';
import productsData from '../../data/products.json'

export default function Products() {
  return (
    <section className='products-main'>
      <div className='products-banner'>
        <h1>Todos os produtos</h1>
      </div>
      <div className='products-section'>
        {productsData.products.map((product) => (
          <ProductBox
            key={product.id}
            product_name={product.nome}
            product_description={product.descricao}
            product_price={product.valor.toFixed(2)}
            product_id={product.id}
          />
        ))}
      </div>
    </section>
  )
}