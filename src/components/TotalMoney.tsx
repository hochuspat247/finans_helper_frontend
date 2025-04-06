import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const TotalMoneyScreen: React.FC = () => {
  const chartData = {
    labels: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль'],
    datasets: [{
      data: [32000, 50000, 38000, 42000, 41000, 68000, 60000],
      color: () => '#4ADE80',
      strokeWidth: 2,
    }],
  };

  const filterData = [
    { id: 'icon', type: 'icon' },
    { id: '1', amount: '₽ 2 000 ₽' },
    { id: '2', amount: '₽ 2 600 ₽' },
    { id: '3', amount: '₽ 67 879' },
    { id: '4', amount: '₽ 15 000' },
    { id: '5', amount: '₽ 8 900' },
  ];

  const renderFilterItem = ({ item }) => {
    if (item.type === 'icon') {
      return (
        <View style={styles.filterIcon}>
          <Ionicons name="options-outline" size={20} color="gray" />
        </View>
      );
    }
    return (
      <View style={styles.filterChip}>
        <Text>{item.amount}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.amount}>654 220 ₽</Text>
      <Text style={styles.subTitle}>Без кредитки</Text>
      <View style={styles.filtersWrapper}>
        <FlatList
          data={filterData}
          renderItem={renderFilterItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
        />
      </View>
      <LineChart
        data={chartData}
        width={screenWidth - 20}
        height={200}
        chartConfig={{
          backgroundColor: '#f4f4f4',
          backgroundGradientFrom: '#f4f4f4',
          backgroundGradientTo: '#f4f4f4',
          decimalPlaces: 0,
          color: () => '#4ADE80',
          labelColor: () => '#666',
          propsForDots: {
            r: '4',
            strokeWidth: '1',
            stroke: '#4ADE80',
            fill: '#4ADE80',
          },
          propsForBackgroundLines: {
            stroke: '#ddd',
          },
        }}
        bezier
        withInnerLines
        withOuterLines={false}
        style={styles.chart}
      />
    </View>
  );
};

export default TotalMoneyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F4F4F4',
  },
  amount: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 8,
  },
  filtersWrapper: {
    marginBottom: 8,
  },
  filters: {
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 4,
  },
  filterIcon: {
    backgroundColor: '#ddd',
    borderRadius: 50,
    padding: 6,
    marginRight: 2,
  },
  filterChip: {
    backgroundColor: '#ddd',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 16,
    marginRight: 2,
  },
  chart: {
    borderRadius: 8,
  },
});