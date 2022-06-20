type ButtonTypes = 'submit' | 'button' | 'reset'

export interface IButtonProperties {
  children: React.ReactNode
  dimension?: string
  type?: ButtonTypes
  clickHandler?: () => void
}
