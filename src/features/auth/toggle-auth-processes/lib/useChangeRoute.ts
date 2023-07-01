import { useNavigate } from 'react-router-dom'

import { TFakeAuthProcessId } from '../types'

export const useChangeRoute = () => {
  const navigate = useNavigate()

  return (route: TFakeAuthProcessId) => navigate(route)
}
