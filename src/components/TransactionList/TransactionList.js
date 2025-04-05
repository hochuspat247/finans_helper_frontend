// components/TransactionList.js
import TransactionItem from '@components/TransactionItem/TransactionItem';
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

const TransactionList = ({ transactions = [] }) => {
  const renderItem = ({ item }) => (
    <TransactionItem
      type={item.type}
      category={item.category}
      description={item.description}
      amount={item.amount}
    />
  );

  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
  },
});

export default TransactionList;
