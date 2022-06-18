import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles'

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
}

const getButton = (buttonDimension: string = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonDimension])

const Button = ({
  children,
  type,
  clickHandler,
  dimension = BUTTON_TYPE_CLASSES.base,
}: {
  children: React.ReactNode
  dimension?: string
  type?: 'submit' | 'button' | 'reset'
  clickHandler?: () => void
}) => {
  const CustomButton = getButton(dimension)

  return (
    <CustomButton type={type} onClick={clickHandler}>
      {children}
    </CustomButton>
  )
}

export default Button
