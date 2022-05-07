import './form-input.styles.scss'

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
    <div className="group">
      <input
        className="form-input"
        type={type}
        required={required}
        onChange={changeHandler}
        name={name}
        value={value}
      />
      {label && (
        <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInput
