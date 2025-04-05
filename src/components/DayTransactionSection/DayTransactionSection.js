// components/DayTransactionSection.js
import DaySummary from '@components/DaySummary/DaySummary';
import TransactionList from '@components/TransactionList/TransactionList';
import React from 'react';
import { View, StyleSheet } from 'react-native';


const DayTransactionSection = ({ label, amount, transactions }) => {
  return (
    <View style={styles.container}>
      <DaySummary label={label} amount={amount} />
      <TransactionList transactions={transactions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

});

export default DayTransactionSection;
