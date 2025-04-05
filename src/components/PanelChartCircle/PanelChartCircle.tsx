import React from 'react';
import { View, StyleSheet } from 'react-native';
import SemiCircleChart from '@components/SemiCircleChart';
import HistogramChart from '@components/HistogramChart/HistogramChart';

interface Props {
  isChart: boolean;
}

const PanelChartCircle: React.FC<Props> = ({ isChart }) => {
  return (
    <View style={styles.chartWrapper}>
      {isChart ? <HistogramChart /> : <SemiCircleChart />}
    </View>
  );
};

const styles = StyleSheet.create({
  chartWrapper: {
    width: '100%',
    alignItems: 'center',
  },
});

export default PanelChartCircle;
