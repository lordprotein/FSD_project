import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSignUpFormCity, signUpActions } from 'entities/sign-up'

import { IInputProps, Input } from 'shared/ui/input'

export const SignUpInputCityChange = memo(() => {
  const dispatch = useDispatch()
  const emailValue = useSelector(getSignUpFormCity)

  const onChangeInput: IInputProps['onChange'] = useCallback(
    (e) => {
      dispatch(signUpActions.setFormField({ city: e.target.value }))
    },
    [dispatch]
  )

  return (
    <Input
      labelText="City"
      placeholder="Enter your City"
      type="text"
      value={emailValue}
      onChange={onChangeInput}
    />
  )
})
