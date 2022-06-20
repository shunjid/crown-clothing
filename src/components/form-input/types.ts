export interface IFormInputProperties {
  label?: string
  type: string
  required: boolean
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  value: string
}
