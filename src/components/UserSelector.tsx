import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserSelector: React.FC = () => {
  // Состояние для списка выбранных пользователей
  const [selectedUsers, setSelectedUsers] = useState<string[]>(['Сеструка', 'Сафов оплатить']);

  // Функция для удаления пользователя из списка
  const removeUser = (user: string) => {
    setSelectedUsers(selectedUsers.filter(u => u !== user));
  };

  return (
    <View style={styles.container}>
      {/* Поле ввода с иконкой стрелки */}
      <TouchableOpacity style={styles.inputContainer}>
        <Text style={styles.inputText}>Выберите пользователя</Text>
        <Ionicons name="chevron-down-outline" size={24} color="#999" />
      </TouchableOpacity>

      {/* Список выбранных пользователей */}
      <View style={styles.selectedUsersContainer}>
        {selectedUsers.map(user => (
          <TouchableOpacity
            key={user}
            style={styles.userButton}
            onPress={() => removeUser(user)}
          >
            <Text style={styles.userText}>{user}</Text>
            <Ionicons name="close" size={16} color="#000" />
          </TouchableOpacity>
        ))}
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0', // Серый фон для поля ввода
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 16,
  },
  inputText: {
    fontSize: 16,
    color: '#999', // Серый цвет для плейсхолдера
    flex: 1,
  },
  selectedUsersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Перенос на следующую строку, если не помещается
  },
  userButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  userText: {
    fontSize: 14,
    color: '#000',
    marginRight: 8,
  },
});

export default UserSelector;