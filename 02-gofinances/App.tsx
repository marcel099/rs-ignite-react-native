import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { theme } from './src/global/styles/theme';

// import { Dashboard } from './src/screens/Dashboard';
import { Register } from './src/screens/Register';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <Dashboard /> */}
      <Register />
    </ThemeProvider>
  );
}
