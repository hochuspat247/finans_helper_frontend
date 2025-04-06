import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface LimitInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const LimitInput: React.FC<LimitInputProps> = ({ value, onChangeText }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Укажите лимит категории</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#C8C9CB"
        />
        <Text style={styles.currency}>₽</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#EBEBEB',
    borderRadius: 24,
    padding: 16,
    gap: 12,
  },
  label: {
    color: '#232323',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'SF Pro Display',
  },
  inputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'SF Pro Display',
    color: '#000',
  },
  currency: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'SF Pro Display',
    color: '#000',
    marginLeft: 8,
  },
});

export default LimitInput;
