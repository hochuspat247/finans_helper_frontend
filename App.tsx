import 'react-native-gesture-handler';
import 'react-native-screens';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigator } from '@navigation/Navigator';
import { BookingProvider } from './src/context/BookingContext';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleVerificationSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const [fontsLoaded] = useFonts({
    SFPro: require('./assets/fonts/SF-Pro-Display-Regular.otf'),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <BookingProvider>
        <NavigationContainer>
          <Navigator
            isAuthenticated={isAuthenticated}
            onVerificationSuccess={handleVerificationSuccess}
            onLogout={handleLogout}
          />
        </NavigationContainer>
      </BookingProvider>
    </SafeAreaProvider>
  );
};

export default App;