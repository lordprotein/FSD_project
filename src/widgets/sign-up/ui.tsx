import {
  SignUpButtonSubmit,
  SignUpInputCityChange,
  SignUpInputEmailChange,
  SignUpInputFirstNameChange,
  SignUpInputSecondNameChange
} from 'features/sign-up'

import {
  SignUp as SignUpEntity,
  useInjectStore as useInjectSignUpStore
} from 'entities/sign-up'

export const SignUpWidget = () => {
  useInjectSignUpStore()

  return (
    <SignUpEntity
      buttonSubmit={<SignUpButtonSubmit />}
      cityComponent={<SignUpInputCityChange />}
      emailComponent={<SignUpInputEmailChange />}
      firstNameComponent={<SignUpInputFirstNameChange />}
      secondNameComponent={<SignUpInputSecondNameChange />}
    />
  )
}
