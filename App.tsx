import React from 'react';
import AppLoading from 'expo-app-loading';

import { useFonts, Scada_400Regular, Scada_700Bold_Italic } from '@expo-google-fonts/scada';

import Routes from './src/routes'



export default function App() {
  const [fontsLoaded] = useFonts({
    Scada_400Regular, 
    Scada_700Bold_Italic
  });

  if(!fontsLoaded)
    return <AppLoading />
    
  return (
    <Routes />

  );
}

