import SemiCircleChart from '@components/SemiCircleChart';
import TogglePanel from '@components/TogglePanel/TogglePanel';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const months = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
];

const PanelChartCircle: React.FC = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());

  const handlePrev = () => {
    setCurrentMonthIndex((prev) => (prev - 1 + 12) % 12);
  };

  const handleNext = () => {
    setCurrentMonthIndex((prev) => (prev + 1) % 12);
  };

  return (
    <View style={styles.card}>
      <TogglePanel />

      <View style={styles.monthSwitcher}>
        <TouchableOpacity onPress={handlePrev}>
          <Text style={styles.arrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>{months[currentMonthIndex]}</Text>
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <SemiCircleChart />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 32,
    paddingTop: 3,
    paddingRight: 9,
    paddingBottom: 16,
    paddingLeft: 9,
    gap: 24,
    alignItems: 'center',
  },
  monthSwitcher: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  monthText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  arrow: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 12,
  },
});

export default PanelChartCircle;
