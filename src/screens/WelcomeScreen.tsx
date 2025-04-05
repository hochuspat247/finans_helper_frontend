// src/screens/WelcomeScreen.tsx
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Colors } from '@constants/Colors';
import TogglePanel from '@components/TogglePanel/TogglePanel';
import SemiCircleChart from '@components/SemiCircleChart';
import PanelChartCircle from '@components/PanelChartCircle/PanelChartCircle';
import ScreenChartCircle from './ScreenChartCircle';

const WelcomeScreen = ({ navigation }: { navigation: any }) => {

  const transactions = [
    {
      type: 'переводМ',
      category: 'Переводы',
      description: 'Перевод между счетами',
      amount: 200,
    },
    {
      type: 'досуг',
      category: 'Досуг',
      description: 'Покупка билетов',
      amount: 3000,
    },
    {
      type: 'супермаркеты',
      category: 'Супермаркеты',
      description: 'Продукты',
      amount: 200,
    },
    {
      type: 'переводы',
      category: 'Переводы',
      description: 'Арина Ш.',
      amount: 60,
    },
  ];

  return (

    <View style={styles.container}>
      <ScreenChartCircle />
    </View>

  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.whiteBackground,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.whiteBackground,
  },
  buttons: {
    gap: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default WelcomeScreen;