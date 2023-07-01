import {
  LoginButtonSubmit,
  LoginInputEmailChange,
  LoginInputPasswordChange
} from 'features/login'

import {
  Login as LoginEntity,
  useInjectStore as useInjectLoginStore
} from 'entities/login'

export const LoginWidget = () => {
  useInjectLoginStore()

  return (
    <LoginEntity
      buttonSubmit={<LoginButtonSubmit />}
      emailComponent={<LoginInputEmailChange />}
      passwordComponent={<LoginInputPasswordChange />}
    />
  )
}
