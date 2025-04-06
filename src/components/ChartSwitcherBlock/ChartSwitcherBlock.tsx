import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TogglePanel from '@components/TogglePanel/TogglePanel';
import SemiCircleChart from '@components/SemiCircleChart';
import HistogramChart from '@components/HistogramChart/HistogramChart';

const ChartSwitcherBlock: React.FC = () => {
  const [isChart, setIsChart] = useState(true); // true = круг, false = столбцы

  return (
    <View style={styles.container}>
      <TogglePanel isChart={isChart} setIsChart={setIsChart} />
      <View style={styles.chartWrapper}>
        {isChart ? <HistogramChart /> : <SemiCircleChart />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 32,
    paddingBottom: 16,
  },
  chartWrapper: {
    alignItems: 'center',
    overflow: 'hidden', // Обрезает содержимое, выходящее за границы
  },
});

export default ChartSwitcherBlock;