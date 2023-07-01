import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSignUpFormEmail, signUpActions } from 'entities/sign-up'

import { IInputProps, Input } from 'shared/ui/input'

export const SignUpInputEmailChange = memo(() => {
  const dispatch = useDispatch()
  const emailValue = useSelector(getSignUpFormEmail)

  const onChangeInput: IInputProps['onChange'] = useCallback(
    (e) => {
      dispatch(signUpActions.setFormField({ email: e.target.value }))
    },
    [dispatch]
  )

  return (
    <Input
      labelText="Email"
      placeholder="Enter your Email"
      type="email"
      value={emailValue}
      onChange={onChangeInput}
    />
  )
})
