// components/OperationsScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TransactionHistory from './TransactionHistory';
import OperationsTopPart from './operationsTopPart';
import Screen from '@components/Screen';


const Operations = () => {
  return (
    <Screen >
        <View style={styles.container}>
            <OperationsTopPart expenses={10123} income={23456} />
                <View style={styles.spacer} />
            <TransactionHistory
                groupedTransactions={[
                {
                    label: 'Сегодня',
                    amount: 3250,
                    transactions: [
                    { type: 'expense', category: 'Еда', description: 'Пятёрочка', amount: 1250 },
                    { type: 'income', category: 'Фриланс', description: 'Upwork', amount: 4500 },
                    ],
                },
                {
                    label: 'Вчера',
                    amount: 1700,
                    transactions: [
                    { type: 'expense', category: 'Транспорт', description: 'Метро', amount: 100 },
                    { type: 'expense', category: 'Кафе', description: 'Starbucks', amount: 1600 },
                    ],
                },
                {
                    label: 'Завтра',
                    amount: 1700,
                    transactions: [
                    { type: 'expense', category: 'Транспорт', description: 'Метро', amount: 100 },
                    { type: 'expense', category: 'Кафе', description: 'Starbucks', amount: 1600 },
                    ],
                },
                ]}
            />
        </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  
  spacer: {
    height: 32,
  },
});

export default Operations;
