import { useInjectReducer } from 'redux-injectors'

import { loginReducer, loginSliceKey } from '../model'

export const useInjectStore = () => {
  useInjectReducer({ key: loginSliceKey, reducer: loginReducer })
}
