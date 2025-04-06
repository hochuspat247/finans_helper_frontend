import EnoughForCard from '@components/EnoughForCard';
import SpendingSummary from '@components/SpendingSummary';
import TotalMoneyScreen from '@components/TotalMoney';
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';



const ScreenAllMoney: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* Сумма + график */}
      <View style={styles.section}>
        <TotalMoneyScreen />
      </View>

      {/* Карточка "Хватит на ..." */}
      <View style={styles.section}>
        <EnoughForCard months={3} spending={66700} />
      </View>

      {/* Карусель трат по периодам */}
      <View style={styles.section}>
        <SpendingSummary />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    gap: 24,
    backgroundColor: '#F4F4F4',
  },
  section: {
    width: '100%',
  },
});

export default ScreenAllMoney;
