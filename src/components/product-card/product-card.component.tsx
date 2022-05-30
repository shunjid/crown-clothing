import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { IProduct } from '../../types'
import Button from '../button/button.component'
import './product-card.scss'

const ProductCard = ({ id, name, price, imageUrl }: IProduct) => {
  const { addItemToCart } = useContext(CartContext)
  const addProductToCart = () => addItemToCart({ id, name, price, imageUrl })

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button dimension="inverted" clickHandler={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  )
}

export default ProductCard
