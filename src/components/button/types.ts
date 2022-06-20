type TButtonTypes = 'submit' | 'button' | 'reset'

export interface IButtonProperties {
  children: React.ReactNode
  dimension?: string
  type?: TButtonTypes
  clickHandler?: () => void
}
