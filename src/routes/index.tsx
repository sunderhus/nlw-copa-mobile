import { NavigationContainer } from '@react-navigation/native'
import AppRoutes from './app.routes'

const Routes = (): React.ReactElement => {
  return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
  )
}

export default Routes
