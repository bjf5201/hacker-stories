import type { InputWithLabelProps } from './InputWithLabel.types'

export const InputWithLabel = ({
  id,
  label,
  value,
  type = 'text',
  onInputChange,
}: InputWithLabelProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      &nbsp;
      <input id={id} type={type} value={value} onChange={onInputChange} />
    </>
  )
}
