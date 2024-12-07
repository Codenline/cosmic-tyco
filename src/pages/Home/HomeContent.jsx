import React, { useEffect, useState } from "react";
import CollectionBox from "../../components/CollectionBox/CollectionBox";
import ProductBox from "../../components/ProductBox/ProductBox";
import collectionsData from "../../data/collections.json";

import "./HomeContent.css";

export default function HomeContent() {
  const [products, setProducts] = useState([]); // Estado para armazenar os produtos
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  useEffect(() => {
    // Chamada GET para buscar os produtos
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5195/api/v1/produto");
        if (!response.ok) {
          throw new Error(`Erro ao buscar produtos: ${response.statusText}`);
        }
        const data = await response.json(); // Conversão da resposta para JSON
        setProducts(data); // Atualização do estado com os produtos
      } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="home-content">
      <div className="collection-boxes-box">
        {Object.entries(collectionsData.collections).map(([collection_id, value]) => (
          <CollectionBox collection={value} collectionId={collection_id} key={collection_id} />
        ))}
      </div>
      <div className="products-section">
        {loading ? (
          <p>Carregando produtos...</p>
        ) : (
          products.map((product) => (
            <ProductBox
              key={product.id}
              product_name={product.nome}
              product_description={product.descricao}
              product_price={product.valor.toFixed(2)}
              product_id={product.id}
              url={product.url}
            />
          ))
        )}
      </div>
    </section>
  );
}
