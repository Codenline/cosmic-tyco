import { useParams } from 'react-router-dom'
import './Collection.css'
import ProductBox from '../../components/ProductBox/ProductBox';
import collectionsData from '../../data/collections.json'
import productsData from '../../data/products.json'

export default function Collection() {
    const { collectionId } = useParams();

    const collectionName = collectionsData.collections[collectionId]

    const filteredProducts = productsData.products.filter(product => product.colecao === collectionName)

    return (
        <section className='collection-main'>
            <div className='collection-banner'>
                <h1>{collectionsData.collections[collectionId]}</h1>
            </div>
            <div className='collection-products-section'>
                {filteredProducts.map(product => (
                    <ProductBox
                        key={product.id}
                        product_name={product.nome}
                        product_description={product.descricao}
                        product_price={product.valor.toFixed(2)}
                        collection_id={collectionId}
                        product_id={product.id}
                    />
                ))}
            </div>
        </section>
    )
}