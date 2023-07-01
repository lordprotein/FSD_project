import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getLoginFormEmail, loginActions } from 'entities/login'

import { IInputProps, Input } from 'shared/ui/input'

export const LoginInputEmailChange = memo(() => {
  const emailValue = useSelector(getLoginFormEmail)
  const dispatch = useDispatch()

  const onChangeInput: IInputProps['onChange'] = useCallback(
    (e) => {
      dispatch(loginActions.setFormField({ email: e.target.value }))
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
