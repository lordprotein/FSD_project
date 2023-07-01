import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSignUpFormSecondName, signUpActions } from 'entities/sign-up'

import { IInputProps, Input } from 'shared/ui/input'

export const SignUpInputSecondNameChange = memo(() => {
  const dispatch = useDispatch()
  const secondNameValue = useSelector(getSignUpFormSecondName)

  const onChangeInput: IInputProps['onChange'] = useCallback(
    (e) => {
      dispatch(signUpActions.setFormField({ secondName: e.target.value }))
    },
    [dispatch]
  )

  return (
    <Input
      labelText="Second name"
      placeholder="Enter your second name"
      type="email"
      value={secondNameValue}
      onChange={onChangeInput}
    />
  )
})
