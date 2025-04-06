import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconSelector: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  // Список иконок (можно заменить на ваши иконки)
  const icons = [
    { name: 'bandage-outline', isGreen: false }, // Медицина
    { name: 'trash-bin-outline', isGreen: true }, // Мусор (зелёная)
    { name: 'home-outline', isGreen: false }, // Дом
    { name: 'cart-outline', isGreen: true }, // Корзина (зелёная)
    { name: 'bus-outline', isGreen: false }, // Транспорт
    { name: 'basket-outline', isGreen: true }, // Корзина покупок (зелёная)
    { name: 'color-palette-outline', isGreen: false }, // Искусство
    { name: 'water-outline', isGreen: true }, // Вода (зелёная)
    { name: 'golf-outline', isGreen: false }, // Гольф
    { name: 'desktop-outline', isGreen: true }, // Компьютер (зелёная)
    { name: 'shirt-outline', isGreen: false }, // Одежда
    { name: 'cafe-outline', isGreen: false }, // Кофе
  ];

  const renderIcon = ({ item }: { item: { name: string; isGreen: boolean } }) => {
    const isSelected = selectedIcon === item.name;
    return (
      <TouchableOpacity
        style={[
          styles.iconContainer,
          isSelected && { borderWidth: 2, borderColor: '#00C853' }, // Выделение выбранной иконки
        ]}
        onPress={() => setSelectedIcon(item.name)}
      >
        <Ionicons
          name={item.name}
          size={24}
          color={item.isGreen ? '#00C853' : '#999'} // Зелёный или серый цвет
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Заголовок */}
      <Text style={styles.headerText}>Выберите иконку</Text>

      {/* Поле ввода без стрелки */}
      <TouchableOpacity style={styles.inputContainer}>
        {selectedIcon ? (
          <Ionicons
            name={selectedIcon}
            size={24}
            color={icons.find(icon => icon.name === selectedIcon)?.isGreen ? '#00C853' : '#999'}
            style={styles.selectedIcon}
          />
        ) : (
          <View style={styles.inputPlaceholder} />
        )}
      </TouchableOpacity>

      {/* Сетка иконок */}
      <FlatList
        data={icons}
        renderItem={renderIcon}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4} // 4 столбца
        columnWrapperStyle={styles.row} // Отступы между строками
        showsVerticalScrollIndicator={false}
      />

      {/* Кнопка "Просмотреть все" */}
      <TouchableOpacity style={styles.viewAllContainer}>
        <View style={styles.dot} />
        <Text style={styles.viewAllText}>Просмотреть все</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F5F5', // Светло-серый фон
    borderRadius: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Центрирование содержимого
    backgroundColor: '#FFFFFF', // Серый фон для поля ввода
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  inputPlaceholder: {
    width: 24, // Пустое пространство для имитации поля ввода
    height: 24,
  },
  selectedIcon: {
    // Убрали marginRight, так как иконка теперь по центру
  },
  row: {
    justifyContent: 'space-between', // Равномерные отступы между иконками
    marginBottom: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4, // Отступы между иконками
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#999',
    marginRight: 8,
  },
  viewAllText: {
    fontSize: 16,
    color: '#999',
  },
});

export default IconSelector;