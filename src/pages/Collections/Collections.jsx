import { useParams } from 'react-router-dom'
import './Collections.css'
import CollectionBox from '../../components/CollectionBox/CollectionBox';
import collectionsData from '../../data/collections.json'

export default function Collections() {
  return (
    <section className='collections-main'>
      <div className='collections-banner'>
        <h1>Todas as coleções</h1>
      </div>
      <div className='collections-section'>
        {Object.entries(collectionsData.collections).map(([collection_id, value]) => (
          <CollectionBox collection={value} collectionId={collection_id} key={collection_id} />
        ))}
      </div>
    </section>
  )
}