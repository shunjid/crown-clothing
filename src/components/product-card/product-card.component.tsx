import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { IProduct } from '../../types'
import Button from '../button/button.component'
import { BUTTON_DIMENSIONS } from '../button/constants'
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
        dimension={BUTTON_DIMENSIONS.INVERTED}
        clickHandler={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
