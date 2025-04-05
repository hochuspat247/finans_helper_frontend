
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TransactionHistory from './operations/TransactionHistory';
import Screen from '@components/Screen';
import TogglePanel from '@components/TogglePanel/TogglePanel';
import PanelChartCircle from '@components/PanelChartCircle/PanelChartCircle';
import ChartSwitcherBlock from '@components/ChartSwitcherBlock/ChartSwitcherBlock';


const groupedTransactions = [
  {
    label: 'Сегодня',
    amount: 1234,
    transactions: [
      { id: 1, title: 'Продукты', amount: 300 },
      { id: 2, title: 'Отель', amount: 934 },
    ],
  },
  {
    label: 'Вчера',
    amount: 800,
    transactions: [
      { id: 3, title: 'Такси', amount: 500 },
      { id: 4, title: 'Кофе', amount: 300 },
    ],
  },
];

const ScreenCharts: React.FC = () => {
  const [isChart, setIsChart] = useState(true); // true = круговой, false = столбчатый

  return (
    <Screen>
      <View style={styles.container}>
        <ChartSwitcherBlock />
        <TransactionHistory groupedTransactions={groupedTransactions} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 24,
    padding: 16,
  },
});

export default ScreenCharts;
