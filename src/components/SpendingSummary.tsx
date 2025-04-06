import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 2.5; // Увеличили ширину карточки
const PADDING_HORIZONTAL = (width - (ITEM_WIDTH * 3)) / 2; // Отступы для центрирования

const SpendingSummary: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const periods = [
    { label: 'На 1 месяц', average: '5 115 ₽', total: '30 115 ₽' },
    { label: 'На 2 месяца', average: '10 230 ₽', total: '60 230 ₽' },
    { label: 'На 3 месяца', average: '15 340 ₽', total: '90 340 ₽' },
    { label: 'На 4 месяца', average: '20 460 ₽', total: '120 460 ₽' },
  ];

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  };

  const handlePrevPeriod = () => {
    const newIndex = currentIndex === 0 ? periods.length - 1 : currentIndex - 1;
    scrollToIndex(newIndex);
  };

  const handleNextPeriod = () => {
    const newIndex = currentIndex === periods.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(newIndex);
  };

  const renderItem = ({ item, index }: { item: { label: string; average: string; total: string }; index: number }) => {
    const isActive = index === currentIndex;
    const opacity = isActive ? 1 : 0.5;
    return (
      <View style={[styles.cardContainer, { opacity }]}>
        <Text style={styles.headerText}>{item.label}</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Средние траты</Text>
          <Text style={styles.cardAmount}>≈ {item.average}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>На всех счетах</Text>
          <Text style={styles.cardAmount}>≈ {item.total}</Text>
        </View>
      </View>
    );
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: any[] }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevPeriod} style={styles.arrowButton}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <FlatList
          ref={flatListRef}
          data={periods}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_WIDTH}
          snapToAlignment="center"
          decelerationRate="fast"
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
          }}
          contentContainerStyle={styles.carousel}
          contentInset={{ left: PADDING_HORIZONTAL, right: PADDING_HORIZONTAL }}
          contentOffset={{ x: -PADDING_HORIZONTAL, y: 0 }}
        />
        <TouchableOpacity onPress={handleNextPeriod} style={styles.arrowButton}>
          <Ionicons name="chevron-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  carousel: {
    // Убрали paddingHorizontal, так как используем contentInset
  },
  cardContainer: {
    width: ITEM_WIDTH,
    alignItems: 'center',
    marginHorizontal: 5, // Небольшой отступ между карточками
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 8,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  cardAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowButton: {
    padding: 8,
    backgroundColor: '#000',
    borderRadius: 50,
  },
});

export default SpendingSummary;