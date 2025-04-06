import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import CategoryCard from './CategoryCard'; // путь к твоему компоненту

const CARD_WIDTH = (Dimensions.get('window').width - 48) / 2;

const initialCategories = [
  {
    id: '1',
    title: 'Кофемания',
    spent: 2000,
    limit: 4000,
    icon: require('@assets/icons/solar_tea-cup-bold-duotone.png'),
  },
  {
    id: '2',
    title: 'Покупки на wb',
    spent: 2000,
    limit: 4000,
    icon: require('@assets/icons/solar_bag-5-bold.png'),
  },
  {
    id: '3',
    title: 'Суши-бар',
    spent: 1500,
    limit: 3000,
    icon: require('@assets/icons/solar_bag-5-bold.png'),
  },
  {
    id: '4',
    title: 'Зоомагазин',
    spent: 3000,
    limit: 5000,
    icon: require('@assets/icons/solar_cart-large-4-bold.png'),
  },
];

const CategoryGrid: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('1'); // по умолчанию активна первая

  return (
    <FlatList
      data={initialCategories}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => {
        const isActive = item.id === activeId;

        return (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setActiveId(item.id)}
            style={{ width: CARD_WIDTH }}
          >
            <CategoryCard
              title={item.title}
              spent={item.spent}
              limit={item.limit}
              icon={item.icon}
              isActive={isActive}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  row: {
    justifyContent: 'center',
    marginBottom: 16,
    gap: 16,
    width: "100%",
    flex: 1,
  },
});

export default CategoryGrid;
