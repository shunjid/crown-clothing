import './button.styles.scss'

const Button = ({
  children,
  dimension,
  type,
  clickHandler,
}: {
  children: React.ReactNode
  dimension?: 'google' | 'inverted'
  type?: 'submit' | 'button' | 'reset'
  clickHandler?: () => void
}) => {
  const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
  }

  return (
    <button
      type={type}
      className={`button-container ${
        dimension ? BUTTON_TYPE_CLASSES[dimension] : ''
      }`}
      onClick={clickHandler}
    >
      {children}
    </button>
  )
}

export default Button
