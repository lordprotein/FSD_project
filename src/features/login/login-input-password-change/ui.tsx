import { memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getLoginFormPassword, loginActions } from 'entities/login'

import { IInputProps, Input } from 'shared/ui/input'

export const LoginInputPasswordChange = memo(() => {
  const dispatch = useDispatch()
  const passwordValue = useSelector(getLoginFormPassword)

  useEffect(
    () => () => {
      dispatch(loginActions.resetFormFieldPassword())
    },
    [dispatch]
  )

  const onChangeInput: IInputProps['onChange'] = useCallback(
    (e) => {
      dispatch(loginActions.setFormField({ password: e.target.value }))
    },
    [dispatch]
  )

  return (
    <Input
      labelText="Password"
      placeholder="Enter your password"
      type="password"
      value={passwordValue}
      onChange={onChangeInput}
    />
  )
})
