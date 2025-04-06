import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CategoryDescriptionInput: React.FC = () => {
  // Состояние для переключателей (выбраны или нет)
  const [isCoffeeSelected, setIsCoffeeSelected] = useState(true);
  const [isCoffeeShopSelected, setIsCoffeeShopSelected] = useState(true);

  // Состояние для текста в поле ввода
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      {/* Заголовок */}
      <Text style={styles.headerText}>
      Введите описание того, что должно входить в категорию
      </Text>

      {/* Поле ввода */}
      <TextInput
        style={styles.input}
        placeholder="Кофейные напитки, автокие напитки, купленные в кофейнях"
        placeholderTextColor="#999"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={3}
      />

      {/* Переключатели */}
      <Text style={styles.toggleHeader}>На основе ИИ мы выделили:</Text>
      <View style={styles.toggleContainer}>
        {isCoffeeSelected && (
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setIsCoffeeSelected(false)}
          >
            <Text style={styles.toggleText}>Кофе</Text>
            <Ionicons name="close" size={16} color="#fff" />
          </TouchableOpacity>
        )}
        {isCoffeeShopSelected && (
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setIsCoffeeShopSelected(false)}
          >
            <Text style={styles.toggleText}>Кофейня</Text>
            <Ionicons name="close" size={16} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    height: 100, // Высота поля для многострочного ввода
    color: '#000',
    textAlignVertical: 'top', // Для multiline
    marginBottom: 16,
  },
  toggleHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  toggleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Чтобы кнопки переносились на следующую строку, если не помещаются
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  toggleText: {
    fontSize: 14,
    color: '#fff',
    marginRight: 8,
  },
});

export default CategoryDescriptionInput;