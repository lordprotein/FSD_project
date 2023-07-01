import { ChangeEvent, InputHTMLAttributes } from 'react'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  errorText?: string
  labelText?: string
}
