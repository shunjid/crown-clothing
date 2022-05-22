import { Product } from '../../types'
import Button from '../button/button.component'
import './product-card.scss'

const ProductCard = ({ name, price, imageUrl }: Product) => {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button dimension="inverted">Add to Cart</Button>
    </div>
  )
}

export default ProductCard
