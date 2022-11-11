import { Loading } from '@/components';
import { AuthContextProvider } from '@/contexts/AuthContext';
import { Find } from '@/screens';
import { THEME } from '@/styles/theme';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { NativeBaseProvider, StatusBar } from 'native-base';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {
          fontsLoaded ? <Find /> : <Loading />
        }
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}

