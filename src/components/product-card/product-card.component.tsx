import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { IProduct } from '../../types'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import {
  ProductCardContainer,
  ProductCardFooter,
  ProductCardFooterName,
  ProductCardFooterPrice,
} from './product-card.styles'

const ProductCard = ({ id, name, price, imageUrl }: IProduct) => {
  const { addItemToCart } = useContext(CartContext)
  const addProductToCart = () => addItemToCart({ id, name, price, imageUrl })

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductCardFooter>
        <ProductCardFooterName>{name}</ProductCardFooterName>
        <ProductCardFooterPrice>{price}</ProductCardFooterPrice>
      </ProductCardFooter>
      <Button
        dimension={BUTTON_TYPE_CLASSES.inverted}
        clickHandler={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
