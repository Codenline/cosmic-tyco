import { useParams } from 'react-router-dom'
import './product.css'
import ProductBox from '../../components/ProductBox/ProductBox';
import productsData from '../../data/products.json'
import collectionsData from '../../data/collections.json'

export default function Product() {
  const { productId } = useParams();

  const product = productsData.products.find(product => product.id === parseInt(productId))

  if (!product) {
    return <div>Produto não encontrado.</div>; // Mensagem caso o produto não exista
  }

  return (
    <section className='product-main'>
      <div className='product-banner'>
        <h1>{product.colecao}</h1>
      </div>
      <div className='product-section'>
        <ProductBox
          key={product.id}
          product_name={product.nome}
          product_description={product.descricao}
          product_price={product.valor.toFixed(2)}
          product_id={product.id}
        />
      </div>
    </section>
  )
}