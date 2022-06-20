import {
  FormGroupStyles,
  FormInputLabel,
  FormInputStyles,
} from './form-input.styles'
import { IFormInputProperties } from './types'

const FormInput = ({
  label,
  type,
  required,
  changeHandler,
  name,
  value,
}: IFormInputProperties) => {
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
