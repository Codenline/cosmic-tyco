import CollectionBox from "../../components/CollectionBox/CollectionBox"
import ProductBox from "../../components/ProductBox/ProductBox"
import collectionsData from "../../data/collections.json"
import productsData from "../../data/products.json"

import './HomeContent.css'

export default function HomeContent() {
  return (
    <section className="home-content">
      <div className="collection-boxes-box">
        {Object.entries(collectionsData.collections).map(([collection_id, value]) => (
          <CollectionBox collection={value} collectionId={collection_id} key={collection_id}/>
        ))}
      </div>
      <div className="products-section">
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