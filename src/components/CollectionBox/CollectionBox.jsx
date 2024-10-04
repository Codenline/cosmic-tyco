import './CollectionBox.css'
import { Link } from 'react-router-dom'

import collectionsData from '../../data/collections.json'

export default function CollectionBox(params) {

  const collectionName = collectionsData.collections[params.collectionId]

  return (
    <Link to={`/Collection/${params.collectionId}`}>
      <div className="collection-box">
        <div className='collection-img'>
          <img src={`/collections_banners/${collectionName}.png`} />
        </div>
        <div className='collection-text-box'>
          <h2>{params.collection}</h2>
        </div>
      </div>
    </Link>
  )
}