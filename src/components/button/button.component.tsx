import './button.styles.scss'

const Button = ({
  children,
  dimension,
  type,
}: {
  children: React.ReactNode
  dimension?: 'google' | 'inverted'
  type: 'submit' | 'button' | 'reset'
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
    >
      {children}
    </button>
  )
}

export default Button
