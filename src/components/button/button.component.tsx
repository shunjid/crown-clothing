import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles'
import { BUTTON_DIMENSIONS } from './constants'
import { IButtonProperties } from './types'

const Button = ({
  children,
  type,
  clickHandler,
  dimension = BUTTON_DIMENSIONS.BASE,
}: IButtonProperties) => {
  const getButton = (buttonDimension: string = BUTTON_DIMENSIONS.BASE) =>
    ({
      [BUTTON_DIMENSIONS.BASE]: BaseButton,
      [BUTTON_DIMENSIONS.GOOGLE]: GoogleSignInButton,
      [BUTTON_DIMENSIONS.INVERTED]: InvertedButton,
    }[buttonDimension])

  const CustomButton = getButton(dimension)

  return (
    <CustomButton type={type} onClick={clickHandler}>
      {children}
    </CustomButton>
  )
}

export default Button
