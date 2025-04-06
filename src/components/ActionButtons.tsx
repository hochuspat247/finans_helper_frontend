import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ActionButtons: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Кнопка "Скрыть" */}
      <TouchableOpacity style={styles.button}>
        <Image
          source={require('@assets/icons/basil_eye-closed-outline.png')} // 👈 замените на свою иконку
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Скрыть</Text>
      </TouchableOpacity>

      {/* Кнопка "Не разделять" */}
      <TouchableOpacity style={styles.button}>
        <Image
          source={require('@assets/icons/solar_maximize-square-linear.png')} // 👈 замените на свою иконку
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Не разделять</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    width: "100%",
    justifyContent: 'center',
    alignItems: "center",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    height: "110%",

    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(95, 226, 116, 0.16)',
    borderRadius: 20,
    paddingVertical: 13,
    paddingHorizontal: 17,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: '#5FE274',
  },
  buttonText: {
    color: '#5FE274',
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ActionButtons;
