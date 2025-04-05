// components/TransactionHistory.js
import DayTransactionSection from '@components/DayTransactionSection/DayTransactionSection';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const TransactionHistory = ({ groupedTransactions }) => {
  return (
    <View style={styles.container}>
      {groupedTransactions.map((section, index) => (
        <View key={index} style={styles.section}>
          <DayTransactionSection
            label={section.label}
            amount={section.amount}
            transactions={section.transactions}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    gap: 24,
  },
  section: {
    width: '100%',
  },
});

export default TransactionHistory;
