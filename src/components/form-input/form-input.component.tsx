import {
  FormGroupStyles,
  FormInputLabel,
  FormInputStyles,
} from './form-input.styles'

const FormInput = ({
  label,
  type,
  required,
  changeHandler,
  name,
  value,
}: {
  label?: string
  type: string
  required: boolean
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  value: string
}) => {
  return (
    <FormGroupStyles>
      <FormInputStyles
        className="form-input"
        type={type}
        required={required}
        onChange={changeHandler}
        name={name}
        value={value}
      />

      {label && (
        <FormInputLabel shrink={value.length > 0}>{label}</FormInputLabel>
      )}
    </FormGroupStyles>
  )
}

export default FormInput
