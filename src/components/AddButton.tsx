import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface AddButtonProps {
  title?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void; // Добавляем пропс onPress как функцию
}

const AddButton: React.FC<AddButtonProps> = ({ title = 'Добавить', style, textStyle, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1C1B1B',
    borderRadius: 100,
    paddingVertical: 18,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'SF Pro Display',
    fontWeight: '400',
  },
});

export default AddButton;