import { useInjectReducer } from 'redux-injectors'

import { signUpReducer, signUpSliceKey } from '../model'

export const useInjectStore = () => {
  useInjectReducer({ key: signUpSliceKey, reducer: signUpReducer })
}
