import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import TransactionHistory from '@components/TransactionHistory';
import Screen from '@components/Screen';
import TogglePanel from '@components/TogglePanel/TogglePanel';
import PanelChartCircle from '@components/PanelChartCircle/PanelChartCircle';
import ChartSwitcherBlock from '@components/ChartSwitcherBlock/ChartSwitcherBlock';

const ScreenCharts: React.FC = () => {
  const [isChart, setIsChart] = useState(true); // true = круговой, false = столбчатый
  const [groupedTransactions, setGroupedTransactions] = useState([]); // Состояние для транзакций
  const [isLoading, setIsLoading] = useState(false); // Для индикации загрузки

  // Функция для получения данных из API
  const fetchTransactions = async () => {
    setIsLoading(true); // Показываем, что идёт загрузка
    try {
      const response = await fetch('http://90.156.227.120:8080/rest/transactions?time=2025-04-06T10:15:30Z');
      const data = await response.json();
      
      // Преобразуем данные в нужный формат
      const transformedData = transformTransactions(data);
      setGroupedTransactions(transformedData);
    } catch (error) {
      console.error('Ошибка при загрузке транзакций:', error);
    } finally {
      setIsLoading(false); // Убираем индикацию загрузки
    }
  };

  // Преобразование данных из API в формат groupedTransactions с датами
  const transformTransactions = (data) => {
    const grouped = {};

    data.forEach((item) => {
      const transaction = item.elements[0];
      const date = new Date(transaction.date);
      const label = date.toISOString().split('T')[0]; // Берём только дату без времени

      if (!grouped[label]) {
        grouped[label] = { label, amount: 0, transactions: [] };
      }

      const type = transaction.type === 'ARRIVAL' ? 'income' : 'expense';
      const amount = transaction.amount;

      grouped[label].transactions.push({
        type,
        category: transaction.category,
        description: transaction.nameSender,
        amount,
      });

      grouped[label].amount += type === 'income' ? amount : -amount;
    });

    return Object.values(grouped);
  };

  // Загружаем данные при монтировании компонента
  useEffect(() => {
    fetchTransactions();
  }, []);

  // Функция для ручного обновления
  const handleRefresh = () => {
    fetchTransactions();
  };

  return (
    <Screen>
      <View style={styles.container}>
        <ChartSwitcherBlock />
        {/* Кнопка обновления */}
        <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh} disabled={isLoading}>
          <Text style={styles.refreshButtonText}>
            {isLoading ? 'Загрузка...' : 'Обновить'}
          </Text>
        </TouchableOpacity>
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
  refreshButton: {
    backgroundColor: '#4CAF50', // Зелёный цвет для кнопки обновления
    borderRadius: 61,
    paddingHorizontal: 32,
    paddingVertical: 20,
    alignSelf: 'center', // Центрируем кнопку
  },
  refreshButtonText: {
    color: '#FFF',
    fontFamily: 'Manrope',
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: -0.041,
    textAlign: 'center',
  },
});

export default ScreenCharts;