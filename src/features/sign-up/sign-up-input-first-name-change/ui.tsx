import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSignUpFormFirstName, signUpActions } from 'entities/sign-up'

import { IInputProps, Input } from 'shared/ui/input'

export const SignUpInputFirstNameChange = memo(() => {
  const dispatch = useDispatch()
  const firstNameValue = useSelector(getSignUpFormFirstName)

  const onChangeInput: IInputProps['onChange'] = useCallback(
    (e) => {
      dispatch(signUpActions.setFormField({ firstName: e.target.value }))
    },
    [dispatch]
  )

  return (
    <Input
      labelText="First name"
      placeholder="Enter your first name"
      type="text"
      value={firstNameValue}
      onChange={onChangeInput}
    />
  )
})
