import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { ICartItem } from '../../types'
import {
  CheckoutItemContainer,
  CheckoutItemField,
  CheckoutItemImageContainer,
  CheckoutItemQuantityField,
  CheckoutItemQuantityFieldArrow,
  CheckoutItemQuantityFieldValue,
  CheckoutItemRemoveButton,
} from './checkout-item.styles'

const CheckoutItem = ({ cartItem }: { cartItem: ICartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext)

  const clearItemHandler = () => clearItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemFromCart(cartItem)

  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </CheckoutItemImageContainer>
      <CheckoutItemField>{name}</CheckoutItemField>
      <CheckoutItemQuantityField>
        <CheckoutItemQuantityFieldArrow onClick={removeItemHandler}>
          &#10094;
        </CheckoutItemQuantityFieldArrow>
        <CheckoutItemQuantityFieldValue>
          {quantity}
        </CheckoutItemQuantityFieldValue>
        <CheckoutItemQuantityFieldArrow onClick={addItemHandler}>
          &#10095;
        </CheckoutItemQuantityFieldArrow>
      </CheckoutItemQuantityField>
      <CheckoutItemField>{price}</CheckoutItemField>
      <CheckoutItemRemoveButton onClick={clearItemHandler}>
        &#10005;
      </CheckoutItemRemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
