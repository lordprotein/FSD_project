import { useMatch } from 'react-router-dom'

import { ERoutes } from 'app'

export const useGetInitActiveTab = () => {
  const isLogin = useMatch({ path: ERoutes.Login })
  return isLogin ? ERoutes.Login : ERoutes.SignUp
}
