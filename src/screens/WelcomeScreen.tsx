// src/screens/WelcomeScreen.tsx
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Colors } from '@constants/Colors';
import TogglePanel from '@components/TogglePanel/TogglePanel';
import SemiCircleChart from '@components/SemiCircleChart';
import PanelChartCircle from '@components/PanelChartCircle/PanelChartCircle';
import ScreenChartCircle from './ScreenCharts';
import HistogramChart from '@components/HistogramChart/HistogramChart';
import ScreenCharts from './ScreenCharts';
import Operations from './operations/operations';
import PulseHeader from '@components/PulseHeader/PulseHeader';
import TotalMoneyCard from '@components/TotalMoneyCard/TotalMoneyCard';
import PulseSummaryBlock from '@components/PulseSummaryBlock/PulseSummaryBlock';
import PulseScreen from './PulseScreen';

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
      {/* <ScreenCharts /> */}
      {/* <Operations /> */}
      {/* <PulseHeader /> */}
      {/* <PulseSummaryBlock total={654220}/> */}
      <PulseScreen total={654220} income={123000} expenses={65400} />
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